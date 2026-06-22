import Icon from "@/components/ui/icon";

const SHED_IMG =
  "https://cdn.poehali.dev/projects/02fdc90d-5e05-4c2a-a6cc-3ec776580311/files/1a037895-b7f9-4e4f-91aa-834fe91eea72.jpg";

const features = [
  { icon: "Lock", label: "Замок в комплекте" },
  { icon: "Palette", label: "Любой цвет RAL" },
  { icon: "Truck", label: "Доставка включена" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-[#F5F5F5] flex flex-col lg:flex-row">
      <div className="flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-16 lg:w-[55%] lg:py-20">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand/5 px-4 py-1.5 text-sm font-semibold text-brand ring-1 ring-brand/15">
            🏠 Металлические хозблоки · Приморский край
          </span>

          <h1 className="mt-6 font-display text-[2.5rem] font-extrabold leading-[1.08] tracking-tight text-[#1a1f1c] sm:text-5xl lg:text-[3rem]">
            Хозблок под ключ — привезём и соберём за 1 день
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-gray-500">
            Оцинкованный каркас, любой цвет RAL, цена с доставкой и сборкой —
            без скрытых доплат
          </p>

          <div className="mt-8">
            <button className="group inline-flex items-center gap-3 rounded-xl bg-brand px-7 py-4 text-base font-bold text-brand-foreground shadow-lg shadow-brand/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand/30">
              Узнать стоимость
              <Icon
                name="MessageCircle"
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
              <span className="rounded-md bg-white/15 px-2 py-0.5 text-xs">
                WhatsApp
              </span>
            </button>
            <p className="mt-3 text-sm text-gray-400">
              Ответим в течение 2 часов. Без звонков.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {features.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-2.5 text-sm font-semibold text-[#1a1f1c]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-black/5">
                  <Icon name={f.icon} size={18} className="text-brand" />
                </span>
                {f.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative min-h-[50vh] flex-1 lg:min-h-screen">
        <img
          src={SHED_IMG}
          alt="Металлический хозблок в цветущем саду"
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#F5F5F5] via-transparent to-transparent lg:via-[#F5F5F5]/10" />

        <div className="absolute bottom-6 left-6 right-6 sm:left-8 sm:right-auto">
          <div className="inline-flex items-center gap-3 rounded-2xl bg-white/95 px-5 py-3.5 shadow-xl backdrop-blur-sm ring-1 ring-black/5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10">
              <Icon name="MapPin" size={20} className="text-brand" />
            </span>
            <span className="text-sm font-bold text-[#1a1f1c]">
              Установлено 120+ хозблоков по Приморью
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
