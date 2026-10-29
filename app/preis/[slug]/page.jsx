import classess from "./page.module.css";

export default async function SlugPreis({ params }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  return <>{decodedSlug}</>;
}
