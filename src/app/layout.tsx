import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Michael Maingard Properties | Luxury Real Estate Cape Town",
  description: "Michael Maingard - Luxury Property Specialist at Greeff Christie's International Real Estate. Specializing in Cape Town's prestigious Atlantic Seaboard properties.",
  keywords: "Michael Maingard, Greeff Properties, Cape Town real estate, Atlantic Seaboard, Sea Point, luxury properties, Christie's International Real Estate",
  authors: [{ name: "Michael Maingard" }],
  openGraph: {
    title: "Michael Maingard Properties | Luxury Real Estate Cape Town",
    description: "Discover exclusive properties on Cape Town's prestigious Atlantic Seaboard with Michael Maingard",
    url: "https://michaelmaingardproperties.com",
    siteName: "Michael Maingard Properties",
    locale: "en_ZA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
