import { pgTable, serial, varchar, boolean, timestamp, integer, text } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm" // to make out relations between tables

// Customers table
export const customers = pgTable("customers", {
    id: serial("id").primaryKey(),
    firstName: varchar("first_name").notNull(), //required
    lastName: varchar("last_name").notNull(),
    email: varchar("email").unique().notNull(),
    phone: varchar("phone").unique().notNull(),
    address1: varchar("address1").notNull(),
    address2: varchar("address2"),
    city: varchar("city").notNull(),
    state: varchar("state", { length: 2 }).notNull(),
    zip: varchar("zip", { length: 10 }).notNull(),
    notes: text("notes"),
    active: boolean("active").notNull().default(true),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow().$onUpdate(() => new Date()),
})

// Tickets table
export const tickets = pgTable("tickets", {
    id: serial("id").primaryKey(),
    customerId: integer("customer_id").notNull().references(() => customers.id),
    title: varchar("title").notNull(),
    description: text("description"),
    completed: boolean("completed").notNull().default(false),
    request: varchar("request").notNull().default("unassigned"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow().$onUpdate(() => new Date()),
})

// Creating relationship between each table
export const customersRelations = relations(customers, 
    ({ many }) => ({ 
        // A customer can have many tickets (one-to-many relationship)
        tickets: many(tickets),
    })
)

export const ticketsRelations = relations(tickets, 
    ({ one }) => ({ 
        // Each ticket is associated with one customer (many-to-one relationship)
        customer: one(customers, {
            // Mapping the `customerId` field in the `tickets` table to the `id` field in the `customers` table
            fields: [tickets.customerId],
            references: [customers.id],
        })
    })
)