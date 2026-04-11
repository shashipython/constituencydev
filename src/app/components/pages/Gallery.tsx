import { PageHeader } from "../PageHeader";
import { useLanguage } from "../LanguageContext";
const photoEvent1 = new URL("../../../assets/withlocal_leaders1.jpg", import.meta.url).href;
const photoEvent2 = new URL("../../../assets/withlocal_leaders2.jpg", import.meta.url).href;
const photoEvent3 = new URL("../../../assets/withlocal_leaders3.jpg", import.meta.url).href;

// Gallery.tsx
export function Gallery() {
  const { t } = useLanguage();

  const photoEvents = [
    {
      title: "Community tree planting drive",
      description: "Volunteers planting saplings in the village square to improve green cover.",
      image: photoEvent1,
    },
    {
      title: "Health camp outreach",
      description: "Mobile health camp serving local families with basic checkups.",
      image: photoEvent2,
    },
    {
      title: "Village festival celebration",
      description: "Cultural performances from residents during the annual festival.",
      image: photoEvent3,
    },
  ];

  const videoEvents = [
    {
      title: "Birthday celebration for local Leadership",
      youtubeId: "WAS2zn2SgwM",
      description: "A short overview from the youth skills development workshop.",
    },
    {
      title: "Interview to social media about development work",
      youtubeId: "eUEDpsGYnPQ",
      description: "A village volunteer shares how community events are making an impact.",
    },
  ];

  return (
    <div>
      <PageHeader />
      <main className="max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8 space-y-10">
        <section className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
          <h1 className="text-3xl font-bold text-slate-900">{t("gallery.title")}</h1>
          <p className="mt-4 text-lg leading-8 text-slate-700">{t("gallery.description")}</p>
        </section>

        <section className="rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Photos</h2>
              <p className="mt-2 text-sm text-slate-600">Event-based photo highlights from recent activities.</p>
            </div>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {photoEvents.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
                <img src={item.image} alt={item.title} className="h-52 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Videos</h2>
              <p className="mt-2 text-sm text-slate-600">Embedded video clips from recent community events.</p>
            </div>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {videoEvents.map((video) => (
              <div key={video.title} className="overflow-hidden rounded-3xl bg-slate-50 shadow-sm ring-1 ring-slate-200">
                <div className="aspect-video bg-black">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{video.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}