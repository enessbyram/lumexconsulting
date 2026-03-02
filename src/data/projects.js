import gymSystem from "../assets/images/gym-system.png";
import realEstateSystem from "../assets/images/saling-system.png"; 
import todoApp from "../assets/images/todo-app.png"; 
import communitySystem from "../assets/images/community-system.png"; // <-- Yeni eklendi (Görseli bu isimle klasöre atarsın)

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
  {
    id: "universite-topluluk-bilgi-sistemi",
    title: "üniversite topluluk bilgi sistemi",
    shortDesc:
      "üniversite öğrenci toplulukları için geliştirilmiş; 4 farklı yetki seviyesine sahip kapsamlı yönetim ve etkinlik platformu.",
    fullDesc:
      "kampüs hayatını dijitalleştiren ve süreçleri hızlandıran modern bir topluluk bilgi sistemi. next.js app router mimarisi kullanılarak tam teşekküllü geliştirilmiştir. sistemde; standart öğrenciler, topluluk yönetim kurulları (başkanlar), akademik danışmanlar ve sks idari personeli için özel tasarlanmış dört farklı yönetim paneli (dashboard) bulunur. etkinlik başvuruları, üye onayları, belge yönetimi ve kurumsal hafıza gibi tüm süreçler bu platform üzerinden hiyerarşik bir şekilde yönetilir.",
    features: [
      "4 farklı kullanıcı rolü ve role özel dashboard ekranları",
      "hiyerarşik etkinlik ve belge onay mekanizması",
      "dinamik üye ve yönetim kurulu rol kontrolü",
      "kurumsal hafıza (geçmiş onay/red ve rapor arşivi)",
      "etkileşimli etkinlik takvimi ve duyuru yönetimi",
      "gelişmiş ui/ux (tailwind css v4 & lucide ikonları)"
    ],
    technologies: ["next.js", "react", "tailwind css", "mysql"],
    demoLink: "https://lumex-community-system.vercel.app/",
    githubLink: "https://github.com/enessbyram/lumex-community-system",
    image: communitySystem,
  }
];