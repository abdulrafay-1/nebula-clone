import { services } from "@/src/data/nebula-content";

export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="relative bg-white px-4 pb-24 pt-18 sm:pt-22 lg:pt-26"
    >
      <div className="mx-auto max-w-[1120px]">
        <h2 className="mx-auto mb-10 max-w-[760px] text-center font-dosis text-[clamp(2rem,5vw,44px)] font-bold leading-[1.05] text-[var(--nb-deep-purple)]">
          Precios flexibles para todos los presupuestos
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex h-full flex-col rounded-[18px] bg-[var(--nb-card-bg)] px-5 pb-5 pt-6 shadow-[0_10px_30px_rgba(56,12,84,0.05)]"
            >
              <img
                src={service.image}
                alt={service.imageAlt}
                className="mx-auto h-[150px] w-auto object-contain md:h-[168px]"
              />
              <h3 className="mt-4 text-center font-dosis text-[32px] font-bold leading-none text-[var(--nb-deep-purple)]">
                {service.title}
              </h3>
              <p className="mt-4 grow text-[14px] leading-[1.56] text-[var(--nb-copy)]">
                {service.description}
              </p>
              <a
                href={service.href}
                className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[var(--nb-magenta)] px-7 py-2 text-[12px] font-semibold text-white transition-all duration-300 hover:brightness-110"
              >
                {service.cta}
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[20px] bg-[var(--nb-card-bg)] px-6 py-9 text-center shadow-[0_10px_28px_rgba(56,12,84,0.04)]">
          <p className="mx-auto max-w-[690px] text-[18px] font-medium leading-[1.35] tracking-[0.2px] text-[var(--nb-deep-purple)] sm:text-[24px]">
            ¿No sabés por dónde empezar?
            <br className="hidden sm:block" />
            Te ayudamos a encontrar la mejor opción para tu proyecto.
          </p>
          <a
            href="https://nebula.uy/contacto/"
            className="mt-6 inline-flex rounded-full bg-[var(--nb-cta-dark)] px-7 py-2 text-[12px] font-semibold text-white transition-all duration-300 hover:brightness-110 sm:mt-7"
          >
            Hablemos
          </a>
        </div>
      </div>
    </section>
  );
}
