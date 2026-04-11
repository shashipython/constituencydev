import vishwasImg from "../../assets/VishwasVaidyaMLA2023.jpg";
import congressLogo from "../../assets/Indian_National_Congress_hand_logo.svg.png";
import siddharamayyaImg from "../../assets/siddaramaiah-photo.jpg";
import sathishImg from "../../assets/sathish_jarkiholi.jpg";
import shikumarImg from "../../assets/dk_shikumar.jpg";
import { useLanguage } from "./LanguageContext";

export function PageHeader() {
  const { t } = useLanguage();

  return (
    <header className="bg-blue-400 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src={vishwasImg}
            alt="Vishwas Vaidya"
            className="w-20 h-20 object-cover border-2 border-orange-500 rounded-full flex-shrink-0"
          />
          <img
            src={congressLogo}
            alt="Congress logo"
            className="w-14 h-14 object-cover rounded-full border-2 border-orange-500 shadow-sm flex-shrink-0"
          />
          <h1 className="text-3xl font-bold text-white">
            {t("pageHeader.constituency")}
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <img
            src={sathishImg}
            alt="Congress leader"
            className="w-14 h-14 object-cover rounded-full border-2 border-orange-500 shadow-sm"
          />
          <img
            src={siddharamayyaImg}
            alt="Congress leader"
            className="w-14 h-14 object-cover rounded-full border-2 border-orange-500 shadow-sm"
          />
          <img
            src={shikumarImg}
            alt="Shikumar"
            className="w-14 h-14 object-cover rounded-full border-2 border-orange-500 shadow-sm"
          />
        </div>
      </div>
    </header>
  );
}
