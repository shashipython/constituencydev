import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const profileImg = new URL("../../assets/VishwasVaidyaMLA2023.jpg", import.meta.url).href;
const dkShikumarImg = new URL("../../assets/dk_shikumar.jpg", import.meta.url).href;
const siddharamayyaImg = new URL("../../assets/siddaramaiah-photo.jpg", import.meta.url).href;
const sathishImg = new URL("../../assets/sathish_jarkiholi.jpg", import.meta.url).href;
const slideImg1 = new URL("../../assets/Slied_1.jpg", import.meta.url).href;
const slideImg2 = new URL("../../assets/Slied_2.jpg", import.meta.url).href;
const slideImg3 = new URL("../../assets/Slied_3.jpg", import.meta.url).href;
const slideImg4 = new URL("../../assets/Slied_4.jpg", import.meta.url).href;
import { PageHeader } from "./PageHeader";

export function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [selectedVillage, setSelectedVillage] = useState<string>("");
  const [villageActivities, setVillageActivities] = useState<{ [key: string]: any[] }>({});
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const slideImages = [slideImg1, slideImg2, slideImg3, slideImg4];
  
  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }

    // Load village activities from localStorage
    const storedActivities = localStorage.getItem("villageActivities");
    if (storedActivities) {
      setVillageActivities(JSON.parse(storedActivities));
    } else {
      // Initialize with default activities
      const defaultActivities = {
        "Saundatti": [
          { activity: "Community Health Camp", date: "March 2026", status: "Completed", description: "Free health checkup for 500+ residents" },
          { activity: "Road Widening Project", date: "January 2026", status: "In Progress", description: "Widening of 5km main road" },
          { activity: "Skill Development Training", date: "February 2026", status: "Completed", description: "Vocational training for 200 youth" }
        ],
        "Yellamma": [
          { activity: "Temple Renovation", date: "December 2025", status: "Completed", description: "Complete restoration of historic Yellamma temple" },
          { activity: "Water Pipeline Extension", date: "March 2026", status: "In Progress", description: "New pipeline to ensure 24/7 water supply" },
          { activity: "Women's Self Help Groups", date: "January 2026", status: "Ongoing", description: "Supporting 15 SHGs with microfinance" }
        ],
        "Hire Angadi": [
          { activity: "School Building Construction", date: "February 2026", status: "In Progress", description: "New high school building with 12 classrooms" },
          { activity: "Solar Street Lights", date: "January 2026", status: "Completed", description: "Installation of 100 solar lights" },
          { activity: "Agricultural Training", date: "March 2026", status: "Ongoing", description: "Modern farming techniques workshop" }
        ],
        "Lokapur": [
          { activity: "Primary Health Center Upgrade", date: "December 2025", status: "Completed", description: "New equipment and 24/7 emergency services" },
          { activity: "Drainage System", date: "February 2026", status: "In Progress", description: "Underground drainage network construction" },
          { activity: "Anganwadi Development", date: "January 2026", status: "Completed", description: "Upgraded 5 anganwadi centers" }
        ],
        "Hire Bagewadi": [
          { activity: "Drinking Water Project", date: "March 2026", status: "In Progress", description: "New bore wells and water storage tanks" },
          { activity: "Community Hall", date: "January 2026", status: "Completed", description: "Multi-purpose community center inaugurated" },
          { activity: "Livestock Development", date: "February 2026", status: "Ongoing", description: "Veterinary camp and cattle feed subsidy" }
        ],
        "Dhavaleshwar": [
          { activity: "Road Concreting", date: "February 2026", status: "In Progress", description: "CC road construction in main village area" },
          { activity: "Digital Literacy Center", date: "January 2026", status: "Completed", description: "Computer training center with 20 systems" },
          { activity: "Farmers Market", date: "March 2026", status: "Planning", description: "Weekly agricultural market setup" }
        ],
        "Naganur": [
          { activity: "Electricity Infrastructure", date: "December 2025", status: "Completed", description: "New transformers and power line upgrades" },
          { activity: "Girls Hostel", date: "March 2026", status: "In Progress", description: "Residential facility for 50 students" },
          { activity: "Sports Complex", date: "February 2026", status: "Planning", description: "Playground and indoor sports facilities" }
        ],
        "Kerur": [
          { activity: "Bus Stand Modernization", date: "January 2026", status: "Completed", description: "New bus shelter and waiting area" },
          { activity: "Street Beautification", date: "February 2026", status: "In Progress", description: "Planting trees and installing benches" },
          { activity: "Milk Collection Center", date: "March 2026", status: "Ongoing", description: "Cooperative dairy collection facility" }
        ],
        "Bennur": [
          { activity: "School Toilet Construction", date: "December 2025", status: "Completed", description: "Separate toilets for boys and girls" },
          { activity: "Rainwater Harvesting", date: "March 2026", status: "In Progress", description: "Water conservation structures in 10 locations" },
          { activity: "Youth Skill Center", date: "January 2026", status: "Ongoing", description: "Technical training for employment" }
        ],
        "Kittur": [
          { activity: "Heritage Site Development", date: "February 2026", status: "In Progress", description: "Kittur Fort restoration and tourism promotion" },
          { activity: "Public Library", date: "January 2026", status: "Completed", description: "Library with 5000+ books inaugurated" },
          { activity: "Farmers Training", date: "March 2026", status: "Ongoing", description: "Organic farming and crop diversification" }
        ],
        "Renukambi": [
          { activity: "Bridge Construction", date: "March 2026", status: "In Progress", description: "New bridge over seasonal stream" },
          { activity: "Mobile Health Clinic", date: "January 2026", status: "Ongoing", description: "Weekly medical visits to remote areas" },
          { activity: "LED Street Lights", date: "December 2025", status: "Completed", description: "Energy-efficient lighting throughout village" }
        ],
        "Shirguppi": [
          { activity: "Gymnasium Equipment", date: "February 2026", status: "Completed", description: "Outdoor gym for public use" },
          { activity: "Sewage Treatment", date: "March 2026", status: "Planning", description: "Waste water management system" },
          { activity: "Farmer Producer Organization", date: "January 2026", status: "Ongoing", description: "Collective marketing platform for farmers" }
        ],
        "Kavatagi": [
          { activity: "Police Outpost", date: "January 2026", status: "Completed", description: "New police station for better security" },
          { activity: "Pond Desilting", date: "February 2026", status: "In Progress", description: "Rejuvenation of village pond" },
          { activity: "Cooking Gas Connection", date: "March 2026", status: "Ongoing", description: "Ujjwala scheme implementation" }
        ],
        "Hire Budanur": [
          { activity: "Veterinary Dispensary", date: "December 2025", status: "Completed", description: "Animal healthcare facility established" },
          { activity: "Solar Power Project", date: "March 2026", status: "In Progress", description: "Solar panels for government buildings" },
          { activity: "Women Empowerment Program", date: "February 2026", status: "Ongoing", description: "Skill training and entrepreneurship support" }
        ],
        "Bannikop": [
          { activity: "High School Expansion", date: "February 2026", status: "In Progress", description: "Additional classrooms and science lab" },
          { activity: "Burial Ground Development", date: "January 2026", status: "Completed", description: "Improved crematorium facilities" },
          { activity: "Horticulture Promotion", date: "March 2026", status: "Ongoing", description: "Fruit plantation and nursery development" }
        ]
      };
      setVillageActivities(defaultActivities);
      localStorage.setItem("villageActivities", JSON.stringify(defaultActivities));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
    navigate("/");
  };

  const achievements = [
    {
      year: "2010",
      title: "First Election to Legislative Assembly",
      description: "Elected as MLA from Saundatti Yellamma constituency with overwhelming public support, promising comprehensive rural development."
    },
    {
      year: "2012",
      title: "Water Supply Initiative",
      description: "Successfully implemented water supply schemes in 25 villages, ensuring clean drinking water access to over 50,000 residents."
    },
    {
      year: "2015",
      title: "Education Infrastructure Development",
      description: "Established 15 new government schools and upgraded 40 existing schools with modern facilities and digital classrooms."
    },
    {
      year: "2017",
      title: "Agricultural Support Program",
      description: "Launched farmer welfare programs providing subsidized seeds, fertilizers, and irrigation facilities benefiting 10,000+ farmers."
    },
    {
      year: "2019",
      title: "Healthcare Expansion",
      description: "Inaugurated 8 new primary health centers and upgraded district hospital with advanced medical equipment."
    },
    {
      year: "2021",
      title: "Road Connectivity Project",
      description: "Completed 200 km of rural road construction connecting remote villages to main highways and improving transportation."
    },
    {
      year: "2023",
      title: "Digital Literacy Campaign",
      description: "Initiated digital literacy programs reaching 5,000+ youth and established computer centers in rural areas."
    },
    {
      year: "2025",
      title: "Re-elected for Fourth Term",
      description: "Won re-election with record-breaking majority, reflecting public trust in continued development efforts."
    }
  ];

  const villages = [
    "Saundatti",
    "Yellamma",
    "Hire Angadi",
    "Lokapur",
    "Hire Bagewadi",
    "Dhavaleshwar",
    "Naganur",
    "Kerur",
    "Bennur",
    "Kittur",
    "Renukambi",
    "Shirguppi",
    "Kavatagi",
    "Hire Budanur",
    "Bannikop"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slideImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slideImages.length]);

  return (
    <div className="min-h-screen bg-blue-100">
      <PageHeader />

      <section className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 shadow-sm">
          <img
            src={slideImages[activeSlide]}
            alt={`Slide ${activeSlide + 1}`}
            className="w-full h-[320px] object-cover transition duration-700 ease-in-out"
          />
          <div className="absolute inset-x-0 bottom-0 bg-black/30 px-4 py-3 text-white sm:px-6">
            <div className="flex items-center justify-between text-sm sm:text-base">
              <span>{`Featured Slide ${activeSlide + 1} of ${slideImages.length}`}</span>
              <div className="flex gap-2">
                {slideImages.map((_, index) => (
                  <span
                    key={index}
                    className={`h-2 w-2 rounded-full ${index === activeSlide ? "bg-white" : "bg-white/50"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-8 text-white">
            <div className="flex items-start gap-6">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                <img
                  src={profileImg}
                  alt="Profile Image"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-4xl mb-2">SHRI VISHWAS VASANT VAIDYA</h2>
                <p className="text-xl text-orange-100 mb-4">Member of Legislative Assembly (MLA)</p>
                <p className="text-orange-50">Saundatti Yellamma Constituency | Serving since 2010</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <h3 className="text-2xl mb-4 text-gray-800">Biography</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Shri Vishwas Vasant Vaidya is a dedicated public representative who has been serving the Saundatti Yellamma
                constituency for over 15 years. Born and raised in the region, he has deep roots in the community and an
                intimate understanding of the challenges and aspirations of rural Karnataka.
              </p>
              <p>
                After completing his education in law and social work, Shri Vaidya began his career as a social activist,
                working tirelessly to improve the lives of farmers, women, and marginalized communities. His grassroots work
                in water conservation, agricultural development, and rural education laid the foundation for his political career.
              </p>
              <p>
                Since his first election in 2010, Shri Vaidya has been a strong advocate for rural development, infrastructure
                improvement, and social welfare. His initiatives have brought significant improvements to villages across the
                constituency, including better road connectivity, enhanced healthcare facilities, improved water supply, and
                expanded educational opportunities.
              </p>
              <p>
                Known for his accessibility and commitment to his constituents, Shri Vaidya regularly visits villages, holds
                public meetings, and ensures that government schemes reach those who need them most. His vision is to transform
                Saundatti Yellamma constituency into a model of sustainable rural development.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl mb-6 text-gray-800">Major Achievements</h3>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex gap-6 border-l-4 border-orange-600 pl-6 py-2">
                <div className="flex-shrink-0">
                  <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-sm">
                    {achievement.year}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg text-gray-900 mb-2">{achievement.title}</h4>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl mb-6 text-gray-800">SAUNDATTI YELLAMMA CONSTITUENCY DEVELOPMENT</h3>

          <div className="mb-6">
            <label htmlFor="village-select" className="block text-lg mb-3 text-gray-700">
              Select Village to View Development Activities:
            </label>
            <select
              id="village-select"
              value={selectedVillage}
              onChange={(e) => setSelectedVillage(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent text-gray-700 bg-white"
            >
              <option value="">-- Choose a Village --</option>
              {villages.map((village) => (
                <option key={village} value={village}>
                  {village}
                </option>
              ))}
            </select>
          </div>

          {selectedVillage && (
            <div className="mt-8">
              <h4 className="text-xl mb-4 text-gray-800 border-b-2 border-orange-600 pb-2">
                Development Activities in {selectedVillage}
              </h4>
              <div className="space-y-4 mt-6">
                {villageActivities[selectedVillage]?.map((activity, index) => (
                  <div key={index} className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-600">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="text-lg text-gray-900">{activity.activity}</h5>
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        activity.status === 'Completed' ? 'bg-green-600 text-white' :
                        activity.status === 'In Progress' ? 'bg-blue-600 text-white' :
                        activity.status === 'Ongoing' ? 'bg-yellow-600 text-white' :
                        'bg-gray-600 text-white'
                      }`}>
                        {activity.status}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-2">{activity.description}</p>
                    <p className="text-sm text-gray-500">Date: {activity.date}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!selectedVillage && (
            <div className="mt-8 text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-500 text-lg">Please select a village from the dropdown to view development activities</p>
            </div>
          )}
        </div>

        <div className="mt-8 bg-orange-50 rounded-lg p-6 border-l-4 border-orange-600">
          <h3 className="text-lg mb-2 text-gray-800">Current Focus Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="text-gray-900 mb-2">Rural Infrastructure</h4>
              <p className="text-sm text-gray-600">Improving road connectivity and basic amenities in all villages</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="text-gray-900 mb-2">Farmer Welfare</h4>
              <p className="text-sm text-gray-600">Supporting agricultural growth with modern techniques and subsidies</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="text-gray-900 mb-2">Education & Healthcare</h4>
              <p className="text-sm text-gray-600">Expanding access to quality education and medical facilities</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
