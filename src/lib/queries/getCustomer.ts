import { db } from "@/db"
import { customers } from "@/db/schema" // db schema
import { eq } from "drizzle-orm" // The 'eq' function is used to compare values in queries

export async function getCustomer(id: number) {
    const customer = await db.select()
        .from(customers) // Specifying the 'customers' table
        .where(eq(customers.id, id)) // Filtering the records by the given customer ID using 'eq'

    // Returning the first customer from the result (assuming unique IDs)
    return customer[0]
}
