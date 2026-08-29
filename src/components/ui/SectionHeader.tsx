interface SectionHeaderProps {
  badge: string;
  title: string;
  description: string;
}

export default function SectionHeader({
  badge,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="text-center">
      <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
        {badge}
      </span>

      <h2 className="mt-5 text-4xl font-bold text-slate-900">{title}</h2>

      <p className="mx-auto mt-4 max-w-2xl text-slate-500">{description}</p>
    </div>
  );
}
