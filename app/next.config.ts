import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  // output: 'export',

  /* GitHub Pages */
  images: {
    unoptimized: true, // Necessary for GitHub Pages because GitHub Pages does not support image optimization
  },
  trailingSlash: true, // Add trailing slashes to paths, which is required for GitHub Pages

  /* environment variables */
  env: {
    JSON_DATA_FOLDER: 'public/data/',
  },
  turbopack: {
    // Resolve turbopack root relative to this config file
    root: path.resolve(__dirname),
  },

};

export default nextConfig;
