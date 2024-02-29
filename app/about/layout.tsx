import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Your Trusted Travel Guide | https://traversal-tour.vercel.app/",
  description:
    "Discover the story behind https://traversal-tour.vercel.app/, your trusted travel guide. Our experienced team is dedicated to curating the best travel experiences, providing expert advice, and sharing insider tips. From breathtaking destinations to cultural wonders, we are here to inspire and assist you in creating unforgettable memories. Join us on our mission to make your travel dreams a reality.",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
