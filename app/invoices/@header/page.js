import Header from "@/components/header/Header";
import { getBuros } from "@/lib/FD";

export default async function HeaderPage({ params }) {
  console.log("slug");
  const { slug } = await params;
  const server = await getBuros();
  console.log("slug");

  return <Header server={server} />;
}
