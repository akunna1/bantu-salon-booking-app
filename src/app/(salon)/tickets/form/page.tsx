import { getCustomer } from "@/lib/queries/getCustomer";
import { getTicket } from "@/lib/queries/getTicket";
import { BackButton } from "@/components/BackButton";
import TicketForm from "@/app/(salon)/tickets/form/ticketForm";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { Users, init as kindeInit } from "@kinde/management-api-js"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function generateMetadata({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>
}) {
    const { customerId, ticketId } = await searchParams

    if(!customerId && !ticketId) {
        return {
            title: 'Missing Ticket ID or Customer ID'
        }
    }

    if(customerId) {
        return {
            title: `New Ticket for Customer #${customerId}`
        }
    }

    if(ticketId) {
        return {
            title: `Edit Ticket #${ticketId}`
        }
    }

    // Default return value (if no conditions are met, this should never happen)
    return {
        title: 'Ticket Form'
    }
}

export default async function TicketFormPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>
}) {
    try {

        const { customerId, ticketId } = await searchParams

        if (!customerId && !ticketId) {
            return (
                <>
                    <h2 className="text-2xl mb-2">Ticket ID or Customer ID required to load ticket form</h2>
                    <BackButton title="Go Back" variant="default" />
                </>
            )
        }

        const { getPermission, getUser } = getKindeServerSession()
        const [managerPermission, user] = await Promise.all([
            getPermission("manager"),
            getUser(),
        ])
        const isManager = managerPermission?.isGranted

        // New ticket form 
        if (customerId) {
            const customer = await getCustomer(parseInt(customerId))

            if (!customer) {
                return (
                    <>
                        <h2 className="text-2xl mb-2">Customer ID #{customerId} not found</h2>
                        <BackButton title="Go Back" variant="default" />
                    </>
                )
            }

            if (!customer.active) {
                return (
                    <>
                        <h2 className="text-2xl mb-2">Customer ID #{customerId} is not active.</h2>
                        <BackButton title="Go Back" variant="default" />
                    </>
                )
            }

            // return ticket form 
            if (isManager) {
                kindeInit() // Initializes the Kind Management API
                const { users } = await Users.getUsers()

                const requests = users ? users.map(user => ({ id: user.email!, description: user.email! })) : []

                return <TicketForm customer={customer} requests={requests} />
            } else {
                return <TicketForm customer={customer} />
            }
        }

        // Edit ticket form 
        if (ticketId) {
            const ticket = await getTicket(parseInt(ticketId))

            if (!ticket) {
                return (
                    <>
                        <h2 className="text-2xl mb-2">Ticket ID #{ticketId} not found</h2>
                        <BackButton title="Go Back" variant="default" />
                    </>
                )
            }

            const customer = await getCustomer(ticket.customerId)

            // return ticket form 
            if (isManager) {
                kindeInit() // Initializes the Kind Management API
                const { users } = await Users.getUsers()

                const requests = users ? users.map(user => ({ id: user.email!, description: user.email! })) : []

                return <TicketForm customer={customer} ticket={ticket} requests={requests} />
            } else {
                const isEditable = user.email?.toLowerCase() === ticket.request.toLowerCase()
                console.log('ue: ', user.email)
                console.log('request: ', ticket.request)
                return <TicketForm customer={customer} ticket={ticket} isEditable={isEditable} />
            }
        }

        // Default return if customerId or ticketId are missing (shouldn't happen)
        return (
            <>
                <h2 className="text-2xl mb-2">Ticket ID or Customer ID is required</h2>
                <BackButton title="Go Back" variant="default" />
            </>
        )

    } catch (e) {
        if (e instanceof Error) {
            throw e
        }
    }
}
