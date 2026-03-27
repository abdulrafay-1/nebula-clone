export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,rgb(34,4,52)_0%,rgb(118,9,119)_100%)] pb-24 pt-26 text-center text-white sm:pb-32 sm:pt-32 lg:pb-44 lg:pt-44">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.2)_0,transparent_26%),radial-gradient(circle_at_76%_30%,rgba(255,255,255,0.14)_0,transparent_22%)] opacity-90" />
      <img
        src="/sites/5/2025/04/asteroid.webp"
        alt="asteroide rosa"
        className="absolute left-[8%] top-[56%] hidden h-20 w-auto -translate-y-1/2 md:block lg:h-28"
      />
      <img
        src="/sites/5/2025/04/asteroid-2.webp"
        alt="asteroide"
        className="absolute right-[14%] top-[50%] hidden h-20 w-auto -translate-y-1/2 animate-[levitar_4.8s_ease-in-out_infinite] md:block lg:h-28"
      />
      <div className="relative mx-auto max-w-[1080px] px-6">
        <h1 className="mx-auto max-w-[900px] font-dosis text-[clamp(2.45rem,6vw,64px)] font-bold leading-[0.98] text-white">
          Sitios web y software inteligente
        </h1>
        <h2 className="mt-5 font-dosis text-[clamp(1.1rem,2.4vw,24px)] font-semibold text-[var(--nb-heading-sub)]">
          Tecnología que trabaja por vos
        </h2>
        <a
          href="https://nebula.uy/contacto/"
          className="mt-7 inline-flex rounded-full bg-[var(--nb-cta-primary)] px-7 py-2.5 text-[15px] font-semibold text-white transition-all duration-300 hover:brightness-110"
        >
          Agendá tu consulta ahora
        </a>
      </div>
      <div className="absolute inset-x-0 bottom-[-1px] h-20 bg-white [clip-path:ellipse(75%_100%_at_50%_100%)] sm:h-24" />
    </section>
  );
}
