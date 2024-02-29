import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const lato = Lato({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Traversal: Explore the World with Unforgettable Journeys",
  description:
    "Satisfy your wanderlust with Traversal. Explore breathtaking landscapes, vibrant cultures, and hidden gems. Our personalized itineraries and unforgettable adventures will create lasting memories. Book your dream vacation today and embark on the journey of a lifetime!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Script src="/assets/js/jquery-3.3.1.min.js" />
        <Script src="/assets/js/jquery.min.js" />
        <Script src="/assets/js/modernizr-2.6.2.min.js" />
        <Script src="/assets/js/owl.carousel.js" />
        <Script src="/assets/js/bootstrap.min.js" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
