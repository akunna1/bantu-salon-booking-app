import { getCustomer } from "@/lib/queries/getCustomer"; // Function to fetch customer details
import { BackButton } from "@/components/BackButton"; // Reusable back button component
import CustomerForm from "@/app/(salon)/booking/form/customerForm"; // Customer form component

// Function to generate metadata (e.g., page title) based on the query parameters
export async function generateMetadata({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
    const { customerId } = await searchParams;

    // Set the page title based on whether the customerId is provided
    if (!customerId) return { title: "New Customer" };
    return { title: `Edit Customer #${customerId}` };
}

// Main page component for rendering the customer form
export default async function CustomerFormPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
    try {
        const { customerId } = await searchParams; // Extract the customerId from query parameters

        // If customerId is provided, render the edit customer form
        if (customerId) {
            const customer = await getCustomer(parseInt(customerId)); // Fetch the customer details

            // If the customer is not found, display an error message
            if (!customer) {
                return (
                    <>
                        <h2 className="text-2xl mb-2">Customer ID #{customerId} not found</h2>
                        <BackButton title="Go Back" variant="default" />
                    </>
                );
            }

            console.log(customer); // Log customer details for debugging
            // Render the customer form with the fetched customer data
            return <CustomerForm customer={customer} />;
        } else {
            // If no customerId is provided, render the form for creating a new customer
            return <CustomerForm />;
        }
    } catch (e) {
        // Handle unexpected errors
        if (e instanceof Error) {
            throw e; // Rethrow the error to be handled higher up
        }
    }
}
