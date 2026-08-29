import SectionHeader from "../ui/SectionHeader";

export default function LocationSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          badge="Lokasi Kami"
          title="Temukan Lokasi CV. Aneka Technic"
          description="Silakan kunjungi lokasi kami atau hubungi tim kami untuk kebutuhan service AC."
        />

        <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
          <iframe
            title="Lokasi CV. Aneka Technic"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.334925636285!2d109.21875477532184!3d-7.428138692582508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655e6fd7c098f7%3A0x1290049192084af8!2sCV.%20Aneka%20Technic!5e0!3m2!1sid!2ssg!4v1785086157804!5m2!1sid!2ssg"
            className="h-100 w-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
