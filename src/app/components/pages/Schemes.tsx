import { useLanguage } from "../LanguageContext";

const slide1 = new URL("../../assets/Slied_1.jpg", import.meta.url).href;
const slide2 = new URL("../../assets/Slied_2.jpg", import.meta.url).href;
const slide3 = new URL("../../assets/Slied_3.jpg", import.meta.url).href;

// Schemes.tsx
export function Schemes() {
  const { t } = useLanguage();
  const centralSchemes = t("schemes.centralSchemes") as Array<{ title: string; text: string }>;
  const karnatakaSchemes = t("schemes.karnatakaSchemes") as Array<{ title: string; text: string }>;
  const eligibility = t("schemes.eligibility") as {
    farmers: { title: string; text: string };
    healthcare: { title: string; text: string };
    housing: { title: string; text: string };
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 space-y-12">
        <section className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
                {t("nav.schemes")}
              </p>
              <h1 className="text-4xl font-bold text-slate-900">{t("schemes.heroTitle")}</h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-700">
                {t("schemes.heroSubtitle")}
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 lg:max-w-sm">
              <img src={slide1} alt="Scheme awareness campaign" className="h-28 w-full rounded-3xl object-cover shadow-sm" />
              <img src={slide2} alt="Community outreach" className="h-28 w-full rounded-3xl object-cover shadow-sm" />
              <img src={slide3} alt="Village development" className="h-28 w-full rounded-3xl object-cover shadow-sm" />
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900">{t("schemes.centralTitle")}</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {centralSchemes.map((scheme) => (
              <div key={scheme.title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-xl font-semibold text-slate-900">{scheme.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{scheme.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900">{t("schemes.karnatakaTitle")}</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {karnatakaSchemes.map((scheme) => (
              <div key={scheme.title} className="rounded-3xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-xl font-semibold text-slate-900">{scheme.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{scheme.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900">{t("schemes.eligibilityTitle")}</h2>
          <div className="mt-6 space-y-5 text-slate-700">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">{eligibility.farmers.title}</h3>
              <p className="mt-3 text-sm leading-7">{eligibility.farmers.text}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900">{eligibility.healthcare.title}</h3>
              <p className="mt-3 text-sm leading-7">{eligibility.healthcare.text}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900">{eligibility.housing.title}</h3>
              <p className="mt-3 text-sm leading-7">{eligibility.housing.text}</p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900">{t("schemes.applyTitle")}</h2>
          <div className="mt-6 space-y-6 text-slate-700">
            <div className="rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200">
              <h3 className="text-xl font-semibold text-slate-900">{t("schemes.step1Title")}</h3>
              <p className="mt-3 text-sm leading-7">{t("schemes.step1Text")}</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200">
              <h3 className="text-xl font-semibold text-slate-900">{t("schemes.step2Title")}</h3>
              <p className="mt-3 text-sm leading-7">{t("schemes.step2Text")}</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200">
              <h3 className="text-xl font-semibold text-slate-900">{t("schemes.step3Title")}</h3>
              <p className="mt-3 text-sm leading-7">{t("schemes.step3Text")}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
