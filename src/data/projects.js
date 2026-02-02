// src/data/projects.js
import gymSystem from '../assets/images/gym-system.png';
import realEstateSystem from '../assets/images/saling-system.png'; // Emlak görselin

export const projectsData = [
  {
    id: "gym-randevu-sistemi",
    title: "gym randevu sistemi",
    shortDesc: "fitness salonları için tam entegre üye yönetimi, kişisel antrenör randevuları ve online ödeme.",
    fullDesc: "modern fitness salonları için tasarlanmış kapsamlı bir yönetim platformu. üye kayıt ve takip sistemi, kişisel antrenör randevu yönetimi, online ödeme altyapısı, beslenme programı takibi ve performans analitiği içerir. responsive tasarımı sayesinde hem web hem mobil cihazlarda kusursuz çalışır.",
    features: [
      "üye yönetim sistemi ve profil takibi",
      "kişisel antrenör randevu takvimi",
      "online ödeme ve abonelik yönetimi",
      "beslenme programı ve kalori takibi",
      "performans analitikleri ve raporlar",
      "mobil uygulama desteği"
    ],
    technologies: ["react", "node.js", "mysql", "tailwind"],
    githubLink: "#",
    demoLink: "#",
    image: gymSystem
  },
  {
    id: "ev-araba-satis-platformu",
    title: "ev & araba satış platformu",
    shortDesc: "gayrimenkul ve araç alım-satım platformu, detaylı filtreleme ve güvenli mesajlaşma.",
    fullDesc: "hem gayrimenkul hem de araç satışı için tasarlanmış çift taraflı marketplace platformu. gelişmiş filtreleme sistemi, coğrafi konum bazlı arama, anlık mesajlaşma, fiyat takip sistemi ve güvenli ödeme altyapısı ile kullanıcılarına en iyi deneyimi sunar.",
    features: [
      "çift kategorili marketplace (ev & araba)",
      "gelişmiş filtreleme ve arama sistemi",
      "harita tabanlı konum görüntüleme",
      "anlık mesajlaşma sistemi",
      "fiyat takip ve bildirim sistemi",
      "güvenli ödeme ve emanet sistemi"
    ],
    technologies: ["react", "tailwind", "php", "mysql"],
    githubLink: "#",
    demoLink: "#",
    image: realEstateSystem
  }
];