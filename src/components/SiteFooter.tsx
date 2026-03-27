import { footerGroups, socialLinks } from "@/src/data/nebula-content";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(180deg,rgb(48,7,71)_0%,rgb(30,4,44)_100%)] px-4 pb-8 pt-14 text-white sm:pt-16">
      <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[1.08fr_0.85fr_0.85fr]">
        <div>
          <img
            src="/sites/5/2026/02/nebula-logo.svg"
            alt="BitsKingdom"
            className="h-7 w-auto"
          />

          <div className="mt-5 flex flex-wrap gap-1.5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-5 w-5 items-center justify-center rounded-[3px] border border-white/40 bg-transparent p-[3px] transition-all duration-300 hover:bg-white/10 sm:h-6 sm:w-6"
                aria-label={link.label}
              >
                <img
                  src={link.icon}
                  alt={link.label}
                  className="h-full w-full"
                />
              </a>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4">
            <img
              src="/sites/5/2025/10/Sello-socio-Cuti_6.svg"
              alt="logo-cuti"
              className="h-10 w-auto"
            />
            <img
              src="/sites/5/2025/10/cem-logo.svg"
              alt="logo-cem"
              className="h-10 w-auto"
            />
          </div>
        </div>

        <div>
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 font-dosis text-[22px] font-bold leading-none">
                {group.title}
              </h4>
              <ul className="space-y-1.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[12px] text-white transition-all duration-300 hover:text-[var(--nb-soft-pink)] sm:text-[13px]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <h4 className="mb-4 font-dosis text-[22px] font-bold leading-none">
            Contacto
          </h4>
          <p className="text-[12px] text-white/90 sm:text-[13px]">
            Sierra de la Ballena s/n, Punta Ballena, Uruguay
          </p>
          <a
            href="mailto:hello@nebula.uy"
            className="mt-3 block text-[12px] transition-all duration-300 hover:text-[var(--nb-soft-pink)] sm:text-[13px]"
          >
            hello@nebula.uy
          </a>
          <a
            href="https://bitskingdom.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-[12px] transition-all duration-300 hover:text-[var(--nb-soft-pink)] sm:text-[13px]"
          >
            <img
              src="/sites/5/2025/05/flag-us.svg"
              alt="usa-flag"
              className="h-5 w-5"
            />
            bitskingdom.com
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 grid max-w-[1120px] gap-2 border-t border-white/10 pt-6 text-[10px] text-white/80 sm:grid-cols-3 sm:text-[11px]">
        <p>©2026 Bits Kingdom. Todos los derechos reservados.</p>
        <p className="sm:text-center">Política de Privacidad</p>
        <p className="sm:text-right">Política de Cookies</p>
      </div>
    </footer>
  );
}
