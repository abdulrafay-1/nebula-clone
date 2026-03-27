import { reasons } from "@/src/data/nebula-content";

export function ReasonsSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-18 sm:py-22 lg:py-26">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="mb-10 text-center font-dosis text-[clamp(2rem,5vw,44px)] font-bold leading-[1.05] text-[var(--nb-deep-purple)]">
          Razones para elegirnos
        </h2>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason, index) => (
            <article
              key={reason.title}
              className={`rounded-[16px] border border-[rgba(83,21,121,0.08)] bg-[var(--nb-card-bg)] p-5 shadow-[0_10px_30px_rgba(56,12,84,0.04)] ${
                index === 3 ? "xl:col-start-1" : ""
              } ${index === 4 ? "xl:col-start-2" : ""}`}
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#fff1d6] text-lg">
                {reason.icon}
              </div>
              <h3 className="font-dosis text-[22px] font-bold leading-[1.05] tracking-[0.2px] text-[var(--nb-deep-purple)] sm:text-[24px]">
                {reason.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.55] text-[var(--nb-copy)]">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      <img
        src="/sites/5/2025/04/asteroid.webp"
        alt="asteroid"
        className="pointer-events-none absolute -left-3 bottom-22 hidden h-16 w-auto opacity-90 lg:block"
      />
      <img
        src="/sites/5/2025/04/asteroid-2.webp"
        alt="asteroid-2"
        className="pointer-events-none absolute -right-8 bottom-8 hidden h-12 w-auto opacity-90 lg:block"
      />
    </section>
  );
}
