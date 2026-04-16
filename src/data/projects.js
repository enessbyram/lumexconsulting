import gymSystem from "../assets/images/gym-system.png";
import realEstateSystem from "../assets/images/saling-system.png";
import todoApp from "../assets/images/todo-app.png";
import communitySystem from "../assets/images/community-system.png";
import tutoringSystem from "../assets/images/tutoring-system.png"; // Görseli bu isimle ekleyebilirsin

export const projectsData = [
  {
    id: "lumex-tutoring-center",
    title: "Lumex Eğitim Kurumları Yönetim Sistemi",
    shortDesc:
      "Eğitim kurumları için geliştirilmiş; öğrenci takibi, ders programı yönetimi ve sınav sonuç analizi sunan kapsamlı bir platform.",
    fullDesc:
      "Eğitim merkezlerinin dijital dönüşümü için tasarlanmış modern bir yönetim panelidir. Next.js App Router mimarisi ve TiDB Cloud veritabanı altyapısı kullanılarak geliştirilmiştir. Sistem; ders programı oluşturma, ödev atama ve teslim süreçleri, anlık mesajlaşma, yoklama takibi ve sınav sonuç raporlama gibi kritik süreçleri tek bir platformda toplar.",
    features: [
      "Ders programı ve haftalık çizelge yönetimi",
      "Ödev atama, teslim ve geri bildirim sistemi",
      "Gelişmiş sınav sonuç analitiği ve raporlama",
      "Öğrenci, öğretmen ve admin panelleri",
      "TiDB Cloud ile güvenli bulut veritabanı entegrasyonu",
      "Modern UI/UX tasarımı ve mobil uyumluluk",
    ],
    technologies: ["Next.js", "React", "MySQL (TiDB)", "Tailwind CSS"],
    githubLink: "https://github.com/enessbyram/lumex-tutoring-center-system",
    demoLink: "https://lumex-tutoring-center-system.vercel.app/",
    image: tutoringSystem,
  },
  {
    id: "universite-topluluk-bilgi-sistemi",
    title: "Üniversite Topluluk Bilgi Sistemi",
    shortDesc:
      "Üniversite öğrenci toplulukları için geliştirilmiş; 4 farklı yetki seviyesine sahip kapsamlı yönetim ve etkinlik platformu.",
    fullDesc:
      "Kampüs hayatını dijitalleştiren ve süreçleri hızlandıran modern bir topluluk bilgi sistemi. Next.js App Router mimarisi kullanılarak tam teşekküllü geliştirilmiştir. Sistemde; standart öğrenciler, topluluk yönetim kurulları, akademik danışmanlar ve SKS idari personeli için özel tasarlanmış dört farklı yönetim paneli bulunur. Etkinlik başvuruları, üye onayları ve kurumsal hafıza gibi tüm süreçler hiyerarşik bir şekilde yönetilir.",
    features: [
      "4 farklı kullanıcı rolü ve role özel dashboard ekranları",
      "Hiyerarşik etkinlik ve belge onay mekanizması",
      "Dinamik üye ve yönetim kurulu rol kontrolü",
      "Kurumsal hafıza (geçmiş onay/red ve rapor arşivi)",
      "Etkileşimli etkinlik takvimi ve duyuru yönetimi",
      "Gelişmiş UI/UX (Tailwind CSS v4 & Lucide ikonları)",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "MySQL"],
    githubLink: "https://github.com/enessbyram/lumex-community-system",
    demoLink: "https://lumex-community-system.vercel.app/",
    image: communitySystem,
  },
  {
    id: "gym-randevu-sistemi",
    title: "Gym Randevu ve Yönetim Sistemi",
    shortDesc:
      "Fitness salonları için tam entegre üye yönetimi, kişisel antrenör randevuları ve online ödeme altyapısı.",
    fullDesc:
      "Modern fitness salonları için tasarlanmış kapsamlı bir yönetim platformudur. Üye kayıt ve takip sistemi, kişisel antrenör randevu yönetimi, online ödeme altyapısı, beslenme programı takibi ve performans analitiği içerir.",
    features: [
      "Üye yönetim sistemi ve profil takibi",
      "Kişisel antrenör randevu takvimi",
      "Online ödeme ve abonelik yönetimi",
      "Beslenme programı ve kalori takibi",
      "Performans analitikleri ve raporlar",
      "Mobil uygulama desteği",
    ],
    technologies: ["React", "Node.js", "MySQL", "Tailwind CSS"],
    githubLink: "https://github.com/enessbyram/gym-system",
    demoLink: "https://gym-system.infinityfreeapp.com/?i=1",
    image: gymSystem,
  },
  {
    id: "ev-araba-satis-platformu",
    title: "Ev ve Araba Satış Platformu",
    shortDesc:
      "Gayrimenkul ve araç alım-satım platformu, detaylı filtreleme ve güvenli mesajlaşma sistemi.",
    fullDesc:
      "Hem gayrimenkul hem de araç satışı için tasarlanmış çift taraflı Marketplace platformudur. Gelişmiş filtreleme sistemi, coğrafi konum bazlı arama ve kullanıcılar arası anlık mesajlaşma özellikleri sunar.",
    features: [
      "Çift kategorili Marketplace (Ev & Araba)",
      "Gelişmiş filtreleme ve arama sistemi",
      "Harita tabanlı konum görüntüleme",
      "Anlık mesajlaşma sistemi",
      "Fiyat takip ve bildirim sistemi",
    ],
    technologies: ["React", "Tailwind CSS", "PHP", "MySQL"],
    githubLink: "/coming-soon",
    demoLink: "/coming-soon",
    image: realEstateSystem,
  },
];