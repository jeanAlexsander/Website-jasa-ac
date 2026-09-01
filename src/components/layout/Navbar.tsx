"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PhoneCall, Menu, ChevronDown, X, MessageCircle } from "lucide-react";

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
  const [showContact, setShowContact] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        contactRef.current &&
        !contactRef.current.contains(event.target as Node)
      ) {
        setShowContact(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          <div ref={contactRef} className="relative hidden lg:block">
            <button
              onClick={() => setShowContact(!showContact)}
              className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-orange-800 hover:shadow-xl"
            >
              <PhoneCall size={18} />
              Hubungi Kami
            </button>

            {/* Desktop Contact Dropdown */}
            {showContact && (
              <div className="absolute right-0 top-full z-50 mt-3 w-80 origin-top-right animate-in fade-in zoom-in-95 duration-200">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10">
                  {/* Header */}
                  <div className="border-b border-slate-100 px-5 py-4">
                    <p className="text-sm font-semibold text-slate-900">
                      Hubungi Kami
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Pilih salah satu kontak WhatsApp kami
                    </p>
                  </div>

                  {/* Contact List */}
                  <div className="p-2">
                    {/* Admin 1 */}
                    <a
                      href={`https://wa.me/6285801330301?text=${encodeURIComponent(
                        "Hai kak, saya ingin bertanya mengenai layanan service AC.",
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setShowContact(false)}
                      className="group flex items-center gap-4 rounded-xl p-3 transition-colors duration-200 hover:bg-orange-50"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-700 transition-colors group-hover:bg-orange-600 group-hover:text-white">
                        <MessageCircle size={19} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-900">
                          Admin 1
                        </p>

                        <p className="mt-0.5 text-sm text-slate-500">
                          0858-0133-0301
                        </p>
                      </div>

                      <span className="ml-auto text-xs font-medium text-orange-600 opacity-0 transition-opacity group-hover:opacity-100">
                        Chat
                      </span>
                    </a>

                    {/* Admin 2 */}
                    <a
                      href={`https://wa.me/6285227022999?text=${encodeURIComponent(
                        "Hai kak, saya ingin bertanya mengenai layanan service AC.",
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setShowContact(false)}
                      className="group flex items-center gap-4 rounded-xl p-3 transition-colors duration-200 hover:bg-orange-50"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-700 transition-colors group-hover:bg-orange-600 group-hover:text-white">
                        <MessageCircle size={19} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-900">
                          Admin 2
                        </p>

                        <p className="mt-0.5 text-sm text-slate-500">
                          0852-2702-2999
                        </p>
                      </div>

                      <span className="ml-auto text-xs font-medium text-orange-600 opacity-0 transition-opacity group-hover:opacity-100">
                        Chat
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 lg:hidden ${
          open ? "max-h-150 opacity-100" : "max-h-0 opacity-0"
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

          {/* Mobile Contact */}
          <div className="mt-6 border-t border-slate-100 pt-6">
            <p className="mb-3 px-1 text-sm font-semibold text-slate-900">
              Hubungi Kami
            </p>

            {/* WhatsApp 1 */}
            <a
              href={`https://wa.me/6285801330301?text=${encodeURIComponent(
                "Hai kak, saya ingin bertanya mengenai layanan service AC.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-xl bg-orange-50 px-4 py-3 transition hover:bg-orange-100"
            >
              <div>
                <p className="text-sm font-semibold text-slate-900">Admin 1</p>

                <p className="mt-1 text-xs text-slate-500">0858-0133-0301</p>
              </div>

              <PhoneCall size={18} className="text-orange-700" />
            </a>

            {/* WhatsApp 2 */}
            <a
              href={`https://wa.me/6285227022999?text=${encodeURIComponent(
                "Hai kak, saya ingin bertanya mengenai layanan service AC.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-between rounded-xl bg-orange-50 px-4 py-3 transition hover:bg-orange-100"
            >
              <div>
                <p className="text-sm font-semibold text-slate-900">Admin 2</p>

                <p className="mt-1 text-xs text-slate-500">0885-2702-2999</p>
              </div>

              <PhoneCall size={18} className="text-orange-700" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
