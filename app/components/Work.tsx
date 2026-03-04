const projects = [
  {
    client: "Volta Electric",
    category: "Paid Media · SEO",
    result: "+340% organic traffic in 6 months",
    year: "2024",
    color: "from-orange-900/30 to-transparent",
  },
  {
    client: "Kova Skincare",
    category: "Meta Ads · CRO",
    result: "4.2× ROAS across Meta campaigns",
    year: "2024",
    color: "from-rose-900/30 to-transparent",
  },
  {
    client: "Meridian Finance",
    category: "Google Ads · Analytics",
    result: "Cost per lead reduced by 61%",
    year: "2023",
    color: "from-blue-900/30 to-transparent",
  },
  {
    client: "Forma Studio",
    category: "Social Media · Content",
    result: "0 → 80K followers in 8 months",
    year: "2023",
    color: "from-violet-900/30 to-transparent",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-32 px-6 lg:px-12 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
            Selected work
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Results that<br />
            <span className="text-accent">speak for themselves.</span>
          </h2>
        </div>

        {/* Projects list */}
        <div className="flex flex-col divide-y divide-[#1f1f1f]">
          {projects.map((p, i) => (
            <div
              key={p.client}
              className="group relative py-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0 cursor-default"
            >
              {/* Hover bg */}
              <div className={`absolute inset-0 bg-gradient-to-r ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

              <span className="relative text-xs font-mono text-zinc-600 sm:w-16">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative flex-1">
                <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">
                  {p.client}
                </h3>
                <p className="text-sm text-zinc-500 mt-1">{p.category}</p>
              </div>

              <div className="relative sm:text-right">
                <p className="text-sm font-medium text-zinc-300">{p.result}</p>
                <p className="text-xs text-zinc-600 mt-1">{p.year}</p>
              </div>

              <span className="relative hidden sm:block ml-10 text-zinc-700 group-hover:text-accent group-hover:translate-x-1 transition-all">
                →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
