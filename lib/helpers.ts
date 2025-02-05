export function handleVariants(types: string) {
  const finalTypes: string[] = [];
  types.split(' ').forEach((type: string) => finalTypes.push(`is-${type}`));
  return finalTypes.join(' ');
}

export function handleURLTarget(link: string): '_self'|'_blank' {
  if (link === '#') return '_self';

  const url: URL = new URL(link);
  if (!url.protocol) return '_self';
  if (url.hostname !== window.location.hostname) return '_blank';
  return '_self';
}