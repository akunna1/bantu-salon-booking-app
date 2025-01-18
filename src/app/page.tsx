import Link from "next/link";
import { UsersRound } from 'lucide-react';
import { ModeToggle } from '@/components/ModeToggle';

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center p-3">
        <img
          src="/images/salon1.jpg"
          alt="Salon"
          className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-60 dark:opacity-100"
        />
        <div className="relative text-center z-10">
          <h1 className="text-7xl font-cursive font-extrabold text-gray-100  mb-4">
            Bantu African Hair Braiding
          </h1>
          <p className="text-3xl font-medium text-gray-100">Where Beauty Meets Tradition</p>
          <Link
            href="/booking"
            className="mt-6 inline-block rounded-full bg-gradient-to-r from-[#f2e6d9] to-[#dfbf9f] px-8 py-3 text-white font-bold shadow-xl text-xl hover:scale-110 transition-transform"
          >
            Book Appointment
          </Link>
        </div>

        {/* Icons positioned at top-right */}
        <div className="absolute top-6 right-8 flex space-x-4 z-20">

          <Link href="/users" className="flex justify-center items-center gap-2 ml-0">
            <UsersRound className="text-lg sm:text-xl text-white hover:text-gray-500 dark:hover:text-gray-500" />
          </Link>

          <div className="text-lg sm:text-xl text-white hover:text-gray-500 dark:hover:text-gray-500">
            <ModeToggle />
          </div>

        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="animate-bounce text-white text-xl">
            Scroll Down <span className="text-[#e6ccb3]"> ⬇</span>
          </div>
        </div>
      </section>

      {/* Address and Operating Hours */}
      <section className="py-10 px-4 bg-white dark:bg-[#121212]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">Visit Us</h2>
          <p className="text-xl font-medium text-black dark:text-white ">737 Chapel Lane, Raleigh, NC 27518</p>
          <p className="text-xl font-medium text-black dark:text-white ">Open Daily: <span className="text-[#dfbf9f] font-semibold">8am - 7pm</span></p>
          <p className="text-xl font-medium text-black dark:text-white">Phone: <Link href="tel:9196501919" className="text-[#dfbf9f] font-semibold hover:underline hover:underline-offset-4">919-650-1919</Link></p>
        </div>
      </section>

      {/* Services Section */}
      <section className="p-12 bg-gray-50 dark:bg-[#1e1e1e]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 dark:text-white">Our Services</h2> 
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-xl text-black dark:text-white">
            {[
              "Accessories Styling",
              "Box Braids",
              "Cornrows",
              "Crochet Braids",
              "Faux Locs",
              "Hair Treatments",
              "Havana Twists",
              "Knotless Braids",
              "Micro Braids",
              "Passion Twists",
              "Senegalese Twists",
              "Weave Installations",
            ].map((service, index) => (
              <li key={index} className="rounded-xl bg-white dark:bg-[#121212] p-4 shadow-md hover:shadow-xl transition-shadow">{service}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="p-12 bg-white dark:bg-[#121212]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-black dark:text-white">Customer Testimonials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "Akunna Onyekachi", date: "13th Dec 2024", rating: 5, review: "Absolutely amazing service! My knotless braids are stunning." },
              { name: "Tasha Smith", date: "22nd Nov 2024", rating: 4, review: "The staff is friendly, and the salon is clean. Highly recommend." },
              { name: "Sarah Brown", date: "1st Oct 2024", rating: 5, review: "Best experience ever! The stylists are professional and skilled." },
            ].map(({ name, date, rating, review }, index) => (
              <div key={index} className="p-6 bg-white dark:bg-[#232323] rounded-xl shadow-md hover:shadow-xl">
                <p className="text-gray-700  dark:text-white italic">"{review}"</p>
                <div className="mt-4">
                  <p className="text-lg font-bold dark:text-gray-400">{name}</p>
                  <p className="text-sm text-gray-500">{date}</p>
                  <div className="text-yellow-400 mt-1">
                    {"⭐".repeat(rating)}{"☆".repeat(5 - rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="p-12 bg-gray-50 dark:bg-[#1e1e1e] px-4">
        <div className="grid grid-cols-3 gap-4">
          {[
            "/images/salon2.jpg",
            "/images/salon3.jpg",
            "/images/salon4.jpg",
            "/images/salon5.jpg",
            "/images/salon6.jpg",
            "/images/salon7.jpg",
          ].map((imageSrc, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg dark:opacity-40">
              <img
                src={imageSrc}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              <p className="absolute bottom-2 left-2 text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {["Havana Twists", "Faux Locs", "Box Braids", "Weave Installation", "Hair Treatment", "Accessory Styling"][index]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="p-12 bg-white dark:bg-[#121212]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 dark:text-white">Special Offers</h2>
          <p className="text-xl dark:text-gray-400">10% off for first-time customers! Refer a friend and both get $10 off your next appointment.</p>
        </div>
      </section>

      {/* Meet the Stylists Section */}
      <section className="p-12 bg-gray-50 dark:bg-[#1e1e1e]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 dark:text-white">Meet Our Stylists</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "Naomi Carson", specialty: "Box Braids Expert", image: "/images/salon8.jpg" },
              { name: "Halimatou Diallo", specialty: "Cornrows Specialist", image: "/images/salon9.jpg" },
              { name: "Aisha Adamu", specialty: "Knotless Braids & Twists", image: "/images/salon10.jpg" },
            ].map(({ name, specialty, image }, index) => (
              <div key={index} className="p-6 bg-white dark:bg-[#121212] rounded-xl shadow-md hover:shadow-xl">
                <img src={image} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover dark:opacity-40" />
                <p className="font-bold dark:text-white">{name}</p>
                <p className="text-gray-500">{specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="p-12 bg-white dark:bg-[#121212]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center dark:text-white">FAQs</h2>
          <div className="flex flex-col items-center gap-4">
            <details className="bg-white dark:bg-[#1e1e1e] p-4 rounded-xl shadow-md w-full max-w-lg">
              <summary className="font-bold cursor-pointer text-xl dark:text-white">How long does a typical appointment take?</summary>
              <p className="mt-2 text-xl dark:text-white">It depends on the style, but most appointments take 2-6 hours.</p>
            </details>
            <details className="bg-white dark:bg-[#1e1e1e] p-4 rounded-xl shadow-md w-full max-w-lg">
              <summary className="font-bold cursor-pointer text-xl dark:text-white">Do you provide hair extensions?</summary>
              <p className="mt-2 text-xl dark:text-white">Yes, we offer hair extensions as part of our service packages.</p>
            </details>
            <details className="bg-white dark:bg-[#1e1e1e] p-4 rounded-xl shadow-md w-full max-w-lg">
              <summary className="font-bold cursor-pointer text-xl dark:text-white">What payment methods do you accept?</summary>
              <p className="mt-2 text-xl dark:text-white">We accept cash, credit cards, and mobile payments.</p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
