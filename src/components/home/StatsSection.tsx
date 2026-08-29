import { stats } from "../../data/home";

export default function StatsSection() {
  return (
    <section className="bg-white py-12 border-y border-slate-200">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="text-center">
              <h3 className="text-4xl font-extrabold text-orange-700">
                {item.value}
              </h3>

              <p className="mt-2 text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
