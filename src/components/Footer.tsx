// components/Footer.tsx
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa"; // Make sure you have the icons installed and imported
import Link from "next/link"; // For Next.js Link component

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-100 dark:bg-gray-800 shadow-xl">
      <div className="text-center">
        {/* Social Media Links Section */}
        <h2 className="text-2xl font-bold mb-4 text-gray-500 dark:text-gray-300">
          Follow Us
        </h2>
        <div className="flex justify-center gap-6">
          <Link
            href="https://www.instagram.com"
            target="_blank"
            className="bg-pink-100 p-4 rounded-full hover:bg-pink-200 transition-transform dark:bg-pink-600 dark:hover:bg-pink-500"
            aria-label="Instagram"
          >
            <FaInstagram className="text-pink-500 w-6 h-6 dark:text-pink-200" />
          </Link>
          <Link
            href="https://www.facebook.com"
            target="_blank"
            className="bg-blue-100 p-4 rounded-full hover:bg-blue-200 transition-transform dark:bg-blue-600 dark:hover:bg-blue-500"
            aria-label="Facebook"
          >
            <FaFacebookF className="text-blue-500 w-6 h-6 dark:text-blue-200" />
          </Link>
          <Link
            href="https://www.tiktok.com"
            target="_blank"
            className="bg-gray-200 p-4 rounded-full hover:bg-gray-300 transition-transform dark:bg-gray-700 dark:hover:bg-gray-600"
            aria-label="TikTok"
          >
            <FaTiktok className="text-black w-6 h-6 dark:text-white" />
          </Link>
        </div>

        {/* Decorative Divider */}
        <div className="w-full max-w-md border-t border-gray-300 my-6 mx-auto dark:border-gray-600"></div>

        {/* Footer Text Section */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Bantu African Hair Braiding. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
