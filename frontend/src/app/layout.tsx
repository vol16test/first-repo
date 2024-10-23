import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "team16-app",
  description: "developed by team16",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
