export const metadata = {
    title: "Users | Bantu African Hair Braiding",
};

// The login is just for the users (employees, admin, manager) at the salon
// there will be no sign up. Users will be added by the owner

// the loginLink is here in the users page instead, so is the button

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button"; // shadcn button
import Image from "next/image"; // import for Next.js Image
import Header from "@/components/Header";

export default function Users() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header /> {/* Adding Header here */}

            {/* Image Section */}
            <section className="relative h-96 w-full mb-6">
                <Image
                    src="/images/salon14.jpg"
                    alt="Salon Image"
                    fill 
                    style={{ objectFit: "cover" }} 
                    className="grayscale opacity-60"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex justify-center items-center text-center text-white">
                    <h1 className="text-4xl sm:text-5xl font-bold z-10">Welcome to Bantu!</h1>
                </div>
            </section>

            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center justify-center gap-6 px-4 sm:px-6 py-6">
                
                {/* About Section */}
                <section className="text-center bg-white dark:bg-[#232323] rounded-2xl p-6 sm:p-10 shadow-xl space-y-4 py-12 max-w-xl mx-auto">
                    <p className="text-base sm:text-lg text-gray-500 dark:text-white">
                        Secure access for Admin, Managers, and Employees to manage appointments, services, and more.
                    </p>

                    {/* Button */}
                    <Button asChild className="w-fit">
                        <LoginLink>
                            <span className="flex items-center justify-center space-x-2">
                                <span className="text-xl font-bold">Login</span>
                            </span>
                        </LoginLink>
                    </Button>

                    <p className="text-base sm:text-lg text-gray-500 dark:text-white">
                        Don’t have access? Contact the administrator for more information.
                    </p>
                </section>

                {/* Image Gallery Section */}
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto py-6">
                    <div className="overflow-hidden rounded-xl shadow-lg transition-transform transform hover:scale-110">
                        <Image
                            src="/images/salon12.jpg"
                            alt="Salon Interior 1"
                            width={500}
                            height={300}
                            className="object-cover w-full h-[470px] opacity-60 dark:opacity-40 rounded-xl shadow-lg"
                        />
                    </div>
                    <div className="overflow-hidden rounded-xl shadow-lg transition-transform transform hover:scale-110">
                        <Image
                            src="/images/salon11.jpg"
                            alt="Salon Interior 2"
                            width={500}
                            height={300}
                            className="object-cover w-full h-[470px] opacity-60 dark:opacity-40"
                        />
                    </div>
                    <div className="overflow-hidden rounded-xl shadow-lg transition-transform transform hover:scale-110">
                        <Image
                            src="/images/salon13.jpg"
                            alt="Salon Interior 3"
                            width={500}
                            height={300}
                            className="object-cover w-full h-[470px] opacity-60 dark:opacity-40"
                        />
                    </div>
                </section>
            </main>
        </div>
    );
}
