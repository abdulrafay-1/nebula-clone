export function WhatsappFloatingButton() {
  return (
    <a
      href="https://wa.me/59898711983?text=%C2%A1Hola%21%20Quisiera%20mas%20informacion."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 z-[9] block w-[42px] transition-all duration-300 hover:scale-105 sm:w-[48px] md:bottom-6 md:right-6 md:w-[54px]"
      aria-label="WhatsApp"
    >
      <img
        src="/sites/5/2025/06/whatsapp.png"
        alt="WhatsApp"
        className="h-auto w-full"
      />
    </a>
  );
}
