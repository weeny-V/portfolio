function normalizeUrl(url: string) {
  const value = url.trim();
  const absoluteUrl = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  return absoluteUrl.replace(/\/$/, "");
}

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const vercelUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() ||
  process.env.VERCEL_URL?.trim();

export const SITE_URL = normalizeUrl(
  configuredUrl || vercelUrl || "http://localhost:3000"
);

export const BLOG_ENABLED = false;

