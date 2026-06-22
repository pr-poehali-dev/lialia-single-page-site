import { useState } from "react";
import Icon from "@/components/ui/icon";
import { MAX_LINK } from "@/lib/links";
import AboutModal from "@/components/AboutModal";

const navLinks = [
  { href: "#product", label: "Хозблок" },
  { href: "#catalog", label: "Каталог" },
  { href: "#benefits", label: "Преимущества" },
  { href: "#colors", label: "Цвета" },
  { href: "#works", label: "Работы" },
  { href: "#faq", label: "Вопросы" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 sm:px-10">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand">
            <Icon
              name="Home"
              size={18}
              className="animate-icon-float text-brand-foreground"
            />
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight text-[#1a1f1c]">
            LEGKO
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-gray-600 transition-colors hover:text-brand"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => setAboutOpen(true)}
            className="text-sm font-semibold text-gray-600 transition-colors hover:text-brand"
          >
            О компании
          </button>
        </nav>

        <a
          href={MAX_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden animate-btn-glow items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-bold text-brand-foreground transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl hover:shadow-brand/40 lg:inline-flex"
        >
          <Icon name="MessageCircle" size={16} className="animate-icon-float" />
          Узнать цену
        </a>

        <button
          aria-label="Меню"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#1a1f1c] transition-colors hover:bg-black/5 lg:hidden"
        >
          <Icon name={open ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {open && (
        <div className="animate-fade-in border-t border-black/5 bg-white lg:hidden">
          <nav className="flex flex-col px-6 py-4 sm:px-10">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-black/5 py-3.5 text-base font-semibold text-[#1a1f1c]"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                setAboutOpen(true);
              }}
              className="border-b border-black/5 py-3.5 text-left text-base font-semibold text-[#1a1f1c]"
            >
              О компании
            </button>
            <a
              href={MAX_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3.5 text-base font-bold text-brand-foreground"
            >
              <Icon name="MessageCircle" size={18} />
              Узнать цену
            </a>
          </nav>
        </div>
      )}

      <AboutModal open={aboutOpen} onOpenChange={setAboutOpen} />
    </header>
  );
};

export default Header;