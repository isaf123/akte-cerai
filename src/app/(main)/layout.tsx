import type { Metadata } from "next";
import localFont from "next/font/local";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import "../globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Link href="/">
          <Button className="bg-gray-800 text-gray-50 mt-10 ml-10 hover:bg-gray-700">
            <MoveLeft className="size-4 mr-2" /> Kembali
          </Button>
        </Link>
        {children}
      </body>
    </html>
  );
}
