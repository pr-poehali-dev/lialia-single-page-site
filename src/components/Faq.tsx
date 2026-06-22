import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Нужно ли разрешение на строительство?",
    a: "Нет. Хозблок без фундамента — движимое имущество. Разрешение не требуется.",
  },
  {
    q: "Нужен ли фундамент?",
    a: "Не нужен. Достаточно ровной площадки. Если её нет — подскажем при замере.",
  },
  {
    q: "Сколько времени занимает сборка?",
    a: "1 день. Бригада приезжает утром, вечером хозблок стоит. Мусор и упаковку увозим.",
  },
  {
    q: "Дрова не отсыреют в дровнике?",
    a: "Нет. Вентилируемый фасад + навес от дождя + поднятое основание — оптимальные условия для хранения.",
  },
  {
    q: "Можно ли выбрать нестандартный размер?",
    a: "Можно. Изготавливаем под любые габариты участка.",
  },
  {
    q: "Как проходит оплата?",
    a: "Договор → аванс → производство → доставка и сборка → приёмка → финальный расчёт. Наличные, карта, СБП, безнал для юрлиц.",
  },
];

const Faq = () => {
  return (
    <section id="faq" className="w-full scroll-mt-20 bg-[#F8F8F8] px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-display text-3xl font-extrabold tracking-tight text-[#1a1f1c] sm:text-4xl">
          Частые вопросы
        </h2>

        <Accordion type="single" collapsible className="mt-12 space-y-4">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="overflow-hidden rounded-2xl border-0 bg-white px-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)]"
            >
              <AccordionTrigger className="py-5 text-left font-display text-base font-bold text-[#1a1f1c] hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[15px] leading-relaxed text-gray-500">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;