import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pathakolab.com"),
  title:
    "S. P. L Path Lab Gwalior | Blood Test & Pathology Laboratory | 24×7 Diagnostic Services",
  description:
    "S. P. L Path Lab is a pathology lab in Gwalior offering blood tests, health packages, home sample collection, and 24×7 diagnostic support under Dr. V. Khare, M.D. Pathologist.",
  keywords: [
    "pathology lab in gwalior",
    "blood test in gwalior",
    "diagnostic centre in gwalior",
    "pathology services gwalior",
    "home sample collection in gwalior",
    "24 hour pathology lab gwalior",
    "medical laboratory in gwalior",
  ],
  openGraph: {
    title:
      "S. P. L Path Lab Gwalior | Blood Test & Pathology Laboratory | 24×7 Diagnostic Services",
    description:
      "Blood tests, preventive health packages, and home sample collection in Gwalior, Madhya Pradesh.",
    url: "https://pathakolab.com",
    siteName: "S. P. L Path Lab",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "64x64" }],
    shortcut: [{ url: "/favicon.png", type: "image/png", sizes: "64x64" }],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E5CAD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
