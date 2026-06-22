import Icon from "@/components/ui/icon";

const pains = [
  {
    icon: "CloudRain",
    text: "Дрова под плёнкой. К осени — сырые, горят плохо",
  },
  {
    icon: "Warehouse",
    text: "Деревянный сарай гниёт на пятый год. Покраска каждые 2 года",
  },
  {
    icon: "Wrench",
    text: "Инструмент везде. Каждый раз ищешь, где оставил",
  },
];

const Pain = () => {
  return (
    <section className="w-full bg-[#1a1f1c] px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Знакомо?
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pains.map((p) => (
            <div
              key={p.text}
              className="group rounded-2xl bg-white/[0.04] p-8 ring-1 ring-white/10 transition-colors hover:bg-white/[0.07]"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                <Icon name={p.icon} size={26} className="text-[#9fbfa9]" />
              </span>
              <p className="mt-6 text-lg leading-relaxed text-gray-300">
                «{p.text}»
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center">
          <div className="h-px w-24 bg-white/15" />
          <p className="mt-8 max-w-2xl text-center font-display text-2xl font-bold text-white sm:text-3xl">
            Одна постройка решает всё это сразу.
          </p>
          <Icon
            name="ArrowDown"
            size={32}
            className="mt-8 animate-bounce text-[#9fbfa9]"
          />
        </div>
      </div>
    </section>
  );
};

export default Pain;
