export default function Footer() {
  return (
    <footer className="bg-[#3c2e23] py-6 text-xs text-[#f7f5f2] md:text-sm">
      <div className="mx-auto flex max-w-[1000px] flex-wrap justify-between gap-4 px-6 md:px-10">
        <p>
          © {new Date().getFullYear()} Color Mural. Todos los derechos
          reservados.
        </p>

        <div className="flex gap-3">
          <a
            href="https://instagram.com/colormural"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/56912345678"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
