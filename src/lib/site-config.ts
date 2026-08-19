function normalizeUrl(url: string) {
  return url.replace(/\/$/, "");
}

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
const vercelUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

export const SITE_URL = normalizeUrl(
  configuredUrl ?? (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000")
);

export const BLOG_ENABLED = false;

