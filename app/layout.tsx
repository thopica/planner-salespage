import type { Metadata } from "next";
import { Playfair_Display, Geist } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clara Planner — Daily Planning for Women Who Want to Feel in Control",
  description:
    "Clara Planner gives you one calm, beautiful place for your tasks, focus, habits, and gratitude — so you can stop carrying everything in your head. Buy once, use forever.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${geist.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
