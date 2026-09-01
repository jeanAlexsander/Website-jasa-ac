"use client";

import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            CV Aneka Technic
          </h3>

          <p className="text-sm leading-relaxed text-blue-100/80">
            Melayani pemasangan, perawatan, dan perbaikan AC dengan tenaga
            profesional dan terpercaya.
          </p>
        </div>

        {/* Alamat & Kontak */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Kontak</h3>

          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-cyan-400 shrink-0" />

              <p className="text-zinc-300">
                Jl. Sokajati, Pepedan, Bantarsoka, Kec. Purwokerto Barat,
                Kabupaten Banyumas, Jawa Tengah 53133
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} className="text-cyan-400 shrink-0" />

              <p className="text-zinc-300">0858-0133-0301 | 0852-2702-2999</p>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} className="text-cyan-400 shrink-0" />

              <p className="text-zinc-300">info@jasaacpro.com</p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Ikuti Kami</h3>

          <div className="flex flex-col gap-3">
            <a
              href="https://www.instagram.com/cv.anekatechnic/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-pink-400 transition"
            >
              <FaInstagram size={20} />
              Instagram
            </a>

            <a
              href="https://www.tiktok.com/@cv.aneka.technic?_r=1&_t=ZS-99MwNMR9pWX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-pink-500 transition"
            >
              <FaTiktok size={20} />
              TikTok
            </a>
          </div>
        </div>

        {/* Jam Operasional */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Jam Operasional
          </h3>

          <p className="text-sm text-blue-100/90 leading-relaxed">
            Senin - Sabtu
            <br />
            09.00 - 17.00 WIB
          </p>

          <p className="text-sm mt-3 text-blue-200">
            Siap melayani panggilan darurat AC.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-4 text-center text-sm text-zinc-400">
        © 2026 CV. Aneka Technic. All Rights Reserved.
      </div>
    </footer>
  );
}
