import { PageHeader } from "../PageHeader";
import { useLanguage } from "../LanguageContext";

// Gallery.tsx
export function Gallery() {
  const { t } = useLanguage();

  return (
    <div>
      <PageHeader />
      <main className="max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <section className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
          <h1 className="text-3xl font-bold text-slate-900">{t("gallery.title")}</h1>
          <p className="mt-4 text-lg leading-8 text-slate-700">{t("gallery.description")}</p>
        </section>
      </main>
    </div>
  );
}