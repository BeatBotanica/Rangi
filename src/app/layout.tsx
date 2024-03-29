import "./globals.css";
import styles from "@/styles/page.module.css";
import SideNavigation from "@/components/layout/side_navigation";
import LayoutWrapper from "@/components/layout/layout-wrapper";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Rangi",
    default: "Rangi",
  },
  description:
    "A search tool for exploring the world of music through samples. Find samples used in your favorite songs and albums & Discover songs which sample your favourite songs.",
  icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
  viewport: "width=device-width, initial-scale=1",
  twitter: {
    card: "summary",
    site: "@rangi",
    title: "Rangi",
  },
  openGraph: {
    description:
      "A search tool for exploring the world of music through samples. Find samples used in your favorite songs and albums & Discover songs which sample your favourite songs.",
    type: "website",
    url: "https://rangi.vercel.app",
    title: "Rangi",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.variable}>
        <LayoutWrapper>
          <SideNavigation />
          <main className={styles.main}>
            {children}
            <Analytics />
          </main>
        </LayoutWrapper>
      </body>
    </html>
  );
}
