"use client";

import { useRouter } from "next/navigation";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import type { CatalogItem } from "@/src/types";

interface Props {
  item: CatalogItem;
  meta: { icon: string; color: string; gradient: string } | undefined;
}

export default function ItemDetailClient({ item, meta }: Props) {
  const router = useRouter();
  const accentColor = meta?.color || "#8b5cf6";

  return (
    <div style={{ "--cat-color": accentColor } as React.CSSProperties}>
      {/* Back Button */}
      <div className="max-w-[1400px] mx-auto px-6 py-4">
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => router.push("/")}
          sx={{
            color: "var(--text-secondary)",
            "&:hover": {
              color: "var(--text-primary)",
              bgcolor: "rgba(255,255,255,0.05)",
            },
          }}
        >
          Back to Catalog
        </Button>
      </div>

      {/* Detail Body */}
      <div className="max-w-[900px] mx-auto px-6 xl:-mt-10 relative z-2">
        {/* Title Section */}
        <div className="bg-[rgba(17,24,39,0.6)] backdrop-blur-[20px] border border-white/5 rounded-3xl p-6 md:p-10 mb-8 animate-in">
          <div className="flex items-center gap-4 mb-4 flex-wrap">
            <Chip
              label={item.category}
              sx={{
                bgcolor: `${accentColor}20`,
                color: accentColor,
                fontWeight: 600,
                fontSize: "0.8rem",
                border: `1px solid ${accentColor}40`,
                padding: "4px 8px",
              }}
            />
          </div>

          <div className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-2">
            {item.itemname}
          </div>

          <p className="text-sm text-slate-400 leading-relaxed">
            Explore the full specifications and details of the {item.itemname}.
          </p>
        </div>

        {/* Specifications */}
        <div className="animate-in animate-in-delay-1">
          <div className="flex items-center gap-3 mb-6">
            <InfoOutlinedIcon style={{ color: accentColor, fontSize: 22 }} />
            <h2 className="text-2xl font-bold tracking-tight">
              Specifications
            </h2>
          </div>

          <Divider sx={{ borderColor: "var(--border-subtle)", mb: 3 }} />

          <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
            {item.itemprops.map((prop, idx) => (
              <div
                key={prop.label}
                className={`prop-card bg-[rgba(17,24,39,0.6)] backdrop-blur-[20px] border border-white/5 rounded-2xl p-6 animate-in animate-in-delay-${Math.min(idx + 1, 4)}`}
                style={{ borderLeft: `3px solid ${accentColor}` }}
              >
                <div className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-2">
                  {prop.label}
                </div>
                <div className="text-xl font-semibold text-slate-100">
                  {prop.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
