import { notFound } from "next/navigation";
import Image from "next/image";
import { getItemBySlug, categoryMeta } from "@/src/data";
import ItemDetailClient from "./ItemDetailClient";

export default async function ItemDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getItemBySlug(slug);

  if (!item) {
    notFound();
  }

  const meta = categoryMeta[item.category];

  return (
    <main className="pb-20">
      {/* Hero Image */}
      <div className="relative w-full h-[50vh] min-h-[360px] max-h-[560px] overflow-hidden">
        <Image
          src={item.image}
          alt={item.itemname}
          width={1400}
          height={560}
          className="w-full h-full object-cover"
        />
        <div className="detail-hero-overlay absolute inset-0" />
      </div>

      {/* Client component for interactive parts */}
      <ItemDetailClient item={item} meta={meta} />
    </main>
  );
}
