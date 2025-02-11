export interface PortfolioItem {
    title: string;
    website?: string;
    displayImage?: string;
    displayVideo?: string;
    description: string[];
    appStoreLink?: string;
    playStoreLink?: string;
  }
  
  export const portfolioItems: PortfolioItem[] = [
    {
      title: "Iveez Landing Page",
      displayVideo: "/assets/iveez-landing-recording.mp4",
      website: "https://iveezapp.web.app/",
      description: [
        "Freelance Lead Developer",
        "React/ Three.js",
        "React Three Fiber",
        "Animation with GSAP",
        "React Three Drei",
        "Tailwind CSS",
        "GLTF 3D Models"
      ]
    },
    {
      title: "Taxibokko",
      displayVideo: "/assets/taxibokko.mp4",
      description: [
        "Co-founder and Lead Developer",
        "Development project for a car-sharing application called Taxibokko",
        "FIGMA for UI/UX Design",
        "Integration of Google API",
        "Front & Back End development utilizing Ionic-angular, nodeJs, and Firebase"
      ]
    },
    {
      title: "Microfinance Digitale",
      website: "https://microfinance-digitale-codecrafter-oytr2c9lg.vercel.app/home",
      displayImage: "https://github.com/papabaab/papabaab/assets/46681748/f94d7ba0-484f-4c34-a96a-89d49b9238ad",
      description: [
        "Prototyping with Figma",
        "Front-end with Angular, Tailwind, Sass, Angular Material",
        "Backend App with Nest.Js",
        "Integration of GEMINI as an AI assistant for the analysis",
        "CI/CD with Github Actions + Docker",
        "Deployed to Render (backend app)",
        "Deployed to Vercel (Frontend app)"
      ]
    },
    {
      title: "RV-ACD (Rassemblement pour la Vérité)",
      website: "https://rv-acd.com",
      displayImage: "https://github.com/papabaab/papabaab/assets/46681748/627a62c7-d5f6-4901-b011-fe0671112140",
      description: [
        "Website of the Senegalese Political Party RV-ACD",
        "Front-end with Angular 17, Sass",
        "Integration of Firebase Services",
        "Firebase Storage",
        "FireStore",
        "Firebase Hosting"
      ]
    },
    {
      title: "Iveez (E-commerce Hybrid Mobile App)",
      displayImage: "https://github.com/papabaab/papabaab/assets/46681748/99ac1a89-2215-406f-8972-4e577e059fec",
      description: [
        "Designed, developed, and deployed an e-commerce hybrid mobile app (iOS & Android)",
        "UI/UX Design with FIGMA",
        "Front End development with Ionic-Angular",
        "HTML, SCSS, TypeScript, JavaScript, NodeJS",
        "Capacitor/Cordova, Android Studio, Xcode",
        "Integration of Firebase Services",
        "Google Cloud Services implementation",
        "Agile-oriented task management with TRELLO"
      ],
      appStoreLink: "https://apps.apple.com/us/app/iveez/id1638195131?itsct=apps_box_link&itscg=30200",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.iveez.app"
    }
  ];
