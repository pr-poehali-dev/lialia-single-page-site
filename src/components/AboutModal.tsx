import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

interface AboutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const features = [
  {
    icon: "ShieldCheck",
    title: "Усиленный каркас",
    text: "Оцинкованная сталь, порошковая окраска — устойчивость к коррозии.",
  },
  {
    icon: "Clock",
    title: "Быстрая сборка",
    text: "От 4 до 6 часов без специнструмента, силами 2–4 человек.",
  },
  {
    icon: "Package",
    title: "Практичность",
    text: "Компактные, вместительные — для садового инвентаря и техники.",
  },
  {
    icon: "CreditCard",
    title: "Рассрочка / Кредит",
    text: "Возможность приобрести в кредит или рассрочку.",
  },
];

const advantages = [
  "Надёжное хранение на долгие годы: сборно-разборный хозблок — лучшее решение для садового инвентаря, инструментов или вашей техники. Идеальный выбор для дачников и владельцев загородных домов.",
  "Усиленный каркас гарантирует прочность и долговечность даже в суровых погодных условиях.",
  "Быстрая сборка: не придётся тратить дни на установку — собирается легко и быстро, без специальных инструментов.",
  "Практичность: компактный, но вместительный — всё необходимое найдёт своё место.",
  "Удобство: все конструкции легко собираются и разбираются, за счёт этого легко транспортируются.",
];

const AboutModal = ({ open, onOpenChange }: AboutModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[88vh] max-w-2xl overflow-y-auto p-0">
        <DialogHeader className="border-b border-black/5 px-6 py-5 sm:px-8">
          <DialogTitle className="font-display text-2xl font-extrabold tracking-tight text-[#1a1f1c]">
            О компании
          </DialogTitle>
        </DialogHeader>

        <div className="px-6 py-6 sm:px-8">
          <p className="text-[15px] leading-relaxed text-gray-600">
            Группа компаний{" "}
            <span className="font-semibold text-[#1a1f1c]">
              Энергостройсервис
            </span>{" "}
            — более 15 лет на рынке металлопроката. Наше новое направление —
            производство сборно-разборных хозблоков под брендом{" "}
            <span className="font-semibold text-brand">LEGKO</span>.
          </p>

          <h3 className="mt-7 font-display text-lg font-bold text-[#1a1f1c]">
            Хозблоки «LEGKO»
          </h3>
          <ul className="mt-4 space-y-3">
            {advantages.map((a) => (
              <li key={a} className="flex gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand">
                  <Icon name="Check" size={12} className="text-brand-foreground" />
                </span>
                <span className="text-[15px] leading-relaxed text-gray-600">
                  {a}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl bg-[#F8F8F8] p-5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-black/5">
                  <Icon name={f.icon} size={20} className="text-brand" />
                </span>
                <h4 className="mt-3 font-display text-base font-bold text-[#1a1f1c]">
                  {f.title}
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-gray-500">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AboutModal;
