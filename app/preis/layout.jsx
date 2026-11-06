import HeaderPrice from "@/component/header/header-price";

export default async function PriceLayout({ children }) {
  return (
    <>
      <HeaderPrice />
      {children}
    </>
  );
}
