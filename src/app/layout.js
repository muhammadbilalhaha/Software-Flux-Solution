import { Inter } from "next/font/google";
import Navbar from "../components/layout/Navbar";
import StickyNavbar from "../components/layout/StickyNavbar";
import Footer from "../components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Software Flux Solution | Trusted SaaS Development Company",
  description:
    "We are a leading SaaS application development company helping startups and enterprises turn ideas into powerful, scalable cloud products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        <StickyNavbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}