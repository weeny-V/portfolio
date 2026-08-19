import { allPosts } from "content-collections";
import type { MetadataRoute } from "next";
import { BLOG_ENABLED, SITE_URL } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [`${SITE_URL}/vladyslav-kruhlov.jpg`],
    },
  ];

  if (!BLOG_ENABLED) return routes;

  routes.push({
    url: `${SITE_URL}/blog`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  });

  routes.push(
    ...allPosts.map((post) => ({
      url: `${SITE_URL}/blog/${post._meta.path.replace(/\.mdx$/, "")}`,
      lastModified: new Date(post.updatedAt ?? post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return routes;
}

