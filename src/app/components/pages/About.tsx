import { PageHeader } from "../PageHeader";
import { useLanguage } from "../LanguageContext";
const profileImage = new URL("../../../assets/VishwasVaidyaMLA2023_3.jpg", import.meta.url).href;

// About.tsx
export function About() {
  const { t } = useLanguage();

  return (
    <div>
      <PageHeader />
      <main className="max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8 space-y-12">
        <section className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
          <h1 className="text-3xl font-bold text-slate-900">{t("about.title")}</h1>
          <p className="mt-4 text-lg leading-8 text-slate-700">{t("about.description")}</p>
        </section>

        <section className="rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900">{t("about.profileTitle")}</h2>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.3fr_0.9fr] items-center text-slate-700">
            <div className="space-y-5">
              <p className="text-sm leading-7">{t("about.profileText1")}</p>
              <p className="text-sm leading-7">{t("about.profileText2")}</p>
            </div>
            <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
              <img
                src={profileImage}
                alt="Vishwas Vaidya MLA"
                className="h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900">{t("about.visionTitle")} &amp; {t("about.missionTitle")}</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 text-slate-700">
            <div className="rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200">
              <h3 className="text-xl font-semibold text-slate-900">{t("about.visionTitle")}</h3>
              <p className="mt-3 text-sm leading-7">{t("about.visionText")}</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200">
              <h3 className="text-xl font-semibold text-slate-900">{t("about.missionTitle")}</h3>
              <p className="mt-3 text-sm leading-7">{t("about.missionText")}</p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900">{t("about.leadershipTitle")}</h2>
          <div className="mt-6 space-y-6 text-slate-700">
            <div className="rounded-3xl bg-white p-6 ring-1 ring-slate-200">
              <h3 className="text-xl font-semibold text-slate-900">{t("about.leadershipStyleTitle")}</h3>
              <p className="mt-3 text-sm leading-7">{t("about.leadershipStyleText")}</p>
            </div>
            <div className="rounded-3xl bg-white p-6 ring-1 ring-slate-200">
              <h3 className="text-xl font-semibold text-slate-900">{t("about.teamSupportTitle")}</h3>
              <p className="mt-3 text-sm leading-7">{t("about.teamSupportText")}</p>
            </div>
            <div className="rounded-3xl bg-white p-6 ring-1 ring-slate-200">
              <h3 className="text-xl font-semibold text-slate-900">{t("about.partnershipsTitle")}</h3>
              <p className="mt-3 text-sm leading-7">{t("about.partnershipsText")}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
