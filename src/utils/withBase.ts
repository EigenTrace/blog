const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export function withBase(path: string) {
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("#")
  ) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (
    !basePath ||
    normalizedPath === basePath ||
    normalizedPath.startsWith(`${basePath}/`)
  ) {
    return normalizedPath;
  }

  return `${basePath}${normalizedPath}`;
}

export function withoutBase(path: string) {
  if (!basePath || path === basePath) return path === basePath ? "/" : path;

  return path.startsWith(`${basePath}/`) ? path.slice(basePath.length) : path;
}
