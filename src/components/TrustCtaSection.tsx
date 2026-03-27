import { trustLogos } from "@/src/data/nebula-content";

export function TrustCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,rgb(35,5,55)_0%,rgb(110,8,103)_100%)] px-4 pb-28 pt-22 text-white sm:pt-28 lg:pb-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,255,255,0.14)_0,transparent_18%),radial-gradient(circle_at_78%_28%,rgba(255,255,255,0.12)_0,transparent_16%)]" />
      <div className="mx-auto max-w-[1120px]">
        <p className="mb-10 text-center text-[11px] font-semibold tracking-[1.8px] text-white/90 lg:text-left">
          EMPRESAS QUE CONFIAN EN NOSOTROS
        </p>

        <div className="grid grid-cols-2 items-center gap-x-10 gap-y-8 md:grid-cols-3 lg:mb-14 lg:gap-y-12">
          {trustLogos.map((logo) => (
            <div
              key={logo.alt}
              className="flex items-center justify-center opacity-95 transition-all duration-200 hover:opacity-100"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-[30px] w-auto object-contain sm:h-[42px] lg:h-[54px]"
              />
            </div>
          ))}
        </div>

        <div className="relative mt-16 grid items-end gap-10 lg:grid-cols-[minmax(0,510px)_1fr] lg:gap-4">
          <div className="max-w-[510px] pb-6 lg:pb-12">
            <h2 className="font-dosis text-[clamp(2.2rem,6vw,52px)] font-bold leading-[1.04] tracking-[0.2px]">
              Tu negocio necesita una web increíble.
            </h2>
            <h3 className="mt-3 font-dosis text-[clamp(1.7rem,4vw,35px)] font-semibold leading-none text-white/95">
              Te la hacemos fácil.
            </h3>
            <p className="mt-5 max-w-[420px] text-[15px] leading-[1.55] text-white/90 sm:text-[18px]">
              📞 Hacé una consulta gratis y llevá tu negocio al siguiente nivel.
            </p>
            <a
              href="https://nebula.uy/contacto/"
              className="mt-7 inline-flex rounded-full bg-[var(--nb-magenta)] px-7 py-2 text-[12px] font-semibold text-white transition-all duration-300 hover:brightness-110"
            >
              ¡Hablemos hoy mismo!
            </a>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <img
              src="/sites/5/2026/03/astronauta-480.webp"
              alt="astronauta"
              className="relative z-[1] h-auto w-full max-w-[360px] animate-[levitar_3.6s_ease-in-out_infinite] lg:max-w-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
