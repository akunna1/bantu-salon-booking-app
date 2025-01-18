import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer"; // Footer for the page
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: "Bantu African Hair Braiding",
  description: "Bantu African Hair Braiding Salon Web Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/bantu.png" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster /> {/* Toaster component */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
