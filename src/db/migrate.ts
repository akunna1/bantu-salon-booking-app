// Necessary to update the db structure (like tables and columns) based on changes defined in migration files,
//  ensuring the db matches the latest version of your app's design

import { db } from "./index"; // index.ts in the db folder
import { migrate } from "drizzle-orm/neon-http/migrator"; // the migration utility from the Drizzle ORM for Neon HTTP adapter

const main = async () => {
    try {
        // Running the migration process, pointing to the folder where migration files are stored
        await migrate(db, {
            migrationsFolder: 'src/db/migrations',
        });
        
        console.log('Migration completed');
    } catch (error) {
        console.error('Error during migration: ', error);
        process.exit(1); // Exiting the process with a non-zero status code to indicate failure
    }
};

main();
