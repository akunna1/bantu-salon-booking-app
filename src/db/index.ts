import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv"; // to load environment variables
config({ path: ".env.local" }); // Loading environment variables from a .env.local file
const sql = neon(process.env.DATABASE_URL!); // Establishing a connection to the Neon database using the DATABASE_URL from environment variables

// Creating a drizzle database instance using the Neon SQL connection
// const db = drizzle(sql, { logger: true }) // logger
const db = drizzle(sql);

export { db };

// create data schema next...