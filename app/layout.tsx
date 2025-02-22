import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Recipe page",
  description: "last page to go to the next path!!!!!!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
