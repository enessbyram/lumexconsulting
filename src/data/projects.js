import gymSystem from "../assets/images/gym-system.png";
import realEstateSystem from "../assets/images/saling-system.png";
import programSystem from "../assets/images/program-system.png";
import communitySystem from "../assets/images/community-system.png";
import tutoringSystem from "../assets/images/tutoring-system.png";

// Each project stores i18n translation keys for all text content.
// Use these keys with the `t()` function from react-i18next.
// Example: t(project.titleKey) => "Lumex Tutoring Center Management System"
export const projectsData = [
  {
    id: "lumex-tutoring-center",
    titleKey: "services.lumexTutoringCenter.title",
    shortDescKey: "services.lumexTutoringCenter.shortDesc",
    fullDescKey: "services.lumexTutoringCenter.fullDesc",
    featuresKey: "services.lumexTutoringCenter.features",
    technologies: ["Next.js", "React", "MySQL (TiDB)", "Tailwind CSS"],
    githubLink: "https://github.com/enessbyram/lumex-tutoring-center-system",
    demoLink: "https://lumex-tutoring-center-system.vercel.app/",
    image: tutoringSystem,
  },
  {
    id: "universite-topluluk-bilgi-sistemi",
    titleKey: "services.universityCommunitySystem.title",
    shortDescKey: "services.universityCommunitySystem.shortDesc",
    fullDescKey: "services.universityCommunitySystem.fullDesc",
    featuresKey: "services.universityCommunitySystem.features",
    technologies: ["Next.js", "React", "Tailwind CSS", "MySQL"],
    githubLink: "https://github.com/enessbyram/lumex-community-system",
    demoLink: "https://lumex-community-system.vercel.app/",
    image: communitySystem,
  },
  {
    id: "gym-randevu-sistemi",
    titleKey: "services.gymAppointmentSystem.title",
    shortDescKey: "services.gymAppointmentSystem.shortDesc",
    fullDescKey: "services.gymAppointmentSystem.fullDesc",
    featuresKey: "services.gymAppointmentSystem.features",
    technologies: ["React", "Node.js", "MySQL", "Tailwind CSS"],
    githubLink: "https://github.com/enessbyram/gym-system",
    demoLink: "https://gym-system.infinityfreeapp.com/?i=1",
    image: gymSystem,
  },
  {
    id: "ev-araba-satis-platformu",
    titleKey: "services.realEstateCarSales.title",
    shortDescKey: "services.realEstateCarSales.shortDesc",
    fullDescKey: "services.realEstateCarSales.fullDesc",
    featuresKey: "services.realEstateCarSales.features",
    technologies: ["React", "Tailwind CSS", "PHP", "MySQL"],
    githubLink: "/coming-soon",
    demoLink: "/coming-soon",
    image: realEstateSystem,
  },
  {
    id: "smart-program-system",
    titleKey: "services.smartProgramSystem.title",
    shortDescKey: "services.smartProgramSystem.shortDesc",
    fullDescKey: "services.smartProgramSystem.fullDesc",
    featuresKey: "services.smartProgramSystem.features",
    technologies: ["Next.js", "React", "Node.js", "MySQL", "Tailwind CSS"],
    githubLink: "/coming-soon",
    demoLink: "/coming-soon",
    image: programSystem,
  },
];