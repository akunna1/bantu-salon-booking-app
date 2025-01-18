// app/(salon)/tickets/page.tsx
import Header2 from "@/components/Header2"; // Import Header component

export const metadata = {
  title: "Tickets | Bantu African Hair Braiding",
};

export default function Tickets() {
  return (
    <div>
      <Header2 /> {/* Include the Header component here */}
      <h2>Tickets Page</h2>
      {/* Add more content here... */}
    </div>
  );
}
