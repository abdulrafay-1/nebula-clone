import type { Metadata } from "next";
import { DM_Sans, Dosis } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const dosis = Dosis({
  variable: "--font-dosis",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nebula.uy"),
  title: "Nebula - Sitios web y software inteligente para empresas",
  description: "Nebula crea sitios web, software a medida e integraciones con IA para empresas.",
  openGraph: {
    title: "Nebula - Sitios web y software inteligente para empresas",
    description:
      "Websites, software liviano y soluciones tecnicas para empresas que quieren crecer.",
    images: ["/sites/5/2026/02/profile.png"],
  },
  icons: {
    icon: [
      { url: "/sites/5/2026/02/cropped-fav-1-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/sites/5/2026/02/cropped-fav-1-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/sites/5/2026/02/cropped-fav-1-180x180.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dosis.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
