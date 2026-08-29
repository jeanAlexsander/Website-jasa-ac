import {
  Snowflake,
  Wrench,
  Settings,
  Package,
  RefreshCcw,
  ShieldCheck,
  Home,
  Building2,
  Store,
  School,
} from "lucide-react";

export const services = [
  {
    icon: Snowflake,
    title: "Cuci AC",
    description:
      "Membersihkan unit indoor dan outdoor agar AC kembali dingin dan bekerja optimal.",
  },
  {
    icon: Wrench,
    title: "Service AC",
    description:
      "Perbaikan berbagai masalah AC seperti tidak dingin, bocor, atau suara berisik.",
  },
  {
    icon: Package,
    title: "Instalasi AC",
    description:
      "Pemasangan AC baru dengan teknisi berpengalaman dan penempatan yang tepat.",
  },
  {
    icon: RefreshCcw,
    title: "Bongkar Pasang AC",
    description:
      "Layanan pemindahan AC dengan aman tanpa merusak komponen perangkat.",
  },
  {
    icon: Settings,
    title: "Maintenance AC",
    description:
      "Perawatan berkala untuk menjaga performa AC tetap stabil dan tahan lama.",
  },
  {
    icon: ShieldCheck,
    title: "Kontrak Perawatan",
    description:
      "Solusi perawatan rutin untuk kantor, toko, dan kebutuhan bisnis.",
  },
];

export const prices = [
  {
    title: "Cuci AC",
    price: "Rp75.000",
    desc: "Pembersihan unit indoor dan outdoor agar AC kembali dingin.",
  },
  {
    title: "Service AC",
    price: "Rp100.000",
    desc: "Pengecekan dan perbaikan masalah pada unit AC.",
  },
  {
    title: "Pasang AC",
    price: "Rp350.000",
    desc: "Pemasangan AC baru dengan instalasi yang rapi.",
  },
  {
    title: "Bongkar Pasang",
    price: "Rp250.000",
    desc: "Pemindahan AC dengan aman dan profesional.",
  },
];

export const faqs = [
  {
    question: "Berapa lama proses cuci AC?",
    answer:
      "Proses cuci AC umumnya memerlukan waktu sekitar 30–60 menit, tergantung jumlah unit dan kondisi AC.",
  },
  {
    question: "Apakah ada biaya pengecekan?",
    answer:
      "Biaya pengecekan mengikuti ketentuan layanan. Jika pelanggan melanjutkan perbaikan, biaya pengecekan dapat disesuaikan dengan total pekerjaan.",
  },
  {
    question: "Apakah melayani panggilan ke rumah?",
    answer:
      "Ya. Kami melayani service AC untuk rumah, apartemen, kantor, ruko, toko, hingga tempat usaha.",
  },
  {
    question: "Apakah ada garansi setelah service?",
    answer:
      "Ya. Garansi diberikan untuk jenis pekerjaan tertentu sesuai ketentuan yang berlaku.",
  },
  {
    question: "Wilayah mana saja yang dilayani?",
    answer:
      "Kami melayani Purwokerto dan sekitarnya. Silakan hubungi kami untuk memastikan jangkauan layanan.",
  },
];

export const coverage = [
  {
    icon: Home,
    title: "Rumah Tinggal",
    desc: "Service, cuci, dan instalasi AC untuk rumah.",
  },
  {
    icon: Building2,
    title: "Perkantoran",
    desc: "Perawatan AC rutin untuk kantor dan perusahaan.",
  },
  {
    icon: Store,
    title: "Ruko & Toko",
    desc: "Menjaga kenyamanan pelanggan dan karyawan.",
  },
  {
    icon: School,
    title: "Sekolah & Instansi",
    desc: "Layanan maintenance berkala dan kontrak.",
  },
];

export const serviceAreas = [
  "Purwokerto",
  "Banyumas",
  "Purbalingga",
  "Banjarnegara",
  "Cilacap",
  "Kebumen",
];
