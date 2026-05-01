"use client";

import Link from "next/link";
import CategoryIcon from "@mui/icons-material/Category";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[rgba(11,15,26,0.7)] backdrop-blur-2xl border-b border-white/5">
      <nav className="flex items-center justify-between h-[72px] max-w-[1400px] mx-auto px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 no-underline text-slate-100 font-bold text-xl tracking-tight"
        >
          <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-violet-500 to-cyan-500">
            <CategoryIcon className="text-white text-[22px]" />
          </span>
          CatalogX
        </Link>
      </nav>
    </header>
  );
}
