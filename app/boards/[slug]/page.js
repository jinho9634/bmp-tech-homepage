import { notFound } from "next/navigation";
import DetailPage from "../../components/DetailPage";
import { pcbBoards } from "../../catalog";

export default async function BoardDetail({ params }) {
  const { slug } = await params;
  const item = pcbBoards[slug];
  if (!item) notFound();
  return <DetailPage item={item} backHref="/#pcb-solutions" />;
}
