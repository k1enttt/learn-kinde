"use client";
// import type { Metadata } from "next";
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";
import "./globals.css";
import Navbar from "@/components/navbar";

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <KindeProvider>
      <html lang="en">
        <body className="">
          <Navbar isLoggedIn={false} />
          {children}
        </body>
      </html>
    </KindeProvider>
  );
}
