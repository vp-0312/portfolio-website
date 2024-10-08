import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import PageTransition from "@/components/transitions/PageTransition";
import StairTransition from "@/components/transitions/stairTransition/StairTransition";

export const metadata: Metadata = {
  title: "Vimal Panara",
  description: "Vimal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper@7/swiper-bundle.min.css"
        />
      </head>
      <body className="font-primary bg-primary text-white">
        <Header />
        <StairTransition />
        <PageTransition >
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
