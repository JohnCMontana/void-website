import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CookieConsent from "@/components/Common/CookieConsent";
import SmoothScroll from "@/components/Common/SmoothScroll";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aurall",
  description: "Aurall platform website",
  icons: {
    icon: [
      {
        url: './logos/Favicons/aurall-favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: './logos/Favicons/aurall-favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: './logos/Favicons/aurall-favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: './logos/Favicons/aurall-favicon-180x180.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={urbanist.className}>
      <body className="min-h-screen flex flex-col">
        <SmoothScroll>
          <Navbar />
          <main className="flex-1 relative z-10">
            {children}
            <CookieConsent />
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}