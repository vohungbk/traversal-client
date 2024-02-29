import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Reach Out to https://traversal-tour.vercel.app for Travel Inquiries and Assistance",
  description:
    "Have questions, need travel advice, or want to book your next adventure? Contact https://traversal-tour.vercel.app for personalized assistance and expert guidance. Our friendly team is here to help you with travel inquiries, provide recommendations, and ensure a seamless booking experience. Reach out to us today and let us be your trusted partner in creating unforgettable travel memories.",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
