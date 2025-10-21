// Clean, validated Menu Data with Multilingual Support (A la Carte only)
const menuData = {
  translations: {
    tr: {
      welcome: "Hoş Geldiniz",
      welcomeSubtitle: "Aurum Restaurant'a",
      alacarteMenu: "A la Carte Menü",
      alacarteDesc: "Ana yemekler, salatalar, tatlılar",
      beverageMenu: "İçecek Menüsü",
      wineMenu: "Şarap Menüsü",
      comingSoon: "Yakında Gelecek",
      alacarteMenuTitle: "A la Carte Menü",
      mainDishes: "Ana Yemekler",
      salads: "Salatalar",
      desserts: "Tatlılar",
      appetizers: "Mezeler",
      soups: "Çorbalar",
      allergens: "Alerjenler",
      back: "Geri"
    },
    en: {
      welcome: "Welcome",
      welcomeSubtitle: "to Aurum Restaurant",
      alacarteMenu: "A la Carte Menu",
      alacarteDesc: "Main courses, salads, desserts",
      beverageMenu: "Beverage Menu",
      wineMenu: "Wine Menu",
      comingSoon: "Coming Soon",
      alacarteMenuTitle: "A la Carte Menu",
      mainDishes: "Main Courses",
      salads: "Salads",
      desserts: "Desserts",
      appetizers: "Starters",
      soups: "Soups",
      allergens: "Allergens",
      back: "Back"
    },
    bg: {
      welcome: "Добре дошли",
      welcomeSubtitle: "в ресторант Aurum",
      alacarteMenu: "А ла карт меню",
      alacarteDesc: "Основни ястия, салати, десерти",
      beverageMenu: "Меню за напитки",
      wineMenu: "Винено меню",
      comingSoon: "Очаквайте скоро",
      alacarteMenuTitle: "А ла карт меню",
      mainDishes: "Основни ястия",
      salads: "Салати",
      desserts: "Десерти",
      appetizers: "Предястия",
      soups: "Супи",
      allergens: "Алергени",
      back: "Назад"
    },
    el: {
      welcome: "Καλώς ήρθατε",
      welcomeSubtitle: "στο εστιατόριο Aurum",
      alacarteMenu: "Μενού Α λα Καρτ",
      alacarteDesc: "Κύρια πιάτα, σαλάτες, επιδόρπια",
      beverageMenu: "Μενού Ποτών",
      wineMenu: "Μενού Κρασιού",
      comingSoon: "Έρχεται Σύντομα",
      alacarteMenuTitle: "Μενού Α λα Καρτ",
      mainDishes: "Κύρια Πιάτα",
      salads: "Σαλάτες",
      desserts: "Επιδόρπια",
      appetizers: "Ορεκτικά",
      soups: "Σούπες",
      allergens: "Αλλεργιογόνα",
      back: "Πίσω"
    }
  },

  categories: {
    mainDishes: {
      tr: "Ana Yemekler",
      en: "Main Courses",
      bg: "Основни ястия",
      el: "Κύρια Πιάτα",
      items: [
        {
          name: { tr: "Kuzu Pirzola", en: "Lamb Chops", bg: "Агнешки котлети", el: "Αρνίσια Παϊδάκια" },
          description: { tr: "Kuzu pirzola, patates püresi ve mevsim sebzeleri ile servis edilir", en: "Lamb chops with eggplant puree and seasonal vegetables", bg: "Агнешки котлети с патладжанено пюре и сезонни зеленчуци", el: "Αρνίσια παϊδάκια με πουρέ μελιτζάνας και εποχιακά λαχανικά" },
          weight: "280g",
          price: 70.0,
          allergens: { tr: "Yok", en: "None", bg: "Няма", el: "Καμία" }
        },
        {
          name: { tr: "Dana Bonfile", en: "Beef Tenderloin with Garnish", bg: "Говеждо филе", el: "Μοσχαρίσιο φιλέτο" },
          description: { tr: "Dana bonfile, patates püresi ve mevsim sebzeleri ile servis edilir", en: "Beef tenderloin with mashed potatoes and seasonal vegetables", bg: "Говеждо филе с пюре и сезонни зеленчуци", el: "Μοσχαρίσιο φιλέτο με πατάτες πουρέ και εποχιακά λαχανικά" },
          weight: "220g",
          price: 50.0,
          allergens: { tr: "Süt ürünleri", en: "Dairy products", bg: "Млечни продукти", el: "Γαλακτοκομικά προϊόντα" }
        },
        {
          name: { tr: "Levrek Izgara", en: "Grilled Sea Bass", bg: "Лаврак на скара", el: "Λαβράκι στη σχάρα" },
          description: { tr: "Levrek ızgara, mevsim sebzeleri ve havuç püresi ile servis edilir", en: "Grilled sea bass with seasonal vegetables and carrot puree", bg: "Лаврак на скара със сезонни зеленчуци и морковено пюре", el: "Λαβράκι στη σχάρα με εποχιακά λαχανικά και πουρέ καρότου" },
          weight: "300g",
          price: 48.0,
          allergens: { tr: "Balık", en: "Fish", bg: "Риба", el: "Ψάρι" }
        },
        {
          name: { tr: "Fırında Somon", en: "Baked Salmon", bg: "Печен сьомга", el: "Ψητός Σολομός" },
          description: { tr: "Fırında somon, mevsim sebzeleri ve havuç püresi ile servis edilir", en: "Baked salmon with seasonal vegetables and carrot puree", bg: "Печен сьомга със сезонни зеленчуци и морковено пюре", el: "Ψητός σολομός με εποχιακά λαχανικά και πουρέ καρότου" },
          weight: "250g",
          price: 65.0,
          allergens: { tr: "Balık", en: "Fish", bg: "Риба", el: "Ψάρι" }
        }
      ]
    },
    appetizers: {
      tr: "Mezeler",
      en: "Starters",
      bg: "Предястия",
      el: "Ορεκτικά",
      items: [
        {
          name: { tr: "Akdeniz Salata", en: "Mediterranean Salad", bg: "Средиземноморска салата", el: "Μεσογειακή Σαλάτα" },
          description: { tr: "Doğranmış sebzeler, zeytinler, peynir ve en hafif sos", en: "Chopped vegetables, olives, cheese, and the simplest light dressing", bg: "Нарязани зеленчуци, маслини, сирене и най-простият лек дресинг", el: "Ψιλοκομμένα λαχανικά, ελιές, τυρί και η πιο απλή ελαφριά σάλτσα" },
          weight: "150g",
          price: 19.0,
          allergens: { tr: "Süt ürünleri", en: "Dairy products", bg: "Млечни продукти", el: "Γαλακτοκομικά προϊόντα" }
        },
        {
          name: { tr: "Sezar Salata", en: "Caesar Salad", bg: "Салата Цезар", el: "Σαλάτα Καίσαρα" },
          description: { tr: "Marul, krutonlar ve ev yapımı Sezar sosu", en: "Lettuce, croutons with homemade Caesar dressing", bg: "Маруля и крутони с домашен сос Цезар", el: "Μαρούλι, κρουτόν με σπιτική σάλτσα Καίσαρα" },
          weight: "180g",
          price: 22.0,
          allergens: { tr: "Gluten, yumurta, süt ürünleri", en: "Gluten, eggs, dairy products", bg: "Глутен, яйца, млечни продукти", el: "Γλουτένη, αυγά, γαλακτοκομικά προϊόντα" }
        },
        {
          name: { tr: "Mozzarella Salata", en: "Mozzarella Salad", bg: "Салата моцарела", el: "Σαλάτα Μοτσαρέλα" },
          description: { tr: "120 g mozarella, bahçe domatesleri ve pesto sosu", en: "120 g mozzarella with garden tomatoes and pesto sauce", bg: "120 г моцарела с градински домати и песто сос", el: "120 γρ μοτσαρέλα με ντομάτες κήπου και σάλτσα πέστο" },
          weight: "120g",
          price: 15.0,
          allergens: { tr: "Süt ürünleri", en: "Dairy products", bg: "Млечни продукти", el: "Γαλακτοκομικά προϊόντα" }
        },
        {
          name: { tr: "Shopska Salata", en: "Shopska Salad", bg: "Шопска салата", el: "Σαλάτα Shopska" },
          description: { tr: "Domates, salatalık, soğan ve feta", en: "Tomatoes, cucumbers, onion and feta", bg: "Домати, краставици, лук и сирене фета", el: "Ντομάτες, αγγούρια, κρεμμύδι και φέτα" },
          weight: "150g",
          price: 12.0,
          allergens: { tr: "Süt ürünleri", en: "Dairy products", bg: "Млечни продукти", el: "Γαλακτοκομικά προϊόντα" }
        }
      ]
    },
    desserts: {
      tr: "Tatlılar",
      en: "Desserts",
      bg: "Десерти",
      el: "Επιδόρπια",
      items: [
        {
          name: { tr: "Türk Tatlı Tabağı", en: "Turkish Dessert Plate", bg: "Турска сладка чиния", el: "Τουρκικό πιάτο επιδορπίων" },
          description: { tr: "Taze hazırlanmış Türk tatlı tabağı", en: "Freshly prepared Turkish dessert plate", bg: "Прясно приготвен набор от турски десерти", el: "Φρεσκοπαρασκευασμένο τουρκικό πιάτο επιδορπίων" },
          weight: "150g",
          price: 12.0,
          allergens: { tr: "Süt ürünleri, fındık", en: "Dairy products, nuts", bg: "Млечни продукти, ядки", el: "Γαλακτοκομικά προϊόντα, ξηροί καρποί" }
        },
        {
          name: { tr: "Cheesecake", en: "Cheesecake", bg: "Чийзкейк", el: "Τσιζκέικ" },
          description: { tr: "Cheesecake limon veya frambuaz ile", en: "Cheesecake with lemon or raspberry", bg: "Чийзкейк с лимон или малини", el: "Τσιζκέικ με λεμόνι ή σμέουρο" },
          weight: "120g",
          price: 12.0,
          allergens: { tr: "Süt ürünleri, yumurta, gluten", en: "Dairy products, eggs, gluten", bg: "Млечни продукти, яйца, глутен", el: "Γαλακτοκομικά προϊόντα, αυγά, γλουτένη" }
        },
        {
          name: { tr: "Brownie", en: "Brownie", bg: "Брауни", el: "Μπράουνι" },
          description: { tr: "Çikolatalı brownie, vanilyalı dondurma ile", en: "Chocolate brownie with ice cream", bg: "Шоколадов брауни с ванилов сладолед", el: "Σοκολατένιο μπράουνι με παγωτό βανίλια" },
          weight: "120g",
          price: 12.0,
          allergens: { tr: "Süt ürünleri, yumurta, gluten", en: "Dairy products, eggs, gluten", bg: "Млечни продукти, яйца, глутен", el: "Γαλακτοκομικά προϊόντα, αυγά, γλουτένη" }
        },
        {
          name: { tr: "Tiramisu", en: "Tiramisu", bg: "Тирамису", el: "Τиραμισού" },
          description: { tr: "Geleneksel İtalyan tatlısı, mascarpone peyniri, espresso ve kakao tozuyla", en: "Traditional Italian dessert with mascarpone cheese, espresso and cocoa powder", bg: "Традиционен италиански десерт с маскарпоне, еспресо и какао на прах", el: "Παραδοσιακό ιταλικό επιδόρπιο με τυρί μασκαρπόνε, εσπρέσο και κακάο σκόνη" },
          weight: "120g",
          price: 12.5,
          allergens: { tr: "Süt ürünleri, yumurta, gluten", en: "Dairy products, eggs, gluten", bg: "Млечни продукти, яйца, глутен", el: "Γαλακτοκομικά προϊόντα, αυγά, γλουτένη" }
        },
        {
          name: { tr: "Çikolatalı Sufle", en: "Chocolate Souffle", bg: "Шоколадово суфле", el: "Σουφλέ Σοκολάτας" },
          description: { tr: "Sıcak çikolatalı sufle, vanilyalı dondurma ve çilek soslu. 15 dakika hazırlık süresi", en: "Hot chocolate souffle with vanilla ice cream and strawberry sauce. 15 minutes preparation time", bg: "Горещо шоколадово суфле с ванилов сладолед и ягодов сос. 15 минути време за приготвяне", el: "Ζεστό σουφλέ σοκολάτας με παγωτό βανίλια και σάλτσα φράουλας. 15 λεπτά χρόνος προετοιμασίας" },
          weight: "150g",
          price: 15.9,
          allergens: { tr: "Süt ürünleri, yumurta, gluten", en: "Dairy products, eggs, gluten", bg: "Млечни продукти, яйца, глутен", el: "Γαλακτοκομικά προϊόντα, αυγά, γλουτένη" }
        }
      ]
    }
  }
};