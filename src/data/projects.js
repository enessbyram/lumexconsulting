// src/data/projects.js
import gymSystem from "../assets/images/gym-system.png";
import realEstateSystem from "../assets/images/saling-system.png"; 
import todoApp from "../assets/images/todo-app.png"; // Yeni indirdiğin görseli buraya bağla

export const projectsData = [
  {
    id: "modern-todo-app",
    title: "modern to-do app",
    shortDesc:
      "next.js ve tailwind css ile geliştirilmiş, gelişmiş filtreleme ve düzenleme özelliklerine sahip görev yönetim sistemi.",
    fullDesc:
      "modern web geliştirme standartlarına uygun olarak inşa edilmiş bir yapılacaklar listesi uygulaması. next.js app router yapısı kullanılarak geliştirilmiştir. kullanıcıların görev ekleme, listeleme, güncelleme ve silme (crud) işlemlerini yapmasına olanak tanır. veriler localstorage üzerinde saklandığı için sayfa yenilense dahi kaybolmaz. şık tasarımı ve karanlık mod uyumuyla yüksek kullanıcı deneyimi sunar.",
    features: [
      "full crud (ekle, listele, güncelle, sil) operasyonları",
      "durum bazlı filtreleme (yapılacaklar, tamamlananlar, silinenler)",
      "localstorage ile kalıcı veri yönetimi",
      "soft-delete (silinenleri geri yükleme) özelliği",
      "responsive ve modern kullanıcı arayüzü",
      "next.js ile optimize edilmiş performans",
    ],
    technologies: ["next.js", "react", "tailwind css", "localstorage"],
    githubLink: "https://github.com/enessbyram/Modern-To-Do-App",
    demoLink: "https://heroic-choux-abbe4e.netlify.app/",
    image: todoApp,
  },
  {
    id: "gym-randevu-sistemi",
    title: "gym randevu sistemi",
    shortDesc:
      "fitness salonları için tam entegre üye yönetimi, kişisel antrenör randevuları ve online ödeme.",
    fullDesc:
      "modern fitness salonları için tasarlanmış kapsamlı bir yönetim platformu. üye kayıt ve takip sistemi, kişisel antrenör randevu yönetimi, online ödeme altyapısı, beslenme programı takibi ve performans analitiği içerir.",
    features: [
      "üye yönetim sistemi ve profil takibi",
      "kişisel antrenör randevu takvimi",
      "online ödeme ve abonelik yönetimi",
      "beslenme programı ve kalori takibi",
      "performans analitikleri ve raporlar",
      "mobil uygulama desteği",
    ],
    technologies: ["react", "node.js", "mysql", "tailwind"],
    githubLink: "https://github.com/enessbyram/gym-system",
    demoLink: "https://gym-system.infinityfreeapp.com/?i=1",
    image: gymSystem,
  },
  {
    id: "ev-araba-satis-platformu",
    title: "ev & araba satış platformu",
    shortDesc:
      "gayrimenkul ve araç alım-satım platformu, detaylı filtreleme ve güvenli mesajlaşma.",
    fullDesc:
      "hem gayrimenkul hem de araç satışı için tasarlanmış çift taraflı marketplace platformu. gelişmiş filtreleme sistemi, coğrafi konum bazlı arama ve anlık mesajlaşma sunar.",
    features: [
      "çift kategorili marketplace (ev & araba)",
      "gelişmiş filtreleme ve arama sistemi",
      "harita tabanlı konum görüntüleme",
      "anlık mesajlaşma sistemi",
      "fiyat takip ve bildirim sistemi",
    ],
    technologies: ["react", "tailwind", "php", "mysql"],
    githubLink: "/coming-soon",
    demoLink: "/coming-soon",
    image: realEstateSystem,
  },
];