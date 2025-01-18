import Image from 'next/image'; // Importing the Image component
import { Calendar, UsersRound, LogOut } from 'lucide-react';
import Link from 'next/link';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { ModeToggle } from '@/components/ModeToggle';

const Header = () => {
  return (
    <header className="animate-slide bg-background h-12 p-10 pt-5 pb-12 border-b top-0 z-20">
      <div className="flex h-8 items-center justify-between w-full">
        {/* Left Section */}
        <div className="flex items-center gap-2 space-x-4">
          <Link href="/" className="flex justify-center items-center gap-2 ml-0">
            <Image
              src="/images/bantu.png"
              alt="Bantu African Hair Braiding Logo"
              width={40}
              height={40}
              className="dark:invert"
            />
          </Link>

          <Link href="/" className="flex justify-center items-center gap-2 ml-0">
            {/* Header text visible only on larger screens */}
            <h1 className="hidden sm:block text-3xl font-bold m-0 mt-1 hover:text-gray-500">
              Bantu African Hair Braiding
            </h1>
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          <Link href="/booking" className="flex justify-center items-center gap-2 mr-0">
            <Calendar className="text-lg sm:text-xl hover:text-gray-500" />
          </Link>

          <Link href="/users" className="flex justify-center items-center gap-2 ml-0">
            <UsersRound className="text-lg sm:text-xl hover:text-gray-500" />
          </Link>

          {/* Logout */}
          <LogoutLink className="flex justify-center items-center gap-2 ml-0 cursor-pointer">
            <LogOut className="text-lg sm:text-xl hover:text-gray-500" />
          </LogoutLink>

          {/* Sun-moon toggle */}
          <div className="text-lg sm:text-xl hover:text-gray-500">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
