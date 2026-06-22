import Icon from "@/components/ui/icon";

const GRAY_SHED =
  "https://cdn.poehali.dev/projects/02fdc90d-5e05-4c2a-a6cc-3ec776580311/files/1a037895-b7f9-4e4f-91aa-834fe91eea72.jpg";

const works = [
  {
    img: "https://cdn.poehali.dev/projects/02fdc90d-5e05-4c2a-a6cc-3ec776580311/files/bdb1e0b5-c61d-4a85-9397-2a8b7df378e4.jpg",
    district: "Артём",
  },
  {
    img: "https://cdn.poehali.dev/projects/02fdc90d-5e05-4c2a-a6cc-3ec776580311/files/00dc2f80-7861-4fa0-870e-609a37dfa504.jpg",
    district: "Уссурийск",
  },
  {
    img: "https://cdn.poehali.dev/projects/02fdc90d-5e05-4c2a-a6cc-3ec776580311/files/bc234704-4050-4700-b2b2-9386241cc4ea.jpg",
    district: "Владивосток",
  },
  {
    img: GRAY_SHED,
    district: "Находка",
  },
];

const reviews = [
  {
    name: "Сергей В.",
    district: "Артём",
    text: "Привезли и собрали за день, как обещали. Антрацит подобрали точно под забор. Дрова теперь сухие, инструмент под замком. Доволен.",
    source: "Яндекс.Карты",
  },
  {
    name: "Ольга М.",
    district: "Уссурийск",
    text: "Боялась, что будут доплаты — ничего подобного, цена как в договоре. Бригада аккуратная, мусор убрали за собой. Рекомендую.",
    source: "Авито",
  },
  {
    name: "Дмитрий К.",
    district: "Владивосток",
    text: "Зиму простоял отлично, снег держит. Металл крепкий, краска не облезла. Заказывал зелёный — выглядит дорого. Спасибо!",
    source: "Яндекс.Карты",
  },
];

const Trust = () => {
  return (
    <section className="w-full bg-[#23282a] px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          120+ хозблоков установлено в Приморье
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {works.map((w) => (
            <div
              key={w.district}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={w.img}
                alt={`Хозблок в районе ${w.district}`}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-[#1a1f1c]">
                <Icon name="MapPin" size={14} className="text-brand" />
                {w.district}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="group inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3.5 text-sm font-bold text-white ring-1 ring-white/20 transition-colors hover:bg-white/15">
            Смотреть все работы
            <Icon
              name="ArrowRight"
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="flex flex-col rounded-2xl bg-white p-7 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-base font-bold text-brand-foreground">
                  {r.name.charAt(0)}
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-[#1a1f1c]">
                    {r.name}
                  </p>
                  <p className="flex items-center gap-1 text-xs text-gray-500">
                    <Icon name="MapPin" size={12} />
                    {r.district}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={16}
                    className="fill-[#FFB400] text-[#FFB400]"
                  />
                ))}
              </div>

              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-gray-600">
                {r.text}
              </p>

              <p className="mt-5 border-t border-gray-100 pt-4 text-xs font-semibold text-gray-400">
                Источник: {r.source}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
