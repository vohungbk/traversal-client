import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel Services - Explore Our Comprehensive Travel Solutions | https://traversal-tour.vercel.app/",
  description:
    "Discover a wide range of travel services offered by https://traversal-tour.vercel.app. From flight and hotel bookings to vacation packages and guided tours, we provide comprehensive solutions to fulfill all your travel needs. Our experienced team is committed to delivering exceptional service, ensuring your journey is seamless and unforgettable. Explore our services today and embark on your next adventure with confidence.",
};

export default function ServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
