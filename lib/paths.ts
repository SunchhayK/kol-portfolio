/**
 * Base path for GitHub Pages project sites.
 * Must match `basePath` in next.config.mjs.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/kol-portfolio';

export const asset = (path: string) => `${basePath}${path}`;
