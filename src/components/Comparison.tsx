import Icon from "@/components/ui/icon";

const rows = [
  {
    param: "Срок службы",
    legko: "20+ лет без ухода",
    wood: "5–7 лет до гнили",
    self: "Зависит от навыка",
  },
  {
    param: "Обслуживание",
    legko: "Не требуется",
    wood: "Антисептик каждые 2 года",
    self: "Регулярно",
  },
  {
    param: "Снеговая нагрузка",
    legko: "240 кг/м²",
    wood: "Зависит от конструкции",
    self: "Неизвестно",
  },
  {
    param: "Монтаж",
    legko: "1 день под ключ",
    wood: "3–5 дней строительства",
    self: "1–2 недели",
  },
  {
    param: "Пожаробезопасность",
    legko: { ok: true, text: "Металл не горит" },
    wood: { ok: false, text: "Горит" },
    self: "Зависит",
  },
  {
    param: "Гарантия",
    legko: { ok: true, text: "5 лет, письменно" },
    wood: { ok: false, text: "Нет" },
    self: { ok: false, text: "Нет" },
  },
];

const renderCell = (cell: string | { ok: boolean; text: string }) => {
  if (typeof cell === "string") return <span>{cell}</span>;
  return (
    <span className="inline-flex items-center gap-1.5">
      <Icon
        name={cell.ok ? "Check" : "X"}
        size={16}
        className={`animate-icon-breathe ${
          cell.ok ? "text-brand" : "text-red-400"
        }`}
      />
      {cell.text}
    </span>
  );
};

const Comparison = () => {
  return (
    <section className="w-full bg-white px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-3xl font-extrabold tracking-tight text-[#1a1f1c] sm:text-4xl">
          Почему металл, а не дерево
        </h2>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[680px] border-separate border-spacing-0 text-left">
            <thead>
              <tr>
                <th className="w-[24%] pb-4" />
                <th className="rounded-t-2xl bg-brand px-5 py-4 text-center font-display text-base font-bold text-brand-foreground">
                  LEGKO Металл
                </th>
                <th className="px-5 py-4 text-center font-display text-base font-bold text-gray-500">
                  Деревянный сарай
                </th>
                <th className="px-5 py-4 text-center font-display text-base font-bold text-gray-500">
                  Сделать самому
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.param}>
                  <td className="py-4 pr-4 align-top text-sm font-semibold text-[#1a1f1c]">
                    {r.param}
                  </td>
                  <td
                    className={`bg-brand/[0.07] px-5 py-4 text-center text-sm font-semibold text-[#1a1f1c] ${
                      i === rows.length - 1 ? "rounded-b-2xl" : ""
                    }`}
                  >
                    {renderCell(r.legko)}
                  </td>
                  <td className="border-b border-gray-100 px-5 py-4 text-center text-sm text-gray-500">
                    {renderCell(r.wood)}
                  </td>
                  <td className="border-b border-gray-100 px-5 py-4 text-center text-sm text-gray-500">
                    {renderCell(r.self)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;