import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Landing Skeleton",
  description: "Minimal landing project skeleton for deployment test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
