import Icon from "@/components/ui/icon";
import { MAX_LINK } from "@/lib/links";

const SHED_RENDER =
  "https://cdn.poehali.dev/projects/02fdc90d-5e05-4c2a-a6cc-3ec776580311/files/c486d09f-f82c-44a1-9962-e716796316f7.jpg";

const sections = [
  {
    icon: "Lock",
    title: "Закрытый отсек",
    text: "Для инструмента, техники, инвентаря. Двери с врезным замком, металлический пол.",
  },
  {
    icon: "Trees",
    title: "Вентилируемый дровник",
    text: "Открытый фасад, навес от дождя. Дрова сухие даже в сырую осень.",
  },
];

const specs = [
  { label: "Каркас", value: "оцинковка 275 г/м²" },
  { label: "Обшивка", value: "профлист С8, 0,45 мм" },
  { label: "Снеговая нагрузка", value: "240 кг/м²" },
];

const Solution = () => {
  return (
    <section id="product" className="w-full scroll-mt-20 bg-white px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="relative rounded-3xl bg-[#F5F5F5] p-6 sm:p-10">
            <img
              src={SHED_RENDER}
              alt="Рендер коричневого металлического хозблока с дровником"
              className="mx-auto w-full max-w-md object-contain"
            />

            <div className="absolute right-3 top-8 hidden items-center gap-2 sm:flex">
              <div className="rounded-lg bg-[#1a1f1c] px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
                Замок в комплекте
              </div>
              <span className="h-px w-10 bg-[#1a1f1c]/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#1a1f1c] ring-4 ring-[#1a1f1c]/15" />
            </div>

            <div className="absolute bottom-10 left-3 hidden items-center gap-2 sm:flex">
              <span className="h-2.5 w-2.5 rounded-full bg-brand ring-4 ring-brand/15" />
              <span className="h-px w-10 bg-brand/40" />
              <div className="rounded-lg bg-brand px-3 py-1.5 text-xs font-semibold text-brand-foreground shadow-lg">
                Нахлёст 100 мм — без протечек
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#1a1f1c] sm:text-4xl">
            Металлический хозблок с дровником 3×2 м
          </h2>
          <p className="mt-3 text-lg text-gray-500">
            Два отсека в одном корпусе:
          </p>

          <div className="mt-8 space-y-5">
            {sections.map((s) => (
              <div
                key={s.title}
                className="flex gap-4 rounded-2xl bg-[#F5F5F5] p-5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-black/5">
                  <Icon
                    name={s.icon}
                    size={22}
                    className="animate-icon-breathe text-brand"
                  />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-[#1a1f1c]">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-gray-500">
                    {s.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <dl className="mt-8 grid gap-x-6 gap-y-2.5 border-t border-gray-100 pt-6 sm:grid-cols-3">
            {specs.map((sp) => (
              <div key={sp.label}>
                <dt className="text-xs uppercase tracking-wide text-gray-400">
                  {sp.label}
                </dt>
                <dd className="text-sm font-semibold text-[#1a1f1c]">
                  {sp.value}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href={MAX_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex animate-btn-glow items-center gap-3 rounded-xl bg-brand px-7 py-4 text-base font-bold text-brand-foreground shadow-lg shadow-brand/20 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-2xl hover:shadow-brand/40"
          >
            Хочу такой
            <Icon
              name="MessageCircle"
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
            <span className="rounded-md bg-white/15 px-2 py-0.5 text-xs">
              MAX
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solution;