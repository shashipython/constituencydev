import { PageHeader } from "../PageHeader";
import { useLanguage } from "../LanguageContext";
const newsImage = new URL("../../assets/Slied_1.jpg", import.meta.url).href;
const eventImage = new URL("../../assets/Slied_2.jpg", import.meta.url).href;
const pressImage = new URL("../../assets/Slied_3.jpg", import.meta.url).href;

// Activities.tsx
export function Activities() {
  const { t } = useLanguage();

  const newsItems = [
    {
      title: "New community health camp announced",
      date: "April 20, 2026",
      summary: "A free health screening camp will be held at the community hall with doctors available for general consultations.",
      image: newsImage,
    },
    {
      title: "Road safety awareness drive launched",
      date: "April 14, 2026",
      summary: "Village volunteers will visit schools and bus stops to educate citizens about safe road habits.",
      image: newsImage,
    },
  ];

  const events = [
    {
      title: "Youth empowerment workshop",
      date: "May 2, 2026",
      location: "Taluk education center",
      description: "A full-day workshop for young leaders on digital literacy, civic engagement, and local governance.",
      image: eventImage,
    },
    {
      title: "Village clean-up drive",
      date: "May 10, 2026",
      location: "Main bazaar square",
      description: "Volunteers will organize a neighbourhood clean-up with waste segregation and recycling support.",
      image: eventImage,
    },
  ];

  const pressItems = [
    {
      title: "Local news features talent development programme",
      outlet: "District Times",
      summary: "A recent newspaper article highlighted the new coaching centre for youth employment training.",
      image: pressImage,
    },
    {
      title: "Radio interview on community service initiatives",
      outlet: "FM 98.3",
      summary: "The Taluk coordinator spoke about upcoming events and citizen support programmes on live radio.",
      image: pressImage,
    },
  ];

  return (
    <div>
      <PageHeader />
      <main className="max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8 space-y-10">
        <section className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
          <h1 className="text-3xl font-bold text-slate-900">{t("activities.title")}</h1>
          <p className="mt-4 text-lg leading-8 text-slate-700">{t("activities.description")}</p>
        </section>

        <section className="rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">News & Announcements</h2>
              <p className="mt-2 text-sm text-slate-600">Latest updates for the community, schemes, and local development.</p>
            </div>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {newsItems.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
                <img src={item.image} alt={item.title} className="h-44 w-full object-cover" />
                <div className="p-6">
                  <p className="text-sm font-medium text-orange-600">{item.date}</p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Events</h2>
              <p className="mt-2 text-sm text-slate-600">Upcoming community events with dates, venues, and participation details.</p>
            </div>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {events.map((event) => (
              <article key={event.title} className="overflow-hidden rounded-3xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200">
                <img src={event.image} alt={event.title} className="h-40 w-full rounded-3xl object-cover" />
                <div className="mt-5">
                  <h3 className="text-xl font-semibold text-slate-900">{event.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{event.date} · {event.location}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{event.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Press / Media</h2>
              <p className="mt-2 text-sm text-slate-600">Recent media coverage and announcements from local press outlets.</p>
            </div>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {pressItems.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
                <img src={item.image} alt={item.title} className="h-44 w-full object-cover" />
                <div className="p-6">
                  <p className="text-sm font-medium text-orange-600">{item.outlet}</p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}