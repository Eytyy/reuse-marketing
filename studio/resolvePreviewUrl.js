const env = process.env.NODE_ENV || 'development';

export default function resolvePreviewUrl(document) {
  const baseUrl =
    env === 'development'
      ? 'http://localhost:8000/preview'
      : 'https://reuse-marketing.netlify.app/preview';
  switch (document._type) {
    case 'page':
      return !document.slug || !document.slug.current
        ? baseUrl
        : `${baseUrl}/${document.slug.current}`;
    case 'post':
      return `${baseUrl}/blog/${document.slug.current}`;
    case 'project':
      return `${baseUrl}/work/${document.slug.current}`;
    case 'homePage':
      return baseUrl;
    default:
      return null;
  }
}
