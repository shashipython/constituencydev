import { PageHeader } from "../PageHeader";
import { useLanguage } from "../LanguageContext";
const leaderImg1 = new URL("../../assets/Slied_1.jpg", import.meta.url).href;
const leaderImg2 = new URL("../../assets/Slied_2.jpg", import.meta.url).href;
const leaderImg3 = new URL("../../assets/Slied_3.jpg", import.meta.url).href;
const leaderImg4 = new URL("../../assets/Slied_4.jpg", import.meta.url).href;

// Leadership.tsx
export function Leadership() {
  const { t } = useLanguage();

  const talukLeaders = [
    {
      name: "Ashok Patil",
      role: "Taluk Coordinator",
      phone: "+91 98765 43210",
      duties: "Coordinate development programmes across the taluk and support village teams.",
      img: leaderImg1,
    },
    {
      name: "Sneha Kulkarni",
      role: "Public Relations Lead",
      phone: "+91 91234 56789",
      duties: "Manage community outreach and ensure timely communication with stakeholders.",
      img: leaderImg2,
    },
  ];

  const panchayatLeaders = [
    {
      name: "Ganesh Bhat",
      role: "Panchayat Head",
      phone: "+91 99876 54321",
      duties: "Oversee local administration and implement scheme benefits at village level.",
      img: leaderImg3,
    },
    {
      name: "Radha Shetty",
      role: "Welfare Coordinator",
      phone: "+91 90123 45678",
      duties: "Monitor welfare schemes and assist citizens with application support.",
      img: leaderImg4,
    },
  ];

  const villageLeaders = [
    {
      name: "Mahesh Desai",
      role: "Village Volunteer",
      phone: "+91 94455 66778",
      duties: "Track village issues and report progress to the panchayat team.",
      img: leaderImg2,
    },
    {
      name: "Priya Nair",
      role: "Village Outreach",
      phone: "+91 93344 55221",
      duties: "Organize village meetings and support local awareness campaigns.",
      img: leaderImg3,
    },
  ];

  const boothLeaders = [
    {
      name: "Ravi Patil",
      role: "Booth Captain",
      phone: "+91 98811 22334",
      duties: "Manage booth-level operations and ensure active citizen engagement.",
      img: leaderImg4,
    },
    {
      name: "Kavita Rao",
      role: "Booth Coordinator",
      phone: "+91 97001 11223",
      duties: "Maintain voter records and support event coordination at the booth.",
      img: leaderImg1,
    },
  ];

  return (
    <div>
      <PageHeader />
      <main className="max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8 space-y-10">
        <section className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
          <h1 className="text-3xl font-bold text-slate-900">{t("leadership.title")}</h1>
          <p className="mt-4 text-lg leading-8 text-slate-700">{t("leadership.description")}</p>
        </section>

        <section className="rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900">Taluk Leadership Team</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {talukLeaders.map((leader) => (
              <div key={leader.name} className="flex gap-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <img src={leader.img} alt={leader.name} className="h-28 w-28 rounded-3xl object-cover" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{leader.name}</h3>
                  <p className="text-sm text-orange-600 font-medium">{leader.role}</p>
                  <p className="mt-3 text-sm text-slate-700">{leader.duties}</p>
                  <p className="mt-3 text-sm text-slate-500">Contact: {leader.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900">Panchayat Leadership</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {panchayatLeaders.map((leader) => (
              <div key={leader.name} className="flex gap-4 rounded-3xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200">
                <img src={leader.img} alt={leader.name} className="h-28 w-28 rounded-3xl object-cover" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{leader.name}</h3>
                  <p className="text-sm text-orange-600 font-medium">{leader.role}</p>
                  <p className="mt-3 text-sm text-slate-700">{leader.duties}</p>
                  <p className="mt-3 text-sm text-slate-500">Contact: {leader.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900">Village Leadership</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {villageLeaders.map((leader) => (
              <div key={leader.name} className="flex gap-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <img src={leader.img} alt={leader.name} className="h-28 w-28 rounded-3xl object-cover" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{leader.name}</h3>
                  <p className="text-sm text-orange-600 font-medium">{leader.role}</p>
                  <p className="mt-3 text-sm text-slate-700">{leader.duties}</p>
                  <p className="mt-3 text-sm text-slate-500">Contact: {leader.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900">Booth Leadership</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {boothLeaders.map((leader) => (
              <div key={leader.name} className="flex gap-4 rounded-3xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200">
                <img src={leader.img} alt={leader.name} className="h-28 w-28 rounded-3xl object-cover" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{leader.name}</h3>
                  <p className="text-sm text-orange-600 font-medium">{leader.role}</p>
                  <p className="mt-3 text-sm text-slate-700">{leader.duties}</p>
                  <p className="mt-3 text-sm text-slate-500">Contact: {leader.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}