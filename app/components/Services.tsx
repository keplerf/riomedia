const services = [
  {
    number: "01",
    title: "Paid Media",
    description:
      "Google Ads, Meta, TikTok, and programmatic campaigns engineered for maximum ROAS. We don't guess — we optimize.",
    tags: ["Google Ads", "Meta Ads", "TikTok Ads", "Programmatic"],
  },
  {
    number: "02",
    title: "SEO & Content",
    description:
      "Long-term organic growth through technical SEO, content strategy, and authority building that compounds over time.",
    tags: ["Technical SEO", "Content Strategy", "Link Building"],
  },
  {
    number: "03",
    title: "Social Media",
    description:
      "Brand presence that converts. Creative content calendars, community management, and influencer partnerships.",
    tags: ["Content Creation", "Community", "Influencer"],
  },
  {
    number: "04",
    title: "Analytics & CRO",
    description:
      "Turn data into decisions. We audit, track, and optimize every touchpoint in your funnel to increase conversion rates.",
    tags: ["GA4", "Hotjar", "A/B Testing", "Funnel Audit"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-20">
          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
              What we do
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Services built for<br />
              <span className="text-accent">measurable growth.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex h-10 items-center px-6 rounded-full border border-[#2a2a2a] text-sm text-zinc-300 hover:border-zinc-500 transition-colors self-start sm:self-auto whitespace-nowrap"
          >
            Work with us →
          </a>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1f1f1f]">
          {services.map((s) => (
            <div
              key={s.number}
              className="group bg-[#080808] p-10 flex flex-col gap-6 hover:bg-[#111] transition-colors"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-mono text-zinc-600">{s.number}</span>
                <span className="w-8 h-8 rounded-full border border-[#2a2a2a] flex items-center justify-center text-zinc-600 group-hover:border-accent group-hover:text-accent transition-colors text-lg leading-none">
                  ↗
                </span>
              </div>
              <h3 className="text-2xl font-bold">{s.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">{s.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full border border-[#1f1f1f] text-xs text-zinc-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
