import { Urbanist, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: "High-Performance Virtual & Dedicated Servers | 24/7 Support",
  description: "Get blazing-fast, secure, and reliable hosting with our virtual and dedicated servers. Enjoy free setup, no extra renewal fees, and 24/7 expert support. Ready in 24 hours!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} ${manrope.variable} font-manrope antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
