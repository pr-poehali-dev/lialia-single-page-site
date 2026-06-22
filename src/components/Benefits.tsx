import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "Palette",
    title: "Любой цвет RAL",
    text: "Подберём под ваш дом или забор — без доплаты",
  },
  {
    icon: "Truck",
    title: "Доставка и сборка включены",
    text: "Итоговая цена на сайте — без звонков",
  },
  {
    icon: "ShieldCheck",
    title: "Каркас не ржавеет",
    text: "Двойная защита: оцинковка + порошковая краска",
  },
  {
    icon: "Snowflake",
    title: "Выдержит приморскую зиму",
    text: "Рассчитан на снеговую нагрузку 240 кг/м²",
  },
  {
    icon: "Ruler",
    title: "Размер под ваш участок",
    text: "Стандарт или индивидуальный под заказ",
  },
  {
    icon: "FileText",
    title: "Гарантия в договоре",
    text: "5 лет на каркас, 3 года на покрытие — письменно",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="w-full scroll-mt-20 bg-[#F8F8F8] px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.05)] ring-1 ring-black/[0.03] transition-all hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.09)]"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand/[0.07]">
                <Icon name={b.icon} size={26} className="text-brand" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-[#1a1f1c]">
                {b.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;