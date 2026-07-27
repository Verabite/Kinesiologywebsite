import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.neuroenergetische-kinesiologie.de"),

  title: {
    default: "Neuroenergetische Kinesiologie",
    template: "%s | Neuroenergetische Kinesiologie",
  },

  description:
    "Neuroenergetische Kinesiologie unterstützt dabei, Stress zu lösen, das Nervensystem zu regulieren und Körper, Geist und Emotionen wieder in Balance zu bringen.",

  keywords: [
    "Neuroenergetische Kinesiologie",
    "Kinesiologie",
    "Stress",
    "Nervensystem",
    "Blockaden lösen",
    "Balance",
    "Energie",
    "Wohlbefinden",
  ],

  authors: [
    {
      name: "Neuroenergetische Kinesiologie",
    },
  ],

  creator: "Neuroenergetische Kinesiologie",

  openGraph: {
    title: "Neuroenergetische Kinesiologie",
    description:
      "Stress lösen, Blockaden erkennen und das Nervensystem nachhaltig stärken.",
    url: "https://www.neuroenergetische-kinesiologie.de",
    siteName: "Neuroenergetische Kinesiologie",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Neuroenergetische Kinesiologie",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Neuroenergetische Kinesiologie",
    description:
      "Mehr Balance für Körper, Geist und Nervensystem.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${cormorant.variable} bg-[#F8F5EF] text-[#433C36] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}