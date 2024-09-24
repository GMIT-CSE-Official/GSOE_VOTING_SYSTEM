import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { CookiesProvider } from "next-client-cookies/server";

const inter = Inter({
  variable: "--font-inter",
  weight: ["100", "900", "400", "700"],
  subsets: ["latin", "cyrillic"],
});

const merriWeather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "GSOE AWARDS 2024",
  description: "Vote for the best in this year's Durga Puja awards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${merriWeather.variable} antialiased max-w-md mx-auto relative`}
        suppressHydrationWarning
      >
        <CookiesProvider>
          <>
            <Header />
            {children}
            <Footer />
          </>
        </CookiesProvider>
      </body>
    </html>
  );
}
