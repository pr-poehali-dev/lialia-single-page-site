import Icon from "@/components/ui/icon";
import { MAX_LINK } from "@/lib/links";

const BG_SHED =
  "https://cdn.poehali.dev/projects/02fdc90d-5e05-4c2a-a6cc-3ec776580311/files/bdb1e0b5-c61d-4a85-9397-2a8b7df378e4.jpg";

const guarantees = [
  "Замер и расчёт — бесплатно",
  "Работаем по договору",
  "Гарантия письменно",
];

const FinalCta = () => {
  return (
    <section id="contact" className="relative w-full scroll-mt-20 overflow-hidden px-6 py-24 sm:px-10 lg:py-32">
      <img
        src={BG_SHED}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full scale-105 object-cover blur-md"
      />
      <div className="absolute inset-0 bg-[#1a1f1c]/90" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          Узнайте стоимость за 2 часа — без звонков
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-gray-300">
          Напишите «хозблок» в MAX — уточним размеры и адрес, пришлём
          точную цену с доставкой
        </p>

        <a
          href={MAX_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 inline-flex items-center gap-3 rounded-2xl bg-[#25D366] px-9 py-5 text-lg font-bold text-white shadow-xl shadow-[#25D366]/30 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.04] hover:shadow-2xl hover:shadow-[#25D366]/60"
        >
          <Icon name="MessageCircle" size={24} className="animate-icon-float" />
          Написать в MAX
        </a>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-8">
          {guarantees.map((g, i) => (
            <span
              key={g}
              className="inline-flex items-center gap-2 text-sm text-gray-300"
            >
              <Icon
                name="Check"
                size={16}
                className="animate-icon-breathe text-[#9fbfa9]"
                style={{ animationDelay: `${i * 0.4}s` }}
              />
              {g}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalCta;