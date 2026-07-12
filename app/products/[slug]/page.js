import { notFound } from "next/navigation";
import DetailPage from "../../components/DetailPage";
import { commercialProducts } from "../../catalog";

export default async function ProductDetail({ params }) {
  const { slug } = await params;
  const item = commercialProducts[slug];
  if (!item) notFound();
  return <DetailPage item={item} backHref="/#commercial-products" />;
}
