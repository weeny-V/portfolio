import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_ENABLED } from "@/lib/site-config";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    noarchive: true,
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  if (!BLOG_ENABLED) notFound();
  return children;
}

