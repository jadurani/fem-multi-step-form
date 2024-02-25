import { AppFont } from "@lib/fonts.constant";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontend Mentor | Multi-step Form",
  description: "Implemented by Jadurani Davalos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={AppFont.variable}>{children}</body>
    </html>
  );
}
