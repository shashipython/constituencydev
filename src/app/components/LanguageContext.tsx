import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

type Language = "en" | "kn";

type LanguageContextValue = {
  language: Language;
  setLanguage: (value: Language) => void;
  t: (key: string) => any;
};

const translations: Record<Language, Record<string, any>> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      leadership: "Leadership",
      activities: "Activities",
      schemes: "Schemes",
      development: "Development",
      gallery: "Gallery",
      adminPanel: "Admin Panel",
      adminLogin: "Admin Login",
      logout: "Logout",
      welcome: "Welcome",
      language: "Language",
    },
    pageHeader: {
      constituency: "Saundatti Yellamma Constituency",
    },
    about: {
      title: "About Our MLA",
      description:
        "Shri Vishwas Vaidya is the elected Member of the Legislative Assembly for Saundatti Yellamma. He is known for his commitment to rural development, education, healthcare, and a strong focus on delivering results through community-led public service.",
      profileTitle: "MLA Profile",
      profileText1:
        "Shri Vishwas Vaidya represents Saundatti Yellamma with a strong emphasis on practical governance and transparent leadership. His profile reflects a lifelong interest in serving rural communities and strengthening local infrastructure.",
      profileText2:
        "He combines constituency-level experience with a focus on improving healthcare access, boosting agricultural support, and expanding educational opportunities for youth and women across the region.",
      visionTitle: "Vision",
      visionText:
        "To create a constituency where every resident enjoys access to quality health services, dependable education, safe infrastructure, and stronger economic opportunity for families.",
      missionTitle: "Mission",
      missionText:
        "To build trust through citizen-centered governance, community consultation, and consistent delivery of development projects that make a visible difference in daily life.",
      leadershipTitle: "Leadership & Team",
      leadershipStyleTitle: "Leadership Style",
      leadershipStyleText:
        "Shri Vaidya follows a collaborative leadership style, prioritizing clear communication, local engagement, and timely execution of constituency priorities.",
      teamSupportTitle: "Team Support",
      teamSupportText:
        "His team includes constituency coordinators, outreach officers, and local volunteers who support welfare initiatives and help residents get the services they need.",
      partnershipsTitle: "Community Partnerships",
      partnershipsText:
        "The leadership team works closely with schools, health centers, farmer groups, and women’s organizations to ensure development projects are responsive and sustainable.",
    },
    activities: {
      title: "Activities",
      description: "Explore the latest development activities across the constituency.",
      placeholder: "Activities Page",
    },
    leadership: {
      title: "Leadership",
      description: "Discover the leadership approach and priorities of the MLA team.",
      placeholder: "Leadership Page",
    },
    gallery: {
      title: "Gallery",
      description: "Browse images from recent events and projects.",
      placeholder: "Gallery Page",
    },
    schemes: {
      heroTitle: "Schemes for Saundatti Yellamma Citizens",
      heroSubtitle:
        "Explore central and Karnataka government schemes that empower farmers, families, women, youth, and senior citizens.",
      centralTitle: "Central Schemes",
      karnatakaTitle: "Karnataka Schemes",
      eligibilityTitle: "Eligibility",
      applyTitle: "How to Apply",
      step1Title: "Step 1: Gather Documents",
      step1Text:
        "Keep Aadhaar, income certificate, ration card, bank passbook, land papers, and a recent photograph ready. For specific schemes, also carry caste and disability certificates if applicable.",
      step2Title: "Step 2: Use Government Portals",
      step2Text:
        "Visit official portals like PM-Kisan, Ayushman Bharat, or Arogya Karnataka for online registration. Karnataka residents may also use the e-District portal for scheme applications and status tracking.",
      step3Title: "Step 3: Get Local Help",
      step3Text:
        "Reach out to the MLA office, local panchayat, or government help center for assistance with forms, verification, and follow-up. Local support can speed up approval and ensure your application is complete.",
      centralSchemes: [
        {
          title: "PM-Kisan",
          text:
            "Direct income support for small and marginal farmers. Eligible farmers receive financial assistance to cover agricultural input costs and stabilize farm income.",
        },
        {
          title: "Ayushman Bharat",
          text:
            "Health protection scheme for low-income families, providing medical coverage for hospitalization and critical care. Beneficiaries can access services at empaneled public and private hospitals.",
        },
        {
          title: "Pradhan Mantri Awas Yojana",
          text:
            "Housing support for eligible rural and urban households, helping families build or renovate homes with subsidy support.",
        },
      ],
      karnatakaSchemes: [
        {
          title: "Anna Bhagya",
          text:
            "Monthly grocery support for low-income families, helping ensure regular access to rice, wheat, and other essential staples.",
        },
        {
          title: "Arogya Karnataka",
          text:
            "State-level healthcare program offering free or subsidized treatment at government hospitals for eligible households.",
        },
        {
          title: "Karnataka Gruha Jyothi",
          text:
            "Electricity subsidy for domestic consumers, providing relief on electricity bills to make energy more affordable.",
        },
      ],
      eligibility: {
        farmers: {
          title: "Farmer Schemes",
          text:
            "Small and marginal farmers with land records or beneficiary IDs are typically eligible for PM-Kisan and similar agriculture support schemes. Proof of land ownership, Aadhaar, and bank details are required.",
        },
        healthcare: {
          title: "Healthcare Schemes",
          text:
            "Families below the poverty line, elderly citizens, and patients with chronic illnesses are prioritized for Ayushman Bharat and Arogya Karnataka. Eligible beneficiaries usually need an income certificate or ration card.",
        },
        housing: {
          title: "Housing & Utility Support",
          text:
            "Households without pucca homes or with inadequate kitchens can apply for PMAY, while domestic electricity consumers can check eligibility under Karnataka Gruha Jyothi through their utility bills.",
        },
      },
    },
    home: {
      role: "Member of Legislative Assembly (MLA)",
      servingSince: "Saundatti Yellamma Constituency | Serving since 2010",
      biographyTitle: "Biography",
      bioParagraph1:
        "Shri Vishwas Vasant Vaidya is a dedicated public representative who has been serving the Saundatti Yellamma constituency for over 15 years. Born and raised in the region, he has deep roots in the community and an intimate understanding of the challenges and aspirations of rural Karnataka.",
      bioParagraph2:
        "After completing his education in law and social work, Shri Vaidya began his career as a social activist, working tirelessly to improve the lives of farmers, women, and marginalized communities. His grassroots work in water conservation, agricultural development, and rural education laid the foundation for his political career.",
      bioParagraph3:
        "Since his first election in 2010, Shri Vaidya has been a strong advocate for rural development, infrastructure improvement, and social welfare. His initiatives have brought significant improvements to villages across the constituency, including better road connectivity, enhanced healthcare facilities, improved water supply, and expanded educational opportunities.",
      bioParagraph4:
        "Known for his accessibility and commitment to his constituents, Shri Vaidya regularly visits villages, holds public meetings, and ensures that government schemes reach those who need them most. His vision is to transform Saundatti Yellamma constituency into a model of sustainable rural development.",
      achievementsTitle: "Major Achievements",
      developmentHeading: "SAUNDATTI YELLAMMA CONSTITUENCY DEVELOPMENT",
      selectVillageLabel: "Select Village to View Development Activities:",
      chooseVillagePlaceholder: "-- Choose a Village --",
      developmentActivitiesTitle: "Development Activities in",
      chooseVillageNotice: "Please select a village from the dropdown to view development activities",
      currentFocusHeading: "Current Focus Areas",
      focusInfrastructure: "Rural Infrastructure",
      focusInfrastructureText: "Improving road connectivity and basic amenities in all villages",
      focusFarmerWelfare: "Farmer Welfare",
      focusFarmerWelfareText: "Supporting agricultural growth with modern techniques and subsidies",
      focusEducationHealthcare: "Education & Healthcare",
      focusEducationHealthcareText: "Expanding access to quality education and medical facilities",
      featuredSlide: "Featured Slide {{current}} of {{total}}",
      activityDateLabel: "Date",
      activityStatus: {
        completed: "Completed",
        ongoing: "Ongoing",
        inProgress: "In Progress",
        planning: "Planning",
      },
    },
    development: {
      summary: {
        totalWorks: "Total works",
        budgetSpent: "Budget spent",
        completedOngoing: "Completed / Ongoing",
        completionRate: "Completion %",
        projectsTracked: "Projects tracked in Saundatti Yellamma",
        approvedExpenditure: "Approved expenditure this financial year",
        activityStatus: "Development activity status",
      },
      analytics: {
        title: "Analytics",
        subtitle: "Live data view with API-ready structure.",
        costYear: "Cost vs Year",
        categoryDistribution: "Category distribution",
        villageProgress: "Village-wise progress",
        completedOngoing: "Completed vs Ongoing",
      },
      filters: {
        title: "Filters",
        subtitle: "Use filters to narrow down the development works list.",
        village: "Village / Panchayat / Taluk",
        category: "Category",
        year: "Year",
        status: "Status",
        options: {
          allVillages: "All Villages",
          allCategories: "All Categories",
          all: "All",
          completed: "Completed",
          ongoing: "Ongoing",
          planning: "Planning",
        },
        categoryOptions: {
          water: "Water",
          road: "Road",
          health: "Health",
          education: "Education",
        },
      },
      status: {
        completed: "Completed",
        ongoing: "Ongoing",
        inProgress: "In Progress",
        planning: "Planning",
      },
      list: {
        title: "Development List",
        subtitle: "Works in progress",
        columns: {
          workName: "Work name",
          village: "Village",
          cost: "Cost",
          status: "Status",
        },
        recordCount: "Showing {{count}} records",
      },
      details: {
        title: "Work Details",
        timelineTitle: "Timeline",
        village: "Village",
        budget: "Budget",
        status: "Status",
      },
      map: {
        title: "Map View",
        constituencyTitle: "Saundatti Yellamma Constituency",
        subtitle: "Works plotted geographically across taluks. Click a taluk on the map to view population and household counts.",
        sampleTitle: "Sample Taluk on map",
        sampleText: "Taluk: Saundatti | Population: 28,400 | Houses: 6,520",
      },
    },
  },
  kn: {
    nav: {
      home: "ಮುಖಪುಟ",
      about: "ಬಗ್ಗೆ",
      leadership: "ನಾಯಕರತ್ವ",
      activities: "ಚಟುವಟಿಕೆಗಳು",
      schemes: "ಯೋಜನೆಗಳು",
      development: "ಅಭಿವೃದ್ಧಿ",
      gallery: "ಚಿತ್ರಶಾಲೆ",
      adminPanel: "ನಿರ್ವಾಹಣಾ ಪ್ಯಾನೆಲ್",
      adminLogin: "ಆಡ್ಮಿನ್ ಲಾಗಿನ್",
      logout: "ಲಾಗ್ ಔಟ್",
      welcome: "ಸ್ವಾಗತ",
      language: "ಭಾಷೆ",
    },
    pageHeader: {
      constituency: "ಸೌಂದತ್ತಿ ಯಲ್ಲಮ್ಮ ಕ್ಷೇತ್ರ",
    },
    about: {
      title: "ನಮ್ಮ MLA ಬಗ್ಗೆ",
      description:
        "ಶ್ರೀ ವಿಶ್ವಭಾಸ್ ವೇದ್ಯರು ಸೌಂದತ್ತಿ ಯಲ್ಲಮ್ಮ ಕ್ಷೇತ್ರದ ընտರಪಟ್ಟನ ವಿಧಾನಸಭಾ ಸದಸ್ಯರಾಗಿದ್ದಾರೆ. ಅವರು ಗ್ರಾಮೀಣ ಅಭಿವೃದ್ಧಿ, ಶಿಕ್ಷಣ, ಆರೋಗ್ಯ ಮತ್ತು ಸಮುದಾಯ-ಆಧಾರಿತ ಸೇವೆಯ ಮೇಲೆ ಕಟ್ಟುನಿಟ್ಟಿನ ಮನೋಭಾವಕ್ಕಾಗಿ ಪ್ರಸಿದ್ಧರಾಗಿದ್ದಾರೆ.",
      profileTitle: "ಎಂಎಲ್‌ಎ ಪ್ರೊಫೈಲ್",
      profileText1:
        "ಶ್ರೀ ವಿಶ್ವಭಾಸ್ ವೇದ್ಯರು ಸೌಂದತ್ತಿ ಯಲ್ಲಮ್ಮ ಕ್ಷೇತ್ರವನ್ನು ನೈಜ ಆಡಳಿತ ಮತ್ತು ಪಾರದರ್ಶಕ ನಾಯಕತ್ವದೊಂದಿಗೆ ಪ್ರತಿನಿಧಿಸುತ್ತಾರೆ. ಅವರ ಪ್ರೊಫೈಲ್ ಗ್ರಾಮೀಣ ಸಮುದಾಯಗಳನ್ನು ಸೇವಿಸುವ ಹಾಗೂ ಸ್ಥಳೀಯ ಮೂಲಸೌಕರ್ಯವನ್ನು ಬಲಪಡಿಸುವ ದೀರ್ಘಕಾಲದ ಆಸಕ್ತಿಯನ್ನು ತೋರುತ್ತದೆ.",
      profileText2:
        "ಅವರು ಆರೋಗ್ಯ ಸೇವೆಗಳಲ್ಲಿ ಸುಧಾರಣೆ, ಕೃಷಿ ಬೆಂಬಲ ಹೆಚ್ಚಿಸುವುದು ಮತ್ತು ಯುವಕರು ಮತ್ತು ಮಹಿಳೆಯರಿಗಾಗಿ ಶಿಕ್ಷಣ ಅವಕಾಶಗಳನ್ನು ವಿಸ್ತರಿಸುವವರಿಗೆ ಗಮನಹರಿಸುತ್ತಾರೆ.",
      visionTitle: "ದೃಷ್ಟಿ",
      visionText:
        "ಪ್ರತಿ ನಿವಾಸಿಗೆ ಗುಣಮಟ್ಟದ ಆರೋಗ್ಯ ಸೇವೆಗಳು, ಭರವಸೆಯ ಶಿಕ್ಷಣ, ಸುರಕ್ಷಿತ ಮೂಲಸೌಕರ್ಯ ಮತ್ತು ಬಲವಾದ ಆರ್ಥಿಕ ಅವಕಾಶಗಳು ಲಭ್ಯವಾಗುವ ಕ್ಷೇತ್ರವನ್ನು ರಚಿಸುವುದು.",
      missionTitle: "ಮಿಷನ್",
      missionText:
        "ನಾಗರಿಕ-ಕೇಂದ್ರೀಕೃತ ಆಡಳಿತ, ಸಮುದಾಯ ಸಂವಾದ ಮತ್ತು ದೈನಂದಿನ ಜೀವನದಲ್ಲಿ ಸ್ಪಷ್ಟವಾದ ಪರಿಣಾಮ ತರುವ ಅಭಿವೃದ್ಧಿ ಯೋಜನೆಗಳ સતત ನಿರ್ವಹಣೆಯ ಮೂಲಕ ವಿಶ್ವಾಸವನ್ನು ನಿರ್ಮಿಸುವುದು.",
      leadershipTitle: "ನಾಯಕರತ್ವ ಮತ್ತು ತಂಡ",
      leadershipStyleTitle: "ನಾಯಕತ್ವ ಶೈಲಿ",
      leadershipStyleText:
        "ಶ್ರೀ ವೈಧ್ಯರು ಸ್ಪಷ್ಟ ಸಂವಹನ, ಸ್ಥಳೀಯ ತೊಡಕು ಮತ್ತು ಸಮಯೋಚಿತ ಕಾರ್ಯಗತಗೊಳಿಸುವಿಕೆಯನ್ನು ಪ್ರಮುಖವಾಗಿ ಹೊಂದಿರುವ ಸಹಕಾರಿಯ ನಾಯಕತ್ವ ಶೈಲಿಯನ್ನು ಅನುಸರಿಸುತ್ತಾರೆ.",
      teamSupportTitle: "ತಂಡ ಬೆಂಬಲ",
      teamSupportText:
        "ಅವರ ತಂಡವು ಕ್ಷೇತ್ರ ಸಂಯೋಜಕರು, ಪ್ರಚಾರ ಅಧಿಕಾರಿ ಮತ್ತು ಸ್ಥಳೀಯ ಸ್ವಯಂಸೇವಕರು ಸೇರಿದಂತೆ ಪರಿಹಾರ ಯೋಜನೆಗಳಿಗೆ ಮತ್ತು ಸೇವೆಗೆ ಬೆಂಬಲ ನೀಡುವವರನ್ನು ಒಳಗೊಂಡಿದೆ.",
      partnershipsTitle: "ಸಮುದಾಯ ಪಾಲುದಾರಿಕೆಗಳು",
      partnershipsText:
        "ವಿಕاس ಯೋಜನೆಗಳು ಪ್ರತ್ಯುತ್ತರಶೀಲವಾಗುವಂತೆ ಮತ್ತು ದೀರ್ಘಕಾಲೀನವಾಗುವಂತೆ ಶಾಲೆಗಳು, ಆರೋಗ್ಯ ಕೇಂದ್ರಗಳು, ರೈತ ಗುಂಪುಗಳು ಮತ್ತು ಮಹಿಳಾ ಸಂಸ್ಥೆಗಳೊಡನೆ ನಾಯಕತ್ವ ತಂಡವು ಸಮೀಪವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ.",
    },
    activities: {
      title: "ಚಟುವಟಿಕೆಗಳು",
      description: "ಕ್ಷೇತ್ರದ ಇತ್ತೀಚಿನ ಅಭಿವೃದ್ಧಿ ಚಟುವಟಿಕೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.",
      placeholder: "ಚಟುವಟಿಕೆಗಳು ಪುಟ",
    },
    leadership: {
      title: "ನಾಯಕರತ್ವ",
      description: "ಎಂಎಲ್‌ಎ ತಂಡದ ನಾಯಕತ್ವದ ದೃಷ್ಟಿಕೋನ ಮತ್ತು ಆದ್ಯತೆಯನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ.",
      placeholder: "ನಾಯಕರತ್ವ ಪುಟ",
    },
    gallery: {
      title: "ಚಿತ್ರಶಾಲೆ",
      description: "ಇತ್ತೀಚಿನ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಯೋಜನೆಗಳ ಚಿತ್ರಗಳನ್ನು ನೋಡು.",
      placeholder: "ಚಿತ್ರಶಾಲೆ ಪುಟ",
    },
    schemes: {
      heroTitle: "ಸೌಂದತ್ತಿ ಯಲ್ಲಮ್ಮ ನಾಗರಿಕರಿಗಾಗಿ ಯೋಜನೆಗಳು",
      heroSubtitle:
        "ಕೇಂದ್ರ ಮತ್ತು ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಯೋಜನೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ, ಇದು ರೈತರು, ಕುಟುಂಬಗಳು, ಮಹಿಳೆಯರು, ಯುವಕರು ಮತ್ತು ವಯೋವೃದ್ದರಿಗೆ ಶಕ್ತಿ ನೀಡುತ್ತದೆ.",
      centralTitle: "ಕೇಂದ್ರ ಯೋಜನೆಗಳು",
      karnatakaTitle: "ಕರ್ನಾಟಕ ಯೋಜನೆಗಳು",
      eligibilityTitle: "ಅರ್ಹತೆ",
      applyTitle: "ಅರ್ಜಿ ಸಲ್ಲಿಸುವ ವಿಧಾನ",
      step1Title: "ಹಂತ 1: ದಾಖಲೆಗಳನ್ನು ಸಂಗ್ರಹಿಸಿ",
      step1Text:
        "ಆಧಾರ್, ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ, ರೇಷನ್ ಕಾರ್ಡ್, ಬ್ಯಾಂಕ್ ಪುಸ್ತಕ, ಭೂ ಪೇಪರ್ಸ್ ಮತ್ತು ಇತ್ತೀಚಿನ ಫೋಟೋಗ್ರಾಫ್ ಅನ್ನು ತಯಾರಿಸಿಕೊಳ್ಳಿ. ನಿರ್ದಿಷ್ಟ ಯೋಜನೆಗಳಿಗಾಗಿ ವರ್ಗ ಮತ್ತು ಅಂಗವಿಕಲತಾ ಪ್ರಮಾಣಪತ್ರಗಳನ್ನು ಸಹ ಹೊಂದಿಸಿಕೊಳ್ಳಿ.",
      step2Title: "ಹಂತ 2: ಸರ್ಕಾರದ ಪೋರ್ಟಲ್ಗಳನ್ನು ಉಪಯೋಗಿಸಿ",
      step2Text:
        "PM-Kisan, Ayushman Bharat ಅಥವಾ Arogya Karnataka ಮುಂತಾದ ಅಧಿಕೃತ ಪೋರ್ಟಲ್ಗಳಲ್ಲಿ ಆನ್‌ಲೈನ್ ನೋಂದಣಿಯನ್ನು ಮಾಡಿ. ಕರ್ನಾಟಕ ನಿವಾಸಿಗಳು ಯೋಜನೆಗಳಿಗಾಗಿ e-District ಪೋರ್ಟಲ್ ಅನ್ನು ಸಹ ಬಳಸಿ.",
      step3Title: "ಹಂತ 3: ಸ್ಥಳೀಯ ಸಹಾಯ ಪಡೆಯಿರಿ",
      step3Text:
        "ಆಯೋಗ್ಯ ಕಾರ್ಯಾಲಯ, ಸ್ಥಳೀಯ ಪಂಚಾಯಿತ್ ಅಥವಾ ಸರ್ಕಾರಿ ಸಹಾಯ ಕೇಂದ್ರದಿಂದ ಫಾರ್ಮ್‌ಗಳು, ಪರಿಶೀಲನೆ ಮತ್ತು ನಂತರದ ಕಾರ್ಯಗಳಿಗೆ ಸಹಾಯ ಪಡೆಯಿರಿ. ಸ್ಥಳೀಯ ಬೆಂಬಲ ಪ್ರಮಾಣವನ್ನು ವೇಗಗೊಳಿಸುತ್ತದೆ.",
      centralSchemes: [
        {
          title: "PM-Kisan",
          text:
            "ಸ್ವಲ್ಪ ಮತ್ತು ಅಲ್ಪಭೂಮಿ ರೈತರಿಗಾಗಿ ನೇರ ಆದಾಯ ಬೆಂಬಲ. ಅರ್ಹ ರೈತರು ಕೃಷಿ ಇನ್‌ಪುಟ್ ವೆಚ್ಚಗಳನ್ನು ಮುಚ್ಚಲು ಹಣಕಾಸು ಸಹಾಯವನ್ನು ಪಡೆಯುತ್ತಾರೆ.",
        },
        {
          title: "Ayushman Bharat",
          text:
            " ಕಡಿಮೆ ಆದಾಯದ ಕುಟುಂಬಗಳಿಗೆ ಆಸ್ಪತ್ರೆಗೆ ದಾಖಲಿಸುವ ವೆಚ್ಚಕ್ಕಾಗಿ ಆರೋಗ್ಯ ರಕ್ಷಣಾ ಯೋಜನೆ. ಫಲಾನುಭವಿಗಳು ಸಾರ್ವಜನಿಕ ಮತ್ತು ಖಾಸಗಿ ಆಸ್ಪತ್ರೆಗಳಲ್ಲಿ ಸೇವೆಗಳನ್ನು ಪಡೆಯಬಹುದು.",
        },
        {
          title: "Pradhan Mantri Awas Yojana",
          text:
            "ಅರ್ಹ ಗ್ರಾಮೀಣ ಮತ್ತು ನಗರ ಮನೆ ಗೃಹಗಳಿಗೆ ಮನೆ ಅಥವಾ ಪುನರ್ನಿರ್ಮಾಣ ಮಾಡಲು ಮೊತ್ತದಲ್ಲಿ ಸಹಾಯ.",
        },
      ],
      karnatakaSchemes: [
        {
          title: "Anna Bhagya",
          text:
            "ಕಡಿಮೆ ಆದಾಯದ ಕುಟುಂಬಗಳಿಗೆ ಮಾಸಿಕ ಅಕ್ಕಿ, ಗೋಧಿ ಮತ್ತು ಅಗತ್ಯ ಆಹಾರ ಸಾಮಗ್ರಿಗಳನ್ನು ಸಹಾಯ.",
        },
        {
          title: "Arogya Karnataka",
          text:
            "ಅರ್ಹ ಕುಟುಂಬಗಳಿಗೆ ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಗಳಲ್ಲಿ ಉಚಿತ ಅಥವಾ ಸಬ್ಸಿಡೈಸ್ ಚಿಕಿತ್ಸೆಯನ್ನು ನೀಡುವ ರಾಜ್ಯ ಮಟ್ಟದ ಆರೋಗ್ಯ ಕಾರ್ಯಕ್ರಮ.",
        },
        {
          title: "Karnataka Gruha Jyothi",
          text:
            "ಐತಿಹಾಸಿಕ ಗ್ರಾಹಕರಿಗೆ ವಿದ್ಯುತ್ ಬಿಲ್‌ಗಳಲ್ಲಿ ರಿಯಾಯಿತಿಯನ್ನು ನೀಡುವ ವಿದ್ಯುತ್ ಸಬ್ಸಿಡಿ.",
        },
      ],
      eligibility: {
        farmers: {
          title: "ರೈತ ಯೋಜನೆಗಳು",
          text:
            "ಭೂ ದಾಖಲೆಗಳು ಅಥವಾ ಲಾಭಾಂಶ ಐಡಿಗಳೊಂದಿಗೆ ಸಣ್ಣ ಮತ್ತು ಅಲ್ಪಭೂಮಿ ರೈತರು ಸಾಮಾನ್ಯವಾಗಿ PM-Kisan ಮತ್ತು ಇಂತಹ ಪೂರಕ ಯೋಜನೆಗಳಿಗೆ ಅರ್ಹರಾಗುತ್ತಾರೆ. ಭೂಮಾಲೀಕೆ, ಆದಾರ್ ಮತ್ತು ಬ್ಯಾಂಕ್ ವಿವರಗಳು ಅಗತ್ಯ.",
        },
        healthcare: {
          title: "ಆರೋಗ್ಯ ಯೋಜನೆಗಳು",
          text:
            "ಬಡ ಆರ್ಥಿಕವರ್ಗದ ಕುಟುಂಬಗಳು, ವಯಸ್ಕ ನಾಗરિકರು ಮತ್ತು ದೀರ್ಘಕಾಲಿಕ ರೋಗಿಗಳಾದವರು Ayushman Bharat ಮತ್ತು Arogya Karnatakaಗೆ ಆದ್ಯತೆ ನೀಡಲಾಗುತ್ತದೆ. ಅರ್ಹ ಫಲಾನುಭವಿಗಳಿಗೆ ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ ಅಥವಾ ರೇಷನ್ ಕಾರ್ಡ್ ಅಗತ್ಯವಾಗಬಹುದು.",
        },
        housing: {
          title: "ಹೌಸಿಂಗ್ ಮತ್ತು ಯುಟಿಲಿಟಿ ಬೆಂಬಲ",
          text:
            "ಪುಚ್ಛ ಮನೆ ಇಲ್ಲದ ಅಥವಾ ಅಸಮರ್ಪಕ ಮಡಿಲು ಇರುವ ಮನೆಗಳು PMAYಗೆ ಅರ್ಜಿ ಹಾಕಬಹುದು, ಆದರೆ ಮನೆಯ ವಿದ್ಯುತ್ ಗ್ರಾಹಕರು Karnataka Gruha Jyothi ಅರ್ಜಿಗಾಗಿ ತಮ್ಮ ಯೂಟಿಲಿಟಿ ಬಿಲ್ಲನ್ನು ಪರಿಶೀಲಿಸಬಹುದು.",
        },
      },
    },
    home: {
      role: "ವಿಧಾನಸಭಾ ಸದಸ್ಯರು (MLA)",
      servingSince: "ಸೌಂದತ್ತಿ ಯಲ್ಲಮ್ಮ ಕ್ಷೇತ್ರ | 2010 ರಿಂದ ಸೇವೆ",
      biographyTitle: "ಜೀವನಚರಿತ್ರೆ",
      bioParagraph1:
        "ಶ್ರೀ ವಿಶ್ವಭಾಸ್ ವಾಸಂತ್ ವೇದ್ಯರು 15 ವರ್ಷಕ್ಕೂ ಹೆಚ್ಚು ಸಮಯದಿಂದ ಸೌಂದತ್ತಿ ಯಲ್ಲಮ್ಮ ಕ್ಷೇತ್ರಕ್ಕೆ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಿರುವ ಸಮರ್ಪಿತ ಸಾರ್ವಜನಿಕ ಪ್ರತಿನಧಿಯಾಗಿದ್ದಾರೆ. ಅವರು ಈ ಪ್ರದೇಶದಲ್ಲಿ ಹುಟ್ಟಿದವರು ಮತ್ತು ಸಮುದಾಯದ ಅರಿವು, ಗ್ರಾಮೀಣ ಕರ್ನಾಟಕದ ಸವಾಲುಗಳು ಮತ್ತು ಆಶೆಗಳು ಅವರ ಹೃದಯದಲ್ಲಿಯೇ ಇವೆ.",
      bioParagraph2:
        "ಕಾನೂನು ಮತ್ತು ಸಾಮಾಜಿಕ ಕಾರ್ಯಶಾಸ್ತ್ರದಲ್ಲಿ ಅವರ ಶಿಕ್ಷಣವನ್ನು ಪೂರ್ಣಗೊಳಿಸಿದ ನಂತರ, ಶ್ರೀ ವೇಧ್ಯರು ಸಾಮಾಜಿಕ ಕಾರ್ಯಕರ್ತರಾಗಿ ಕಾರ್ಯರಂಗದೊಳಗೆ ಪ್ರವೇಶಿಸಿದರು. ಅವರು ರೈತರು, ಮಹಿಳೆಯರು ಮತ್ತು ಹಿಂದುಳಿದ ಸಮುದಾಯಗಳ ಜೀವನವನ್ನು ಸುಧಾರಿಸಲು ಶ್ರಮಿಸಿದರು. ಜಲ ಸಂರಕ್ಷಣಾ ಕಾರ್ಯಗಳು, ಕೃಷಿ ಅಭಿವೃದ್ಧಿ ಮತ್ತು ಗ್ರಾಮೀಣ ಶಿಕ್ಷಣದ ಕಾರ್ಯಗಳು ಅವರ ರಾಜಕೀಯ ವೃತ್ತಿಗೆ ಬಲಭದ್ರತೆ ನೀಡಿದವು.",
      bioParagraph3:
        "2010ರಲ್ಲಿ ಮೊದಲ ಚುನಾವಣೆ ಜಯಿಸಿದ ನಂತರ, ಶ್ರೀ ವೇಧ್ಯರು ಗ್ರಾಮೀಣ ಅಭಿವೃದ್ಧಿ, ಮೂಲಸೌಕರ್ಯ ಸುಧಾರಣೆ ಮತ್ತು ಸಾಮಾಜಿಕ ಕಲ್ಯಾಣಕ್ಕಾಗಿ ಶಕ್ತಿ ವಹಿಸಿದರು. ಅವರ ಯೋಜನೆಗಳು ಕ್ಷೇತ್ರದ ಹಳ್ಳಿಗಳಲ್ಲಿ ಉತ್ತಮ ರಸ್ತೆ ಸಂಪರ್ಕ, ಉನ್ನತ ಆರೋಗ್ಯಸೌಕರ್ಯ, ಉತ್ತಮ ನೀರಿನ ಸರಬರಾಜು ಮತ್ತು ವಿಸ್ತೃತ ಶಿಕ್ಷಣ ಅವಕಾಶಗಳನ್ನು ತಂದವು.",
      bioParagraph4:
        "ಅವರಿಗೆ ಸಮುದಾಯದೊಡನೆ ಪರ್ಕೃತ ಸಂಪರ್ಕ ಮತ್ತು ನಿಷ್ಠೆಯಾಗಿದೆ, ಶ್ರೀ ವೇಧ್ಯರು ಹಳ್ಳಿಗಳನ್ನು ನಿಯಮಿತವಾಗಿ ಭೇಟಿ ಮಾಡುತ್ತಾರೆ, ಸಾರ್ವಜನಿಕ ಸಭೆಗಳನ್ನು ಆಯೋಜಿಸುತ್ತಾರೆ ಮತ್ತು ಸರ್ಕಾರದ ಯೋಜನೆಗಳನ್ನು ಅಗತ್ಯವಿರುವವರಿಗೆ ತಲುಪಿಸುತ್ತಾರೆ. ಅವರ ದೃಷ್ಟಿ ಸೌಂದತ್ತಿ ಯಲ್ಲಮ್ಮ ಕ್ಷೇತ್ರವನ್ನು ಸ್ಥಿರವಾದ ಗ್ರಾಮೀಣ ಅಭಿವೃದ್ಧಿಯ ಮಾದರಿಯಾಗಿಸುವುದು.",
      achievementsTitle: "ಮುಖ್ಯ ಸಾಧನೆಗಳು",
      developmentHeading: "ಸೌಂದತ್ತಿ ಯಲ್ಲಮ್ಮ ಕ್ಷೇತ್ರದ ಅಭಿವೃದ್ಧಿ",
      selectVillageLabel: "ವಿಕಾಸ ಚಟುವಟಿಕೆಗಳನ್ನು ವೀಕ್ಷಿಸಲು ಗ್ರಾಮವನ್ನು ಆಯ್ಕೆಮಾಡಿ:",
      chooseVillagePlaceholder: "-- ಒಂದು ಗ್ರಾಮವನ್ನು ಆಯ್ಕೆಮಾಡಿ --",
      developmentActivitiesTitle: "ಗಾಂವದಲ್ಲಿ ಅಭಿವೃದ್ಧಿ ಚಟುವಟಿಕೆಗಳು",
      chooseVillageNotice: "ಅಭಿವೃದ್ಧಿ ಚಟುವಟಿಕೆಗಳನ್ನು ವೀಕ್ಷಿಸಲು ದಯವಿಟ್ಟು ಡ್ರಾಪ್ಡೌನ್‌ನಿಂದ ಒಂದು ಗ್ರಾಮವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      currentFocusHeading: "ಪ್ರಸ್ತುತ ಗಮನ ಕೇಂದ್ರಗಳು",
      focusInfrastructure: "ಗ್ರಾಮೀಣ ಮೂಲಸೌಕರ್ಯ",
      focusInfrastructureText: "ಎಲ್ಲಾ ಹಳ್ಳಿಗಳಲ್ಲಿ ರಸ್ತೆ ಸಂಪರ್ಕ ಮತ್ತು ಮೂಲ ಸೌಕರ್ಯಗಳನ್ನು ಸುಧಾರಿಸುವುದು",
      focusFarmerWelfare: "ರೈತ ಕಲ್ಯಾಣ",
      focusFarmerWelfareText: "ಆಧುನಿಕ ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ಸಬ್ಸಿಡಿಗಳ ಮೂಲಕ ಕೃಷಿ ಅಭಿವೃದ್ಧಿಗೆ ಬೆಂಬಲ ನೀಡುವುದು",
      focusEducationHealthcare: "ಶಿಕ್ಷಣ ಮತ್ತು ಆರೋಗ್ಯ",
      focusEducationHealthcareText: "ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣ ಮತ್ತು ವೈದ್ಯಕೀಯ ಸೌಲಭ್ಯಗಳಿಗೆ ಪ್ರವೇಶವನ್ನು ವಿಸ್ತರಿಸುವುದು",
      featuredSlide: "{{current}} ರಲ್ಲಿ {{total}} ವೈಶಿಷ್ಟ್ಯಪೂರ್ಣ ಚಿತ್ರ",
      activityDateLabel: "ತಾರೀಕು",
      activityStatus: {
        completed: "ಸಂಪೂರ್ಣ",
        ongoing: "ನಡೆಯುತ್ತಿರುವ",
        inProgress: "ಪ್ರಗತಿಯಲ್ಲಿ",
        planning: "ಯೋಜನೆಯಲ್ಲಿ",
      },
    },
    development: {
      summary: {
        totalWorks: "ಒಟ್ಟೂ ಕೆಲಸಗಳು",
        budgetSpent: "ದಾಖಲಿಸಿದ ಬಜೆಟ್",
        completedOngoing: "ಸಂಪೂರ್ಣ / ನಡೆಯುತ್ತಿರುವ",
        completionRate: "ಪೂರ್ಣತೆಗೆ %",
        projectsTracked: "ಸೌಂದತ್ತಿ ಯಲ್ಲಮ್ಮದಲ್ಲಿ ಪೂರಿತ ಯೋಜನೆಗಳು",
        approvedExpenditure: "ಈ ಆರ್ಥಿಕ ವರ್ಷಕ್ಕೆ ಅನುಮೋದಿತ ವೆಚ್ಚ",
        activityStatus: "ಅಭಿವೃದ್ಧಿ ಚಟುವಟಿಕೆ ಸ್ಥಿತಿ",
      },
      analytics: {
        title: "ವಿಶ್ಲೇಷಣೆ",
        subtitle: "API-ಸಿದ್ಧ ರಚನೆಯೊಂದಿಗೆ ಲೈವ್ ಡೇಟಾ ವೀಕ್ಷಣೆ.",
        costYear: "ಖರ್ಚು ವಿರುದ್ಧ ವರ್ಷ",
        categoryDistribution: "ವರ್ಗ ವಿಂಗಡಣೆ",
        villageProgress: "ಗ್ರಾಮಪ್ರಕಾರ ಪ್ರಗತಿ",
        completedOngoing: "ಸಂಪೂರ್ಣ vs ನಡೆಯುತ್ತಿರುವ",
      },
      filters: {
        title: "ಫಿಲ್ಟರ್ಗಳು",
        subtitle: "ವಿಕಾಸ ಕೆಲಸಗಳ ಪಟ್ಟಿಯನ್ನು ನೇರಗೊಳಿಸಲು ಫಿಲ್ಟರ್ಗಳನ್ನು ಬಳಸಿ.",
        village: "ಗ್ರಾಮ / ಪಂಚಾಯತ್ / ತಾಲೂಕು",
        category: "ವर्ग",
        year: "ವರ್ಷ",
        status: "ಸ್ಥಿತಿ",
        options: {
          allVillages: "ಎಲ್ಲಾ ಗ್ರಾಮಗಳು",
          allCategories: "ಎಲ್ಲಾ ವಿಭಾಗಗಳು",
          all: "ಎಲ್ಲಾ",
          completed: "ಸಂಪೂರ್ಣ",
          ongoing: "ನಡೆಯುತ್ತಿರುವ",
          planning: "ಯೋಜನೆಯಲ್ಲಿ",
        },
        categoryOptions: {
          water: "ನೀರಾ",
          road: "ರಸ್ತೆ",
          health: "ಆರೋಗ್ಯ",
          education: "ಶಿಕ್ಷಣ",
        },
      },
      status: {
        completed: "ಸಂಪೂರ್ಣ",
        ongoing: "ನಡೆಯುತ್ತಿರುವ",
        inProgress: "ಪ್ರಗತಿಯಲ್ಲಿ",
        planning: "ಯೋಜನೆಯಲ್ಲಿ",
      },
      list: {
        title: "ಅಭಿವೃದ್ಧಿ ಪಟ್ಟಿ",
        subtitle: "ಪ್ರಗತಿಯಲ್ಲಿರುವ ಕೆಲಸಗಳು",
        columns: {
          workName: "ಕೆಲಸದ ಹೆಸರು",
          village: "ಗ್ರಾಮ",
          cost: "ವೆಚ್ಚ",
          status: "ಸ್ಥಿತಿ",
        },
        recordCount: "{{count}} ದಾಖಲೆಗಳನ್ನು ತೋರಿಸಲಾಗುತ್ತಿದೆ",
      },
      details: {
        title: "ಕೆಲಸದ ವಿವರಗಳು",
        timelineTitle: "ಟೈಮ್‌ಲೈನ್",
        village: "ಗ್ರಾಮ",
        budget: "ಬಜೆಟ್",
        status: "ಸ್ಥಿತಿ",
      },
      map: {
        title: "ನಕ್ಷೆ ನೋಟ",
        subtitle: "ತಾಲೂಕುಗಳ ವರೆಗಿನ ಕಾಮಗಾರಿಗಳನ್ನು ಭೌಗೋಳಿಕವಾಗಿ ಗುರುತಿಸಲಾಗಿದೆ. ತಾಲೂಕನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿದರೆ ಜನಸಂಖ್ಯೆ ಮತ್ತು ಮನೆಗಳ ಸಂಖ್ಯೆ ತೋರಿಸುತ್ತದೆ.",
        sampleTitle: "ನಕ್ಷೆ ಮೇಲಿನ ಮಾದರಿ ತಾಲೂಕು",
        sampleText: "ತಾಲೂಕು: ಸೌಂದತ್ತಿ | ಜನಸಂಖ್ಯೆ: 28,400 | ಮನೆಗಳು: 6,520",
      },
    },
  },
};

function getTranslation(language: Language, key: string) {
  const parts = key.split(".");
  let current: any = translations[language];

  for (const part of parts) {
    if (current && typeof current === "object" && part in current) {
      current = current[part];
    } else {
      if (language === "en") {
        return key;
      }
      return getTranslation("en", key);
    }
  }

  return current;
}

const LanguageContext = createContext<LanguageContextValue>({
  language: "en",
  setLanguage: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const getInitialLanguage = (): Language => {
    const saved = window.localStorage.getItem("language")?.trim();
    if (saved === "en" || saved === "kn") {
      return saved;
    }

    if (typeof navigator !== "undefined" && navigator.language.startsWith("kn")) {
      return "kn";
    }

    return "en";
  };

  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem("language", language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (key: string) => getTranslation(language, key),
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
