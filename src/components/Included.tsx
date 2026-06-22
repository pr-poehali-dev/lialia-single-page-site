import Icon from "@/components/ui/icon";

const items = [
  "Оцинкованный каркас 275 г/м², порошковая окраска в выбранный цвет RAL",
  "Обшивка профлист С8, 0,45 мм",
  "Двери с врезным замком",
  "Металлический пол в хозяйственном отсеке",
  "Вентилируемый дровник с навесом",
  "Кровля на выбор: односкатная или двускатная",
  "Доставка до вашего участка в согласованную дату",
  "Монтаж бригадой — 1 день, уборка включена",
];

const Included = () => {
  return (
    <section className="w-full bg-white px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#1a1f1c] sm:text-4xl">
            Что входит в стоимость «под ключ»
          </h2>
          <p className="mt-3 text-gray-500">
            Никаких доплат после подписания договора
          </p>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ul className="space-y-3.5">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3.5 rounded-xl bg-[#F8F8F8] px-5 py-4"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand">
                  <Icon
                    name="Check"
                    size={15}
                    className="text-brand-foreground"
                  />
                </span>
                <span className="text-[15px] leading-relaxed text-[#1a1f1c]">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="rounded-3xl bg-[#F8F8F8] p-8 sm:p-10">
            <svg
              viewBox="0 0 320 240"
              className="w-full"
              fill="none"
              stroke="#1a1f1c"
              strokeWidth="1.5"
            >
              <line
                x1="20"
                y1="220"
                x2="300"
                y2="220"
                stroke="#1a1f1c"
                strokeOpacity="0.25"
              />

              <polyline points="60,90 180,60 180,200 60,200 60,90" />
              <polyline points="180,60 240,80 240,200 180,200" />
              <polyline
                points="60,90 120,70 240,80"
                strokeOpacity="0.6"
              />

              <rect x="80" y="120" width="38" height="70" rx="2" />
              <circle cx="110" cy="155" r="2.5" fill="#1a1f1c" />

              <line
                x1="195"
                y1="95"
                x2="195"
                y2="195"
                strokeDasharray="4 4"
                strokeOpacity="0.5"
              />
              <line
                x1="215"
                y1="95"
                x2="215"
                y2="195"
                strokeDasharray="4 4"
                strokeOpacity="0.5"
              />

              <g
                stroke="#2a6e46"
                strokeWidth="1"
                strokeOpacity="0.7"
              >
                <line x1="120" y1="60" x2="120" y2="25" />
                <line x1="210" y1="70" x2="210" y2="35" />
                <line x1="99" y1="155" x2="40" y2="155" />
              </g>

              <g
                fill="#2a6e46"
                fontSize="11"
                fontFamily="Montserrat, sans-serif"
                fontWeight="600"
                stroke="none"
              >
                <text x="100" y="20">Кровля</text>
                <text x="200" y="30">Дровник</text>
                <text x="40" y="145">Дверь с замком</text>
              </g>

              <g
                fill="#1a1f1c"
                fillOpacity="0.4"
                fontSize="10"
                fontFamily="Montserrat, sans-serif"
                stroke="none"
              >
                <text x="195" y="235">отсек 1</text>
                <text x="105" y="235">хоз. отсек</text>
              </g>
            </svg>
            <p className="mt-2 text-center text-xs uppercase tracking-widest text-gray-400">
              Схема хозблока 3×2 м
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Included;
