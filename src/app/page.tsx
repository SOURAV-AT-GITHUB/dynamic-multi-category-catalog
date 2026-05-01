"use client";

import Link from "next/link";
import Image from "next/image";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";

import { getGroupedByCategory, toSlug, categoryMeta } from "../data";

const categoryIcons: Record<string, React.ReactNode> = {
  Cars: <DirectionsCarIcon />,
  Bikes: <TwoWheelerIcon />,
  Phones: <PhoneIphoneIcon />,
  Computers: <LaptopMacIcon />,
};

export default function HomePage() {
  const groups = getGroupedByCategory();

  return (
    <main>
      {/* Hero */}
      <section className="w-full max-w-[1400px] mx-auto px-6 pt-20 pb-12 text-center animate-in">
        <h1 className="hero-title text-5xl font-extrabold tracking-tight leading-tight mb-4">
          Discover. Explore. Compare.
        </h1>
        <p className="text-base text-slate-400 max-w-[600px] mx-auto leading-relaxed">
          Browse our curated collection of premium Cars, Bikes, Phones, and
          Computers — all in one place.
        </p>
      </section>

      {/* Category Sections */}
      <section className="w-full max-w-[1400px] mx-auto px-6 pb-20">
        {groups.map((group, gIdx) => {
          const meta = categoryMeta[group.category];
          return (
            <div
              key={group.category}
              className={`mb-14 animate-in animate-in-delay-${gIdx + 1}`}
              style={{ "--cat-color": meta?.color || "#8b5cf6" } as React.CSSProperties}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-white/5">
                <div
                  className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0"
                  style={{ background: meta?.gradient }}
                >
                  <span className="text-white flex">
                    {categoryIcons[group.category]}
                  </span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold tracking-tight">
                    {group.category}
                  </h2>
                </div>
                <span className="text-slate-500 text-sm">
                  {group.items.length}{" "}
                  {group.items.length === 1 ? "item" : "items"}
                </span>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6 max-sm:grid-cols-1">
                {group.items.map((item) => {
                  const slug = toSlug(item.itemname);
                  return (
                    <Link
                      key={slug}
                      href={`/item/${slug}`}
                      className="card-link no-underline text-inherit block"
                      id={`card-${slug}`}
                    >
                      <Card
                        sx={{
                          height: "100%",
                          cursor: "pointer",
                          borderTop: `2px solid ${meta?.color || "#8b5cf6"}`,
                        }}
                      >
                        {/* Image */}
                        <div className="card-img relative w-full h-[200px] overflow-hidden rounded-t-2xl">
                          <Image
                            src={item.image}
                            alt={item.itemname}
                            width={400}
                            height={200}
                            className="w-full h-full object-cover"
                          />
                          <div className="card-overlay absolute bottom-0 left-0 right-0 h-[60%] pointer-events-none" />
                        </div>

                        {/* Content */}
                        <div className="px-5 py-4">
                          <h3 className="text-lg font-semibold">
                            {item.itemname}
                          </h3>

                          {/* Preview Props */}
                          <div className="flex flex-wrap gap-2 mt-3">
                            {item.itemprops.slice(0, 2).map((prop) => (
                              <Chip
                                key={prop.label}
                                label={`${prop.label}: ${prop.value}`}
                                size="small"
                                sx={{
                                  bgcolor: "rgba(255,255,255,0.06)",
                                  color: meta?.color || "#8b5cf6",
                                  border: `1px solid ${meta?.color || "#8b5cf6"}33`,
                                  fontSize: "0.7rem",
                                }}
                              />
                            ))}
                            {item.itemprops.length > 2 && (
                              <Chip
                                label={`+${item.itemprops.length - 2} more`}
                                size="small"
                                sx={{
                                  bgcolor: "rgba(255,255,255,0.04)",
                                  color: "var(--text-muted)",
                                  fontSize: "0.7rem",
                                }}
                              />
                            )}
                          </div>
                        </div>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
