import { useEffect, useMemo, useState } from "react";
import { PageHeader } from "../PageHeader";
import { useLanguage } from "../LanguageContext";

const mapImage = new URL("../../assets/Slied_4.jpg", import.meta.url).href;
const workImage = new URL("../../assets/Slied_2.jpg", import.meta.url).href;

const initialFilters = {
  village: "All Villages",
  category: "All Categories",
  year: "2025",
  status: "All",
};

// Development.tsx
export function Development() {
  const { t } = useLanguage();
  const [filters, setFilters] = useState(initialFilters);
  const [summary, setSummary] = useState({
    totalWorks: 64,
    budgetSpent: 124500000,
    completed: 42,
    ongoing: 22,
    completionRate: 66,
  });
  const [list, setList] = useState([
    { id: 1, work: "Water Supply Network Upgrade", village: "Hirebagewadi", cost: 1650000, status: "Completed" },
    { id: 2, work: "Rural Road Resurfacing", village: "Yallapur", cost: 2950000, status: "Ongoing" },
    { id: 3, work: "Community Health Centre", village: "Karadibenagi", cost: 4750000, status: "Ongoing" },
    { id: 4, work: "Government School Lab", village: "Talikoti", cost: 850000, status: "Completed" },
  ]);
  const [selectedWork, setSelectedWork] = useState(list[0]);
  const [loading, setLoading] = useState(true);

  const statusLabels = {
    Completed: t("development.status.completed"),
    Ongoing: t("development.status.ongoing"),
    "In Progress": t("development.status.inProgress"),
    Planning: t("development.status.planning"),
  };

  useEffect(() => {
    setLoading(true);
    const timer = window.setTimeout(() => {
      setSummary({
        totalWorks: 64,
        budgetSpent: 124500000,
        completed: 42,
        ongoing: 22,
        completionRate: 66,
      });
      setList([
        { id: 1, work: "Water Supply Network Upgrade", village: "Hirebagewadi", cost: 1650000, status: "Completed" },
        { id: 2, work: "Rural Road Resurfacing", village: "Yallapur", cost: 2950000, status: "Ongoing" },
        { id: 3, work: "Community Health Centre", village: "Karadibenagi", cost: 4750000, status: "Ongoing" },
        { id: 4, work: "Government School Lab", village: "Talikoti", cost: 850000, status: "Completed" },
      ]);
      setSelectedWork((current) => current || {
        id: 1,
        work: "Water Supply Network Upgrade",
        village: "Hirebagewadi",
        cost: 1650000,
        status: "Completed",
      });
      setLoading(false);
    }, 600);

    return () => window.clearTimeout(timer);
  }, []);

  const completionLabel = useMemo(() => `${summary.completionRate}% Complete`, [summary.completionRate]);
  const costByYear = [
    { year: "2022", cost: 21000000 },
    { year: "2023", cost: 30500000 },
    { year: "2024", cost: 38400000 },
    { year: "2025", cost: 34500000 },
  ];
  const categoryDistribution = [
    { category: "Roads", value: 38 },
    { category: "Water", value: 28 },
    { category: "Health", value: 18 },
    { category: "Education", value: 16 },
  ];
  const villageProgress = [
    { village: "Hirebagewadi", progress: 86 },
    { village: "Yallapur", progress: 72 },
    { village: "Karadibenagi", progress: 64 },
    { village: "Talikoti", progress: 54 },
  ];

  const filteredList = list.filter((item) => {
    return (
      (filters.village === "All Villages" || item.village === filters.village) &&
      (filters.category === "All Categories" || item.work.includes(filters.category)) &&
      (filters.status === "All" || item.status === filters.status)
    );
  });

  const recordCountText = t("development.list.recordCount").replace("{{count}}", String(filteredList.length));

  return (
    <div className="min-h-screen bg-slate-50">
      <PageHeader />
      <main className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 space-y-10">
        <section className="grid gap-6 lg:grid-cols-4">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm uppercase tracking-[0.24em] text-orange-500">{t("development.summary.totalWorks")}</p>
            <p className="mt-4 text-4xl font-semibold text-slate-900">{summary.totalWorks}</p>
            <p className="mt-2 text-sm text-slate-500">{t("development.summary.projectsTracked")}</p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm uppercase tracking-[0.24em] text-orange-500">{t("development.summary.budgetSpent")}</p>
            <p className="mt-4 text-4xl font-semibold text-slate-900">₹{summary.budgetSpent.toLocaleString()}</p>
            <p className="mt-2 text-sm text-slate-500">{t("development.summary.approvedExpenditure")}</p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm uppercase tracking-[0.24em] text-orange-500">{t("development.summary.completedOngoing")}</p>
            <p className="mt-4 text-4xl font-semibold text-slate-900">{summary.completed} / {summary.ongoing}</p>
            <p className="mt-2 text-sm text-slate-500">{t("development.summary.activityStatus")}</p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm uppercase tracking-[0.24em] text-orange-500">{t("development.summary.completionRate")}</p>
            <p className="mt-4 text-4xl font-semibold text-slate-900">{completionLabel}</p>
            <div className="mt-4 h-3 rounded-full bg-slate-200 overflow-hidden">
              <div className="h-full rounded-full bg-orange-500" style={{ width: `${summary.completionRate}%` }} />
            </div>
          </div>
        </section>

        <section className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-orange-500">{t("development.analytics.title")}</p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900">{t("development.analytics.title")}</h2>
              </div>
              <p className="text-sm text-slate-500">{t("development.analytics.subtitle")}</p>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="space-y-4 rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200">
                <h3 className="text-lg font-semibold text-slate-900">{t("development.analytics.costYear")}</h3>
                <div className="space-y-3">
                  {costByYear.map((item) => (
                    <div key={item.year} className="space-y-2">
                      <div className="flex items-center justify-between text-sm text-slate-600">
                        <span>{item.year}</span>
                        <span>₹{item.cost.toLocaleString()}</span>
                      </div>
                      <div className="h-3 w-full rounded-full bg-slate-200">
                        <div className="h-full rounded-full bg-orange-500" style={{ width: `${Math.min(100, (item.cost / 40000000) * 100)}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200">
                <h3 className="text-lg font-semibold text-slate-900">{t("development.analytics.categoryDistribution")}</h3>
                <div className="grid gap-3">
                  {categoryDistribution.map((item) => (
                    <div key={item.category} className="space-y-2">
                      <div className="flex items-center justify-between text-sm text-slate-600">
                        <span>{item.category}</span>
                        <span>{item.value}%</span>
                      </div>
                      <div className="h-3 w-full rounded-full bg-slate-200">
                        <div className="h-full rounded-full bg-slate-900" style={{ width: `${item.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200">
                <h3 className="text-lg font-semibold text-slate-900">{t("development.analytics.villageProgress")}</h3>
                <div className="space-y-4 mt-4">
                  {villageProgress.map((item) => (
                    <div key={item.village}>
                      <div className="flex justify-between text-sm text-slate-600">
                        <span>{item.village}</span>
                        <span>{item.progress}%</span>
                      </div>
                      <div className="h-3 w-full rounded-full bg-slate-200">
                        <div className="h-full rounded-full bg-orange-500" style={{ width: `${item.progress}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200">
                <h3 className="text-lg font-semibold text-slate-900">{t("development.analytics.completedOngoing")}</h3>
                <div className="mt-4 space-y-3 text-sm text-slate-600">
                  <div className="flex justify-between"><span>{statusLabels.Completed}</span><span>{summary.completed}</span></div>
                  <div className="flex justify-between"><span>{statusLabels.Ongoing}</span><span>{summary.ongoing}</span></div>
                  <div className="h-3 w-full rounded-full bg-slate-200">
                    <div className="h-full rounded-full bg-orange-500" style={{ width: `${(summary.completed / Math.max(1, summary.totalWorks)) * 100}%` }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">{t("development.filters.title")}</h3>
            <p className="mt-2 text-sm text-slate-600">{t("development.filters.subtitle")}</p>
            <div className="mt-6 space-y-4">
              {[
                {
                  label: t("development.filters.village"),
                  key: "village",
                  options: [
                    { value: "All Villages", label: t("development.filters.options.allVillages") },
                    { value: "Hirebagewadi", label: "Hirebagewadi" },
                    { value: "Yallapur", label: "Yallapur" },
                    { value: "Karadibenagi", label: "Karadibenagi" },
                    { value: "Talikoti", label: "Talikoti" },
                  ],
                },
                {
                  label: t("development.filters.category"),
                  key: "category",
                  options: [
                    { value: "All Categories", label: t("development.filters.options.allCategories") },
                    { value: "Water", label: t("development.filters.categoryOptions.water") },
                    { value: "Road", label: t("development.filters.categoryOptions.road") },
                    { value: "Health", label: t("development.filters.categoryOptions.health") },
                    { value: "Education", label: t("development.filters.categoryOptions.education") },
                  ],
                },
                {
                  label: t("development.filters.year"),
                  key: "year",
                  options: [
                    { value: "2025", label: "2025" },
                    { value: "2024", label: "2024" },
                    { value: "2023", label: "2023" },
                    { value: "2022", label: "2022" },
                  ],
                },
                {
                  label: t("development.filters.status"),
                  key: "status",
                  options: [
                    { value: "All", label: t("development.filters.options.all") },
                    { value: "Completed", label: t("development.filters.options.completed") },
                    { value: "Ongoing", label: t("development.filters.options.ongoing") },
                    { value: "Planning", label: t("development.filters.options.planning") },
                  ],
                },
              ].map((filter) => (
                <div key={filter.key} className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">{filter.label}</label>
                  <select
                    value={filters[filter.key as keyof typeof filters]}
                    onChange={(event) => setFilters((prev) => ({ ...prev, [filter.key]: event.target.value }))}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm focus:border-orange-500 focus:outline-none"
                  >
                    {filter.options.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-orange-500">{t("development.list.title")}</p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900">{t("development.list.subtitle")}</h2>
              </div>
              <p className="text-sm text-slate-500">{recordCountText}</p>
            </div>
            <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-slate-900">{t("development.list.columns.workName")}</th>
                    <th className="px-6 py-4 font-semibold text-slate-900">{t("development.list.columns.village")}</th>
                    <th className="px-6 py-4 font-semibold text-slate-900">{t("development.list.columns.cost")}</th>
                    <th className="px-6 py-4 font-semibold text-slate-900">{t("development.list.columns.status")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {filteredList.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50 cursor-pointer" onClick={() => setSelectedWork(item)}>
                      <td className="px-6 py-4 text-slate-700">{item.work}</td>
                      <td className="px-6 py-4 text-slate-700">{item.village}</td>
                      <td className="px-6 py-4 text-slate-700">₹{item.cost.toLocaleString()}</td>
                      <td className={`px-6 py-4 font-semibold ${item.status === "Completed" ? "text-emerald-600" : "text-orange-600"}`}>
                        {statusLabels[item.status as keyof typeof statusLabels] ?? item.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
              <p className="text-sm uppercase tracking-[0.24em] text-orange-500">{t("development.details.title")}</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900">{selectedWork.work}</h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700">
                <p><span className="font-semibold text-slate-900">{t("development.details.village")}:</span> {selectedWork.village}</p>
                <p><span className="font-semibold text-slate-900">{t("development.details.budget")}:</span> ₹{selectedWork.cost.toLocaleString()}</p>
                <p><span className="font-semibold text-slate-900">{t("development.details.status")}:</span> {statusLabels[selectedWork.status as keyof typeof statusLabels] ?? selectedWork.status}</p>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <img src={workImage} alt="Work preview" className="h-40 w-full rounded-3xl object-cover" />
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">{t("development.details.timelineTitle")}</p>
                  <ul className="mt-3 space-y-3 text-sm text-slate-700">
                    <li>• Project approved: Jan 2025</li>
                    <li>• Groundwork started: Mar 2025</li>
                    <li>• Mid-phase review: Sep 2025</li>
                    <li>• Expected completion: Feb 2026</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
              <p className="text-sm uppercase tracking-[0.24em] text-orange-500">{t("development.map.title")}</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900">{t("development.map.constituencyTitle")}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{t("development.map.subtitle")}</p>
              <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200">
                <img src={mapImage} alt="Taluk map" className="aspect-[16/9] w-full object-cover" />
              </div>
              <div className="mt-5 rounded-3xl bg-slate-50 p-4 text-sm text-slate-700 ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">{t("development.map.sampleTitle")}</p>
                <p className="mt-2">{t("development.map.sampleText")}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
