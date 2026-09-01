"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PhoneCall, Menu, X } from "lucide-react";

const menus = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Layanan & Harga",
    href: "/layanan",
  },
  {
    name: "Tentang Kami",
    href: "/tentang",
  },
  {
    name: "Kontak",
    href: "/kontak",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <Image
            src="/images/hero-ac.png"
            alt="CV Aneka Technic"
            width={42}
            height={42}
            className="h-11 w-auto"
            priority
          />

          <div>
            <h1 className="text-lg font-bold tracking-wide text-slate-900">
              CV. ANEKA TECHNIC
            </h1>

            <p className="text-xs text-slate-500">
              General Service, Maintenance and Supplier
            </p>
          </div>
        </Link>

        {/* Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {menus.map((menu) => {
            const active = pathname === menu.href;

            return (
              <Link
                key={menu.href}
                href={menu.href}
                className={`group relative py-2 text-[15px] font-medium transition-all duration-300
                ${
                  active
                    ? "text-orange-700"
                    : "text-slate-700 hover:text-orange-700"
                }`}
              >
                {menu.name}

                <span
                  className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-orange-700 transition-all duration-300
                  ${active ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <a
            href="https://wa.me/6285801330301"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-orange-600 px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-orange-800 hover:shadow-xl lg:inline-flex"
          >
            <PhoneCall size={18} />
            Hubungi Kami
          </a>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 md:hidden ${
          open ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-6">
          {menus.map((menu) => {
            const active = pathname === menu.href;

            return (
              <Link
                key={menu.href}
                href={menu.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 font-medium transition-all duration-300 ${
                  active
                    ? "bg-orange-50 text-orange-700"
                    : "text-slate-700 hover:bg-slate-100 hover:text-orange-700"
                }`}
              >
                {menu.name}
              </Link>
            );
          })}

          <a
            href="https://wa.me/628123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-2 rounded-full bg-orange-700 py-3 font-semibold text-white transition hover:bg-orange-800"
          >
            <PhoneCall size={18} />
            Hubungi Kami
          </a>
        </nav>
      </div>
    </header>
  );
}
