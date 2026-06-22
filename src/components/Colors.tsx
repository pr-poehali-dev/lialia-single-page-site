import Icon from "@/components/ui/icon";

const GRAY_SHED =
  "https://cdn.poehali.dev/projects/02fdc90d-5e05-4c2a-a6cc-3ec776580311/files/1a037895-b7f9-4e4f-91aa-834fe91eea72.jpg";
const BROWN_SHED =
  "https://cdn.poehali.dev/projects/02fdc90d-5e05-4c2a-a6cc-3ec776580311/files/c486d09f-f82c-44a1-9962-e716796316f7.jpg";

const palette = [
  { ral: "RAL 7016", name: "Антрацит", hex: "#383E42" },
  { ral: "RAL 6005", name: "Тёмно-зелёный", hex: "#114232" },
  { ral: "RAL 8004", name: "Медно-коричневый", hex: "#8E402A" },
  { ral: "RAL 7004", name: "Серый", hex: "#969992" },
  { ral: "RAL 3005", name: "Винно-красный", hex: "#5E2129" },
  { ral: "RAL 5005", name: "Сигнальный синий", hex: "#1F3438" },
  { ral: "RAL 1015", name: "Бежевый", hex: "#E6D2B5" },
  { ral: "RAL 9003", name: "Белый", hex: "#F4F4F4" },
  { ral: "RAL 6020", name: "Хромовый зелёный", hex: "#37422B" },
  { ral: "RAL 8017", name: "Шоколад", hex: "#442F29" },
  { ral: "RAL 7024", name: "Графит", hex: "#474A50" },
  { ral: "RAL 3009", name: "Оксид красный", hex: "#642424" },
  { ral: "RAL 5021", name: "Морская волна", hex: "#256D7B" },
  { ral: "RAL 1014", name: "Слоновая кость", hex: "#DFCEA1" },
  { ral: "RAL 6029", name: "Мятный", hex: "#20603D" },
  { ral: "RAL 9005", name: "Чёрный", hex: "#0A0A0D" },
];

const samples = [
  { img: GRAY_SHED, ral: "RAL 7016", name: "Антрацит" },
  { img: BROWN_SHED, ral: "RAL 8004", name: "Медно-коричневый" },
];

const Colors = () => {
  return (
    <section className="w-full bg-[#F8F8F8] px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#1a1f1c] sm:text-4xl">
            Выберите цвет под свой участок
          </h2>
          <p className="mt-3 text-gray-500">
            Любой оттенок из палитры RAL — без доплаты
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-5">
          {palette.map((c) => (
            <div key={c.ral} className="group relative">
              <span
                className="block h-14 w-14 cursor-pointer rounded-full ring-1 ring-black/10 transition-transform group-hover:scale-110 sm:h-16 sm:w-16"
                style={{ backgroundColor: c.hex }}
              />
              <div className="pointer-events-none absolute -top-2 left-1/2 z-10 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-lg bg-[#1a1f1c] px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                {c.ral} · {c.name}
                <span className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1 rotate-45 bg-[#1a1f1c]" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {samples.map((s) => (
            <div
              key={s.ral}
              className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.05)] ring-1 ring-black/[0.03]"
            >
              <img
                src={s.img}
                alt={`Хозблок ${s.name}`}
                className="h-64 w-full object-cover"
              />
              <div className="flex items-center gap-3 px-5 py-4">
                <span className="text-sm font-bold text-[#1a1f1c]">
                  {s.ral}
                </span>
                <span className="text-sm text-gray-500">{s.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="group inline-flex items-center gap-3 rounded-xl bg-brand px-7 py-4 text-base font-bold text-brand-foreground shadow-lg shadow-brand/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand/30">
            <Icon name="MessageCircle" size={20} />
            Хочу другой цвет — уточнить в WhatsApp
            <Icon
              name="ArrowRight"
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Colors;
