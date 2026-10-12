import Header from "@/components/header/Header";
import { getBuros } from "@/lib/FD";

export default async function HeaderSlug() {
  const server = await getBuros();

  return <Header server={server} />;
}
