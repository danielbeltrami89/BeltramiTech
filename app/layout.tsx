import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beltrami Tech | Senior Mobile Developer",
  description:
    "Portfolio of Daniel Beltrami, Senior Mobile Developer focused on mobile apps, streaming solutions and scalable digital products.",
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
