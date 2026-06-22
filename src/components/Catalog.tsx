import Icon from "@/components/ui/icon";
import { MAX_LINK } from "@/lib/links";

const products = [
  {
    name: "БАЗА",
    img: "https://cdn.poehali.dev/projects/02fdc90d-5e05-4c2a-a6cc-3ec776580311/files/73cf321d-c82b-4079-84e9-6d55622edde4.jpg",
    desc: "Простое и надёжное решение для хранения инвентаря и инструмента.",
    features: [
      "Один отсек",
      "Оцинкованный каркас",
      "Профлист С8",
      "Сборка за 1 день",
    ],
    badge: null as string | null,
  },
  {
    name: "Эконом",
    img: "https://cdn.poehali.dev/projects/02fdc90d-5e05-4c2a-a6cc-3ec776580311/files/b9b4d6fb-595a-4002-8347-7b4b6340c31c.jpg",
    desc: "Хозблок с дровником — для инструмента и сухих дров на участке.",
    features: [
      "Два отсека",
      "Вентилируемый дровник",
      "Врезной замок",
      "Любой цвет RAL",
    ],
    badge: "Хит продаж",
  },
  {
    name: "Премиум",
    img: "https://cdn.poehali.dev/projects/02fdc90d-5e05-4c2a-a6cc-3ec776580311/files/418ede3d-3513-49e6-a5df-1f296f5f083c.jpg",
    desc: "Максимальная комплектация: усиленный каркас и широкий дровник.",
    features: [
      "Усиленный каркас",
      "Двойные двери",
      "Расширенный дровник",
      "Двускатная кровля",
    ],
    badge: null,
  },
];

const Catalog = () => {
  return (
    <section
      id="catalog"
      className="w-full scroll-mt-20 bg-white px-6 py-20 sm:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#1a1f1c] sm:text-4xl">
            Каталог продукции
          </h2>
          <p className="mt-3 text-gray-500">
            Три комплектации под любые задачи и бюджет
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {products.map((p) => (
            <div
              key={p.name}
              className="group flex flex-col overflow-hidden rounded-2xl bg-[#F8F8F8] ring-1 ring-black/[0.04] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)]"
            >
              <div className="relative bg-white p-6">
                {p.badge && (
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-brand px-3 py-1 text-xs font-bold text-brand-foreground">
                    {p.badge}
                  </span>
                )}
                <img
                  src={p.img}
                  alt={`Хозблок ${p.name}`}
                  className="mx-auto h-48 w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-extrabold tracking-tight text-[#1a1f1c]">
                  {p.name}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                  {p.desc}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {p.features.map((f, i) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-sm text-[#1a1f1c]"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10">
                        <Icon
                          name="Check"
                          size={12}
                          className="animate-icon-breathe text-brand"
                          style={{ animationDelay: `${i * 0.3}s` }}
                        />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={MAX_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-bold text-brand-foreground shadow-lg shadow-brand/20 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-xl hover:shadow-brand/40"
                >
                  Заказать
                  <Icon
                    name="ArrowRight"
                    size={18}
                    className="transition-transform group-hover/btn:translate-x-1"
                  />
                  <span className="rounded-md bg-white/15 px-2 py-0.5 text-xs">
                    MAX
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
