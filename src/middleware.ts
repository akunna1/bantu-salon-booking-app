import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest } from "next/server";

export default withAuth(
    async function middleware(request: NextRequest) {
        // Middleware logic to handle authentication
    }, 
    {
        isReturnToCurrentPage: true, // Return users to their originally requested page after authentication
    }
);

export const config = {
    matcher: [
        '/tickets', // Require authentication for the /tickets route
    ]
};
