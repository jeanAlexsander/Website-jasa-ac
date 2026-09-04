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
  Wind,
  PackageOpen,
  Refrigerator,
  WashingMachine,
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
    title: "Cleaning AC",
    icon: Wind,
    desc: "Pembersihan AC agar tetap dingin dan bekerja optimal.",
    features: [
      {
        name: "Cleaning AC Split",
        price: "Rp75.000",
      },
      {
        name: "Cleaning AC Cassette",
        price: "Rp300.000",
      },
      {
        name: "Cleaning AC Standing Floor",
        price: "Rp250.000",
      },
      {
        name: "Cleaning AC Central / PK",
        price: "Rp225.000",
      },
    ],
  },

  {
    title: "Service AC",
    icon: Wrench,
    desc: "Pengecekan dan perbaikan masalah pada unit AC.",
    features: [
      {
        name: "Isi Gas Freon AC 0.5 PK - 1 PK (R22)",
        price: "Rp200.000",
      },
      {
        name: "Isi Gas Freon AC 0.5 PK - 1 PK (R32 - 410)",
        price: "Rp225.000",
      },
      {
        name: "Isi Gas Freon AC 1.5 PK (R22)",
        price: "Rp250.000",
      },
      {
        name: "Isi Gas Freon AC 1.5 PK (R32 - 410)",
        price: "Rp300.000",
      },
      {
        name: "Isi Gas Freon AC 2 PK (R22)",
        price: "Rp300.000",
      },
      {
        name: "Isi Gas Freon AC 2 PK (R32 - 410)",
        price: "Rp350.000",
      },
    ],
  },

  {
    title: "Pasang AC",
    icon: Snowflake,
    desc: "Pemasangan AC baru dengan instalasi yang rapi.",
    features: [
      {
        name: "Pemasangan AC Split",
        price: "Rp350.000",
      },
      {
        name: "Pemasangan AC Cassette",
        price: "Rp1.250.000",
      },
      {
        name: "Pemasangan AC Standing Floor",
        price: "Rp1.150.000",
      },
      {
        name: "Pemasangan AC Central",
        price: "Dilihat Dari PK Dan Material Kelengkapan",
      },
    ],
  },

  {
    title: "Bongkar Pasang",
    icon: PackageOpen,
    desc: "Pemindahan AC dengan aman dan profesional.",
    features: [
      {
        name: "Bongkar Pasang AC Split",
        price: "Rp450.000",
      },
      {
        name: "Bongkar Pasang AC Cassette",
        price: "Rp2.150.000",
      },
      {
        name: "Bongkar Pasang AC Standing Floor",
        price: "Rp1.900.000",
      },
      {
        name: "Bongkar Pasang AC Central",
        price: "Dilihat Dari Kebutuhan",
      },
    ],
  },

  {
    title: "Peralatan Pendingin - Refgrirasi",
    icon: Refrigerator,
    desc: "Layanan perawatan dan perbaikan kulkas, freezer, showcase, dan chiller.",
    features: [
      {
        name: "Service Kulkas",
        price: "Dilihat Dari Kebutuhan",
      },
      {
        name: "Service Freezer",
        price: "Dilihat Dari Kebutuhan",
      },
      {
        name: "Service Showcase",
        price: "Dilihat Dari Kebutuhan",
      },
      {
        name: "Service Chiller",
        price: "Dilihat Dari Kebutuhan",
      },
    ],
  },
  {
    title: "Peralatan Rumah Tangga - Home Appliances",
    icon: WashingMachine,
    desc: "Layanan perawatan dan perbaikan mesin cuci, water heater, dan dispenser.",
    features: [
      {
        name: "Service Mesin Cuci",
        price: "Dilihat Dari Kebutuhan",
      },
      {
        name: "Service Water Heater",
        price: "Dilihat Dari Kebutuhan",
      },
      {
        name: "Service Dispenser",
        price: "Dilihat Dari Kebutuhan",
      },
    ],
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
