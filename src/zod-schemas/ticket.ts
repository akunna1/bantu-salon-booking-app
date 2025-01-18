import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { tickets } from "@/db/schema";
import { z } from "zod";

export const insertTicketSchema = createInsertSchema(tickets, {
    id: z.union([z.number(), z.literal("(New)")]), // Custom field for new ticket or existing ID
    title: (schema) => schema.min(1, "Title is required"), // Matching the `title` column
    description: (schema) => schema.min(1, "Description is required"),
    request: (schema) => schema.min(1, "Request is required"),
});

export const selectTicketSchema = createSelectSchema(tickets);

export type insertTicketSchemaType = typeof insertTicketSchema._type;

export type selectTicketSchemaType = typeof selectTicketSchema._type;
