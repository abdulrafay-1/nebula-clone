import { ChevronDownIcon } from "@/src/components/icons";
import { navItems } from "@/src/data/nebula-content";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-[99999] bg-[linear-gradient(180deg,var(--nb-header-bg)_0%,rgba(35,5,55,0.82)_36%,transparent_100%)]">
      <div className="mx-auto flex h-[78px] w-full max-w-[1140px] items-center px-4 sm:px-6">
        <a href="https://nebula.uy/" className="mr-auto inline-flex">
          <img
            src="/sites/5/2026/02/nebula-logo.svg"
            alt="BitsKingdom"
            className="h-[22px] w-auto lg:h-[24px]"
          />
        </a>

        <nav className="hidden items-center gap-7 px-4 py-2 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[11px] font-medium text-[var(--nb-nav-link)] transition-all duration-300 hover:text-white"
            >
              {item.label}
              {item.label === "Soluciones" ? (
                <ChevronDownIcon className="ml-1 inline h-3.5 w-3.5" />
              ) : null}
            </a>
          ))}
          <a
            href="https://nebula.uy/contacto/"
            className="rounded-full bg-[var(--nb-magenta)] px-4 py-2 text-[11px] font-semibold text-white transition-all duration-300 hover:brightness-110"
          >
            Contacto
          </a>
        </nav>

        <a
          href="https://nebula.uy/contacto/"
          className="rounded-full bg-[var(--nb-magenta)] px-4 py-2 text-[11px] font-semibold text-white lg:hidden"
        >
          Contacto
        </a>
      </div>
    </header>
  );
}
