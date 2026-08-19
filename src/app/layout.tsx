import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

const seoTitle = `${DATA.name} — Fullstack Developer`;

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: seoTitle,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  applicationName: `${DATA.name} Portfolio`,
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  publisher: DATA.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: seoTitle,
    description: DATA.description,
    url: "/",
    siteName: `${DATA.name} Portfolio`,
    locale: "en_US",
    type: "profile",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: seoTitle,
    description: DATA.description,
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: DATA.name,
    url: DATA.url,
    image: `${DATA.url}${DATA.avatarUrl}`,
    jobTitle: "Fullstack Developer",
    description: DATA.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kharkiv",
      addressCountry: "UA",
    },
    worksFor: {
      "@type": "Organization",
      name: "ProfITsoft",
      url: "https://profitsoft.ua/",
    },
    sameAs: [
      DATA.contact.social.GitHub.url,
      DATA.contact.social.LinkedIn.url,
    ],
    knowsAbout: DATA.skills.map((skill) => skill.name),
  }).replace(/</g, "\\u003c");

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          geist.variable,
          geistMono.variable
        )}
      >
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: personJsonLd }}
        />
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <div className="absolute inset-0 top-0 left-0 right-0 h-[100px] overflow-hidden z-0">
              <FlickeringGrid
                className="h-full w-full"
                squareSize={2}
                gridGap={2}
                style={{
                  maskImage: "linear-gradient(to bottom, black, transparent)",
                  WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
                }}
              />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6">
              {children}
            </div>
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
