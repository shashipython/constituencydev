import { PageHeader } from "../PageHeader";
import { useLanguage } from "../LanguageContext";

// Activities.tsx
export function Activities() {
  const { t } = useLanguage();

  return (
    <div>
      <PageHeader />
      <main className="max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <section className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
          <h1 className="text-3xl font-bold text-slate-900">{t("activities.title")}</h1>
          <p className="mt-4 text-lg leading-8 text-slate-700">{t("activities.description")}</p>
        </section>
        <section className="rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200">
          <p className="text-sm text-slate-500">{t("activities.placeholder")}</p>
        </section>
      </main>
    </div>
  );
}