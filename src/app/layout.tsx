import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rodriguez Laundry | Nantucket Linen & Laundry Pickup Service",
  description:
    "Free pickup & delivery laundry service in Nantucket. Fresh linens in 24 hours. Trusted by 50+ Airbnb hosts & inns. Schedule your free pickup today.",
  keywords: [
    "Nantucket laundry service",
    "Nantucket linen cleaning",
    "Airbnb laundry service Nantucket",
    "laundry pickup delivery Nantucket",
  ],
  openGraph: {
    title: "Rodriguez Laundry | Nantucket Linen & Laundry Pickup Service",
    description:
      "Free pickup & delivery laundry service in Nantucket. Fresh linens in 24 hours. Trusted by 50+ Airbnb hosts & inns.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
