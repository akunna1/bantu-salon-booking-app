// app/(salon)/booking/page.tsx
import Header from "@/components/Header"; // Import Header component

export const metadata = {
  title: "Booking | Bantu African Hair Braiding",
};

export default function Booking() {
  return (
    <div>
      <Header /> {/* Include the Header component here */}
      <h2>Booking Page</h2>
      {/* You can add more content for the booking page here */}
    </div>
  );
}
