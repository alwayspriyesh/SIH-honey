import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Honey Chain — Verified Provenance",
    short_name: "Honey Chain",
    description: "Verify the origin, batch, and journey of your honey with one simple scan.",
    start_url: "/dashboard",
    display: "standalone",
    background_color: "#FAF9F5",
    theme_color: "#173C2C",
    orientation: "portrait",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
