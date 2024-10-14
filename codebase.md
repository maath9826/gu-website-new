# .eslintrc.json

```json
{
  "extends": "next/core-web-vitals"
}

```

# .prettierrc

```
{
  "plugins": ["prettier-plugin-tailwindcss"]
}

```

# .vscode\settings.json

```json
{
  "i18n-ally.localesPaths": ["locales"],
  "i18n-ally.keystyle": "nested"
}

```

# components.json

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

# locales\ar.json

```json
{
  "Layout": {
    "metaData": {
      "title": "تعليم",
      "description": "موقع الكتروني لتعليم",
      "aboutTitle": "عن الجامعة",
      "universityCouncilTitle": "مجلس الجامعة",
      "presidentSpeechTitle": "كلمة رئيس الجامعة"
    },
    "firstTitle": "الزعيم للتـوصيـل السـريـع"
  },
  "PresidentSpeech": {
    "title": "كلمة رئيس الجامعة"
  },
  "UniversityCouncil": {
    "title": "مجلس الجامعة",
    "presidentPosition": "رئيس الجامعة"
  },
  "Common": {
    "generalSuccessMessage": "تم الارسال بنجاح! ",
    "centerizedTitle": "عنوانك المركزي هنا",
    "print": "طباعة",
    "share": "مشاركة",
    "download": "تحميل",
    "loading": "جار الارسال",
    "readMore": "قراءة المزيد",
    "viewMore": "عرض المزيد",
    "gilgameshUniversity": "جامعة كلكامش",
    "ourColleges": "كلياتنا",
    "email": "البريد الإلكتروني",
    "phoneNumber": "رقم الهاتف",
    "address": "عنوان الجامعة",
    "downloadApp": "تحميل تطبيق الجامعة",
    "cards": {
      "uniLife": "الحياة الجامعية",
      "about": "حول الجامعة",
      "academicClassifications": "التصنيفات الأكاديمية",
      "news": "الأخبار والأحداث"
    },
    "Contact": {
      "form": {
        "title": "التواصل معنا",
        "name": "الاسم الكامل",
        "email": "البريد الإلكتروني",
        "phoneNumber": "رقم الهاتف",
        "institution": "اسم المؤسسة",
        "message": "الرسالة",
        "writeHere": "اكتب هنا",
        "writeYourMessage": "اكتب رسالتك هنا",
        "send": "إرسال الرسالة"
      }
    },
    "Map": {
      "openInGoogleMaps": "فتح في خرائط جوجل"
    }
  },

  "Header": {
    "appTitle": "تعليم",
    "localSwitcher": {
      "select a language": "اختر اللغة"
    },
    "googleMapsLocation": "موقعنا على خرائط كوكل",
    "navLinks": {
      "home": "الرئيسية",
      "aboutUniversity": "حول الجامعة",
      "aboutUs": "عن الجامعة",
      "universityCouncil": "مجلس الجامعة",
      "universityPresident": "رئيس الجامعة",
      "assistantPresidentScientific": "مساعد رئيس الجامعة للشؤون العلمية",
      "assistantPresidentAdministrative": "مساعد رئيس الجامعة للشؤون الإدارية",
      "collegeDeans": "عمداء الكليات",
      "presidentSpeech": "كلمة رئيس الجامعة",
      "organizationalStructure": "الهيكل التنظيمي",
      "infrastructure": "البنى التحتية",
      "halls": "القاعات",
      "laboratories": "المختبرات",
      "greenAreas": "المساحات الخضراء",
      "universityLife": "الحياة الجامعية",
      "photoLibrary": "المكتبة الصورية",
      "videoLibrary": "المكتبة الفيديوية",
      "agreementsPartnerships": "الاتفاقيات والشراكات",
      "transparencyPrinciple": "مبدأ الشفافية",
      "universityStrategy": "استراتيجية الجامعة",
      "colleges": "الكليات",
      "academicAffairs": "الشؤون العلمية",
      "scientificPromotions": "الترقيات العلمية",
      "guidelines": "الإرشادات",
      "forms": "النماذج",
      "instructions": "التعليمات",
      "scientificConferences": "المؤتمرات العلمية",
      "scientificJournals": "المجلات العلمية",
      "electronicScientificProduction": "الإنتاج العلمي الإلكتروني",
      "facultyResearch": "بحوث التدريسيين",
      "approvedBooks": "الكتب المؤلفة",
      "scientificMissions": "البعثات العلمية",
      "inventionPatents": "براءات الاختراع",
      "qualityAssurance": "الجودة والأداء الجامعي",
      "universityRankings": "التصنيفات الجامعية",
      "scopus": "سكوبس",
      "googleScholar": "الباحث العلمي",
      "researchGate": "بوابة البحث العلمي",
      "scientificActivities": "الأنشطة العلمية",
      "seminars": "الندوات",
      "workshops": "ورش العمل",
      "courses": "الدورات",
      "forums": "الملتقيات",
      "studentAffairs": "شؤون الطلبة",
      "admissionRegistration": "القبول والتسجيل",
      "admissionConditions": "شروط القبول",
      "registrationMechanism": "آلية التسجيل",
      "studyFees": "الأجور الدراسية",
      "scholarshipsGrants": "المنح والبعثات الدراسية",
      "academicCalendar": "التقويم الجامعي",
      "universityInstructions": "التعليمات الجامعية",
      "studentGuide": "دليل الطالب",
      "outstandingStudents": "الطلبة المتميزون",
      "studentActivities": "الأنشطة الطلابية",
      "studentClubs": "النوادي الطلابية",
      "serviceCenters": "المراكز الخدمية",
      "digitalLibrary": "المكتبة الرقمية",
      "continuingEducationCenter": "مركز التعليم المستمر",
      "careerGuidanceCenter": "مركز الإرشاد الوظيفي",
      "physicalFitnessCenter": "مركز اللياقة البدنية",
      "gilgameshTheater": "مسرح كلكامش",
      "audiovisualHalls": "قاعات الوسائط المتعددة",
      "sportsStadium": "الملعب الرياضي",
      "fiveSidePlaygrounds": "الملاعب الخماسية",
      "trainingHalls": "قاعات التدريب",
      "dentalClinics": "عيادات طب الأسنان",
      "centralLibrary": "المكتبة المركزية",
      "cafeteria": "الكافتيريا",
      "eServices": "الخدمات الإلكترونية",
      "studentPortal": "البوابة الإلكترونية للطلبة",
      "facultyPortal": "البوابة الإلكترونية للتدريسيين",
      "massarPlatform": "منصة مسار",
      "universityDigitalRepository": "المستودع الرقمي للجامعة",
      "electronicPayment": "الدفع الإلكتروني",
      "graduatesPortal": "بوابة الخريجين",
      "graduationConfirmationRequest": "طلب الحصول على تأييد تخرج",
      "graduationDocumentRequest": "طلب الحصول على وثيقة تخرج",
      "transcriptRequest": "طلب الحصول على الشهادة الجدارية",
      "universityIdIssuance": "إصدار الهوية الجامعية",
      "electronicParticipationCertificates": "شهادات المشاركة الإلكترونية",
      "contact": "اتصل بنا",
      "news": "الأخبار",
      "sustainability": "الاستدامة",
      "universityAndCommunity": "الجامعة والمجتمع",
      "graduates": "خريجونا",
      "qualificationEmployment": "التأهيل والتوظيف",
      "consultingClinic": "العيادة الاستشارية",
      "ministryInquiries": "الاستعلامات الالكترونية لوزارة التعليم العالي",
      "surveys": "استطلاعات الرأي",
      "graduateSurvey": "رأي الخريجين",
      "employerSurvey": "رأي أرباب العمل"
    },

    "pageTitles": {
      "home": "الرئيسية",
      "about": "من نحن؟",
      "services": "خدمات الشركة",
      "branches": "فروع الشركة",
      "contact": "تواصل معنا",
      "jobs": "الوظائف الشاغرة",
      "joinUs": "انضم إلينا كتاجر",
      "salesEmployee": "موظف مبيعات",
      "news": "الأخبار"
    },
    "cta": {
      "joinUs": "انضم إلينا",
      "contactUs": "تواصل معنا"
    }
  },
  "Home": {
    "statistics": {
      "title": "احصائيات جامعة كلكامش",
      "students": "عدد الطلبة",
      "facultyMembers": "عدد الكادر التدريسي",
      "administrativeStaff": "عدد الكادر الإداري",
      "technicalStaff": "عدد الكادر الفني والتقني"
    },
    "ourGoals": {
      "title": "اهداف جامعة كلكامش"
    },
    "news": {
      "title": "آخر الأخبار",
      "viewAll": "عرض جميع الاخبار",
      "tags": {
        "contracts": "التعاقدات",
        "alzaeem": "شركة الزعيم"
      },
      "news": [
        {
          "title": "تنتهج شركة الزعيم في عملها تأسيس شراكات فعالة مع شركات ساندة",
          "description": "تنتهج شركة الزعيم في عملها تأسيس شراكات فعالة مع شركات ساندة، تسهم معها في نقل القطاع إلى الإمام، وتطويره ومدّه بالإمكانيات والخبرات والقدرات التقنية المختلفة."
        },
        {
          "title": "تنتهج شركة الزعيم في عملها تأسيس شراكات فعالة مع شركات ساندة",
          "description": "تنتهج شركة الزعيم في عملها تأسيس شراكات فعالة مع شركات ساندة، تسهم معها في نقل القطاع إلى الإمام، وتطويره ومدّه بالإمكانيات والخبرات والقدرات التقنية المختلفة."
        },
        {
          "title": "تنتهج شركة الزعيم في عملها تأسيس شراكات فعالة مع شركات ساندة",
          "description": "تنتهج شركة الزعيم في عملها تأسيس شراكات فعالة مع شركات ساندة، تسهم معها في نقل القطاع إلى الإمام، وتطويره ومدّه بالإمكانيات والخبرات والقدرات التقنية المختلفة."
        },
        {
          "title": "تنتهج شركة الزعيم في عملها تأسيس شراكات فعالة مع شركات ساندة",
          "description": "تنتهج شركة الزعيم في عملها تأسيس شراكات فعالة مع شركات ساندة، تسهم معها في نقل القطاع إلى الإمام، وتطويره ومدّه بالإمكانيات والخبرات والقدرات التقنية المختلفة."
        }
      ]
    },
    "academicRankings": {
      "subtitle": "التصنيفات الاكاديمية",
      "title": "جامعة كلكامش ضمن التصنيفــات الاكاديميــة",
      "note": "للاطلاع على مرتبة الجامعة اضغط على شعار التصنيف."
    },
    "eServices": "الخدمات الالكترونية",
    "contact": {
      "title": "نحب ان نسمع منك"
    }
  },
  "Footer": {
    "slogan": "تحسين مستقبل الناس من خلال العلوم والتكنولوجيا",
    "copyright": "جميع الحقوق محفوظة 2024 © جامعة كلكامش",
    "relatedSites": "مواقع ذات صلة"
  },
  "About": {
    "aboutGilgameshUniversity": "عن جامعة كلكامش",
    "theVision": "الرؤيــة",
    "universityVision": "رؤية الجامعة",
    "theMessage": "الرسالــة",
    "universityGoals": "أهداف الجامعة"
  },
  "Branches": {
    "searchPlaceholder": "اكتب اسم المدينة للبحث",
    "goToLocation": "الذهاب الى الموقع الجغرافي",
    "locations": [
      {
        "province": "محافظة ديالى",
        "address": "العراق - ديالى - بعقوبة قرب جسر بهرز",
        "phoneNumbers": ["07748098522"],
        "googleMapsLink": "https://www.google.com/maps/place/33%C2%B043'22.6%22N+44%C2%B038'49.4%22E/@33.72295,44.6444741,17z/data=!3m1!4b1!4m4!3m3!8m2!3d33.72295!4d44.647049?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "province": "محافظة البصره",
        "address": "العراق - البصره - حي الزهور مقابل الطب العدلي",
        "phoneNumbers": ["07723909093", "07734641436"],
        "googleMapsLink": "https://www.google.com/maps/place/30%C2%B028'38.5%22N+47%C2%B049'24.5%22E/@30.4773598,47.8209,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.4773598!4d47.8234749?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "province": "محافظة كربلاء",
        "address": "العراق - كربلاء - حي النقيب قرب جسر الضريبه",
        "phoneNumbers": ["07813335548", "07713335548"],
        "googleMapsLink": "https://www.google.com/maps/place/32%C2%B036'12.5%22N+44%C2%B001'08.1%22E/@32.6034722,44.0189167,17z/data=!3m1!4b1!4m4!3m3!8m2!3d32.6034722!4d44.0189167?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "province": "محافظة الديوانية",
        "address": "العراق - الديوانية - حي العصري خلف رئاسة الصحة",
        "phoneNumbers": ["07821594705"],
        "googleMapsLink": "https://www.google.com/maps/place/31%C2%B059'25.3%22N+44%C2%B055'52.1%22E/@31.9903641,44.9285622,17z/data=!3m1!4b1!4m4!3m3!8m2!3d31.9903641!4d44.9311371?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "province": "محافظة كركوك",
        "address": "العراق - كركوك - ساحة احتفالات مقابل صيدلية مينا مجاور كوفي ورق النعناع",
        "phoneNumbers": ["07723506070", "07729317262"],
        "googleMapsLink": "https://www.google.com/maps/place/35%C2%B025'43.0%22N+44%C2%B021'43.5%22E/@35.4286041,44.3594971,17z/data=!3m1!4b1!4m4!3m3!8m2!3d35.4286041!4d44.362072?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "province": "محافظة بابل",
        "address": "العراق - بابل شارع 60 عمود 300 مجمع العين الطبي",
        "phoneNumbers": ["07819004425", "07723953516"],
        "googleMapsLink": "https://www.google.com/maps/place/32%C2%B029'13.1%22N+44%C2%B024'46.3%22E/@32.4869576,44.410286,17z/data=!3m1!4b1!4m4!3m3!8m2!3d32.4869576!4d44.4128609?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "province": "محافظة الأنبار",
        "address": "العراق - الانبار - الفلوجة الشارع العام القديم قرب مطعم العباسي - عمارة السوق العربي",
        "phoneNumbers": ["07816828801"],
        "googleMapsLink": "https://www.google.com/maps/place/33%C2%B021'01.0%22N+43%C2%B046'16.8%22E/@33.3502655,43.7687683,17z/data=!3m1!4b1!4m4!3m3!8m2!3d33.3502655!4d43.7713432?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "province": "محافظة الموصل",
        "address": "العراق - الموصل - حي التأميم مقابل جامع الغفار",
        "phoneNumbers": ["07736947557"],
        "googleMapsLink": "https://www.google.com/maps/place/36%C2%B021'17.6%22N+43%C2%B011'46.5%22E/@36.3548851,43.1936722,17z/data=!3m1!4b1!4m4!3m3!8m2!3d36.3548851!4d43.1962471?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "province": "محافظة أربيل",
        "address": "العراق - أربيل باداوه-فرع جامع احمد درماناوي",
        "phoneNumbers": ["07501142332", "07504430707"],
        "googleMapsLink": "https://www.google.com/maps/place/36%C2%B009'47.8%22N+44%C2%B002'58.1%22E/@36.1632729,44.0469017,17z/data=!3m1!4b1!4m4!3m3!8m2!3d36.1632729!4d44.0494766?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "province": "محافة ذي قار",
        "address": "العراق - الناصرية - فلكة السماوه -شارع الازدهار- خلف الحاج مرتضى للسيراميك",
        "phoneNumbers": ["07827507500", "07810797976"],
        "googleMapsLink": "https://www.google.com/maps/place/31%C2%B002'17.2%22N+46%C2%B014'15.8%22E/@31.0381165,46.2351494,17z/data=!3m1!4b1!4m4!3m3!8m2!3d31.0381165!4d46.2377243?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "province": "محافظة دهوك",
        "address": "العراق - دهوك - ماسيكي صف جامع حجي طاهر",
        "phoneNumbers": ["07505055665", "07505555440"],
        "googleMapsLink": "https://www.google.com/maps/place/36%C2%B052'20.3%22N+42%C2%B056'59.8%22E/@36.8723106,42.9473648,17z/data=!3m1!4b1!4m4!3m3!8m2!3d36.8723106!4d42.9499397?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "province": "محافظة دهوك",
        "address": "العراق - دهوك  - زاخو - سيمالكا ترفك بشار اغا",
        "phoneNumbers": ["07505055665", "07505555440"],
        "googleMapsLink": "https://www.google.com/maps/place/37%C2%B009'06.7%22N+42%C2%B040'55.5%22E/@37.1518517,42.6795197,17z/data=!3m1!4b1!4m4!3m3!8m2!3d37.1518517!4d42.6820946?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "province": "محافظة بغداد",
        "address": "العراق - بغداد - الكاظمية شارع المشاط",
        "phoneNumbers": ["07505555540", "07505055665"],
        "googleMapsLink": "https://www.google.com/maps/search/%D9%85%D8%AF%D9%8A%D8%B1+%D8%B4%D8%B1%D9%83%D8%A9+%D8%A7%D9%84%D8%B2%D8%B9%D9%8A%D9%85_%D9%81%D8%B1%D8%B9+%D8%A7%D9%84%D9%83%D8%A7%D8%B8%D9%85%D9%8A%D8%A9%E2%80%AD/@33.3683014,44.3414993,17z?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "province": "محافظة السليمانية",
        "address": "العراق - السليمانية - جوار باخ ملعب جوار باخ",
        "phoneNumbers": ["07828401781"],
        "googleMapsLink": "https://www.google.com/maps/place/35%C2%B032'58.1%22N+45%C2%B025'40.9%22E/@35.5494614,45.4254456,17z/data=!3m1!4b1!4m4!3m3!8m2!3d35.5494614!4d45.4280205?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "province": "محافظة ميسان",
        "address": "العراق - ميسان- العمارة الصحفين قرب فلكة الصحفين",
        "phoneNumbers": ["07808186186", "07708186186"],
        "googleMapsLink": "https://www.google.com/maps/place/31%C2%B052'20.1%22N+47%C2%B009'12.9%22E/@31.8722591,47.1510124,17z/data=!3m1!4b1!4m4!3m3!8m2!3d31.8722591!4d47.1535873?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "province": "محافظة بغداد",
        "address": "العراق -بغداد -البنوك  شارع المشاتل  مقابل كوفي بابا اوغلو",
        "phoneNumbers": ["07808186186", "07708186186"],
        "googleMapsLink": "https://www.google.com/maps/place/33%C2%B023'19.9%22N+44%C2%B023'48.4%22E/@33.3888658,44.3941976,17z/data=!3m1!4b1!4m4!3m3!8m2!3d33.3888658!4d44.3967725?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
      }
    ]
  },
  "Jobs": {
    "title": "الوظائف الشاغرة",
    "description": "تتخصص شركة الزعيم بنقل البضائع وتوصيل البريد السريع، حيث تقدم خدماتها في هذا القطاع منطلقة من متطلبات السوق والعملاء؛ لتوفر خدماتها التخصصية المتميزة.",
    "searchPlaceholder": "اكتب اسم الوظيفة للبحث",
    "applyNow": "قدم الآن",
    "jobListings": [
      {
        "title": "موظف مبيعات",
        "location": "العراق - كركوك - مقابل مدينة الالعاب الجديدة",
        "jobType": "وظيفة بدوام كامل"
      },
      {
        "title": "موظف مبيعات",
        "location": "العراق - كركوك - مقابل مدينة الالعاب الجديدة",
        "jobType": "وظيفة بدوام كامل"
      },
      {
        "title": "موظف مبيعات",
        "location": "العراق - كركوك - مقابل مدينة الالعاب الجديدة",
        "jobType": "وظيفة بدوام كامل"
      },
      {
        "title": "موظف مبيعات",
        "location": "العراق - كركوك - مقابل مدينة الالعاب الجديدة",
        "jobType": "وظيفة بدوام كامل"
      },
      {
        "title": "موظف مبيعات",
        "location": "العراق - كركوك - مقابل مدينة الالعاب الجديدة",
        "jobType": "وظيفة بدوام كامل"
      },
      {
        "title": "موظف مبيعات",
        "location": "العراق - كركوك - مقابل مدينة الالعاب الجديدة",
        "jobType": "وظيفة بدوام كامل"
      }
    ],
    "jobDetails": {
      "overview": "نظرة عامة عن الوظيفة",
      "jobTitle": "الوصف الوظيفي:",
      "description": "نحن نبحث عن موظف مبيعات للانضمام إلى فريقنا في شركة الزعيم للتوصيل السريع. سيكون المتقدم المثالي مسؤولاً عن إدارة العلاقات مع العملاء، وترويج خدمات التوصيل السريع، وتحقيق الأهداف البيعية. يجب أن يكون المتقدم لديه خبرة في المبيعات ومهارات تواصل قوية، مع القدرة على العمل في بيئة ديناميكية وسريعة.",
      "jobDescription": "متطلبات الوظيفة:",
      "qualifications": [
        "- المؤهلات العلمية:",
        "• درجة البكالوريوس في إدارة الأعمال أو التسويق أو مجال ذي صلة (يفضل)",
        "أي شهادات إضافية في المبيعات أو التسويق تعد ميزة إضافية"
      ],
      "experience": [
        "- الخبرة العملية:",
        "• خبرة لا تقل عن سنتين في مجال المبيعات، ويفضل في قطاع التوصيل أو الخدمات اللوجستية",
        "• تجربة سابقة في تحقيق الأهداف البيعية والقدرة على تطوير خطط بيع فعالة"
      ],

      "skills": [
        "- المهارات المطلوبة:",
        "• مهارات تواصل وتفاوض قوية",
        "• مهارات في استخدام برامج إدارة علاقات العملاء (CRM)",
        "• قدرة على العمل تحت الضغط وإدارة الوقت بفعالية",
        "• القدرة على العمل ضمن فريق",
        "• مرونة في ساعات العمل",
        "• رخصة قيادة سارية (يفضل)",
        "• القدرة على السفر داخل المدينة للتواصل مع العملاء"
      ],
      "applyNow": "قدم الآن"
    },
    "application": {
      "title": "استمارة التقديم",
      "firstName": "الاسم الأول*",
      "lastName": "الاسم الثاني*",
      "thirdName": "الاسم الثالث*",
      "email": "البريد الإلكتروني*",
      "address": "العنوان*",
      "phoneNumber": "رقم الهاتف*",
      "personalPhoto": "صورة شخصية*",
      "uploadPhoto": "ارفع صورتك",
      "educationalAttainment": "التحصيل الدراسي*",
      "highSchool": "خريج إعدادية",
      "diploma": "دبلوم",
      "bachelors": "بكالوريوس",
      "others": "أخرى",
      "specifyEducation": "حدد التحصيل الدراسي",
      "previousExperiences": "الخبرات السابقة*",
      "workInDelivery": "هل سبق لك العمل في مجال التوصيل*",
      "yes": "نعم",
      "no": "لا",
      "resume": "السيرة الذاتية*",
      "uploadResume": "ارفع سيرتك الذاتية",
      "send": "إرسال",
      "writeHere": "اكتب هنا"
    }
  },
  "singleNews": {
    "share": "مشاركة",
    "print": "طباعة",
    "relatedNews": "اخبار ذات صلة"
  },
  "JoinUs": {
    "title": "استمارة التقديم",
    "merchantName": "اسم التاجر*",
    "businessName": "اسم المتجر*",
    "city": "المحافظة*",
    "area": "المنطقة*",
    "productsType": "نوع البضاعة*",
    "expectedOrders": "عدد الطلبات المتوقعة*",
    "from": "من",
    "to": "إلى",
    "phoneNumber": "رقم الهاتف*",
    "writeHere": "اكتب هنا",
    "send": "إرسال"
  },
  "Contact": {
    "title": "ابق على تواصل معنا",
    "description": "تتخصص شركة الزعيم بنقل البضائع وتوصيل البريد السريع، حيث تقدم خدماتها في هذا القطاع منطلقة من متطلبات السوق والعملاء؛ لتوفر خدماتها التخصصية المتميزة.",
    "form": {
      "title": "نموذج الاتصال",
      "name": "الاسم*",
      "email": "البريد الإلكتروني*",
      "phoneNumber": "رقم الهاتف*",
      "city": "المدينة*",
      "message": "الرسالة*",
      "writeHere": "اكتب هنا",
      "writeYourMessage": "اكتب رسالتك هنا",
      "send": "إرسال"
    },
    "contactInfo": [
      {
        "title": "info@zaeem.iq",
        "icon": "ri-mail-line"
      },
      {
        "title": "+964 78 000 999 88",
        "icon": "ri-smartphone-line"
      },
      {
        "title": "العراق, بغداد",
        "icon": "ri-map-pin-line"
      }
    ]
  },

  "Survey": {
    "fullName": "الاسم الكامل",
    "email": "البريد الإلكتروني",
    "phone": "رقم الهاتف",
    "college": "الكلية",
    "department": "القسم",
    "message": "الرسالة",
    "writeHere": "اكتب هنا",
    "writeYourMessage": "اكتب رسالتك هنا",
    "send": "إرسال"
  },
  "SharedPages": {
    "infrastructure": "البنى التحتية",
    "halls": "القاعات",
    "laboratories": "المختبرات",
    "green areas": "المساحات الخضراء",
    "university life": "الحياة الجامعية",
    "promotions form": "استمارات الترقية",
    "guides": "ادلة وتعليمات",
    "organizing promotion transactions": "تنظيم معاملات الترقية",
    "scientificJournals": "المجلات العلمية",
    "practicalAndIntellectualOutput": "النتاج العلمي والفكري",
    "teachers research": "بحوث التدريسيين",
    "authored books": "الكتب المؤلفة",
    "scientific articles": "المقالات العلمية",
    "quality and performance": "الجودة والأداء الجامعي",
    "scopus": "سكوباس",
    "scientificResearcher": "الباحث العلمي",
    "scientificResearchPortal": "بوابة البحث العلمي",
    "scientific activities": "الأنشطة العلمية",
    "seminars": "الندوات",
    "workshops": "الورش",
    "courses": "الدورات",
    "forums": "الملتقيات",
    "admissionAndRegistration": "القبول والتسجيل",
    "registrationTerms": "شروط التسجيل",
    "registrationMechanism": "آلية التسجيل",
    "tuitionFees": "الأجور الدراسية",
    "discountsAndScholarships": "التخفيضات والمنح الدراسية",
    "patents": "براءات الاختراع",
    "universityCalendar": "التقويم الجامعي",
    "examInstructions": "التعليمات الامتحانية",
    "studentDisciplineInstructions": "تعليمات انضباط الطلبة",
    "studentGuidelines": "إرشادات الطلبة",
    "topStudents": "الطلبة الاوائل",
    "examSchedules": "الجداول الامتحانية",
    "studentActivities": "الأنشطة الطلابية",
    "studentTeams": "الفرق الطلابية",
    "ashurbanipalLibrary": "مكتبة آشوربانيبال",
    "continuingEducationCenter": "مركز التعليم المستمر",
    "urukCulturalCenter": "مركز الثقافي اوروك",
    "fitnessCenter": "مركز اللياقة البدنية",
    "gilgameshTheater": "مسرح كلكامش",
    "celebrationHallsAridoun": "قاعات الاحتفالات أريدوونيبور",
    "olympicSwimmingpool": "المسبح الأولمبي",
    "fiveasidePitches": "الملاعب الخماسية",
    "trainingHalls": "قاعات التدريب",
    "dentalClinics": "عيادات طب الاسنان",
    "cloningLibrary": "مكتبة الاستنساخ",
    "cafeteria": "الكافيتريا",
    "graduates": "خريجونا",
    "rehabilitationAndEmployment": "التأهيل والتوظيف",
    "consultingClinics": "العيادات الاستشارية",
    "electronicInquiriesMinistryHigherEducation": "الاستعلامات الإلكترونية لوزارة التعليم العالي",
    "sustainability": "الاستدامة"
  }
}

```

# locales\en.json

```json
{
  "Layout": {
    "metaData": {
      "title": "Taalem",
      "description": "Taalem website",
      "aboutTitle": "About",
      "universityCouncilTitle": "University Council",
      "presidentSpeechTitle": "President's Speech"
    },
    "firstTitle": "AlZAEEM Express Delivery"
  },
  "PresidentSpeech": {
    "title": "President's Speech"
  },
  "UniversityCouncil": {
    "title": "University Council",
    "presidentPosition": "University President"
  },
  "Common": {
    "generalSuccessMessage": "Sent Successfully!",
    "share": "Share",
    "print": "Print",
    "centerizedTitle": "Your Centered Title Here",
    "download": "Download",
    "loading": "Loading",
    "readMore": "Read More",
    "viewMore": "View More",
    "gilgameshUniversity": "Gilgamesh University",
    "ourColleges": "Our Colleges",
    "email": "email",
    "phoneNumber": "Phone Number",
    "address": "Address",
    "downloadApp": "Download App",
    "cards": {
      "uniLife": "University Life",
      "about": "About the University",
      "academicClassifications": "Academic Classifications",
      "news": "News"
    },
    "Contact": {
      "form": {
        "title": "Contact Us",
        "name": "Full Name",
        "email": "Email Address",
        "phoneNumber": "Phone Number",
        "institution": "Institution Name",
        "message": "Message",
        "writeHere": "Write here",
        "writeYourMessage": "Write your message here",
        "send": "Send Message"
      }
    }
  },
  "Header": {
    "appTitle": "Taalem",
    "googleMapsLocation": "location on Google Maps",
    "localSwitcher": {
      "select a language": "select a language"
    },
    "navLinks": {
      "home": "Home",
      "aboutUniversity": "About University",
      "aboutUs": "About Us",
      "universityCouncil": "University Council",
      "universityPresident": "University President",
      "assistantPresidentScientific": "Assistant President for Scientific Affairs",
      "assistantPresidentAdministrative": "Assistant President for Administrative Affairs",
      "collegeDeans": "College Deans",
      "presidentSpeech": "President's Speech",
      "organizationalStructure": "Organizational Structure",
      "infrastructure": "Infrastructure",
      "halls": "Halls",
      "laboratories": "Laboratories",
      "greenAreas": "Green Areas",
      "universityLife": "University Life",
      "photoLibrary": "Photo Library",
      "videoLibrary": "Video Library",
      "agreementsPartnerships": "Agreements and Partnerships",
      "transparencyPrinciple": "Transparency Principle",
      "universityStrategy": "University Strategy",
      "colleges": "Colleges",
      "academicAffairs": "Academic Affairs",
      "scientificPromotions": "Scientific Promotions",
      "guidelines": "Guidelines",
      "forms": "Forms",
      "instructions": "Instructions",
      "scientificConferences": "Scientific Conferences",
      "scientificJournals": "Scientific Journals",
      "electronicScientificProduction": "Electronic Scientific Production",
      "facultyResearch": "Faculty Research",
      "approvedBooks": "Approved Books",
      "scientificMissions": "Scientific Missions",
      "inventionPatents": "Invention Patents",
      "qualityAssurance": "Quality Assurance",
      "universityRankings": "University Rankings",
      "scopus": "Scopus",
      "googleScholar": "Google Scholar",
      "researchGate": "Research Gate",
      "scientificActivities": "Scientific Activities",
      "seminars": "Seminars",
      "workshops": "Workshops",
      "courses": "Courses",
      "forums": "Forums",
      "studentAffairs": "Student Affairs",
      "admissionRegistration": "Admission and Registration",
      "admissionConditions": "Admission Conditions",
      "registrationMechanism": "Registration Mechanism",
      "studyFees": "Study Fees",
      "scholarshipsGrants": "Scholarships and Grants",
      "academicCalendar": "Academic Calendar",
      "universityInstructions": "University Instructions",
      "studentGuide": "Student Guide",
      "outstandingStudents": "Outstanding Students",
      "studentActivities": "Student Activities",
      "studentClubs": "Student Clubs",
      "serviceCenters": "Service Centers",
      "digitalLibrary": "Digital Library",
      "continuingEducationCenter": "Continuing Education Center",
      "careerGuidanceCenter": "Career Guidance Center",
      "physicalFitnessCenter": "Physical Fitness Center",
      "gilgameshTheater": "Gilgamesh Theater",
      "audiovisualHalls": "Audiovisual Halls",
      "sportsStadium": "Sports Stadium",
      "fiveSidePlaygrounds": "Five-side Playgrounds",
      "trainingHalls": "Training Halls",
      "dentalClinics": "Dental Clinics",
      "centralLibrary": "Central Library",
      "cafeteria": "Cafeteria",
      "eServices": "E-Services",
      "studentPortal": "Student Portal",
      "facultyPortal": "Faculty Portal",
      "massarPlatform": "Massar Platform",
      "universityDigitalRepository": "University Digital Repository",
      "electronicPayment": "Electronic Payment",
      "graduatesPortal": "Graduates Portal",
      "graduationConfirmationRequest": "Graduation Confirmation Request",
      "graduationDocumentRequest": "Graduation Document Request",
      "transcriptRequest": "Transcript Request",
      "universityIdIssuance": "University ID Issuance",
      "electronicParticipationCertificates": "Electronic Participation Certificates",
      "contact": "Contact Us",
      "news": "News",
      "sustainability": "Sustainability",
      "universityAndCommunity": "University and Community",
      "graduates": "Our Graduates",
      "qualificationEmployment": "Qualification and Employment",
      "consultingClinic": "Consulting Clinic",
      "ministryInquiries": "Ministry of Higher Education E-Inquiries",
      "surveys": "Surveys",
      "graduateSurvey": "Graduate Survey",
      "employerSurvey": "Employer Survey"
    },

    "pageTitles": {
      "home": "Home",
      "about": "Who are we?",
      "services": "Company Services",
      "branches": "Company Branches",
      "contact": "Contact us",
      "jobs": "Vacant positions",
      "joinUs": "Join us as a merchant",
      "salesEmployee": "Sales employee",
      "news": "News"
    },
    "cta": {
      "joinUs": "Join Us",
      "contactUs": "Contact Us"
    }
  },
  "Home": {
    "statistics": {
      "title": "Gilgamesh University  Statistics",
      "students": "Number of students",
      "facultyMembers": "Number of faculty members",
      "administrativeStaff": "Number of administrative staff",
      "technicalStaff": "Number of technical and support staff"
    },

    "ourGoals": {
      "title": "Gilgamesh University  Goals"
    },

    "news": {
      "title": "News",
      "viewAll": "View all news",
      "tags": {
        "contracts": "Contracts",
        "alzaeem": "ALZAEEM company"
      },
      "news": [
        {
          "title": "AlZaeem Company adopts the establishment of effective partnerships with supporting companies.",
          "description": "AlZaeem Company is dedicated to establishing effective partnerships with supporting companies, contributing to advancing, developing, and expanding the sector with diverse capabilities, expertise, and technological capacities."
        },
        {
          "title": "AlZaeem Company adopts the establishment of effective partnerships with supporting companies.",
          "description": "AlZaeem Company is dedicated to establishing effective partnerships with supporting companies, contributing to advancing, developing, and expanding the sector with diverse capabilities, expertise, and technological capacities."
        },
        {
          "title": "AlZaeem Company adopts the establishment of effective partnerships with supporting companies.",
          "description": "AlZaeem Company is dedicated to establishing effective partnerships with supporting companies, contributing to advancing, developing, and expanding the sector with diverse capabilities, expertise, and technological capacities."
        },
        {
          "title": "AlZaeem Company adopts the establishment of effective partnerships with supporting companies.",
          "description": "AlZaeem Company is dedicated to establishing effective partnerships with supporting companies, contributing to advancing, developing, and expanding the sector with diverse capabilities, expertise, and technological capacities."
        }
      ]
    },
    "academicRankings": {
      "subtitle": "Academic Rankings",
      "title": "Gilgamesh University  in Academic Rankings",
      "note": "To view the university's ranking, click on the ranking logo."
    },
    "eServices": "Electronic Services",
    "contact": {
      "title": "We would love to hear from you."
    }
  },
  "Footer": {
    "slogan": "Improving people's future through science and technology.",
    "copyright": "All rights reserved 2024 © Gilgamesh University.",
    "relatedSites": "Related Sites"
  },
  "About": {
    "aboutGilgameshUniversity": "About Gilgamesh University",
    "theVision": "The Vision",
    "universityVision": "University Vision",
    "theMessage": "The Mission",
    "universityGoals": "University Goals"
  },
  "Branches": {
    "searchPlaceholder": "Write the name of the city",
    "goToLocation": "Go to the location",
    "locations": [
      {
        "province": "Diyala Governorate",
        "address": "Iraq - Diyala - Baqubah near Bahraz Bridge",
        "phoneNumbers": ["07748098522"],
        "googleMapsLink": "https://www.google.com/maps/place/33%C2%B043'22.6%22N+44%C2%B038'49.4%22E/@33.72295,44.6444741,17z/data=!3m1!4b1!4m4!3m3!8m2!3d33.72295!4d44.647049?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "province": "Basra Governorate",
        "address": "Iraq - Basra - Al-Zohour District, opposite the Forensic Medicine Institute",
        "phoneNumbers": ["07723909093", "07734641436"],
        "googleMapsLink": "https://www.google.com/maps/place/30%C2%B028'38.5%22N+47%C2%B049'24.5%22E/@30.4773598,47.8209,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.4773598!4d47.8234749?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "province": "Karbala Governorate",
        "address": "Iraq - Karbala - Opposite the New Amusement City",
        "phoneNumbers": ["07813335548", "07713335548"],
        "googleMapsLink": "https://www.google.com/maps/place/32%C2%B036'12.5%22N+44%C2%B001'08.1%22E/@32.6034722,44.0189167,17z/data=!3m1!4b1!4m4!3m3!8m2!3d32.6034722!4d44.0189167?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "province": "Diwaniyah Governorate",
        "address": "Iraq - Diwaniyah - Al-Asri District, behind the Health Directorate",
        "phoneNumbers": ["07821594705"],
        "googleMapsLink": "https://www.google.com/maps/place/31%C2%B059'25.3%22N+44%C2%B055'52.1%22E/@31.9903641,44.9285622,17z/data=!3m1!4b1!4m4!3m3!8m2!3d31.9903641!4d44.9311371?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "province": "Kirkuk Governorate",
        "address": "Iraq - Kirkuk - Celebration Square, opposite Mina Pharmacy, next to Mint Leaf Cafe",
        "phoneNumbers": ["07723506070", "07729317262"],
        "googleMapsLink": "https://www.google.com/maps/place/35%C2%B025'43.0%22N+44%C2%B021'43.5%22E/@35.4286041,44.3594971,17z/data=!3m1!4b1!4m4!3m3!8m2!3d35.4286041!4d44.362072?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "province": "Babylon Governorate",
        "address": "Iraq - Babylon - 60th Street, Column 300, Al-Ain Medical Complex",
        "phoneNumbers": ["07819004425", "07723953516"],
        "googleMapsLink": "https://www.google.com/maps/place/32%C2%B029'13.1%22N+44%C2%B024'46.3%22E/@32.4869576,44.410286,17z/data=!3m1!4b1!4m4!3m3!8m2!3d32.4869576!4d44.4128609?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "province": "Anbar Governorate",
        "address": "Iraq - Anbar - Fallujah, Old Main Street, near Al-Abbasi Restaurant - Arab Market Building",
        "phoneNumbers": ["07816828801"],
        "googleMapsLink": "https://www.google.com/maps/place/33%C2%B021'01.0%22N+43%C2%B046'16.8%22E/@33.3502655,43.7687683,17z/data=!3m1!4b1!4m4!3m3!8m2!3d33.3502655!4d43.7713432?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "province": "Mosul Governorate",
        "address": "Iraq - Mosul - Al-Tameem District, opposite Al-Ghaffar Mosque",
        "phoneNumbers": ["07736947557"],
        "googleMapsLink": "https://www.google.com/maps/place/36%C2%B021'17.6%22N+43%C2%B011'46.5%22E/@36.3548851,43.1936722,17z/data=!3m1!4b1!4m4!3m3!8m2!3d36.3548851!4d43.1962471?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "province": "Erbil Governorate",
        "address": "Iraq - Erbil - Badawe, near Ahmed Darmanawi Mosque",
        "phoneNumbers": ["07501142332", "07504430707"],
        "googleMapsLink": "https://www.google.com/maps/place/36%C2%B009'47.8%22N+44%C2%B002'58.1%22E/@36.1632729,44.0469017,17z/data=!3m1!4b1!4m4!3m3!8m2!3d36.1632729!4d44.0494766?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "province": "Dhi Qar Governorate",
        "address": "Iraq - Nasiriyah - Samawah Roundabout - Al-Izdihar Street - Behind Al-Haj Murtada for Ceramics",
        "phoneNumbers": ["07827507500", "07810797976"],
        "googleMapsLink": "https://www.google.com/maps/place/31%C2%B002'17.2%22N+46%C2%B014'15.8%22E/@31.0381165,46.2351494,17z/data=!3m1!4b1!4m4!3m3!8m2!3d31.0381165!4d46.2377243?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "province": "Duhok Governorate",
        "address": "Iraq - Duhok - Masiqi, opposite Haji Tahir Mosque",
        "phoneNumbers": ["07505055665", "07505555440"],
        "googleMapsLink": "https://www.google.com/maps/place/36%C2%B052'20.3%22N+42%C2%B056'59.8%22E/@36.8723106,42.9473648,17z/data=!3m1!4b1!4m4!3m3!8m2!3d36.8723106!4d42.9499397?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "province": "Duhok Governorate",
        "address": "Iraq - Duhok - Zakho - Semalka, near Bashar Agha",
        "phoneNumbers": ["07505055665", "07505555440"],
        "googleMapsLink": "https://www.google.com/maps/place/37%C2%B009'06.7%22N+42%C2%B040'55.5%22E/@37.1518517,42.6795197,17z/data=!3m1!4b1!4m4!3m3!8m2!3d37.1518517!4d42.6820946?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "province": "Baghdad Governorate",
        "address": "Iraq - Baghdad - Kadhimiyah - Al-Mashat Street",
        "phoneNumbers": ["07505555540", "07505055665"],
        "googleMapsLink": "https://www.google.com/maps/search/%D9%85%D8%AF%D9%8A%D8%B1+%D8%B4%D8%B1%D9%83%D8%A9+%D8%A7%D9%84%D8%B2%D8%B9%D9%8A%D9%85_%D9%81%D8%B1%D8%B9+%D8%A7%D9%84%D9%83%D8%A7%D8%B8%D9%85%D9%8A%D8%A9%E2%80%AD/@33.3683014,44.3414993,17z?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "province": "Sulaymaniyah Governorate",
        "address": "Iraq - Sulaymaniyah - Near Jwra Bakh Stadium",
        "phoneNumbers": ["07828401781"],
        "googleMapsLink": "https://www.google.com/maps/place/35%C2%B032'58.1%22N+45%C2%B025'40.9%22E/@35.5494614,45.4254456,17z/data=!3m1!4b1!4m4!3m3!8m2!3d35.5494614!4d45.4280205?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "province": "Maysan Governorate",
        "address": "Iraq - Maysan - Al-Amarah, Al-Suhufeen area, near Al-Suhufeen Roundabout",
        "phoneNumbers": ["07808186186", "07708186186"],
        "googleMapsLink": "https://www.google.com/maps/place/31%C2%B052'20.1%22N+47%C2%B009'12.9%22E/@31.8722591,47.1510124,17z/data=!3m1!4b1!4m4!3m3!8m2!3d31.8722591!4d47.1535873?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
      },
      {
        "province": "Baghdad Governorate",
        "address": "Iraq - Baghdad - Al-Bunook - Al-Mashatel Street - opposite Baba Oglu Cafe",
        "phoneNumbers": ["07808186186", "07708186186"],
        "googleMapsLink": "https://www.google.com/maps/place/33%C2%B023'19.9%22N+44%C2%B023'48.4%22E/@33.3888658,44.3941976,17z/data=!3m1!4b1!4m4!3m3!8m2!3d33.3888658!4d44.3967725?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
      }
    ]
  },
  "Jobs": {
    "title": "Vacant positions",
    "description": "The Leader Company specializes in transporting goods and providing express mail services, offering its services in this sector based on market and customer requirements to deliver exceptional specialized services.",
    "searchPlaceholder": "Write the name of the job",
    "applyNow": "Apply now",
    "jobListings": [
      {
        "title": "Sales employee",
        "location": "Iraq - Kirkuk - opposite the New Games City",
        "jobType": "Full time job"
      },
      {
        "title": "Sales employee",
        "location": "Iraq - Kirkuk - opposite the New Games City",
        "jobType": "Full time job"
      },
      {
        "title": "Sales employee",
        "location": "Iraq - Kirkuk - opposite the New Games City",
        "jobType": "Full time job"
      },
      {
        "title": "Sales employee",
        "location": "Iraq - Kirkuk - opposite the New Games City",
        "jobType": "Full time job"
      },
      {
        "title": "Sales employee",
        "location": "Iraq - Kirkuk - opposite the New Games City",
        "jobType": "Full time job"
      },
      {
        "title": "Sales employee",
        "location": "Iraq - Kirkuk - opposite the New Games City",
        "jobType": "Full time job"
      }
    ],
    "jobDetails": {
      "overview": "Job Overview",
      "jobTitle": "Job title:",
      "description": "We are looking for a sales representative to join our team at Al-Zaheem Express Delivery. The ideal candidate will be responsible for managing customer relationships, promoting express delivery services, and achieving sales targets. Applicants should have sales experience, strong communication skills, and the ability to work in a dynamic and fast-paced environment.",
      "jobDescription": "Job description:",
      "qualifications": [
        "- Academic Qualifications:",
        "• Bachelor's degree in Business Administration, Marketing, or a related field (preferred)",
        "• Any additional certifications in Sales or Marketing are considered an advantage."
      ],
      "experience": [
        "- Work Experience:",
        "• Minimum of two years of experience in sales, preferably in the delivery or logistics services sector",
        "• Previous experience in achieving sales targets and the ability to develop effective sales plans."
      ],
      "skills": [
        "- Required Skills:",
        "• Strong communication and negotiation skills",
        "• Proficiency in using Customer Relationship Management (CRM) software",
        "• Ability to work under pressure and manage time effectively",
        "• Capability to work within a team",
        "• Flexibility in working hours",
        "• Valid driver's license (preferred)",
        "• Ability to travel within the city to communicate with clients"
      ],
      "applyNow": "Apply now"
    },
    "application": {
      "title": "Application form",
      "firstName": "First name*",
      "lastName": "Last name*",
      "thirdName": "Third name*",
      "email": "Email*",
      "address": "Address*",
      "phoneNumber": "Phone number*",
      "personalPhoto": "Personal photo*",
      "uploadPhoto": "Upload your photo",
      "educationalAttainment": "Educational attainment*",
      "highSchool": "High School Degree",
      "diploma": "Diploma",
      "bachelors": "Bachelor's degree",
      "others": "Others",
      "specifyEducation": "Specify educational attainment",
      "previousExperiences": "Previous experiences*",
      "workInDelivery": "Have you worked in the delivery field before?*",
      "yes": "Yes",
      "no": "No",
      "resume": "Your resume*",
      "uploadResume": "Upload your resume",
      "send": "Send",
      "writeHere": "Write here"
    }
  },
  "singleNews": {
    "share": "Share",
    "print": "Print",
    "relatedNews": "Related News"
  },
  "JoinUs": {
    "title": "Application Form",
    "merchantName": "Merchant name*",
    "businessName": "Business name*",
    "city": "City*",
    "area": "Area*",
    "productsType": "Products type*",
    "expectedOrders": "Expected number of orders*",
    "from": "From",
    "to": "To",
    "phoneNumber": "Phone number*",
    "writeHere": "Write here",
    "send": "Send"
  },
  "Contact": {
    "title": "Stay in touch with us",
    "description": "Al-Zaeem Company specializes in transporting goods and delivering express mail, offering its services in this sector based on market and customer requirements to provide its distinctive specialized services.",
    "form": {
      "title": "Contact Form",
      "name": "Name*",
      "email": "Email*",
      "phoneNumber": "Phone number*",
      "city": "City*",
      "message": "Message*",
      "writeHere": "Write here",
      "writeYourMessage": "Write your message here",
      "send": "Send"
    },
    "contactInfo": [
      {
        "title": "info@zaeem.iq",
        "icon": "ri-mail-line"
      },
      {
        "title": "+964 78 000 999 88",
        "icon": "ri-smartphone-line"
      },
      {
        "title": "Iraq, Baghdad",
        "icon": "ri-map-pin-line"
      }
    ]
  },
  "Survey": {
    "fullName": "Full Name",
    "email": "Email Address",
    "phone": "Phone Number",
    "college": "College",
    "department": "Department",
    "message": "Message",
    "writeHere": "Write here",
    "writeYourMessage": "Write your message here",
    "send": "Send"
  },
  "SharedPages": {
    "infrastructure": "Infrastructure",
    "halls": "Halls",
    "laboratories": "Laboratories",
    "green areas": "Green Areas",
    "university life": "University Life",
    "promotions form": "Promotion Forms",
    "guides": "Guides and Instructions",
    "organizing promotion transactions": "Organizing Promotion Transactions",
    "scientificJournals": "Scientific Journals",
    "practicalAndIntellectualOutput": "Practical and Intellectual Output",
    "teachers research": "Teachers' Research",
    "authored books": "Authored Books",
    "scientific articles": "Scientific Articles",
    "quality and performance": "Quality and University Performance",
    "scopus": "Scopus",
    "scientificResearcher": "Scientific Researcher",
    "scientificResearchPortal": "Scientific Research Portal",
    "scientific activities": "Scientific Activities",
    "seminars": "Seminars",
    "workshops": "Workshops",
    "courses": "Courses",
    "forums": "Forums",
    "admissionAndRegistration": "Admission and Registration",
    "registrationTerms": "Registration Terms",
    "registrationMechanism": "Registration Mechanism",
    "tuitionFees": "Tuition Fees",
    "discountsAndScholarships": "Discounts and Scholarships",
    "patents": "Patents",
    "universityCalendar": "University Calendar",
    "examInstructions": "Exam Instructions",
    "studentDisciplineInstructions": "Student Discipline Instructions",
    "studentGuidelines": "Student Guidelines",
    "topStudents": "Top Students",
    "examSchedules": "Exam Schedules",
    "studentActivities": "Student Activities",
    "studentTeams": "Student Teams",
    "ashurbanipalLibrary": "Ashurbanipal Library",
    "continuingEducationCenter": "Continuing Education Center",
    "urukCulturalCenter": "Uruk Cultural Center",
    "fitnessCenter": "Fitness Center",
    "gilgameshTheater": "Gilgamesh Theater",
    "celebrationHallsAridoun": "Aridoun Celebration Halls",
    "olympicSwimmingpool": "Olympic Swimming Pool",
    "fiveasidePitches": "Five-a-side Pitches",
    "trainingHalls": "Training Halls",
    "dentalClinics": "Dental Clinics",
    "cloningLibrary": "Cloning Library",
    "cafeteria": "Cafeteria",
    "graduates": "Our Graduates",
    "rehabilitationAndEmployment": "Rehabilitation and Employment",
    "consultingClinics": "Consulting Clinics",
    "electronicInquiriesMinistryHigherEducation": "Electronic Inquiries for Ministry of Higher Education",
    "sustainability": "Sustainability"
  }
}

```

# next.config.mjs

```mjs
import createNextIntlPlugin from "next-intl/plugin";
import withPlaiceholder from "@plaiceholder/next";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default withPlaiceholder(withNextIntl(nextConfig));

```

# package.json

```json
{
  "name": "zaaeem",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@plaiceholder/next": "^3.0.0",
    "@radix-ui/react-accordion": "^1.2.0",
    "@radix-ui/react-alert-dialog": "^1.1.2",
    "@radix-ui/react-dialog": "^1.1.1",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-menubar": "^1.1.1",
    "@radix-ui/react-navigation-menu": "^1.2.0",
    "@radix-ui/react-radio-group": "^1.2.0",
    "@radix-ui/react-scroll-area": "^1.1.0",
    "@radix-ui/react-select": "^2.1.1",
    "@radix-ui/react-slot": "^1.1.0",
    "@react-pdf/renderer": "^4.0.0",
    "axios": "^1.7.7",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "framer-motion": "^11.3.31",
    "html2pdf.js": "^0.10.2",
    "js-cookie": "^3.0.5",
    "lottie-react": "^2.4.0",
    "lucide-react": "^0.436.0",
    "next": "14.2.5",
    "next-intl": "^3.17.6",
    "plaiceholder": "^3.0.0",
    "react": "^18",
    "react-dom": "^18",
    "react-leaflet": "^4.2.1",
    "react-to-print": "^2.15.1",
    "rtl-detect": "^1.1.2",
    "tailwind-merge": "^2.5.2",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^0.9.1",
    "zustand": "^4.5.5"
  },
  "devDependencies": {
    "@types/js-cookie": "^3.0.6",
    "@types/leaflet": "^1.9.12",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "@types/rtl-detect": "^1.0.3",
    "eslint": "^8",
    "eslint-config-next": "14.2.6",
    "postcss": "^8",
    "prettier": "^3.3.3",
    "prettier-plugin-tailwindcss": "^0.6.6",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}

```

# postcss.config.mjs

```mjs
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;

```

# public\fonts\EXPOSANSARABIC-BOLD.TTF

This is a binary file of the type: Binary

# public\fonts\EXPOSANSARABIC-BOOK.TTF

This is a binary file of the type: Binary

# public\fonts\EXPOSANSARABIC-LIGHT.TTF

This is a binary file of the type: Binary

# public\fonts\EXPOSANSARABIC-MEDIUM.TTF

This is a binary file of the type: Binary

# public\fonts\NeurialGrotesk-Bold.otf

This is a binary file of the type: Binary

# public\fonts\NeurialGrotesk-Extrabold.otf

This is a binary file of the type: Binary

# public\fonts\NeurialGrotesk-Light.otf

This is a binary file of the type: Binary

# public\fonts\NeurialGrotesk-Medium.otf

This is a binary file of the type: Binary

# public\fonts\NeurialGrotesk-Regular.otf

This is a binary file of the type: Binary

# public\images\about\1.svg

This is a file of the type: SVG Image

# public\images\about\2.svg

This is a file of the type: SVG Image

# public\images\about\3.svg

This is a file of the type: SVG Image

# public\images\college-logo.png

This is a binary file of the type: Image

# public\images\common\app-store.png

This is a binary file of the type: Image

# public\images\common\cards\about.svg

This is a file of the type: SVG Image

# public\images\common\cards\academic-classifications.svg

This is a file of the type: SVG Image

# public\images\common\cards\news.svg

This is a file of the type: SVG Image

# public\images\common\cards\uni-life.svg

This is a file of the type: SVG Image

# public\images\common\google-play.png

This is a binary file of the type: Image

# public\images\hero-bg.jpg

This is a binary file of the type: Image

# public\images\hero\1.png

This is a binary file of the type: Image

# public\images\hero\2.png

This is a binary file of the type: Image

# public\images\hero\3.png

This is a binary file of the type: Image

# public\images\hero\4.png

This is a binary file of the type: Image

# public\images\home\apps.png

This is a binary file of the type: Image

# public\images\home\faq-icon.svg

This is a file of the type: SVG Image

# public\images\home\Goals\2.jpg

This is a binary file of the type: Image

# public\images\home\Goals\3.jpg

This is a binary file of the type: Image

# public\images\home\Goals\4.jpg

This is a binary file of the type: Image

# public\images\home\Goals\5.jpg

This is a binary file of the type: Image

# public\images\home\Goals\6.jpg

This is a binary file of the type: Image

# public\images\home\News\1.jpg

This is a binary file of the type: Image

# public\images\home\News\2.jpg

This is a binary file of the type: Image

# public\images\home\News\3.jpg

This is a binary file of the type: Image

# public\images\home\News\4.jpg

This is a binary file of the type: Image

# public\images\home\statistics.jpg

This is a binary file of the type: Image

# public\images\logo.png

This is a binary file of the type: Image

# public\images\map-marker.svg

This is a file of the type: SVG Image

# public\images\partners\1.png

This is a binary file of the type: Image

# public\images\partners\2.png

This is a binary file of the type: Image

# public\images\partners\3.png

This is a binary file of the type: Image

# public\images\partners\4.png

This is a binary file of the type: Image

# public\images\person-placeholder.svg

This is a file of the type: SVG Image

# public\js\scrollbarWidth.js

```js
(function () {
  function updateScrollbarWidth() {
    requestAnimationFrame(function () {
      document.documentElement.style.setProperty(
        "--screen-width",
        window.document.documentElement.clientWidth + "px"
      );
    });
  }

  if (typeof window !== "undefined") {
    updateScrollbarWidth();
    window.addEventListener("resize", updateScrollbarWidth);
  }
})();

```

# public\lottie\success.json

```json
{"nm":"process completed","ddd":0,"h":400,"w":400,"meta":{"g":"@lottiefiles/toolkit-js 0.51.0-beta.1"},"layers":[{"ty":4,"nm":"tick","sr":1,"st":0,"op":80,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0.3480000000000132]},"s":{"a":0,"k":[152.051,152.051]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[200,196]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"tick","ix":1,"cix":2,"np":2,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-69.565,4.348],[-26.087,47.826],[69.565,-47.826]]}}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100},"w":{"a":0,"k":26.087},"c":{"a":0,"k":[1,1,1]}},{"ty":"tr","a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[0,0]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}}]},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.75,"y":0},"i":{"x":0.67,"y":1},"s":[0],"t":45},{"s":[100],"t":65}]},"o":{"a":0,"k":0},"s":{"a":0,"k":0},"m":1}],"ind":1},{"ty":4,"nm":"bg","sr":1,"st":0,"op":80,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0]},"s":{"a":1,"k":[{"o":{"x":1,"y":0},"i":{"x":0.678,"y":1},"s":[0,0,100],"t":32},{"s":[100,100,100],"t":55}]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[200,200,0]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"bg","ix":1,"cix":2,"np":2,"it":[{"ty":"el","bm":0,"hd":false,"mn":"ADBE Vector Shape - Ellipse","nm":"Ellipse Path 1","d":1,"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[400,400]}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.0784,0.8039,0.7804]},"r":1,"o":{"a":0,"k":100}},{"ty":"tr","a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[0,0]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}}]}],"ind":2},{"ty":4,"nm":"bg 2","sr":1,"st":0,"op":80,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0]},"s":{"a":1,"k":[{"o":{"x":0.33,"y":0},"i":{"x":0.25,"y":1},"s":[0,0,100],"t":27},{"s":[100,100,100],"t":51}]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[200,200,0]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"bg","ix":1,"cix":2,"np":2,"it":[{"ty":"el","bm":0,"hd":false,"mn":"ADBE Vector Shape - Ellipse","nm":"Ellipse Path 1","d":1,"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[400,400]}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[1,1,1]},"r":1,"o":{"a":0,"k":100}},{"ty":"tr","a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[0,0]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}}]}],"ind":3},{"ty":4,"nm":"bg 3","sr":1,"st":0,"op":80,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0]},"s":{"a":1,"k":[{"o":{"x":1,"y":0},"i":{"x":0.67,"y":1},"s":[0,0,100],"t":5},{"s":[100,100,100],"t":30}]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[200,200,0]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"bg","ix":1,"cix":2,"np":2,"it":[{"ty":"el","bm":0,"hd":false,"mn":"ADBE Vector Shape - Ellipse","nm":"Ellipse Path 1","d":1,"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[400,400]}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.0784,0.8039,0.7804]},"r":1,"o":{"a":0,"k":100}},{"ty":"tr","a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[0,0]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}}]}],"ind":4}],"v":"5.7.4","fr":40,"op":80,"ip":0,"assets":[]}
```

# src\app\_components\AboutUs.tsx

```tsx
"use client";

import { ABOUT_ROUTE } from "@/lib/paths";
import React from "react";
import Section from "../../components/Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

const AboutUs: React.FC = () => {
  const t = useTranslations("Home.aboutUs");

  return (
    <Section
      id="about-us"
      className="sm:pt-[120px] sm:pb-[74px] pt-[36px]  px-[12px] relative sm:overflow-clip flex flex-col items-center   sm:px-5 xl:px-0"
    >
      <h1 className="title pb-[22px] sm:pb-[32px] relative z-10 ">
        {t("title")}
      </h1>
      <div className="relative z-10">
        <div className="flex flex-col gap-[40px] sm:gap-[40px] max-w-[351px] sm:max-w-[800px]  sm:px-0">
          <p className="text-base ltr:leading-[26px] sm:text-justify sm:text-[20px] sm:leading-[36px]">
            {t("description")}
          </p>
          <div className="sm:flex sm:justify-center">
            <Link href={ABOUT_ROUTE}>
              <Button
                variant={"outline"}
                className="text-primary-300  w-full  sm:w-fit hover:opacity-75 border-primary-300  text-lg py-3 tracking-[-0.004em] inline-flex items-center justify-center text-center border rounded-full transition-opacity duration-200 ease-in-out font-medium"
              >
                {t("readMore")}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* desktop */}
      <img
        src="https://i.imgur.com/wUfwWfR.png"
        alt="about us background"
        className="hidden sm:block absolute top-[-232px] right-[40%] translate-x-[calc(50%-512px)] w-[1878px] min-w-[1878px] h-[1264px] min-h-[1264px] transform rotate-[8.75deg] opacity-20"
      />
    </Section>
  );
};

export default AboutUs;

```

# src\app\_components\AcademicRankings\AcademicRankings.tsx

```tsx
import { fetchRankings } from "@/lib/api_services/rankings-apis";
import { cookies, headers } from "next/headers";
import AcademicRankingsClientSide from "./AcademicRankingsClientSide";

const AcademicRankings: React.FC = async () => {
  const lang = headers().get("x-locale") || "ar";

  let rankingsData;

  try {
    rankingsData = await fetchRankings(lang);
  } catch (error) {
    console.error("Failed to fetch academic rankings:", error);
  }

  return (
    rankingsData &&
    rankingsData.length > 0 && (
      <AcademicRankingsClientSide rankings={rankingsData} />
    )
  );
};

export default AcademicRankings;

```

# src\app\_components\AcademicRankings\AcademicRankingsClientSide.tsx

```tsx
"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Ranking } from "@/lib/types";
import Image from "next/image";
import { getImageUrl } from "@/lib/utils";

interface AcademicRankingsClientSideProps {
  rankings: Ranking[] | undefined;
}

const AcademicRankingsClientSide: React.FC<AcademicRankingsClientSideProps> = ({
  rankings,
}) => {
  const t = useTranslations("Home.academicRankings");

  if (!rankings || rankings.length === 0) {
    return null;
  }

  return (
    <div className="flex w-full flex-col text-start sm:flex-row">
      <div className="flex flex-1 items-center justify-center bg-primary p-4 py-[44px] sm:p-8 sm:py-[80px] 1920:py-[106px]">
        <div className="max-w-[348px] 1920:max-w-[460px]">
          <h3 className="mb-6 text-[20px] font-bold leading-[1.25em] text-secondary sm:mb-10 sm:text-[15px] 1920:mb-[40px] 1920:text-[20px]">
            {t("subtitle")}
          </h3>
          <h2 className="mb-11 text-[44px] font-medium leading-[72px] text-white sm:mb-[69px] sm:text-[36px] sm:leading-[54px] 1920:mb-[80px] 1920:text-[48px] 1920:leading-[72px]">
            {t("title")}
          </h2>
          <div className="mb-[34px] flex gap-6 sm:mb-10 sm:flex-row sm:gap-7 1920:mb-[53px] 1920:gap-[37px]">
            {rankings.map((ranking) => (
              <a
                key={ranking.id}
                href={ranking.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex h-[110px] w-full max-w-[158px] items-center justify-center bg-white transition-all duration-300 hover:scale-105 hover:opacity-70 hover:shadow-lg sm:h-[115px] 1920:h-[153px] 1920:max-w-[211px]"
              >
                <span className="absolute end-0 top-0 bg-[#252525] px-[6px] py-1 text-[14px] font-medium leading-[1.22em] text-white">
                  #{ranking.num}
                </span>

                <Image
                  src={getImageUrl(ranking.image)}
                  alt={ranking.name}
                  fill
                  className="object-contain px-3 py-6 sm:px-[12px] sm:py-[24px]"
                />
              </a>
            ))}
          </div>
          <p className="max-w-[242px] text-[16px] font-normal leading-[1.75em] text-[#F2F2F2]/70 sm:max-w-[276px] sm:text-[14px] 1920:text-[18px]">
            {t("note")}
          </p>
        </div>
      </div>
      <div className="relative h-[275px] sm:h-auto sm:w-[calc(50%+63px)] 1920:w-[calc(50%+85px)]">
        <Image
          src="/images/hero-bg.jpg"
          alt="University Building"
          fill
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default AcademicRankingsClientSide;

```

# src\app\_components\CardsSection\CardsDesktop.tsx

```tsx
"use client";

import React from "react";
import Section from "../../../components/Section";
import { useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";
import { CardData } from "@/lib/types";
import CommonCard from "./CommonCard";

export default function CardsDesktop() {
  const t = useTranslations("Common.cards");

  const cardsData = [
    {
      title: "uniLife",
      href: "#uniLife",
      imgUrl: "/images/common/cards/uni-life.svg",
    },
    {
      title: "about",
      href: "#about",
      imgUrl: "/images/common/cards/about.svg",
    },
    {
      title: "academicClassifications",
      href: "#academicClassifications",
      imgUrl: "/images/common/cards/academic-classifications.svg",
    },
    { title: "news", href: "#news", imgUrl: "/images/common/cards/news.svg" },
  ];

  const translatedElements = cardsData.map((card) => ({
    ...card,
    title: t(card.title),
  }));

  return (
    <Section className="mt-[-405px] 1920:mt-[-580px] hidden sm:block relative z-10">
      <CardsGrid translatedElements={translatedElements} />
    </Section>
  );
}

function CardsGrid({ translatedElements }: { translatedElements: CardData[] }) {
  return (
    <div className="grid grid-cols-3  gap-[38px] 1920:gap-[50px] max-w-desktop 1920:max-w-desktop-lg mx-auto mb-[125px]">
      {translatedElements.map((el, index) => (
        <div
          key={index}
          className={twMerge(
            index == 0 &&
              "col-span-full grid grid-cols-3 gap-[38px] 1920:gap-[50px] items-end justify-end"
          )}
        >
          <CommonCard
            key={index}
            el={el}
            index={index}
            className="col-start-3"
          />
        </div>
      ))}
    </div>
  );
}

```

# src\app\_components\CardsSection\CardsMobile.tsx

```tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import CommonCard from "./CommonCard";
import { ScrollableCardsContainer } from "../../../components/scrollable-container/ScrollableContainer";
import ScrollableContainerUpperSection from "@/components/scrollable-container/UpperSection";
import ScrollElement from "@/components/ScrollElement";

export default function CardsMobile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Common.cards");

  const cardsData = [
    {
      title: "uniLife",
      href: "#uniLife",
      imgUrl: "/images/common/cards/uni-life.svg",
    },
    {
      title: "about",
      href: "#about",
      imgUrl: "/images/common/cards/about.svg",
    },
    {
      title: "academicClassifications",
      href: "#academicClassifications",
      imgUrl: "/images/common/cards/academic-classifications.svg",
    },
    { title: "news", href: "#news", imgUrl: "/images/common/cards/news.svg" },
  ];

  const translatedElements = cardsData.map((card) => ({
    ...card,
    title: t(card.title),
  }));

  return (
    <div className="mb-[54px] mt-[30px] w-full flex-col overflow-hidden sm:hidden">
      <ScrollableContainerUpperSection
        containerRef={containerRef}
        title2="جامعة كلكامش"
        title="الخدمات الالكترونية"
      />
      <ScrollableCardsContainer ref={containerRef}>
        {translatedElements.map((el, index) => (
          <ScrollElement className="flex justify-center" key={index}>
            <CommonCard el={el} index={index} />
          </ScrollElement>
        ))}
      </ScrollableCardsContainer>
    </div>
  );
}

```

# src\app\_components\CardsSection\CommonCard.tsx

```tsx
import { Link } from "@/i18n.config";
import { CardData } from "@/lib/types";
import { getImageUrl } from "@/lib/utils";
import { twMerge } from "tailwind-merge";

export default function CommonCard({
  el,
  index,
  className,
  uniqueFirstCard = true,
}: {
  el: CardData;
  index: number;
  className?: string;
  uniqueFirstCard?: boolean;
}) {
  return (
    <Link
      target="_blank"
      href={el.href}
      className={twMerge(
        "flex h-[243px] w-full max-w-[343px] flex-col items-start justify-between p-[35px] text-center transition-all duration-300 hover:opacity-90 hover:shadow-lg sm:h-[265px] sm:max-w-none 1920:h-[349px]",
        index == 0 && uniqueFirstCard ? "bg-secondary" : "bg-white",
        className,
      )}
    >
      <img
        src={el.imgUrl}
        alt={el.title}
        className="h-[48px] w-[48px] object-contain sm:h-[60px] sm:w-[60px] 1920:h-[80px] 1920:w-[80px]"
      />
      <div className="flex w-full items-center justify-between gap-[20px]">
        <h4 className="text-start text-[24px] font-medium leading-[1.3em] sm:text-[27px] 1920:text-[36px]">
          {el.title}
        </h4>
        <i className="ri-arrow-left-line text-[32px] flippable 1920:text-[45px]"></i>
      </div>
    </Link>
  );
}

```

# src\app\_components\CardsSection\HomepageCards.tsx

```tsx
import React from "react";
import CardsMobile from "./CardsMobile";
import CardsDesktop from "./CardsDesktop";

export default function HomepageCards() {
  return (
    <>
      <CardsMobile />
      <CardsDesktop />
    </>
  );
}

```

# src\app\_components\Footer\Footer.tsx

```tsx
import { fetchLinks } from "@/lib/api_services/common-apis";
import FooterClient from "./FooterClient";

const Footer = async () => {
  let contactInfo;

  try {
    contactInfo = await fetchLinks();
  } catch (error) {
    console.error("Failed to fetch contact information:", error);
  }

  return <FooterClient contactInfo={contactInfo} />;
};

export default Footer;

```

# src\app\_components\Footer\FooterClient.tsx

```tsx
"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import Section from "@/components/Section";
import { Input } from "@/components/ui/input";
import Wrapper from "@/components/Wrapper";
import React from "react";
import { RELATED_LOCATIONS_ROUTE } from "@/lib/paths";
import { RawContact } from "@/lib/types";
import SocialMediaLinks from "../Header/SocialMediaLinks";

interface FooterClientProps {
  contactInfo: RawContact | undefined;
}

const FooterClient: React.FC<FooterClientProps> = ({ contactInfo }) => {
  const t = useTranslations("Footer");

  return (
    <Section
      as="footer"
      className="text-start text-white"
      wrapperClass="bg-[#121315] py-[30px] sm:py-[50px] 1920:py-[50px]"
    >
      <Wrapper className="flex flex-col gap-[47px] sm:gap-[69px]">
        <div className="flex flex-col items-start justify-between sm:flex-row">
          <FooterRight />
          <FooterLeft />
        </div>

        <div className="w-full border-b border-white/20"></div>

        <FooterBottom contactInfo={contactInfo} t={t} />
      </Wrapper>
    </Section>
  );
};

const FooterRight = () => {
  const t = useTranslations("Footer");

  return (
    <div className="mb-8 w-full sm:mb-0 sm:max-w-[500px] 1920:max-w-[846px]">
      <img
        src="/images/logo.png"
        alt="logo"
        className="mb-[40px] hidden h-[78px] object-contain sm:block 1920:mb-[69px]"
      />
      <h2 className="text-[32px] font-bold leading-[1.54em] sm:text-[44px] 1920:text-[71px]">
        {t("slogan")}
      </h2>
    </div>
  );
};

const FooterLeft = () => {
  const t = useTranslations("Footer");
  const tCommon = useTranslations("Common");

  const data = [
    { label: "ministry", link: "#" },
    { label: "privateDepartment", link: "#" },
    { label: "arabUniversities", link: "#" },
  ];

  return (
    <div className="flex w-full sm:max-w-[450px] 1920:max-w-[487px]">
      <Link
        href={RELATED_LOCATIONS_ROUTE}
        className="text-[16px] leading-[1.22em] text-secondary sm:text-[18px]"
      >
        {t("relatedSites")}
      </Link>
      {/* <div className="mb-[58px] flex flex-col gap-[10px] sm:mb-[89px] sm:flex-row sm:items-center sm:gap-[24px]">
        <label className="text-[18px] leading-[1.22em]">
          {t("subscribeNewsletter")}
        </label>
        <Input
          className="max-w-[289px] border-b border-white bg-transparent text-white !ring-0 sm:flex-1"
          inputClass="placeholder-white/50 text-[16px] leading-[1.22em] ps-0"
          placeholder={t("enterEmail")}
          suffixIcon={<i className="ri-arrow-left-line text-[22px]"></i>}
        />
      </div>
      <div className="flex flex-col gap-[26px] sm:gap-[36px]">
        <h3 className="text-[20px] font-bold leading-[1.22em]">
          {t("relatedSites")}
        </h3>
        <ul className="flex flex-col gap-[8px] sm:gap-[16px]">
          {data.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className="text-[16px] leading-[1.22em] hover:text-secondary sm:text-[18px]"
              >
                {t(item.label)}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={RELATED_LOCATIONS_ROUTE}
          className="text-[16px] leading-[1.22em] text-secondary sm:text-[18px]"
        >
          {t("viewMore")}
        </Link>
      </div> */}
    </div>
  );
};

const FooterBottom = ({
  contactInfo,
  t,
}: {
  contactInfo: RawContact | undefined;
  t: (key: string) => string;
}) => {
  return (
    <div className="flex flex-col items-center gap-[74px] sm:gap-[49px]">
      <div className="flex flex-col justify-end gap-[20px] self-stretch sm:flex-row sm:items-center">
        {/* <FooterNavLinks t={t} /> */}
        {contactInfo && <SocialMediaLinks contactInfo={contactInfo} />}
      </div>
      <p className="text-sm sm:text-lg">{t("copyright")}</p>
    </div>
  );
};

const FooterNavLinks = ({ t }: { t: (key: string) => string }) => {
  const links = [
    { label: "home", href: "/" },
    { label: "privacyPolicy", href: "#" },
    { label: "cookiePolicy", href: "#" },
    { label: "relatedSites", href: RELATED_LOCATIONS_ROUTE },
  ];

  return (
    <div className="flex flex-col gap-[20px] sm:flex-row sm:items-center sm:gap-[30px]">
      {links.map((link, index) => (
        <React.Fragment key={link.label}>
          {index !== 0 && (
            <div className="hidden w-[1px] self-stretch bg-white/20 sm:block"></div>
          )}
          <Link
            href={link.href}
            className="text-[16px] leading-[1.35em] hover:text-secondary"
          >
            {t(link.label)}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};

export default FooterClient;

```

# src\app\_components\Header\Header.tsx

```tsx
import Navbar from "./Navbar/Navbar";
import { HOME_ROUTE, IMAGE_BG_ROUTES, SLIDER_BG_ROUTES } from "@/lib/paths";
import { twMerge } from "tailwind-merge";
import Topbar from "./Topbar/Topbar";
import { removeLocaleFromPathname } from "@/lib/utils";
import { headers } from "next/headers";
import { fetchLinks } from "@/lib/api_services/common-apis";
import { RawContact } from "@/lib/types";
import TopbarClient from "./Topbar/TopbarClient";
import NavbarClient from "./Navbar/NavbarClient";
import DynamicImage from "@/components/DynamicImage";
import Head from "next/head";
import HeaderClient from "./HeaderClient";

export default async function Header() {
  let contactInfo: RawContact | undefined;

  try {
    contactInfo = await fetchLinks();
  } catch (error) {
    console.error("Failed to fetch contact information:", error);
  }

  return <HeaderClient contactInfo={contactInfo}></HeaderClient>;
}

```

# src\app\_components\Header\HeaderClient.tsx

```tsx
"use client";

import React from "react";
import TopbarClient from "./Topbar/TopbarClient";
import NavbarClient from "./Navbar/NavbarClient";
import { twMerge } from "tailwind-merge";
import { IMAGE_BG_ROUTES, SLIDER_BG_ROUTES } from "@/lib/paths";
import { RawContact } from "@/lib/types";
import { usePathname } from "@/i18n.config";

export default function HeaderClient({
  contactInfo,
}: {
  contactInfo: RawContact | undefined;
}) {
  const pathname = usePathname();

  return (
    <header
      className={twMerge(
        "relative z-40 flex flex-col bg-primary sm:items-center sm:border-b sm:border-[#D9D9D9]/10",
        [...IMAGE_BG_ROUTES, ...SLIDER_BG_ROUTES].includes(pathname) &&
          "sm:bg-transparent",
      )}
    >
      <TopbarClient contactInfo={contactInfo}></TopbarClient>
      <NavbarClient contactInfo={contactInfo}></NavbarClient>
    </header>
  );
}

```

# src\app\_components\Header\Navbar\Navbar.tsx

```tsx
import { fetchLinks } from "@/lib/api_services/common-apis";
import NavbarClient from "./NavbarClient";
import { useEffect, useState } from "react";
import { RawContact } from "@/lib/types";

export default async function Navbar() {
  let contactInfo: RawContact | undefined;

  try {
    contactInfo = await fetchLinks();
  } catch (error) {
    console.error("Failed to fetch contact information:", error);
  }

  return <NavbarClient contactInfo={contactInfo} />;
}

```

# src\app\_components\Header\Navbar\NavbarClient.tsx

```tsx
"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, Locale } from "@/i18n.config";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import useTextDirection from "@/app/_hooks/useTextDirection";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import useCommonStore from "@/lib/zustand/common";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { navItems, topbarNavItems } from "@/lib/data";
import { MenuItem, RawContact } from "@/lib/types";
import { twMerge } from "tailwind-merge";
import Section from "@/components/Section";
import NavElements from "../../News/NavElements";

interface NavbarClientProps {
  contactInfo: RawContact | undefined;
}

const NavbarClient: React.FC<NavbarClientProps> = ({ contactInfo }) => {
  const t = useTranslations("Header");
  const locale = useLocale() as Locale;

  return (
    <Section className="max-w-none sm:max-w-[1440px] 1920:max-w-[1920px]">
      <nav className="flex h-[77px] w-full flex-row-reverse items-center justify-between bg-transparent text-white sm:flex-row sm:px-[60px] 1920:px-[136px]">
        <div className="flex h-full items-center gap-[40px] sm:flex sm:w-full sm:justify-between">
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 hover:opacity-70 sm:static sm:translate-x-0"
          >
            <img
              src={`/images/logo.png`}
              className="h-[47px] 1920:h-[55px]"
              alt={t("appTitle")}
            />
          </Link>
          <div className="hidden h-full sm:block">
            <NavElements />
          </div>
          <SocialMediaLinks contactInfo={contactInfo} />
        </div>
        <NavDrawer contactInfo={contactInfo} />
      </nav>
    </Section>
  );
};

const SocialMediaLinks: React.FC<{ contactInfo: RawContact | undefined }> = ({
  contactInfo,
}) => {
  if (!contactInfo) return null;

  const socialMedia = [
    { icon: "ri-instagram-line", url: contactInfo.instagram },
    { icon: "ri-facebook-circle-fill", url: contactInfo.facebook },
    { icon: "ri-linkedin-box-fill", url: contactInfo.linkedin },
    { icon: "ri-youtube-fill", url: contactInfo.youtube },
  ];

  return (
    <div className="hidden gap-[24px] sm:flex">
      {socialMedia.map((social, index) => (
        <Link
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative leading-none transition clickable-area hover:text-secondary hover:opacity-70"
        >
          <i className={`${social.icon} text-[20px]`}></i>
        </Link>
      ))}
    </div>
  );
};

function NavDrawer({ contactInfo }: { contactInfo: RawContact | undefined }) {
  const { isDrawerVisible, toggleDrawer } = useCommonStore();
  const locale = useLocale() as Locale;
  const dir = useTextDirection();
  const tNavLinks = useTranslations("Header.navLinks");
  const t = useTranslations();

  const renderMenuItem = (item: MenuItem, index: number, depth: number = 0) => {
    const paddingStart = 16 * depth + "px";

    if (!item.items || item.items.length === 0) {
      return item.path ? (
        <Link
          key={index}
          href={item.path}
          className="block py-4 text-start text-base font-medium"
          style={{ paddingInlineStart: depth > 0 ? paddingStart : "" }}
          onClick={() => toggleDrawer(false)}
        >
          {item.label}
        </Link>
      ) : (
        <p
          key={index}
          className="block py-4 text-start text-base font-medium"
          style={{ paddingInlineStart: depth > 0 ? paddingStart : "" }}
        >
          {item.label}
        </p>
      );
    }

    return (
      <AccordionItem
        value={`item-${depth}-${index}`}
        key={index}
        className="w-full"
      >
        <AccordionTrigger
          className={twMerge("text-base font-medium")}
          style={{ paddingInlineStart: depth > 0 ? paddingStart : "" }}
        >
          {item.label}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col items-start">
          {item.items.map((subItem, subIndex) =>
            renderMenuItem(subItem, subIndex, depth + 1),
          )}
        </AccordionContent>
      </AccordionItem>
    );
  };

  return (
    <div className="flex sm:hidden">
      <Drawer
        direction="right"
        open={isDrawerVisible}
        onClose={() => toggleDrawer(false)}
      >
        <DrawerTrigger asChild>
          <Button
            variant="ghost"
            onClick={() => toggleDrawer(true)}
            size={"icon"}
            className="px-[16px]"
          >
            <i className="ri-menu-line text-[28px] !font-normal"></i>
          </Button>
        </DrawerTrigger>
        <DrawerContent className="right-0 start-auto top-0 mt-0 h-screen min-w-full rounded-none border-0 bg-primary px-[25px] text-white">
          <div className="flex justify-between border-b border-white/30 py-6">
            <DrawerClose onClick={() => toggleDrawer(false)} className="">
              <i className="ri-close-large-line"></i>
            </DrawerClose>
            <SocialMediaLinks contactInfo={contactInfo}></SocialMediaLinks>
            <LocaleSwitcher locale={locale} />
          </div>
          <ScrollArea className="h-screen" dir={dir}>
            <div className="mx-auto flex w-full flex-col gap-6 p-5">
              <Accordion
                type="multiple"
                className="flex w-full flex-col items-start"
              >
                {navItems(tNavLinks).map((item, index) =>
                  renderMenuItem(item, index),
                )}
              </Accordion>
              <div className="h-[1px] w-full bg-white/30"></div>
              <Accordion
                type="multiple"
                className="flex w-full flex-col items-start"
              >
                {topbarNavItems(t).map((item, index) =>
                  renderMenuItem(item, index),
                )}
              </Accordion>
            </div>
          </ScrollArea>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default NavbarClient;

```

# src\app\_components\Header\SocialMediaLinks.tsx

```tsx
import React from "react";
import Link from "next/link";
import { RawContact } from "@/lib/types";

interface SocialMediaLinksProps {
  contactInfo: RawContact | undefined;
}

const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({ contactInfo }) => {
  if (!contactInfo) return <></>;

  const socialLinks = [
    { icon: "ri-instagram-line", url: contactInfo.instagram },
    { icon: "ri-facebook-circle-fill", url: contactInfo.facebook },
    { icon: "ri-linkedin-box-fill", url: contactInfo.linkedin },
    { icon: "ri-youtube-fill", url: contactInfo.youtube },
  ];

  return (
    <div className="flex gap-[26px] sm:gap-[24px]">
      {socialLinks.map((link, index) => (
        <Link
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[24px] hover:text-secondary"
        >
          <i className={link.icon}></i>
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaLinks;

```

# src\app\_components\Header\Topbar\Topbar.tsx

```tsx
import { fetchLinks } from "@/lib/api_services/common-apis";
import TopbarClient from "./TopbarClient";
import { useEffect, useState } from "react";
import { RawContact } from "@/lib/types";

const Topbar = async () => {
  let contactInfo: RawContact | undefined;

  try {
    contactInfo = await fetchLinks();
  } catch (error) {
    console.error("Failed to fetch contact information:", error);
  }

  return contactInfo && <TopbarClient contactInfo={contactInfo} />;
};

export default Topbar;

```

# src\app\_components\Header\Topbar\TopbarClient.tsx

```tsx
"use client";

import React from "react";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { Link, Locale } from "@/i18n.config";
import { useLocale, useTranslations } from "next-intl";
import Section from "@/components/Section";
import HoverMenu from "@/components/HoverMenu";
import { topbarNavItems } from "@/lib/data";
import { MenuItem, RawContact } from "@/lib/types";

interface TopbarClientProps {
  contactInfo: RawContact | undefined;
}

const TopbarClient: React.FC<TopbarClientProps> = ({ contactInfo }) => {
  return (
    <Section
      className="relative flex h-[50px] justify-center"
      wrapperClass="bg-[rgba(217,217,217,0.10)] backdrop-blur-[20px] hidden sm:flex relative z-10"
    >
      <div className="flex h-full w-full items-center justify-between sm:px-[60px] 1920:px-[136px]">
        <TopbarContact contactInfo={contactInfo} />
        <TopbarNavigation />
      </div>
    </Section>
  );
};

const TopbarNavigation: React.FC = () => {
  const t = useTranslations();
  const navItems = topbarNavItems(t);

  return (
    <ul className="flex items-center">
      {navItems.map((item, index) => (
        <React.Fragment key={index}>
          {index !== 0 && (
            <div className="mx-2.5 hidden h-4 border-e border-white/10 sm:block"></div>
          )}
          <NavItem item={item} />
        </React.Fragment>
      ))}
    </ul>
  );
};

const NavItem: React.FC<{ item: MenuItem }> = ({ item }) => {
  return (
    <li className="group relative">
      {item.path ? (
        <Link
          href={item.path}
          className="text-sm font-light text-white transition-opacity duration-300 hover:opacity-60 1920:text-base"
        >
          {item.label}
        </Link>
      ) : (
        <span className="text-sm font-light text-white">{item.label}</span>
      )}
      {item.items && (
        <HoverMenu items={item.items} submenuClassName="end-full start-auto" />
      )}
    </li>
  );
};

const TopbarContact: React.FC<{ contactInfo: RawContact | undefined }> = ({
  contactInfo,
}) => {
  const locale = useLocale() as Locale;
  const t = useTranslations("Header");

  if (!contactInfo) return null;

  return (
    <div className="flex items-center gap-[30px] text-xs font-light">
      <ContactElement
        href={`mailto:${contactInfo.email}`}
        label={contactInfo.email}
      />
      <div className="flex gap-1 text-white">
        <ContactElement
          href={`tel:${contactInfo.phone}`}
          label={contactInfo.phone}
        />
      </div>

      <ContactElement
        href="https://www.google.com/maps/place/Gilgamesh+National+University/@33.2228317,44.3878671,17.75z/data=!4m6!3m5!1s0x1559d51e5f965023:0x269c2efce4992572!8m2!3d33.222307!4d44.3888341!16s%2Fg%2F11flrhj7xw?entry=ttu&g_ep=EgoyMDI0MTAwNS4yIKXMDSoASAFQAw%3D%3D"
        label={t("googleMapsLocation")}
      />
      <LocaleSwitcher locale={locale} />
    </div>
  );
};

const ContactElement: React.FC<{ href: string; label: string }> = ({
  href,
  label,
}) => {
  return (
    <a target="_blank" href={href} className="text-white hover:text-secondary">
      {label}
    </a>
  );
};

export default TopbarClient;

```

# src\app\_components\HomeSlider\HomeSliderBg.tsx

```tsx
import { PlaceholderImgData } from "@/components/DynamicImage";
import SliderBg from "@/components/page/SliderBg";
import { getImagePlaceholder } from "@/lib/server-utils";
import { SliderItem, NewsItem } from "@/lib/types";
import { headers } from "next/headers";
import React from "react";
import { getImageUrl } from "@/lib/utils";
import { fetchSliderItems } from "@/lib/api_services/homepage-apis";

export default async function HomeSliderBg() {
  const lang = headers().get("x-locale") || "ar";

  let sliderItems: SliderItem[] = [];
  try {
    sliderItems = await fetchSliderItems(lang);
  } catch (error) {
    console.error("Failed to fetch news:", error);
  }

  // const placeholdersData: PlaceholderImgData[] = await Promise.all(
  //   sliderItems.map(async (item) => {
  //     const { base64, data } = await getImagePlaceholder(
  //       getImageUrl(item.image),
  //     );
  //     return {
  //       base64,
  //       data,
  //     };
  //   }),
  // );

  // return <SliderBg homeSliderData={{ sliderItems, placeholdersData }} />;
  return <SliderBg sliderItems={sliderItems} />;
}

```

# src\app\_components\News\MainNewsCard.tsx

```tsx
import { Button } from "@/components/ui/button";
import { NewsItem } from "@/lib/types";
import { getImageUrl } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";

const MainNewsCard: React.FC<{ item: NewsItem }> = ({ item }) => {
  const t = useTranslations("Common");
  const locale = useLocale();

  const title = locale === "en" ? item.en_title : item.ar_title;
  const description =
    locale === "en" ? item.en_description : item.ar_description;

  return (
    <div className="flex w-full max-w-mobile flex-col gap-[20px] bg-white text-start sm:h-[451px] sm:max-w-desktop sm:flex-row sm:gap-[38px] 1920:h-[596px] 1920:max-w-desktop-lg">
      <div className="flex-1 p-[19px] sm:p-[33px] 1920:p-[44px]">
        <div className="max-w-[240px] sm:max-w-[413px] 1920:max-w-[545px]">
          <h4 className="mb-[10px] text-[14px] font-bold text-primary sm:mb-[18px] sm:text-[16px] 1920:mb-[24px]">
            {description}
          </h4>
          <h3 className="mb-[35px] text-[21px] font-bold leading-[1.4em] sm:mb-[56px] sm:text-[36px] 1920:mb-[74px] 1920:text-[48px]">
            {title}
          </h3>
          <Button className="w-fit px-[14px] py-[7px] text-xs sm:px-[24px] sm:py-[12px] 1920:px-[32px] 1920:py-[16px] 1920:text-base">
            {t("readMore")}
          </Button>
        </div>
      </div>

      <img
        src={getImageUrl(item.image)}
        alt={item.ar_title}
        className="h-full w-full flex-1 object-cover sm:h-full"
      />
    </div>
  );
};

export default MainNewsCard;

```

# src\app\_components\News\NavElements.tsx

```tsx
import React from "react";
import { Link, usePathname } from "@/i18n.config";
import { useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";
import { navItems } from "@/lib/data";
import HoverMenu from "@/components/HoverMenu";
import { MenuItem } from "@/lib/types";

const NavElements: React.FC = () => {
  const t = useTranslations("Header.navLinks");
  const items = navItems(t);

  return (
    <nav className="mt-[61px] flex h-fit flex-col items-center gap-[30px] border-0 bg-transparent text-center sm:mt-0 sm:h-full sm:flex-row sm:gap-0">
      {items.map((item, index) => (
        <React.Fragment key={item.path}>
          <NavItem title={item.label} path={item.path} items={item.items} />
          {index !== items.length - 1 && (
            <div className="mx-0 hidden h-4 border-e border-white/10 sm:block"></div>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

const NavItem: React.FC<{
  title: string;
  path?: string;
  items?: MenuItem[];
}> = ({ title, path, items }) => {
  const pathname = usePathname();

  let classes = twMerge(
    "text-base font-light tracking-[-0.004em] transition-all duration-300 hover:opacity-60 sm:flex sm:h-full sm:items-center sm:px-[20px] sm:text-sm 1920:px-[30px] 1920:text-base",
    pathname === path &&
      "relative after:absolute after:bottom-0 after:start-0 after:h-0.5 after:bg-secondary after:content-[''] sm:after:ms-[20px] sm:after:w-[calc((100%-40px)*0.8)] 1920:after:ms-[30px] 1920:after:w-[calc((100%-60px)*0.8)]",
  );

  return (
    <div className="group relative sm:h-full">
      {path ? (
        <Link href={path} className={classes}>
          {title}
        </Link>
      ) : (
        <span className={classes}>{title}</span>
      )}
      {items && <HoverMenu items={items} />}
    </div>
  );
};

export default NavElements;

```

# src\app\_components\News\News\ClientSide.tsx

```tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Section from "../../../../components/Section";
import MainNewsCard from "../MainNewsCard";
import NewsCard from "../NewsCard";
import { NewsItem } from "@/lib/types";
import ScrollableContainerUpperSection from "@/components/scrollable-container/UpperSection";
import { ScrollableCardsContainer } from "@/components/scrollable-container/ScrollableContainer";
import ScrollElement from "@/components/ScrollElement";

const NewsSectionClientSide: React.FC<{ newsItems: NewsItem[] }> = ({
  newsItems,
}) => {
  const t = useTranslations("Home.news");
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Section className="mb-[60px] sm:mb-[200px] 1920:mb-[280px]">
      <div className="flex-col">
        <ScrollableContainerUpperSection
          title={t("title")}
          containerRef={containerRef}
          titleClass="text-[28px] sm:text-[47px] font-normal 1920:text-[62px] "
          className="sm:mb-[50px] 1920:mb-[66px]"
        ></ScrollableContainerUpperSection>

        <div className="flex w-fit flex-col sm:gap-[38px] 1920:gap-[50px]">
          <ScrollableCardsContainer ref={containerRef}>
            {newsItems.slice(0, 4).map((item, index) => (
              <ScrollElement className="flex justify-center" key={index}>
                <MainNewsCard item={item} />
              </ScrollElement>
            ))}
          </ScrollableCardsContainer>
          <Section
            className="gird-cols-1 grid w-full max-w-mobile sm:max-w-desktop sm:grid-cols-3 sm:gap-[38px] 1920:max-w-desktop-lg 1920:gap-[50px]"
            wrapperClass="sm:flex hidden"
          >
            {newsItems.slice(1, 4).map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </Section>
        </div>
      </div>
    </Section>
  );
};

export default NewsSectionClientSide;

```

# src\app\_components\News\News\News.tsx

```tsx
import { useLocale, useTranslations } from "next-intl";
import { NewsItem, NewsResponse } from "@/lib/types";
import NewsSectionClientSide from "./ClientSide";
import { cookies, headers } from "next/headers";
import { getLatestNews } from "@/lib/api_services/news-apis";

const NewsSection: React.FC = async () => {
  const lang = headers().get("x-locale") || "ar";

  let newsItems: NewsResponse | undefined;

  try {
    newsItems = await getLatestNews(1);
  } catch (error) {
    console.error("Failed to fetch news:", error);
  }
  return (
    newsItems &&
    newsItems.latestnews.data.length > 0 && (
      <NewsSectionClientSide
        newsItems={newsItems.latestnews.data}
      ></NewsSectionClientSide>
    )
  );
};

export default NewsSection;

```

# src\app\_components\News\NewsCard.tsx

```tsx
import React from "react";
import { NewsItem } from "@/lib/types";
import { getImageUrl } from "@/lib/utils";
import { useLocale } from "next-intl";

const NewsCard: React.FC<{ item: NewsItem }> = ({ item }) => {
  const locale = useLocale();

  const title = locale === "en" ? item.en_title : item.ar_title;
  const description =
    locale === "en" ? item.en_description : item.ar_description;

  return (
    <div className="flex flex-col bg-white">
      <img
        src={getImageUrl(item.image)}
        alt={title}
        className="w-full object-cover sm:h-[238px] 1920:h-[314px]"
      />
      <div className="sm:p-[22px] 1920:p-[30px]">
        <h4 className="mb-[24px] text-base font-medium text-primary sm:mb-[18px] sm:text-xs 1920:mb-[24px] 1920:text-base">
          {description}
        </h4>
        <h3 className="text-[18px] font-medium 1920:text-[24px]">{title}</h3>
      </div>
    </div>
  );
};

export default NewsCard;

```

# src\app\_components\News\NewsCardButton.tsx

```tsx
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n.config";
import { NEWS_ROUTE } from "@/lib/paths";
import React from "react";

interface NewsCardButtonProps {
  children: React.ReactNode;
}

const NewsCardButton: React.FC<NewsCardButtonProps> = ({ children }) => {
  return (
    <Button
      variant={"outline"}
      className="!px-[12px] !py-[5px] !text-[14px] !font-normal leading-[20px] pointer-events-none ltr:sm:!text-[14px] ltr:!text-[11px]"
    >
      {children}
    </Button>
  );
};

export default NewsCardButton;

```

# src\app\_components\News\NewsTags.tsx

```tsx
import React from 'react'
import NewsCardButton from './NewsCardButton'
import { useTranslations } from 'next-intl';

export default function NewsTags() {
    const t = useTranslations("Home.news");

  return (
    <div className="flex gap-[6px]">
    <NewsCardButton>{t("tags.contracts")}</NewsCardButton>
    <NewsCardButton>{t("tags.alzaeem")}</NewsCardButton>
  </div>
  )
}

```

# src\app\_components\OurColleges\OurColleges.tsx

```tsx
import { fetchColleges } from "@/lib/api_services/colleges-apis";
import { cookies, headers } from "next/headers";
import OurCollegesClientSide from "./OurCollegesClientSide";

const OurColleges: React.FC = async () => {
  const lang = headers().get("x-locale") || "ar";

  let collegesData;

  try {
    collegesData = await fetchColleges(lang);
  } catch (error) {
    console.error("Failed to fetch colleges:", error);
  }

  return (
    collegesData &&
    collegesData.length > 0 && <OurCollegesClientSide colleges={collegesData} />
  );
};

export default OurColleges;

```

# src\app\_components\OurColleges\OurCollegesClientSide.tsx

```tsx
"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { College } from "@/lib/types";
import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getImageUrl } from "@/lib/utils";

interface OurCollegesClientSideProps {
  colleges: College[] | undefined;
}

const OurCollegesClientSide: React.FC<OurCollegesClientSideProps> = ({
  colleges,
}) => {
  const t = useTranslations("Common");

  if (!colleges || colleges.length === 0) {
    return null;
  }

  return (
    <Section wrapperClass="mb-[57px] sm:mb-[200px]">
      <Wrapper className="flex-col">
        <div className="mb-[24px] flex flex-col items-center text-center sm:mb-[90px]">
          <h4 className="mb-5 px-2 py-1 text-[16px] font-bold leading-[1.25em] text-secondary">
            {t("gilgameshUniversity")}
          </h4>
          <h2 className="px-4 py-2 text-[48px] font-bold leading-[1.25em]">
            {t("ourColleges")}
          </h2>
        </div>
        <div className="mx-auto grid max-w-[375px] grid-cols-1 gap-[15px] text-start sm:max-w-[1280px] sm:grid-cols-4 sm:gap-6 1920:max-w-[1920px] 1920:gap-[34px]">
          {colleges.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>
      </Wrapper>
    </Section>
  );
};

interface CollegeCardProps {
  college: College;
}

const CollegeCard: React.FC<CollegeCardProps> = ({ college }) => {
  const t = useTranslations("Common");

  return (
    <div className="flex h-[693px] flex-col bg-white sm:h-[500px] 1920:h-[693px]">
      <div className="relative flex h-[368px] items-center justify-center border-b-[7px] border-secondary bg-[#DBDBDB] sm:h-[266px] 1920:h-[368px]">
        <div className="relative aspect-square w-full max-w-[257px] sm:max-w-[183px] 1920:max-w-[257px]">
          <Image
            src={getImageUrl(college.icon)}
            alt={college.name}
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex flex-grow flex-col justify-between p-5">
        <div>
          <h2 className="mt-[24px] text-[24px] font-bold leading-[1.25em] sm:mt-[17px] sm:text-[17px] 1920:mt-[24px] 1920:text-[24px]">
            {college.name}
          </h2>
          <p className="mt-[24px] line-clamp-3 text-[19px] leading-[1.65em] sm:mt-[17px] sm:text-[14px] 1920:mt-[24px] 1920:text-[19px]">
            {college.description}
          </p>
        </div>
        <Button
          variant={"secondary"}
          className="mt-4 w-full py-[16px] text-[16px] leading-[1.22em] sm:py-[12px] sm:text-[12px] 1920:py-[16px] 1920:text-[16px]"
        >
          {t("readMore")}
        </Button>
      </div>
    </div>
  );
};

export default OurCollegesClientSide;

```

# src\app\_components\OurGoals\OurGoals.tsx

```tsx
import { fetchGoals } from "@/lib/api_services/goals-apis";
import OurGoalsClientSide from "./OurGoalsClientSide";
import { cookies, headers } from "next/headers";

const OurGoals: React.FC = async () => {
  const lang = headers().get("x-locale") || "ar";

  let goalsData;

  try {
    goalsData = await fetchGoals(lang);
  } catch (error) {
    console.error("Failed to fetch goals:", error);
  }

  return (
    goalsData &&
    goalsData.length > 0 && <OurGoalsClientSide goals={goalsData} />
  );
};

export default OurGoals;

```

# src\app\_components\OurGoals\OurGoalsClientSide.tsx

```tsx
"use client";

import React, { useRef } from "react";
import { useTranslations } from "next-intl";
import { GoalItem } from "@/lib/types";
import { ScrollableCardsContainer } from "@/components/scrollable-container/ScrollableContainer";
import ScrollArrows from "@/components/ScrollArrows";
import { twMerge } from "tailwind-merge";

interface OurGoalsClientSideProps {
  goals: GoalItem[];
}

const OurGoalsClientSide: React.FC<OurGoalsClientSideProps> = ({ goals }) => {
  const t = useTranslations("Home.ourGoals");
  let containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className={twMerge("mb-[110px] w-full sm:mb-[157px]")}>
      <ScrollableCardsContainer
        ref={containerRef}
        className={`flex sm:grid sm:w-full ${goals.length < 3 ? "grid-cols-[repeat(auto-fit,minmax(470px,1fr))] justify-center" : "sm:grid-cols-3"} `}
      >
        {goals.map((goal, index) => (
          <div key={goal.id} className="w-screen-pure sm:w-auto">
            <OurGoalsCard goal={goal} index={index} />
          </div>
        ))}
      </ScrollableCardsContainer>
      <ScrollArrows
        containerRef={containerRef}
        useMultiples={true}
        wrapperClassName="justify-end mt-[24px] mx-[16px] sm:hidden"
      />
    </div>
  );
};

interface OurGoalsCardProps {
  goal: GoalItem;
  index: number;
}

const OurGoalsCard: React.FC<OurGoalsCardProps> = ({ goal, index }) => {
  const t = useTranslations("Home.ourGoals");

  const isFirst = index === 0;
  const styles = twMerge(
    "min-h-[556px] sm:min-h-[571px] 1920:min-h-[762px] flex flex-col justify-end text-start",
    isFirst ? "bg-[#0F4023]" : `bg-white bg-no-repeat bg-cover`,
  );

  return (
    <div
      className={styles}
      style={!isFirst ? { backgroundImage: `url(${goal.image})` } : {}}
    >
      {isFirst && (
        <h1 className="mx-4 flex-1 border-b border-white pt-[67px] text-[44px] font-medium leading-[1.22em] text-white sm:mx-[58px] sm:pt-[96px] sm:text-[51px] 1920:mx-[78px] 1920:pt-[129px] 1920:text-[68px]">
          {t("title")}
        </h1>
      )}

      <div
        className={twMerge(
          "text-white",
          !isFirst && "bg-black/30 backdrop-blur-md",
          isFirst
            ? "px-4 pb-[67px] pt-[29px] sm:px-[58px] sm:pb-[50px] sm:pt-[34px] 1920:px-[78px] 1920:pb-[67px] 1920:pt-[46px]"
            : "px-4 py-[29px] sm:px-[58px] sm:py-[47px] 1920:px-[78px] 1920:py-[63px]",
        )}
      >
        <h3 className="mb-2 text-[28px] font-bold leading-[1.22em] sm:text-[21px] 1920:text-[28px]">
          {goal.title}
        </h3>
        <p className="text-[16px] font-light leading-[1.75em] text-white/70 sm:text-[14px] 1920:text-[18px]">
          {goal.description}
        </p>
      </div>
    </div>
  );
};

export default OurGoalsClientSide;

```

# src\app\_components\OurGoals\OurGoalsDesktop.tsx

```tsx
import { Goal } from "@/lib/types";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function OurGoalsDesktop() {
  return (
    <div className="hidden sm:grid w-full grid-cols-3">
      {universityGoals.map((el, index) => (
        <OurGoalsCard key={index} el={el} index={index}></OurGoalsCard>
      ))}
    </div>
  );
}

function OurGoalsCard({ el, index }: { el: Goal; index: number }) {
  const isFirst = index == 0;
  return (
    <div
      className={twMerge(
        "min-h-[556px] sm:min-h-[571px] 1920:min-h-[762px] flex flex-col justify-end",
        isFirst
          ? "bg-[#0F4023]"
          : `bg-white bg-no-repeat bg-cover bg-[url('/images/home/goals/${
              index + 1
            }.jpg')]`
      )}
    >
      {isFirst && (
        <h1 className="flex-1 border-b border-white text-[28px] sm:text-[21px] 1920:text-[28px] leading-[1.22em] font-bold text-white px-4 sm:px-[58px] 1920:px-[78px] pt-[67px] sm:pt-[96px] 1920:pt-[129px]">
          اهداف جامعة كلكامش
        </h1>
      )}

      <div
        className={twMerge(
          "text-white",
          isFirst && "bg-black/30 backdrop-blur-md",
          isFirst
            ? "px-4 pb-[67px] sm:px-[58px] sm:pb-[50px] 1920:px-[78px] 1920:pb-[67px]"
            : "px-4 py-[29px] sm:px-[58px] sm:py-[47px] 1920:px-[78px] 1920:py-[63px]"
        )}
      >
        <h3
          className={twMerge(
            "text-[28px] sm:text-[21px] 1920:text-[28px] leading-[1.22em] font-bold mb-2",
            isFirst && "text-[44px] sm:text-[51px] 1920:text-[68px] font-medium"
          )}
        >
          {el.title}
        </h3>
        <p className="text-[16px] sm:text-[14px] 1920:text-[18px] leading-[1.75em]">
          {el.description}
        </p>
      </div>
    </div>
  );
}

const universityGoals: Goal[] = [
  {
    title: "تعزيز الحداثة والتراث",
    description:
      "المساهمة في تحقيق التطور الكمي والنوعي في الحركة العلمية والثقافية والتعليمية والبحثية العلمية في العراق الجديد من خلال تأهيل كوادر علمية مستنيرة تجمع بين عناصر الحداثة والتراث، وترسيخ المبادئ والأفكار والرؤى العلمية الحديثة.",
  },
  {
    title: "تقديم فرص أكاديمية متقدمة",
    description:
      "توفير الفرص الأكاديمية الجامعية الأولية والعليا (النظرية والتطبيقية)، واعتماد مناهج متقدمة لتحقيق الأهداف العلمية والتعليمية والثقافية التي حددها وزارة التعليم العالي والبحث العلمي لتطوير المجتمع العراقي.",
  },
  {
    title: "تعزيز التميز في البحث العلمي",
    description:
      "دعم الاستثمار في البحث العلمي وتنمية المبتكرين بطريقة تحقق التميز في إنتاج المعرفة لتقديم الخدمات على مستوى يتوافق مع معايير الجودة.",
  },
  {
    title: "ضمان التنافسية في سوق العمل",
    description:
      "المساهمة في تطوير الجانب الأكاديمي وتوفير الكوادر التدريسية والفنية المتخصصة، مما يضمن تأهيل الخريجين قادرين على التنافس في سوق العمل.",
  },
  {
    title: "تعزيز التعليم المستمر",
    description:
      "المساهمة في تطوير التعليم المستمر لتحسين أداء الكوادر البشرية العاملة والمتخصصة والعمل على رفع كفاءتهم وفقًا لمعايير الجودة العالمية.",
  },
  {
    title: "بناء جيل يؤمن بالمواطنة واحترام القانون",
    description:
      "المساهمة في تربية جيل يؤمن بالمواطنة واحترام القانون من خلال مناهج علمية وتعليمية وثقافية ورياضية واجتماعية هادفة.",
  },
];

```

# src\app\_components\OurGoals\OurGoalsMobile.tsx

```tsx

```

# src\app\_components\Statistics\Statistics.tsx

```tsx
import { fetchStatistics } from "@/lib/api_services/statistics-apis";
import StatisticsClientSide from "./StatisticsClientSide";

const Statistics: React.FC = async () => {
  let statisticsData;

  try {
    statisticsData = await fetchStatistics();
  } catch (error) {
    console.error("Failed to fetch statistics:", error);
  }

  return statisticsData && <StatisticsClientSide statistics={statisticsData} />;
};

export default Statistics;

```

# src\app\_components\Statistics\StatisticsClientSide.tsx

```tsx
"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { StatisticsItem } from "@/lib/types";
import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";

interface StatisticsClientSideProps {
  statistics: StatisticsItem | undefined;
}

const StatisticsClientSide: React.FC<StatisticsClientSideProps> = ({
  statistics,
}) => {
  const t = useTranslations("Home.statistics");

  if (!statistics) {
    return null;
  }

  const stats = [
    { value: statistics.students, label: t("students") },
    { value: statistics.faculty_members, label: t("facultyMembers") },
    { value: statistics.administrative_staff, label: t("administrativeStaff") },
    {
      value: statistics.technical_and_professional_staff,
      label: t("technicalStaff"),
    },
  ];

  return (
    <div className="mb-[114px] w-full sm:mb-[198px] 1920:mb-[280px]">
      <div className="flex w-full flex-col items-end">
        <Section
          wrapperClass="bg-[#E6E6E6] py-[60px] sm:py-[94px] 1920:py-[125px]   sm:min-h-[572px] 1920:min-h-[762px] "
          className="max-w-[306px]"
        >
          <Wrapper className="flex flex-col sm:flex-row sm:justify-between">
            <h2 className="mb-[80px] text-start text-[44px] font-medium leading-[66px] text-primary sm:mb-0 sm:max-w-[600px] sm:text-[64px] sm:leading-[80px] 1920:text-[86px] 1920:leading-[107px]">
              {t("title")}
            </h2>
            <div className="grid h-fit w-full grid-cols-[repeat(2,minmax(0,135px))] justify-between gap-y-[32px] sm:max-w-[395px] sm:gap-y-[65px] 1920:max-w-[495px]">
              {stats.map((stat, index) => (
                <div
                  className="flex flex-col gap-[25px] sm:gap-[12px] 1920:gap-[16px]"
                  key={index}
                >
                  <span className="font-sans text-[32px] font-medium leading-[1.22em] text-primary sm:text-[30px] 1920:text-[40px]">
                    {stat.value.toLocaleString()}+
                  </span>
                  <h3 className="text-[16px] leading-[1.22em] text-[#828282] sm:text-[15px] 1920:text-[20px]">
                    {stat.label}
                  </h3>
                </div>
              ))}
            </div>
          </Wrapper>
        </Section>
        <img
          src="/images/home/statistics.jpg"
          alt="image"
          className="w-full object-cover sm:-mt-[186px] sm:max-w-[826px] 1920:-mt-[247px] 1920:max-w-[1102px]"
        />
      </div>
    </div>
  );
};

export default StatisticsClientSide;

```

# src\app\_hooks\useScrollControl.ts

```ts
import { RefObject, useCallback, useState } from "react";

function useScrollControl({
  containerRef,
  useMultiples = false,
  baseScrollAmount,
  resetTimer,
}: {
  containerRef: RefObject<HTMLDivElement>;
  useMultiples?: boolean;
  baseScrollAmount?: number;
  resetTimer?: () => void;
}) {
  const [canScrollEnd, setCanScrollEnd] = useState(false);
  const [canScrollStart, setCanScrollStart] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  const baseScrollAmountFallback = 150;

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      const isRTL = getComputedStyle(containerRef.current).direction === "rtl";

      if (isRTL) {
        setCanScrollEnd(Math.abs(scrollLeft) < scrollWidth - clientWidth);
        setCanScrollStart(Math.abs(scrollLeft) > 0);
      } else {
        setCanScrollStart(Math.abs(scrollLeft) < scrollWidth - clientWidth);
        setCanScrollEnd(Math.abs(scrollLeft) > 0);
      }
      setLastScrollPosition(Math.abs(scrollLeft));
    }
  }, [containerRef]);

  const scroll = useCallback(
    ({ direction, isLTR }: ScrollParams) => {
      if (containerRef.current) {
        if (resetTimer) resetTimer();

        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        const maxScroll = scrollWidth - clientWidth;

        let targetScroll;

        if (useMultiples) {
          const currentMultiple = Math.round(
            Math.abs(scrollLeft) /
              (baseScrollAmount ?? containerRef.current.clientWidth),
          );

          targetScroll =
            (currentMultiple +
              (isLTR
                ? direction === "right"
                  ? 1
                  : -1
                : direction === "left"
                  ? 1
                  : -1)) *
            (baseScrollAmount ?? containerRef.current.clientWidth);
          // (baseScrollAmount * (isLTR ? -1 : 1));

          targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));

          containerRef.current!.scrollTo({
            left: targetScroll * (isLTR ? 1 : -1),
            behavior: "smooth",
          });
        } else {
          containerRef.current.scrollBy({
            left:
              direction === "left"
                ? -(baseScrollAmount ?? baseScrollAmountFallback)
                : (baseScrollAmount ?? baseScrollAmountFallback),
            behavior: "smooth",
          });
        }
      }
    },
    [containerRef, useMultiples, baseScrollAmount],
  );

  const resetScrollPosition = useCallback(() => {
    if (containerRef.current) {
      containerRef.current!.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  }, [containerRef, useMultiples, baseScrollAmount]);

  return {
    canScrollEnd,
    canScrollStart,
    containerRef,
    handleScroll,
    scroll,
    resetScrollPosition,
    lastScrollPosition,
  };
}

type ScrollParams = {
  direction: "right" | "left";
  isLTR?: boolean;
};

export default useScrollControl;

```

# src\app\_hooks\useTextDirection.ts

```ts
import { useLocale } from "next-intl";
import { isRtlLang } from "rtl-detect";

export type TextDirection = "ltr" | "rtl";

export default function useTextDirection(): TextDirection {
  const locale = useLocale();
  return isRtlLang(locale) ? "rtl" : "ltr";
}

```

# src\app\[locale]\about\ClientPage.tsx

```tsx
"use client";

import React, { useRef } from "react";
import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";
import { AboutData } from "@/lib/api_services/about-apis";
import {
  AGREEMENTS_PARTNERSHIPS_ROUTE,
  ORGANIZATIONAL_STRUCTURE_ROUTE,
  UNIVERSITY_STRATEGY_ROUTE,
} from "@/lib/paths";
import { ScrollableCardsContainer } from "@/components/scrollable-container/ScrollableContainer";
import ScrollElement from "@/components/ScrollElement";
import CommonCard from "@/app/_components/CardsSection/CommonCard";
import { useTranslations } from "next-intl";

interface AboutClientPageProps {
  aboutData: AboutData | undefined;
}

export default function AboutClientPage({ aboutData }: AboutClientPageProps) {
  if (!aboutData) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <Section className="mt-[10px] text-start sm:mt-[146px]">
        <Wrapper>
          <div className="grid w-full grid-cols-1 gap-[8px] sm:grid-cols-7 sm:gap-[22px] 1920:gap-[52px]">
            <MainSection about={aboutData.about} />
            <VisionSection vision={aboutData.vision} />
            <MessageSection message={aboutData.message} />
          </div>
          <GoalsSection goals={aboutData.goals} />
        </Wrapper>
      </Section>
      <CardsSection></CardsSection>
    </main>
  );
}

function MainSection({ about }: { about: string }) {
  const t = useTranslations("About");
  return (
    <div className="col-span-full flex flex-col text-primary sm:flex-row">
      <div className="flex flex-col justify-center gap-[14px] bg-white px-[16px] py-[32px] sm:w-[60%] sm:items-start sm:gap-[28px] sm:px-[64px] sm:py-[64px] 1920:gap-[50px] 1920:px-[80px]">
        <h2 className="text-[18px] font-bold sm:text-[22px] 1920:text-[28px]">
          {t("aboutGilgameshUniversity")}
        </h2>
        <p className="text-[16px] leading-[1.8em] sm:text-[20px] 1920:text-[24px]">
          {about}
        </p>
      </div>
      <img
        src="/images/hero-bg.jpg"
        className="w-full object-cover sm:w-[40%]"
        alt="University background"
      />
    </div>
  );
}

function VisionSection({ vision }: { vision: string }) {
  const t = useTranslations("About");
  return (
    <div className="flex flex-col justify-center gap-[14px] bg-[#0F4023] px-[16px] py-[32px] text-white sm:col-span-3 sm:items-start sm:gap-[28px] sm:px-[44px] sm:py-[54px] 1920:gap-[44px] 1920:px-[64px]">
      <h3 className="text-[18px] font-bold sm:text-[22px] 1920:text-[28px]">
        {t("theVision")}
      </h3>
      <h2 className="text-[32px] sm:text-[40px] 1920:text-[68px]">
        {t("universityVision")}
      </h2>
      <p className="mt-[20px] text-justify text-[16px] leading-[1.8em] text-[#F2F2F2]/70 sm:mt-auto sm:text-[18px]">
        {vision}
      </p>
    </div>
  );
}

function MessageSection({ message }: { message: string }) {
  const t = useTranslations("About");
  return (
    <div className="flex flex-col justify-center gap-[14px] bg-primary px-[16px] py-[32px] text-white sm:col-span-4 sm:items-start sm:gap-[28px] sm:px-[64px] sm:py-[64px] 1920:gap-[58px] 1920:px-[108px]">
      <h3 className="text-[18px] font-bold text-secondary sm:text-[22px] 1920:text-[28px]">
        {t("theMessage")}
      </h3>
      <p className="text-[16px] leading-[1.8em] sm:text-[26px] 1920:text-[35px]">
        {message}
      </p>
    </div>
  );
}

function GoalsSection({ goals }: { goals: string }) {
  const goalsList = goals.split("\r\n").filter((goal) => goal.trim() !== "");
  const t = useTranslations("About");

  return (
    <div className="col-span-full mt-[64px] flex flex-col sm:mt-[180px] sm:flex-row">
      <div className="flex flex-col justify-center gap-[24px] py-[32px] pe-[16px] sm:w-1/2 sm:items-start sm:gap-[28px] sm:py-[64px] sm:pe-[64px] 1920:gap-[58px] 1920:pe-[108px]">
        <h2 className="text-[18px] font-bold sm:text-[32px] 1920:text-[48px]">
          {t("universityGoals")}
        </h2>
        <div className="flex flex-col gap-[14px] sm:gap-[24px]">
          {goalsList.map((goal, index) => (
            <div
              className="flex items-start gap-[12px] sm:gap-[24px]"
              key={index}
            >
              <div className="flex h-[31px] min-h-[31px] w-[31px] min-w-[31px] items-center justify-center rounded-full bg-secondary text-[16px] leading-none">
                {index + 1}
              </div>
              <span className="text-justify text-[16px] sm:text-[18px]">
                {goal}
              </span>
            </div>
          ))}
        </div>
      </div>
      <img
        src="/images/hero-bg.jpg"
        className="w-full object-cover sm:w-1/2"
        alt="University goals"
      />
    </div>
  );
}

function CardsSection() {
  const t = useTranslations("Header.navLinks");

  const containerRef = useRef<HTMLDivElement>(null);
  const services = [
    {
      imgUrl: "/images/about/3.svg",
      title: t("organizationalStructure"),
      href: ORGANIZATIONAL_STRUCTURE_ROUTE,
    },
    {
      imgUrl: "/images/about/2.svg",
      title: t("universityStrategy"),
      href: UNIVERSITY_STRATEGY_ROUTE,
    },
    {
      imgUrl: "/images/about/1.svg",
      title: t("agreementsPartnerships"),
      href: AGREEMENTS_PARTNERSHIPS_ROUTE,
    },
  ];

  return (
    <div className="mt-[60px] sm:mt-[150px]">
      <Section className="max-w-none">
        <Wrapper className="mx-0 max-w-none sm:mx-[16px]">
          <ScrollableCardsContainer
            ref={containerRef}
            className="grid grid-cols-[repeat(3,auto)] sm:w-full sm:grid-cols-3 sm:gap-[40px] 1920:gap-[49px]"
          >
            {services.map((service, index) => (
              <ScrollElement
                className="flex justify-center sm:w-auto"
                key={index}
              >
                <CommonCard
                  el={service}
                  index={index}
                  uniqueFirstCard={false}
                />
              </ScrollElement>
            ))}
          </ScrollableCardsContainer>
        </Wrapper>
      </Section>
    </div>
  );
}

```

# src\app\[locale]\about\organizational-structure\ClientPage.tsx

```tsx
import React from "react";
import FileOperations from "@/components/FileOperations";
import ActionsTitle from "@/components/page/FirstTitleSection/ActionsTitle";
import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";
import { OrganizationalStructure } from "@/lib/api_services/organizational-structure-apis";
import { getImageUrl } from "@/lib/utils";
import Image from "next/image";
import DynamicImage from "@/components/DynamicImage";

interface OrganizationalStructureClientPageProps {
  organizationalStructure: OrganizationalStructure | undefined;
}

export default function OrganizationalStructureClientPage({
  organizationalStructure,
}: OrganizationalStructureClientPageProps) {
  if (!organizationalStructure) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <ActionsTitle
        title="الهيكل التنظيمي"
        fileOperations={
          <FileOperations
            showDownloadButton={true}
            pdfStyles={{ body: { flexDirection: "column" } }}
          />
        }
      />
      <Section className="text-start">
        <Wrapper>
          <DynamicImage
            id="print-section"
            src={getImageUrl(organizationalStructure.file)}
            alt="Organizational Structure"
          />
        </Wrapper>
      </Section>
    </main>
  );
}

```

# src\app\[locale]\about\organizational-structure\page.tsx

```tsx
import { getTranslations } from "next-intl/server";
import OrganizationalStructureClientPage from "./ClientPage";
import {
  fetchOrganizationalStructure,
  OrganizationalStructure,
} from "@/lib/api_services/organizational-structure-apis";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale,
    namespace: "Layout.metaData",
  });

  return {
    title: t("organizationalStructureTitle"),
  };
}

export default async function Page() {
  let organizationalStructure: OrganizationalStructure | undefined;

  try {
    organizationalStructure = await fetchOrganizationalStructure();
  } catch (error) {
    console.error("Failed to fetch organizational structure:", error);
  }

  return (
    organizationalStructure && (
      <OrganizationalStructureClientPage
        organizationalStructure={organizationalStructure}
      />
    )
  );
}

```

# src\app\[locale]\about\page.tsx

```tsx
import { getTranslations } from "next-intl/server";
import AboutClientPage from "./ClientPage";
import { fetchAboutData } from "@/lib/api_services/about-apis";
import { headers } from "next/headers";
import ImageBg from "@/components/page/ImageBg";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale,
    namespace: "Layout.metaData",
  });

  return {
    title: t("aboutTitle"),
  };
}

export default async function Page() {
  const lang = headers().get("x-locale") || "ar";
  let aboutData;

  try {
    aboutData = await fetchAboutData(lang);
  } catch (error) {
    console.error("Failed to fetch about data:", error);
  }

  return (
    <>
      <ImageBg title="عن جامعة كلكامش الأهلية" subtitle="حول الجامعة"></ImageBg>
      <AboutClientPage aboutData={aboutData} />
    </>
  );
}

```

# src\app\[locale]\about\president-speech\ClientPage.tsx

```tsx
import React from "react";
import ActionsTitle from "@/components/page/FirstTitleSection/ActionsTitle";
import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";
import { PresidentSpeech } from "@/lib/api_services/president-speech-apis";
import { getImageUrl } from "@/lib/utils";
import Image from "next/image";
import FileOperations from "@/components/FileOperations";
import DynamicImage from "@/components/DynamicImage";

interface PresidentSpeechClientPageProps {
  presidentSpeech: PresidentSpeech | undefined;
}

export default function PresidentSpeechClientPage({
  presidentSpeech,
}: PresidentSpeechClientPageProps) {
  console.log(presidentSpeech);
  if (!presidentSpeech) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <ActionsTitle
        title="كلمة رئيس الجامعة"
        fileOperations={
          <FileOperations
            showDownloadButton={true}
            pdfStyles={{ body: { flexDirection: "column" } }}
          ></FileOperations>
        }
      />
      <Section className="text-start">
        <Wrapper>
          <PresidentCard presidentSpeech={presidentSpeech} />
        </Wrapper>
      </Section>
    </main>
  );
}

function PresidentCard({
  presidentSpeech,
}: {
  presidentSpeech: PresidentSpeech;
}) {
  return (
    <div className="print flex flex-col justify-between bg-white">
      <div
        className="flex flex-col gap-[31px] text-primary sm:flex-row-reverse sm:gap-[70px] sm:p-[50px] 1920:gap-[140px] print:flex-col"
        id="print-section"
      >
        <div className="flex flex-col gap-[50px] sm:w-[378px] sm:min-w-[378px]">
          <DynamicImage
            src={getImageUrl(presidentSpeech.image)}
            alt={presidentSpeech.name}
          />
          <div className="flex flex-col px-[20px] sm:px-0">
            <h2 className="text-[18px] font-bold text-foreground sm:text-[22px] 1920:text-[34px]">
              {presidentSpeech.name}
            </h2>
            <h3 className="mt-[10px] text-[14px] font-medium">
              {presidentSpeech.position}
            </h3>
          </div>
        </div>
        <p className="px-[20px] text-justify text-[16px] leading-[1.75em] sm:px-0 sm:text-[20px]">
          {presidentSpeech.description}
        </p>
      </div>
      <div className="mx-auto mt-[20px] h-[5px] w-[calc(100%-40px)] bg-secondary sm:mt-0 sm:w-[calc(100%-100px)]"></div>
    </div>
  );
}

```

# src\app\[locale]\about\president-speech\page.tsx

```tsx
import { getTranslations } from "next-intl/server";
import PresidentSpeechClientPage from "./ClientPage";
import { fetchPresidentSpeech } from "@/lib/api_services/president-speech-apis";
import { headers } from "next/headers";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale,
    namespace: "Layout.metaData",
  });

  return {
    title: t("presidentSpeechTitle"),
  };
}

export default async function Page() {
  const lang = headers().get("x-locale") || "ar";
  let presidentSpeech;

  try {
    presidentSpeech = await fetchPresidentSpeech(lang);
  } catch (error) {
    console.error("Failed to fetch president's speech:", error);
  }

  return <PresidentSpeechClientPage presidentSpeech={presidentSpeech} />;
}

```

# src\app\[locale]\about\university-council\ClientPage.tsx

```tsx
import React from "react";
import ActionsTitle from "@/components/page/FirstTitleSection/ActionsTitle";
import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";
import { CouncilMember } from "@/lib/api_services/council-apis";
import { getImageUrl } from "@/lib/utils";
import Image from "next/image";
import DynamicImage from "@/components/DynamicImage";

interface UniversityCouncilClientPageProps {
  councilMembers: CouncilMember[] | undefined;
}

export default function UniversityCouncilClientPage({
  councilMembers,
}: UniversityCouncilClientPageProps) {
  if (!councilMembers) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <ActionsTitle title="مجلس الجامعة" />
      <Section className="text-start">
        <Wrapper>
          <div className="grid w-full grid-cols-1 gap-[8px] sm:grid-cols-4 sm:gap-[22px] 1920:grid-cols-5">
            <PresidentCard member={councilMembers[0]} />
            {councilMembers.slice(1).map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </Wrapper>
      </Section>
    </main>
  );
}

function PresidentCard({ member }: { member: CouncilMember }) {
  return (
    <div className="flex flex-col justify-between bg-white sm:col-span-3 sm:px-[20px]">
      <div className="flex h-full items-center">
        <div className="flex h-full w-full flex-col gap-[25px] text-primary sm:flex-row sm:py-[20px]">
          <DynamicImage
            src={getImageUrl(member.image)}
            alt={member.name}
            wrapperClass="w-full sm:w-[40%]"
          />
          <div className="flex flex-col justify-center px-[8px] py-[20px] sm:w-[60%] sm:items-start sm:justify-start sm:px-[12px] sm:py-[40px] 1920:px-[20px]">
            <h2 className="text-[18px] font-bold text-foreground sm:text-[26px] 1920:text-[34px]">
              {member.name}
            </h2>
            <h3 className="mt-[10px] text-[14px] font-medium">
              {member.position}
            </h3>
            <p className="mt-[16px] text-[16px] leading-[24px] sm:mt-[28px] 1920:mt-[58px]">
              {member.description}
            </p>
          </div>
        </div>
      </div>
      <div className="h-[5px] w-full bg-secondary"></div>
    </div>
  );
}

function MemberCard({ member }: { member: CouncilMember }) {
  return (
    <div className="flex flex-col justify-between bg-white px-[18px]">
      <div className="flex flex-col gap-[35px] pb-[57px] pt-[18px]">
        <DynamicImage
          src={getImageUrl(member.image)}
          alt={member.name}
          className="w-full object-cover"
        />
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[21px] font-medium text-foreground">
            {member.name}
          </h2>
          <h3 className="mt-[12px] max-w-[200px] text-[16px] font-medium leading-[24px] text-primary">
            {member.position}
          </h3>
          <p className="mt-[12px] text-[14px] text-muted">
            {member.description}
          </p>
        </div>
      </div>
      <div className="h-[5px] w-full bg-secondary"></div>
    </div>
  );
}

```

# src\app\[locale]\about\university-council\page.tsx

```tsx
import { getTranslations } from "next-intl/server";
import UniversityCouncilClientPage from "./ClientPage";
import { fetchCouncilMembers } from "@/lib/api_services/council-apis";
import { headers } from "next/headers";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale,
    namespace: "Layout.metaData",
  });

  return {
    title: t("universityCouncilTitle"),
  };
}

export default async function Page() {
  const lang = headers().get("x-locale") || "ar";
  let councilMembers;

  try {
    councilMembers = await fetchCouncilMembers(lang);
    console.log("councilMembers -- --", councilMembers);
  } catch (error) {
    console.error("Failed to fetch council members:", error);
  }

  return <UniversityCouncilClientPage councilMembers={councilMembers} />;
}

```

# src\app\[locale]\contact\page.tsx

```tsx
import ImageBg from "@/components/page/ImageBg";
import React from "react";

export default function page() {
  return <ImageBg subtitle="جامعة كلكامش" title="اتصل بنــــا"></ImageBg>;
}

```

# src\app\[locale]\layout.tsx

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getMessages } from "next-intl/server";
import useTextDirection from "@/app/_hooks/useTextDirection";
import Header from "../_components/Header/Header";
import Footer from "../_components/Footer/Footer";

import Script from "next/script";
import CommonSections from "@/components/common-sections/CommonSections";
import SuccessModal from "@/components/modals/SuccessModal";
import { usePathname } from "@/i18n.config";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();
  const dir = useTextDirection();

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />

        <script src="/js/scrollbarWidth.js" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <CommonSections></CommonSections>
          <Footer></Footer>
          <SuccessModal />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

```

# src\app\[locale]\news\_components\ConferenceImportance.tsx

```tsx
import React from "react";
import { twMerge } from "tailwind-merge";

const ConferenceImportance: React.FC = () => {
  return (
    <section className="mt-[82px] flex flex-col items-center  gap-[21px] px-[8px] sm:mt-[171px] sm:gap-[60px] sm:px-[60px]">
      <h2 className="lg-title   text-center sm:max-w-[494px]">
        أهمـــــية مــــعـــــرض ومؤتمر العراق للتعليم
      </h2>
      <div className="flex flex-col gap-[19px] sm:gap-[70px]">
        <Section
          points={section1Points}
          imageSrc="/images/about/conference-importance/1.jpg"
          imageAlt="Conference importance 1"
        />
        <Section
          className="sm:flex-row-reverse"
          points={section2Points}
          imageSrc="/images/about/conference-importance/2.jpg"
          imageAlt="Conference importance 2"
        />
      </div>
    </section>
  );
};

const CheckedPoint: React.FC<CheckedPointProps> = ({
  text,
}) => (
  <div className="flex items-start gap-[20px]">
    <div className="mt-[6px] flex h-[25px] min-h-[25px] w-[25px] min-w-[25px] items-center justify-center rounded-full bg-primary sm:mt-0">
      <i className="fa-solid fa-check text-[15px] text-foreground"></i>
    </div>
    <p className="text-[18px] font-medium leading-[29px]">
      {text}
    </p>
  </div>
);

const Section: React.FC<SectionProps> = ({
  points,
  imageSrc,
  imageAlt,
  className,
}) => (
  <div
    className={twMerge(
      "flex flex-col gap-[14px] sm:max-w-[1708px] sm:flex-row sm:gap-[38px]",
      className,
    )}
  >
    <div className="flex flex-col gap-[40px] rounded-[30px] bg-[#F2F2F2] px-[20px] py-[25px] sm:gap-[20px] sm:px-[30px] sm:py-[30px] ">
      {points.map((point, index) => (
        <CheckedPoint key={index} text={point} />
      ))}
    </div>
    <img
      src={imageSrc}
      alt={imageAlt}
      className="rounded-[20px] object-cover sm:rounded-[25px]"
    />
  </div>
);

const section1Points: string[] = [
  "ستكون جزءا من حدث التعليم الأكبر في العراق والتجمع التجاري والأكاديمي لنخب مقدمي الخدمات التخصصية للمؤسسات التعليمية.",
  'فرصة للتواصل المباشر مع المؤسسة الوطنية البريطانية "The Times" ومؤسسات التصنيفات الأخرى للتعليم وتنسيق الشراكة ضمن معرض ومؤتمر العراق للتعليم.',
  'فرصة فريدة للتواصل المباشر مع دور النشر العالمية مثل "ELSEVIER" المختصة بنشر الكتب الطبية والعلمية.',
  'حضور منظمة تصنيف الجامعات العالمي (QS) "World University Rankings" وهو تصنيف عالمي لأفضل 800 جامعة في العالم تنشره شركة كواكواريلي سيموندس.',
  "تعزيز التواصل والتفاعل وتطوير شبكة العلاقات وخلق قنوات تواصل فعالة بين المؤسسات التعليمية/التربوية والطلبة.",
  "تغطية إعلامية متميزة وصدى إعلامي واسع.",
  "الترويج والتسويق المبتكر وعرض القيم الأكاديمية والمناهج ذات العلاقة بالموسم الدراسي الجديد.",
  "تعزيز حضور العلامة التجارية ومشاركة التجارب الملهمة وقصص النجاح.",
  "فرصة فريدة لإنشاء شراكات عالمية وإقليمية ومشاريع توأمة مع الجامعات العالمية.",
  "استثمار فرصة تواجد المؤثرين وصناع المحتوى العلمي والأكاديمي لتسليط الضوء على مؤسستك وتسويق خدماتك.",
];

const section2Points: string[] = [
  "فرص استثمار التكنولوجيا والتحول الرقمي والحلول التقنية وتقنيات التعليم بمختلف قطاعات التربية والتعليم.",
  "دعم مساعي الشركات والمشاريع الرائدة في مجال تعليم أشق الطرق وعرض الأفكار والحلول المبتكرة وخلق آفاق التعاون مع المستثمرين.",
  "مساحات تفاعلية وكلمات ملهمة لصناع القرار محلياً، إقليمياً، وعالمياً.",
  "تسليط الضوء على التعددية اللغوية للطلبة بمختلف فئاتهم العمرية، وإشراك المدربين والخبراء والمراكز المهتمة بذلك.",
  "فرصة للارتقاء بالخدمات الأكاديمية وواقع التعليم في العراق وتسليط الضوء على التحديات والفرص، والمشاركة في صنع القرار.",
  "المشاركة بمبادرات التوظيف للمواهب والخريجين والباحثين عن الأعمال.",
  "حضور أكاديمي مرتقب لنخبة الشخصيات المؤثرة وأصحاب القرار بمجال التعليم.",
  "دعم البرامج الأكاديمية والمبادرات والبحوث العلمية.",
  "فهم احتياجات الطلبة بمختلف فئاتهم العمرية والمساهمة في التطوير المهني والمشاركة بمنتدى أصوات الطلبة المفتوح.",
  "المشاركة في تصميم فرص العمل وتأهيل الطلبة ومراحل التحضير والدخول إلى مجتمع العمل المهني.",
  "التواجد الأكاديمي ضمن النخب التعليمية الرائدة في العراق.",
  "المشاركة في مختلف أنشطة المؤتمر وفعالياته وحلقات النقاش التفاعلية.",
];

type SectionProps = {
  points: string[];
  imageSrc: string;
  imageAlt: string;
  className?: string;
};

type CheckedPointProps = {
  text: string;
};

export default ConferenceImportance;

```

# src\app\[locale]\news\_components\MainSubjects.tsx

```tsx
"use client";

import ScrollArrows from "@/components/ScrollArrows";
import React, { useRef } from "react";
import { twMerge } from "tailwind-merge";

export default function MainSubjects({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className={twMerge("flex flex-col gap-[10px] sm:gap-[120px]", className)}
    >
      <div className="flex justify-center !px-[16px] sm:!px-[130px]">
        <UpperSection containerRef={containerRef}></UpperSection>
      </div>
      <div className="flex justify-center">
        <ScrollableCardsContainer ref={containerRef}></ScrollableCardsContainer>
      </div>
    </section>
  );
}

const ScrollableCardsContainer = React.forwardRef<
  HTMLDivElement,
  { className?: string }
>(({ className }, ref) => {
  return (
    <div
      ref={ref}
      className={twMerge("hide-scrollbar overflow-x-auto", className)}
    >
      <div className="flex w-fit gap-[24px] px-[16px] sm:gap-[60px] sm:px-[100px]">
        {mainSubjects.map((el, index) => (
          <Card key={index} el={el} />
        ))}
      </div>
    </div>
  );
});

ScrollableCardsContainer.displayName = "ScrollableCardsContainer";

function Card({ el }: { el: MainSubjectData }) {
  return (
    <div className="flex   flex-col items-center gap-[16px] text-center   sm:gap-[42px]">
      <img
        src={el.src}
        alt={el.alt}
        className="max-w-[323px] rounded-[18px] sm:max-w-[431px] sm:rounded-[25px]"
      />
      <h4 className="text-[18px]  leading-[28px] text-foreground/60 sm:max-w-[250px] sm:text-[24px] sm:leading-[38px]">
        {el.title}
      </h4>
    </div>
  );
}

function UpperSection({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div className="flex w-full max-w-[1660px] items-center justify-between   sm:justify-between ">
      <h2 className="1920:ps-[10px] max-w-[207px] text-[18px] font-semibold leading-[24px] sm:max-w-none sm:text-[50px]  sm:leading-[73px]">
        المواضيع الرئيسية
      </h2>
      <ScrollArrows containerRef={containerRef} />
    </div>
  );
}

interface MainSubjectData {
  title: string;
  alt: string;
  src: string;
}

const mainSubjects: MainSubjectData[] = [
  {
    title: "البحوث ومؤسسات التصنيف",
    alt: "1",
    src: "/images/about/main-subjects/1.jpg",
  },
  {
    title: "المشاريع الناشئة في قطاع التعليم",
    alt: "2",
    src: "/images/about/main-subjects/2.jpg",
  },
  {
    title: "تحديات التعليم الجامعي مع تزايد أعداد الطلبة",
    alt: "3",
    src: "/images/about/main-subjects/3.jpg",
  },
  {
    title: "خطوات فعالة نحو التعليم الأخضر",
    alt: "4",
    src: "/images/about/main-subjects/4.jpg",
  },
];

```

# src\app\[locale]\news\[news_id]\page.tsx

```tsx
// [news_id]/page.tsx
"use client";

import { useLocale, useTranslations } from "next-intl";
import React, { useMemo, useRef } from "react";

import { newsItems } from "@/lib/data";
import FormattedTextViewer from "@/components/FormattedTextViewer";
import PageWithFirstSection from "@/components/page/Page";

export default function SingleNewsPage() {
  const locale = useLocale();
  const t = useTranslations("Home");
  const ts = useTranslations("singleNews");

  const translatedNewsItems = useMemo(() => {
    return newsItems(t.raw("news.news"));
  }, [locale]);

  return (
    <main>
      <FormattedTextViewer>
        هذا النص هو نص تجريبي يبدأ بعد النقطة وقد تم وضعه كمحتوى تجريبي. شهدت
        الملاعب المغلقة لجامعة كلكامش لقاءات نسوية لمراحل المتوسطة والإعدادية
        بين تربيات الكرخ الثانية والرصافة الثانية بمعدل فريقين لكل تربية بهدف
        الكشف عن الخبرات والإمكانيات الرياضية بغية رفد منتخباتنا الوطنية بالدماء
        الشابة التي تساهم في حصد الإنجازات والبطولات خلال المشاركات الدولية.
        الجدير بالذكر أن جامعة كلكامش مستمرة بدعمها المرأة وعلى كافة الأصعدة
        والمجالات وهذا يأتي ضمن سياستها بتحقيق أهداف التنمية المستدامة في خدمة
        المجتمع. شهدت الملاعب المغلقة لجامعة كلكامش لقاءات نسوية لمراحل المتوسطة
        والإعدادية بين تربيات الكرخ الثانية والرصافة الثانية بمعدل فريقين لكل
        تربية بهدف الكشف عن الخبرات والإمكانيات الرياضية بغية رفد منتخباتنا
        الوطنية بالدماء الشابة التي تساهم في حصد الإنجازات والبطولات خلال
        المشاركات الدولية. الجدير بالذكر أن جامعة كلكامش مستمرة بدعمها المرأة
        وعلى كافة الأصعدة والمجالات وهذا يأتي ضمن سياستها بتحقيق أهداف التنمية
        المستدامة في خدمة المجتمع. شهدت الملاعب المغلقة لجامعة كلكامش لقاءات
        نسوية لمراحل المتوسطة والإعدادية بين تربيات الكرخ الثانية والرصافة
        الثانية بمعدل فريقين لكل تربية بهدف الكشف عن الخبرات والإمكانيات
        الرياضية بغية رفد منتخباتنا الوطنية بالدماء الشابة التي تساهم في حصد
        الإنجازات والبطولات خلال المشاركات الدولية. الجدير بالذكر أن جامعة
        كلكامش مستمرة بدعمها المرأة وعلى كافة الأصعدة والمجالات وهذا يأتي ضمن
        سياستها بتحقيق أهداف التنمية المستدامة في خدمة المجتمع. شهدت الملاعب
        المغلقة لجامعة كلكامش لقاءات نسوية لمراحل المتوسطة والإعدادية بين تربيات
        الكرخ الثانية والرصافة الثانية بمعدل فريقين لكل تربية بهدف الكشف عن
        الخبرات والإمكانيات الرياضية بغية رفد منتخباتنا الوطنية بالدماء الشابة
        التي تساهم في حصد الإنجازات والبطولات خلال المشاركات الدولية. الجدير
        بالذكر أن جامعة كلكامش مستمرة بدعمها المرأة وعلى كافة الأصعدة والمجالات
        وهذا يأتي ضمن سياستها بتحقيق أهداف التنمية المستدامة في خدمة المجتمع.
        شهدت الملاعب المغلقة لجامعة كلكامش لقاءات نسوية لمراحل المتوسطة
        والإعدادية بين تربيات الكرخ الثانية والرصافة الثانية بمعدل فريقين لكل
        تربية بهدف الكشف عن الخبرات والإمكانيات الرياضية بغية رفد منتخباتنا
        الوطنية بالدماء الشابة التي تساهم في حصد الإنجازات والبطولات خلال
        المشاركات الدولية. الجدير بالذكر أن جامعة كلكامش مستمرة بدعمها المرأة
        وعلى كافة الأصعدة والمجالات وهذا يأتي ضمن سياستها بتحقيق أهداف التنمية
        المستدامة في خدمة المجتمع. شهدت الملاعب المغلقة لجامعة كلكامش لقاءات
        نسوية لمراحل المتوسطة والإعدادية بين تربيات الكرخ الثانية والرصافة
        الثانية بمعدل فريقين لكل تربية بهدف الكشف عن الخبرات والإمكانيات
        الرياضية بغية رفد منتخباتنا الوطنية بالدماء الشابة التي تساهم في حصد
        الإنجازات والبطولات خلال المشاركات الدولية. الجدير بالذكر أن جامعة
        كلكامش مستمرة بدعمها المرأة وعلى كافة الأصعدة والمجالات وهذا يأتي ضمن
        سياستها بتحقيق أهداف التنمية المستدامة في خدمة المجتمع. شهدت الملاعب
        المغلقة لجامعة كلكامش لقاءات نسوية لمراحل المتوسطة والإعدادية بين تربيات
        الكرخ الثانية والرصافة الثانية بمعدل فريقين لكل تربية بهدف الكشف عن
        الخبرات والإمكانيات الرياضية بغية رفد منتخباتنا الوطنية بالدماء الشابة
        التي تساهم في حصد الإنجازات والبطولات خلال المشاركات الدولية. الجدير
        بالذكر أن جامعة كلكامش مستمرة بدعمها المرأة وعلى كافة الأصعدة والمجالات
        وهذا يأتي ضمن سياستها بتحقيق أهداف التنمية المستدامة في خدمة المجتمع.
        شهدت الملاعب المغلقة لجامعة كلكامش لقاءات نسوية لمراحل المتوسطة
        والإعدادية بين تربيات الكرخ الثانية والرصافة الثانية بمعدل فريقين لكل
        تربية بهدف الكشف عن الخبرات والإمكانيات الرياضية بغية رفد منتخباتنا
        الوطنية بالدماء الشابة التي تساهم في حصد الإنجازات والبطولات خلال
        المشاركات الدولية. الجدير بالذكر أن جامعة كلكامش مستمرة بدعمها المرأة
        وعلى كافة الأصعدة والمجالات وهذا يأتي ضمن سياستها بتحقيق أهداف التنمية
        المستدامة في خدمة المجتمع. شهدت الملاعب المغلقة لجامعة كلكامش لقاءات
        نسوية لمراحل المتوسطة والإعدادية بين تربيات الكرخ الثانية والرصافة
        الثانية بمعدل فريقين لكل تربية بهدف الكشف عن الخبرات والإمكانيات
        الرياضية بغية رفد منتخباتنا الوطنية بالدماء الشابة التي تساهم في حصد
        الإنجازات والبطولات خلال المشاركات الدولية. الجدير بالذكر أن جامعة
        كلكامش مستمرة بدعمها المرأة وعلى كافة الأصعدة والمجالات وهذا يأتي ضمن
        سياستها بتحقيق أهداف التنمية المستدامة في خدمة المجتمع. شهدت الملاعب
        المغلقة لجامعة كلكامش لقاءات نسوية لمراحل المتوسطة والإعدادية بين تربيات
        الكرخ الثانية والرصافة الثانية بمعدل فريقين لكل تربية بهدف الكشف عن
        الخبرات والإمكانيات الرياضية بغية رفد منتخباتنا الوطنية بالدماء الشابة
        التي تساهم في حصد الإنجازات والبطولات خلال المشاركات الدولية. الجدير
        بالذكر أن جامعة كلكامش مستمرة بدعمها المرأة وعلى كافة الأصعدة والمجالات
        وهذا يأتي ضمن سياستها بتحقيق أهداف التنمية المستدامة في خدمة المجتمع.
      </FormattedTextViewer>
    </main>
  );
}

```

# src\app\[locale]\news\ClientPage.tsx

```tsx
"use client";

import MainNewsCard from "@/app/_components/News/MainNewsCard";
import NewsCard from "@/app/_components/News/NewsCard";
import { ScrollableCardsContainer } from "@/components/scrollable-container/ScrollableContainer";
import ScrollableContainerUpperSection from "@/components/scrollable-container/UpperSection";
import ScrollElement from "@/components/ScrollElement";
import Section from "@/components/Section";
import { useTranslations } from "next-intl";
import React, { useContext, useEffect, useRef } from "react";
import { NewsResponse } from "@/lib/types";
import Pagination from "@/components/Pagination";
import { useCounterStore } from "@/lib/providers/counter-store-provider";
import { NewsStoreContext, useNewsStore } from "@/lib/providers/news-provider";
import Wrapper from "@/components/Wrapper";

export default function NewsClientPage() {
  const t = useTranslations("Home.news");
  const containerRef = useRef<HTMLDivElement>(null);

  const { news, setPage, fetchNews, isLoading, pagination } = useNewsStore();

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    fetchNews();
  };

  return (
    <main className="mt-[36px] sm:mt-[180px]">
      <Section>
        <div className="flex-col">
          <ScrollableContainerUpperSection
            title={t("title")}
            containerRef={containerRef}
            titleClass="text-[28px] sm:text-[47px] !font-normal 1920:text-[62px] "
            className="sm:mb-[50px] 1920:mb-[66px]"
          />

          <div className="flex w-fit flex-col sm:gap-[38px] 1920:gap-[50px]">
            <ScrollableCardsContainer ref={containerRef}>
              {news.map((item, index) => (
                <ScrollElement className="flex justify-center" key={index}>
                  <MainNewsCard item={item} />
                </ScrollElement>
              ))}
            </ScrollableCardsContainer>
            <Section
              className="gird-cols-1 grid w-full max-w-mobile sm:max-w-desktop sm:grid-cols-3 sm:gap-[38px] 1920:max-w-desktop-lg 1920:gap-[50px]"
              wrapperClass="sm:flex hidden"
            >
              {news.slice(1).map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </Section>
            <Section className="mt-[50px] sm:mt-[50px]">
              <Wrapper>
                <Pagination
                  currentPage={pagination.currentPage}
                  totalPages={pagination.totalPages}
                  onPageChange={handlePageChange}
                  itemsPerPage={pagination.perPage}
                  totalItems={pagination.total}
                />
              </Wrapper>
            </Section>
          </div>
        </div>
      </Section>
    </main>
  );
}

```

# src\app\[locale]\news\page.tsx

```tsx
import { getTranslations } from "next-intl/server";
import NewsClientPage from "./ClientPage";
import { NewsResponse } from "@/lib/types";
import { getLatestNews } from "@/lib/api_services/news-apis";
import { NewsStoreProvider } from "../../../lib/providers/news-provider";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale,
    namespace: "Layout.metaData",
  });

  return {
    // title: t("newsTitle"),
  };
}

export default async function NewsPage() {
  let newsResponse: NewsResponse | undefined;

  try {
    newsResponse = await getLatestNews(1);
  } catch (error) {
    console.error("Failed to fetch news:", error);
  }

  return (
    newsResponse && (
      <NewsStoreProvider
        initialState={{
          news: newsResponse.latestnews.data,
          pagination: {
            currentPage: newsResponse.latestnews.current_page,
            totalPages: newsResponse.latestnews.last_page,
            perPage: newsResponse.latestnews.per_page,
            total: newsResponse.latestnews.total,
          },
        }}
      >
        <NewsClientPage />
      </NewsStoreProvider>
    )
  );
}

```

# src\app\[locale]\page.tsx

```tsx
import OurGoals from "../_components/OurGoals/OurGoals";
import News from "../_components/News/News/News";
import Statistics from "../_components/Statistics/Statistics";
import HomepageCards from "../_components/CardsSection/HomepageCards";
import OurColleges from "../_components/OurColleges/OurColleges";
import AcademicRankings from "../_components/AcademicRankings/AcademicRankings";

import HomeSliderBg from "../_components/HomeSlider/HomeSliderBg";

export default async function Home() {
  return (
    <>
      <HomeSliderBg></HomeSliderBg>
      <main className="relative z-30 flex flex-col items-center">
        <HomepageCards />
        <News />
        <Statistics />
        <OurGoals />
        <OurColleges />
        <AcademicRankings />
      </main>
    </>
  );
}

```

# src\app\[locale]\related-locations\page.tsx

```tsx
import Section from "@/components/Section";
import ScrollableContainerUpperSection from "../../../components/scrollable-container/UpperSection";
import TitlesWrapper from "@/components/TitlesWrapper";
import { Link } from "@/i18n.config";
import PageWithFirstSection from "@/components/page/Page";

export default function page() {
  return (
    <main>
      <Section>
        <TitlesWrapper>
          <h3 className="title-sm mt-[62px] !text-primary sm:mt-[151px]">
            مواقع ذات صلة
          </h3>
          <h2 className="title">جامعة كلكامش</h2>
          <RelatedLocationsGrid></RelatedLocationsGrid>
        </TitlesWrapper>
      </Section>
    </main>
  );
}

const RelatedLocationsGrid = () => {
  return (
    <div className="mt-[45px] grid grid-cols-1 gap-[22px] sm:mt-[80px] sm:grid-cols-4 1920:grid-cols-5">
      {relatedLocations.map((location, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-between gap-[12px] bg-white px-[30px] py-[40px] text-center"
        >
          <h3 className="text-[24px] font-medium leading-[1.3em]">
            {location.title}
          </h3>
          <Link
            target="_blank"
            href={location.url}
            className="text-[14px] font-medium leading-[1.25em] text-primary"
          >
            زيارة الموقع
          </Link>
        </div>
      ))}
    </div>
  );
};

const relatedLocations = [
  { title: "وزارة التعليم العالي والبحث العلمي", url: "#" },
  { title: "دائرة التعليم الجامعي الأهلي", url: "#" },
  { title: "اتحاد الجامعات العربية", url: "#" },
  { title: "المؤسسة العراقية للتعليم العالي", url: "#" },
  { title: "مركز البحوث والدراسات العراقي", url: "#" },
  { title: "وزارة التعليم العالي والبحث العلمي", url: "#" },
  { title: "دائرة التعليم الجامعي الأهلي", url: "#" },
  { title: "المؤسسة العراقية للتعليم العالي", url: "#" },
  { title: "مركز البحوث والدراسات العراقي", url: "#" },
  { title: "المؤسسة العراقية للتعليم العالي", url: "#" },
  { title: "مركز البحوث والدراسات العراقي", url: "#" },
];

```

# src\app\[locale]\shared-pages\[name]\page.tsx

```tsx
import { fetchSharedPageData } from "@/lib/api_services/shared-pages-apis";
import { headers } from "next/headers";
import SharedPageClient from "./SharedPageClient";
import { SharedPageData } from "@/lib/types";

export default async function Page({ params }: { params: { name: string } }) {
  let pageData: SharedPageData | null = null;

  try {
    pageData = await fetchSharedPageData(params.name);
  } catch (error) {
    console.error("Failed to fetch shared page data:", error);
  }

  return <SharedPageClient pageData={pageData} />;
}

```

# src\app\[locale]\shared-pages\[name]\SharedPageClient.tsx

```tsx
"use client";

import FormattedTextViewer from "@/components/FormattedTextViewer";
import ActionsTitle from "@/components/page/FirstTitleSection/ActionsTitle";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { SharedPageData } from "@/lib/types";
import { getImageUrl, isEmptyHtml } from "@/lib/utils";
import Image from "next/image";
import { ScrollableCardsContainer } from "@/components/scrollable-container/ScrollableContainer";
import ScrollElement from "@/components/ScrollElement";

export default function SharedPageClient({
  pageData,
}: {
  pageData: SharedPageData | null;
}) {
  const locale = useLocale();
  const t = useTranslations("SharedPages");

  if (!pageData) {
    return <div>No data available</div>;
  }

  const title = t(pageData.category as keyof typeof t);
  const description =
    locale === "en" ? pageData.en_description : pageData.ar_description;

  return (
    <main>
      {title && <ActionsTitle title={title}></ActionsTitle>}
      {pageData.images.length > 0 &&
        (pageData.images.length > 1 ? (
          <ScrollableCardsContainer showArrows>
            {pageData.images.map((el, index) => (
              <ScrollElement className="flex justify-center" key={index}>
                <div className="relative h-[264px] w-full sm:h-[831px]">
                  <Image
                    fill
                    id="print-section"
                    src={getImageUrl(el.image)}
                    alt={title}
                    priority
                    className="object-cover"
                  />
                </div>
              </ScrollElement>
            ))}
          </ScrollableCardsContainer>
        ) : (
          <div className="relative h-[264px] w-full sm:h-[831px]">
            <Image
              fill
              id="print-section"
              src={getImageUrl(pageData.images[0].image)}
              alt={title}
              priority
              className="object-cover"
            />
          </div>
        ))}

      {isEmptyHtml(description) === false && (
        <FormattedTextViewer>{description}</FormattedTextViewer>
      )}
    </main>
  );
}

```

# src\app\[locale]\sustainability\page.tsx

```tsx
import React from "react";

import FormattedTextViewer from "@/components/FormattedTextViewer";
import PageWithFirstSection from "@/components/page/Page";
import SharedPage from "@/components/SharedPage";

export default function SustainabilityPage() {
  return <SharedPage></SharedPage>;
}

```

# src\app\[locale]\test\[testid]\page.tsx

```tsx
import React from "react";

export default function page() {
  return <div className="text-center text-4xl font-bold">testing</div>;
}

```

# src\app\[locale]\university-and-community\consulting-clinic\page.tsx

```tsx
import React from "react";
import FormattedTextViewer from "@/components/FormattedTextViewer";

export default function ConsultingClinicPage() {
  return (
    <FormattedTextViewer
      children={`محتوى صفحة العيادة الاستشارية يأتي هنا.`}
    ></FormattedTextViewer>
  );
}

```

# src\app\[locale]\university-and-community\graduates\page.tsx

```tsx
import React from "react";
import FormattedTextViewer from "@/components/FormattedTextViewer";

export default function GraduatesPage() {
  return (
    <FormattedTextViewer
      children={`محتوى صفحة خريجــونــا يأتي هنا.`}
    ></FormattedTextViewer>
  );
}

```

# src\app\[locale]\university-and-community\ministry-inquiries\page.tsx

```tsx
import React from "react";
import FormattedTextViewer from "@/components/FormattedTextViewer";

export default function MinistryInquiriesPage() {
  return (
    <FormattedTextViewer
      children={`محتوى صفحة الاستعلامات الالكترونية لوزارة التعليم العالي يأتي هنا.`}
    ></FormattedTextViewer>
  );
}

```

# src\app\[locale]\university-and-community\qualification-employment\page.tsx

```tsx
import React from "react";
import FormattedTextViewer from "@/components/FormattedTextViewer";

export default function QualificationEmploymentPage() {
  return (
    <FormattedTextViewer
      children={`محتوى صفحة التأهيل والتوظيف يأتي هنا.`}
    ></FormattedTextViewer>
  );
}

```

# src\app\[locale]\university-and-community\surveys\employer-survey\page.tsx

```tsx
import React from "react";
import { useTranslations } from "next-intl";
import SurveyForm from "@/components/SurveyForm";

export default function EmployerSurveyPage() {
  const tNavLinks = useTranslations("Header.navLinks");

  return (
    <SurveyForm
      title={tNavLinks("employerSurvey")}
      endpoint="/employer_survey"
    />
  );
}

```

# src\app\[locale]\university-and-community\surveys\graduate-survey\page.tsx

```tsx
import React from "react";
import { useTranslations } from "next-intl";
import SurveyForm from "@/components/SurveyForm";

export default function GraduatesSurveyPage() {
  const tNavLinks = useTranslations("Header.navLinks");

  return (
    <SurveyForm
      title={tNavLinks("graduateSurvey")}
      endpoint="/graduate_survey"
    />
  );
}

```

# src\app\favicon.ico

This is a binary file of the type: Binary

# src\app\globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@font-face {
  font-family: "Expo Sans Arabic";
  src: url("/fonts/EXPOSANSARABIC-BOLD.TTF") format("truetype");
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: "Expo Sans Arabic";
  src: url("/fonts/EXPOSANSARABIC-BOOK.TTF") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Expo Sans Arabic";
  src: url("/fonts/EXPOSANSARABIC-LIGHT.TTF") format("truetype");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: "Expo Sans Arabic";
  src: url("/fonts/EXPOSANSARABIC-MEDIUM.TTF") format("truetype");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "Neurial Grotesk";
  src: url("/fonts/NeurialGrotesk-Regular.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Neurial Grotesk";
  src: url("/fonts/NeurialGrotesk-Light.otf") format("opentype");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: "Neurial Grotesk";
  src: url("/fonts/NeurialGrotesk-Medium.otf") format("opentype");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "Neurial Grotesk";
  src: url("/fonts/NeurialGrotesk-Bold.otf") format("opentype");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: "Neurial Grotesk";
  src: url("/fonts/NeurialGrotesk-Extrabold.otf") format("opentype");
  font-weight: 800;
  font-style: normal;
}

@layer base {
  :root {
    /* colors */
    --background: 0 0% 96%;
    --foreground: 0, 0%, 0%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 213 100% 24%;
    --primary-foreground: 0 0% 100%;
    --secondary: 39, 100%, 61%;
    --secondary-foreground: 0 0% 0%;
    --muted: 170, 3%, 40%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 85 6% 86%;
    --input: 85 6% 86%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;

    /* init */
    --screen-width: 100vw;

    /* others */
    --navbar-height: 174px;
  }

  :root[dir="ltr"] {
    font-family: "Neurial Grotesk", sans-serif;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
  html {
    @apply overflow-x-clip;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@page {
  size: auto;
  margin: 80px;
}

@print {
  .no-print {
    display: none !important;
  }
}

i {
  @apply leading-none;
}

:root {
  @apply text-center sm:text-start;
  font-family: "Expo Sans Arabic", sans-serif;
  font-weight: 400;
  font-style: normal;
  --hero-bottom-image-height: 22.25rem;
  --news-image-height: 7.1875rem;
}

input[type="tel" i] {
  direction: inherit;
}

.hide-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

.title {
  @apply box-border text-center text-[24px] font-normal leading-[32px] tracking-[-0.48px] sm:text-start sm:text-[42px] sm:font-medium sm:leading-[68px] sm:tracking-normal;
}

.title-lg {
  @apply text-center text-[32px] font-medium leading-[55px] tracking-[-0.03em] sm:text-start sm:text-[62px] sm:leading-[75px] ltr:leading-[45px] ltr:sm:leading-[75px];
}

[role="radiogroup"] {
  direction: inherit;
}

.pagination-button {
  @apply h-[42px] max-h-none w-[42px] rounded-[10px] border bg-white p-0 text-[14px] font-normal text-black sm:h-[60px] sm:w-[60px] sm:rounded-[16px] sm:text-[22px];
}

.disabled-scroll-button {
  @apply pointer-events-none bg-white;
}
.disabled-scroll-button.slider-bg-arrows {
  @apply pointer-events-none bg-[#D9D9D9]/30;
}

.scroller {
  overflow: hidden;
  -webkit-mask: linear-gradient(
    90deg,
    transparent,
    white 20%,
    white 80%,
    transparent
  );
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
}

:root[dir="ltr"] .scroller__inner {
  width: max-content;
  flex-wrap: nowrap;
  animation: scroll var(--_animation-duration, 40s)
    var(--_animation-direction, forwards) linear infinite;
}

:root[dir="rtl"] .scroller__inner {
  width: max-content;
  flex-wrap: nowrap;
  animation: scrollRTL var(--_animation-duration, 40s)
    var(--_animation-direction, forwards) linear infinite;
}

.scroller {
  --_animation-duration: 30s;
}

@keyframes scroll {
  to {
    transform: translate(calc(-50% - 4px));
  }
}
@keyframes scrollRTL {
  to {
    transform: translate(calc(50% + 4px));
  }
}

input[type="tel" i] {
  direction: inherit;
}

input[type="email"]:not(:placeholder-shown),
input[type="tel"]:not(:placeholder-shown),
input[type="number"]:not(:placeholder-shown),
input[type="text"][inputmode="email"]:not(:placeholder-shown),
input[type="text"][inputmode="tel"]:not(:placeholder-shown),
input[type="text"][inputmode="numeric"]:not(:placeholder-shown) {
  direction: ltr;
}

.title {
  @apply text-[22px] font-bold leading-[1.25em] sm:text-[48px];
}

.title-sm {
  @apply mb-[11px] text-[16px] font-bold leading-[1.25em] text-secondary sm:text-[26px];
}

.navbar-inclusive-background {
  @apply absolute top-0 h-full sm:-top-[var(--navbar-height)] sm:h-[calc(100%+var(--navbar-height))];
}

@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes vanish {
  from {
    opacity: 1;
    display: block;
  }
  to {
    opacity: 0;
    display: none;
  }
}

/*  editor styles */
.tiptap {
  outline: none;
  overflow: auto;
  color: hsl(var(--primary));
}

.tiptap :first-child {
  margin-top: 0;
}

/* List styles */
.tiptap ul,
.tiptap ol {
  padding: 0 1rem;
  margin: 1.25rem 1rem 1.25rem 0.4rem;
}

.tiptap ul li p,
.tiptap ol li p,
.tiptap p {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  min-height: 1rem;
}

.tiptap p {
  margin: 0 !important;
}

/* Heading styles */
.tiptap h1,
.tiptap h2,
.tiptap h3,
.tiptap h4,
.tiptap h5,
.tiptap h6 {
  font-weight: 700;
  line-height: 135%;
}

.tiptap h1,
.tiptap h2,
.tiptap h3 {
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.tiptap h1 {
  font-size: 1.4rem;
}

.tiptap h2 {
  font-size: 1.2rem;
}

.tiptap h3 {
  font-size: 1.1rem;
}

.tiptap h4,
.tiptap h5,
.tiptap h6 {
  font-size: 1rem;
}

/* Code and preformatted text styles */
.tiptap code {
  background-color: ghostwhite;
  border-radius: 0.4rem;
  color: var(--black);
  font-size: 0.85rem;
  padding: 0.25em 0.3em;
}

.tiptap pre {
  background: var(--black);
  border-radius: 0.5rem;
  color: var(--white);
  font-family: "JetBrainsMono", monospace;
  margin: 1.5rem 0;
  padding: 0.75rem 1rem;
}

.tiptap pre code {
  background: none;
  color: inherit;
  font-size: 0.8rem;
  padding: 0;
}

.tiptap blockquote {
  border-left: 3px solid gray;
  margin: 1.5rem 0;
  padding-left: 1rem;
}

.tiptap hr {
  border: none;
  border-top: 1px solid gray;
  margin: 2rem 0;
}

/* Table-specific styling */
.tiptap table {
  border-collapse: collapse;
  margin: 0;
  overflow: hidden;
  table-layout: fixed;
  width: 100%;
  font-weight: 400 !important;
}

.tiptap table td,
.tiptap table th {
  box-sizing: border-box;
  min-width: 1em;
  padding: 6px 8px;
  position: relative;
  vertical-align: top;
  text-align: start;
  font-weight: 400 !important;
}

.tiptap table td > *,
.tiptap table th > * {
  margin-bottom: 0;
}

.tiptap table th {
  border-bottom: 1px solid #cccccc;
  padding-bottom: 20px;
}

.tiptap table tbody tr:nth-child(2) td {
  padding-top: 20px;
}

.tiptap table td {
  padding-top: 10px;
  padding-bottom: 10px;
}

.tiptap table .selectedCell:after {
  background: lavender;
  content: "";
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  pointer-events: none;
  position: absolute;
  z-index: 2;
}

.tiptap table .column-resize-handle {
  background-color: red;
  bottom: -2px;
  pointer-events: none;
  position: absolute;
  right: -2px;
  top: 0;
  width: 1px;
}

.tiptap .tableWrapper {
  margin: 1.5rem 0;
  overflow-x: auto;
}

.tiptap.resize-cursor {
  cursor: ew-resize;
  cursor: col-resize;
}

```

# src\components\common-sections\CommonSections.tsx

```tsx
import { fetchEServices, fetchContact } from "@/lib/api_services/common-apis";
import EServicesSection from "./EServicesSection";
import ContactSection from "./ContactSection";
import { cookies, headers } from "next/headers";
import MapSection from "./MapSection";

const CommonSections: React.FC = async () => {
  const lang = headers().get("x-locale") || "ar";

  let eServicesData;
  let contactData;

  try {
    eServicesData = await fetchEServices(lang);
    contactData = await fetchContact(lang);
  } catch (error) {
    console.error("Failed to fetch common sections data:", error);
  }

  return (
    <>
      <EServicesSection eServices={eServicesData} />
      <ContactSection contact={contactData} />
      <MapSection></MapSection>
    </>
  );
};

export default CommonSections;

```

# src\components\common-sections\ContactSection.tsx

```tsx
"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Contact } from "@/lib/types";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import axiosInstance from "@/lib/axios";
import useCommonStore from "@/lib/zustand/common";

interface ContactSectionProps {
  contact: Contact | undefined;
}

const ContactSection: React.FC<ContactSectionProps> = ({ contact }) => {
  const t = useTranslations("Common.Contact");

  if (!contact) {
    return null;
  }

  return (
    <section className="mt-[100px] flex w-full flex-col sm:mt-[150px] sm:flex-row 1920:mt-[180px]">
      <ContactInfoSection contact={contact} />
      <ContactFormSection />
    </section>
  );
};

const ContactInfoSection: React.FC<{ contact: Contact }> = ({ contact }) => {
  const t = useTranslations("Common");
  const tContact = useTranslations("Home.contact");

  return (
    <div className="w-full bg-white px-4 py-[49px] sm:w-1/2 sm:px-[83px] sm:py-[109px] 1920:px-[110px] 1920:py-[145px]">
      <h2 className="mb-[30px] text-right text-[28px] font-medium leading-[1.22em] text-primary sm:mb-[122px] sm:text-[50px] 1920:mb-[162px] 1920:text-[70px]">
        {tContact("title")}
      </h2>
      <div className="mb-[40px] space-y-[40px] sm:mb-[53px] sm:space-y-[53px] 1920:mb-[60px] 1920:space-y-[60px]">
        <ContactInfo title={t("email")} value={contact.email} />
        <ContactInfo title={t("phoneNumber")} value={contact.phone} />
        <ContactInfo title={t("address")} value={contact.address} />
      </div>
      {/* <div>
        <p className="mb-[40px] text-right text-[24px] leading-[1.33em] text-primary/60 sm:mb-[25px] sm:text-[22px] 1920:mb-[38px] 1920:text-[26px]">
          {t("downloadApp")}
        </p>
        <div className="flex justify-start gap-[14px]">
          <Link href="">
          
          <Image
            src="/images/common/app-store.png"
            alt="Download on the App Store"
            width={135}
            height={40}

          />
          </Link>

          <Link href="">
          <Image
            src="/images/common/google-play.png"
            alt="Get it on Google Play"
            width={135}
            height={40}

          />
          </Link>
        </div>
      </div> */}
    </div>
  );
};

const ContactFormSection: React.FC = () => {
  const t = useTranslations("Common.Contact.form");
  const tCommon = useTranslations("Common");
  const openSuccessModal = useCommonStore((state) => state.openSuccessModal);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inputFields = [
    { name: "name", label: t("name"), type: "text", fullWidth: true },
    { name: "email", label: t("email"), type: "email", fullWidth: false },
    { name: "phone", label: t("phoneNumber"), type: "tel", fullWidth: false },
    {
      name: "c_name",
      label: t("institution"),
      type: "text",
      fullWidth: true,
    },
    { name: "message", label: t("message"), type: "textarea", fullWidth: true },
  ];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData.entries());

    try {
      const response = await axiosInstance.post("/contactus", formValues);
      if (response.status === 200) {
        openSuccessModal(tCommon("generalSuccessMessage"));
        // Reset form
        event.currentTarget.reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error (e.g., show error message)
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#F0F1EC] px-4 py-[49px] sm:w-1/2 sm:px-[83px] sm:py-[109px] 1920:px-[110px] 1920:py-[145px]">
      <h2 className="mb-[20px] text-right text-[28px] font-medium leading-[1.35em] text-primary sm:mb-[54px] sm:text-[28px] 1920:mb-[71px] 1920:text-[38px]">
        {t("title")}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-y-[28px] sm:grid-cols-2 sm:gap-x-[21px] sm:gap-y-[30px] 1920:gap-x-[28px] 1920:gap-y-[39px]"
      >
        {inputFields.map((field) => (
          <div
            key={field.name}
            className={`flex flex-col gap-[18px] sm:gap-[10px] 1920:gap-[18px] ${
              field.fullWidth ? "sm:col-span-2" : "sm:col-span-1"
            }`}
          >
            <label
              htmlFor={field.name}
              className="text-right text-[16px] font-medium leading-[1.35em] text-primary sm:text-[18px] 1920:text-[21px]"
            >
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <Textarea
                id={field.name}
                name={field.name}
                rows={4}
                placeholder={t("writeYourMessage")}
                required
              />
            ) : (
              <Input
                type={field.type}
                id={field.name}
                name={field.name}
                placeholder={t("writeHere")}
                required
              />
            )}
          </div>
        ))}
        <div className="flex justify-end sm:col-span-full">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? tCommon("loading") + "..." : t("send")}
          </Button>
        </div>
      </form>
    </div>
  );
};

const ContactInfo: React.FC<{ title: string; value: string }> = ({
  title,
  value,
}) => {
  return (
    <div className="text-right">
      <p className="text-[24px] leading-[1.33em] text-primary/60 sm:text-[22px] 1920:text-[26px]">
        {title}
      </p>
      <p className="text-[18px] leading-[1.33em] text-primary sm:text-[18px] 1920:text-[32px]">
        {value}
      </p>
    </div>
  );
};

export default ContactSection;

```

# src\components\common-sections\EServicesSection.tsx

```tsx
"use client";

import React, { useRef } from "react";
import { useTranslations } from "next-intl";
import { EService } from "@/lib/types";
import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";
import ScrollableContainerUpperSection from "@/components/scrollable-container/UpperSection";
import { ScrollableCardsContainer } from "@/components/scrollable-container/ScrollableContainer";
import ScrollElement from "@/components/ScrollElement";
import CommonCard from "@/app/_components/CardsSection/CommonCard";
import { getImageUrl } from "@/lib/utils";
import { usePathname } from "@/i18n.config";
import { CONTACT_ROUTE } from "@/lib/paths";

interface EServicesSectionProps {
  eServices: EService[] | undefined;
}

const EServicesSection: React.FC<EServicesSectionProps> = ({ eServices }) => {
  const pathname = usePathname();
  const t = useTranslations("Common");
  const tHome = useTranslations("Home");
  const containerRef = useRef<HTMLDivElement>(null);

  if (!eServices || eServices.length === 0) {
    return null;
  }

  return (
    pathname !== CONTACT_ROUTE && (
      <div className="mt-[60px] sm:mt-[150px]">
        <Section>
          <Wrapper>
            <div className="flex flex-col justify-between sm:flex-row sm:items-center">
              <ScrollableContainerUpperSection
                arrowButtonsClass="sm:hidden"
                containerRef={containerRef}
                title2={t("gilgameshUniversity")}
                title={tHome("eServices")}
                className="sm:w-fit sm:items-center"
              />
            </div>
          </Wrapper>
        </Section>
        <Section className="max-w-none">
          <Wrapper className="mx-0 max-w-none sm:mx-[16px]">
            <ScrollableCardsContainer
              ref={containerRef}
              className="grid grid-cols-[repeat(3,auto)] sm:w-full sm:grid-cols-3 sm:gap-[40px] 1920:gap-[49px]"
            >
              {eServices.map((service, index) => (
                <ScrollElement
                  className="flex justify-center sm:w-auto"
                  key={index}
                >
                  <CommonCard
                    el={{
                      href: service.link,
                      imgUrl: getImageUrl(service.icon),
                      title: service.title,
                    }}
                    index={index}
                    uniqueFirstCard={false}
                  />
                </ScrollElement>
              ))}
            </ScrollableCardsContainer>
          </Wrapper>
        </Section>
      </div>
    )
  );
};

export default EServicesSection;

```

# src\components\common-sections\EServicesSectionClient.tsx

```tsx
import React from "react";

export default function EServicesSectionClient() {
  return <div>EServicesSectionClient</div>;
}

```

# src\components\common-sections\MapSection.tsx

```tsx
"use client";

import MapLinkButton from "@/components/MapLinkButton";
import dynamic from "next/dynamic";

const LocationMap = dynamic(() => import("@/components/LocationMap"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function MapSection() {
  return (
    <div className="relative h-[330px] sm:h-[653px] w-full overflow-hidden mt-[82px] sm:mt-0">
      {/* <LocationMap latitude={33.222307} longitude={44.3888341}></LocationMap> */}
      <iframe
        className="gmapelement w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3337.686773749098!2d44.39140365950111!3d33.222306973591124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1559d51e5f965023%3A0x269c2efce4992572!2z2KzYp9mF2LnYqSDZg9mE2YPYp9mF2LQg2KfZhNin2YfZhNmK2Kk!5e0!3m2!1sar!2siq!4v1717235472677!5m2!1sar!2siq"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      {/* <div className="absolute start-[16px] top-[16px] z-[10000]">
        <MapLinkButton
          latitude={33.222307}
          longitude={44.3888341}
        ></MapLinkButton>
      </div> */}
    </div>
  );
}

```

# src\components\DynamicImage.tsx

```tsx
import Image from "next/image";

import { cn } from "@/lib/utils";
import { getPlaiceholder } from "plaiceholder";
import { getImagePlaceholder } from "@/lib/server-utils";
import { twMerge } from "tailwind-merge";

export type PlaceholderImgData = {
  base64: string;
  data: {
    src: string;
    height: number;
    width: number;
  };
};

export default async function DynamicImage({
  src,
  placeholderData,
  alt,
  id,
  wrapperClass,
  sizes,
  priority,
  className,
}: {
  src?: string;
  placeholderData?: PlaceholderImgData;
  alt?: string;
  id?: string;
  wrapperClass?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  const { base64, data } = placeholderData ?? (await getImagePlaceholder(src!));

  return (
    <div className={cn("relative", wrapperClass)}>
      <Image
        {...data}
        id={id}
        alt={alt || ""}
        placeholder="blur"
        blurDataURL={base64}
        sizes={"(max-width: 768px) 100vw, " + sizes}
        priority={priority}
        className={twMerge("h-full w-full object-cover", className)}
      />
    </div>
  );
}

```

# src\components\FileOperations.tsx

```tsx
"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { getPrintProps, shareCurrentURL } from "@/lib/utils";
import { useReactToPrint } from "react-to-print";
import { useTranslations } from "next-intl";
import useTextDirection from "@/app/_hooks/useTextDirection";
import { twMerge } from "tailwind-merge";
import { PDFStyles } from "./PDFDownloadButton";
import dynamic from "next/dynamic";

const PDFDownloadButton = dynamic(() => import("./PDFDownloadButton"), {
  ssr: false,
});

export default function FileOperations({
  className,
  showDownloadButton = false,
  pdfStyles,
}: {
  className?: string;
  showDownloadButton?: boolean;
  pdfStyles?: PDFStyles;
}) {
  const t = useTranslations("Common");
  const dir = useTextDirection();

  const handlePrint = useReactToPrint(
    getPrintProps({
      content: () => document.getElementById("print-section"),
      dir,
    }),
  );

  return (
    <div
      className={twMerge(
        "no-print hidden gap-[35px] text-primary sm:flex sm:items-center",
        className,
      )}
    >
      {showDownloadButton && (
        <PDFDownloadButton pdfStyles={pdfStyles}></PDFDownloadButton>
      )}
      <div className="h-[24px] border-r border-[#D8D8D8]"></div>
      <Button
        onClick={shareCurrentURL}
        variant="ghost"
        size="icon"
        className="w-fit items-center gap-[10px] text-[16px] font-bold leading-none"
      >
        <span>{t("share")}</span>
        <i className="ri-share-forward-fill text-[20px]"></i>
      </Button>
      <div className="h-[24px] border-r border-[#D8D8D8]"></div>
      <Button
        onClick={handlePrint}
        variant="ghost"
        size="icon"
        className="w-fit items-center gap-[10px] text-[16px] font-bold leading-none"
      >
        <span>{t("print")}</span>
        <i className="ri-printer-fill text-[20px]"></i>
      </Button>
    </div>
  );
}

```

# src\components\FormattedTextViewer.tsx

```tsx
import React from "react";

import Wrapper from "./Wrapper";
import FileOperations from "./FileOperations";
import { Button } from "./ui/button";

export default function FormattedTextViewer({
  children,
}: {
  children: string;
}) {
  return (
    <Wrapper className="mx-auto mt-[36px] flex max-w-none flex-col gap-[35px] bg-white px-[24px] py-[40px] text-justify sm:px-[40px]">
      <div
        className="tiptap"
        id="print-section"
        dangerouslySetInnerHTML={{ __html: children }}
      ></div>
      <FileOperations className="self-end"></FileOperations>
    </Wrapper>
  );
}

```

# src\components\HoverMenu.tsx

```tsx
"use client";

import React from "react";
import { Link } from "@/i18n.config";
import { twMerge } from "tailwind-merge";
import { MenuItem } from "@/lib/types";

interface HoverMenuProps {
  items: MenuItem[];
  className?: string;
  submenuClassName?: string;
  isSubmenu?: boolean;
}

const HoverMenu: React.FC<HoverMenuProps> = ({
  items,
  className,
  submenuClassName = "",
  isSubmenu = false,
}) => {
  return (
    <div
      className={twMerge(
        "absolute hidden animate-vanish whitespace-nowrap bg-black/90 shadow-lg",
        isSubmenu
          ? twMerge(
              "start-full top-0 group-hover/sub:block group-hover/sub:animate-appear",
              submenuClassName,
            )
          : "top-full group-hover:block group-hover:animate-appear",
        className,
      )}
    >
      <div
        className="py-2"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        {items.map((item, index) => (
          <HoverMenuItem
            key={index}
            item={item}
            submenuClassName={submenuClassName}
          />
        ))}
      </div>
    </div>
  );
};

const HoverMenuItem: React.FC<{
  item: MenuItem;
  submenuClassName?: string;
}> = ({ item, submenuClassName }) => {
  return (
    <div className="group/sub relative border-b border-transparent text-start hover:border-secondary">
      {item.path ? (
        <Link
          href={item.path}
          className="block px-6 py-3 text-sm text-white hover:bg-white/10"
          role="menuitem"
        >
          {item.label}
        </Link>
      ) : (
        <span className="block px-6 py-3 text-sm text-white">{item.label}</span>
      )}
      {item.items && (
        <HoverMenu
          items={item.items}
          isSubmenu={true}
          submenuClassName={submenuClassName}
        />
      )}
    </div>
  );
};

export default HoverMenu;

```

# src\components\LocaleSwitcher.tsx

```tsx
"use client";

import {
  DelayedSelect,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  localeNames,
  locales,
  usePathname,
  useRouter,
  type Locale,
} from "@/i18n.config";
import { useTranslations } from "next-intl";
import useTextDirection from "../app/_hooks/useTextDirection";
import Cookies from "js-cookie";

export default function LocaleSwitcher({ locale }: { locale: Locale }) {
  const t = useTranslations("Header.localSwitcher");
  const pathname = usePathname();
  const router = useRouter();

  const dir = useTextDirection();

  const changeLocale = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  // console.log(locale);

  return (
    <DelayedSelect dir={dir} onValueChange={changeLocale} defaultValue={locale}>
      <SelectTrigger
        icon={
          <></>
          // <i className="fa-solid fa-chevron-down text-[16px] text-black/20"></i>
        }
        className="h-[22px] w-[34px] items-center justify-center rounded-[4px] border bg-transparent p-0 text-[12px] font-light leading-none text-white shadow-none outline-none ring-0 sm:p-0 sm:px-0"
        style={{ boxShadow: "none" }}
      >
        <SelectValue placeholder={t("select a language")} />
      </SelectTrigger>
      <SelectContent>
        {locales.map((loc) => (
          <SelectItem key={loc} value={loc} onClick={(e) => {}}>
            {loc.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </DelayedSelect>
  );
}

```

# src\components\LocationMap.tsx

```tsx
"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
import { Root, createRoot } from "react-dom/client";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

let DefaultIcon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [40, 48],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const LocationMap = ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<Root | null>(null);
  const [map, setMap] = useState<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    if (!rootRef.current) {
      rootRef.current = createRoot(mapRef.current);
    }

    const position: L.LatLngExpression = [latitude, longitude];
    const zoom = 16;

    rootRef.current.render(
      <MapContainer
        center={position}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
        attributionControl={false}
        scrollWheelZoom={false}
        ref={setMap}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          maxZoom={19}
        />
        <Marker position={position} />
      </MapContainer>
    );

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [latitude, longitude]);

  useEffect(() => {
    if (map) {
      map.setView([latitude, longitude], 14);
    }
  }, [map, latitude, longitude]);

  return <div ref={mapRef} style={{ height: "100%", width: "100%" }} />;
};

export default LocationMap;

```

# src\components\MapLinkButton.tsx

```tsx
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const MapLinkButton = ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  const t = useTranslations("Common.Map");

  const openGoogleMaps = () => {
    // Check if the device is running iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    // Check if the device is running Android
    const isAndroid = /Android/.test(navigator.userAgent);

    let url;
    if (isIOS) {
      // Use the Apple Maps URL scheme
      url = `maps://maps.apple.com/?q=${latitude},${longitude}`;
    } else if (isAndroid) {
      // Use the Google Maps Android app URL scheme
      url = `geo:${latitude},${longitude}?q=${latitude},${longitude}`;
    } else {
      // Fallback to web URL for other devices
      url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    }

    // For non-mobile devices (like Windows laptops), always open in a new tab
    if (!isIOS && !isAndroid) {
      window.open(url, "_blank");
    } else {
      // Attempt to open the URL for mobile devices
      window.location.href = url;

      // Fallback to opening in a new tab if the app doesn't open
      setTimeout(() => {
        window.open(
          `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`,
          "_blank"
        );
      }, 500);
    }
  };

  return (
    <Button onClick={openGoogleMaps} className="gap-1.5 items-center">
      <i className="ri-map-pin-2-fill text-[16px] mb-1"></i>
      <span className="text-[12px]">{t("openInGoogleMaps")}</span>
    </Button>
  );
};

export default MapLinkButton;

```

# src\components\modals\SuccessModal.tsx

```tsx
"use client";
import useCommonStore from "@/lib/zustand/common";
import successAnimation from "@/../public/lottie/success.json";
import Lottie from "lottie-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";

export default function SuccessModal() {
  const { isSuccessModalOpen, successMessage, closeSuccessModal } =
    useCommonStore();

  return (
    <AlertDialog
      open={isSuccessModalOpen}
      onOpenChange={() => {
        closeSuccessModal();
      }}
    >
      <AlertDialogContent onClickOutside={() => closeSuccessModal()}>
        <AlertDialogHeader>
          <AlertDialogTitle className="mb-3 flex flex-col items-center justify-center">
            <Lottie
              animationData={successAnimation}
              loop={false}
              className="aspect-square w-[100px]"
            />
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center text-xl text-foreground">
            {successMessage}
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}

```

# src\components\page\FirstSection.tsx

```tsx
"use client";

import React from "react";
import { usePathname } from "@/i18n.config";
// import { getBgComponent } from "@/lib/utils";

export default function FirstSection() {
  const pathname = usePathname();

  // const BgComponent = getBgComponent(pathname);

  // return BgComponent ? <BgComponent /> : <></>;
}

```

# src\components\page\FirstTitleSection\ActionsTitle.tsx

```tsx
import FileOperations from "@/components/FileOperations";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import Wrapper from "@/components/Wrapper";
import { Link } from "@/i18n.config";
import { NEWS_ROUTE } from "@/lib/paths";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function ActionsTitle({
  showBackButton = false,
  backHref = "",
  title,
  description,
  className,
  fileOperations,
}: {
  showBackButton?: boolean;
  title?: string;
  description?: string;
  backHref?: string;
  className?: string;
  fileOperations?: ReactNode;
}) {
  return (
    <Section className="mt-[61px] !max-w-none flex-col items-center sm:mt-[160px]">
      <Wrapper>
        <div
          className={twMerge(
            "flex justify-between",
            !description &&
              !showBackButton &&
              !fileOperations &&
              "sm:justify-center",
          )}
        >
          <div
            className={twMerge("mb-[12px] text-start sm:mb-[53px]", className)}
          >
            {showBackButton && (
              <Link href={backHref}>
                <Button className="w-fit gap-1">
                  <i className="ri-arrow-right-s-line text-[22px] text-[#99AFC9]"></i>
                  <span>الرجــوع</span>
                </Button>
              </Link>
            )}

            {title && (
              <h1
                className={twMerge(
                  "mt-[35px] text-[24px] font-bold leading-[1.22em] sm:mt-[43px] sm:text-[40px] 1920:text-[48px]",
                  !description &&
                    !showBackButton &&
                    "text-center sm:text-start",

                  !description &&
                    !showBackButton &&
                    !fileOperations &&
                    "sm:text-center",
                )}
              >
                {title}
              </h1>
            )}
            {description && <p>{description}</p>}

            {/* <div className="mt-[48px] flex items-center gap-[16px] font-bold text-primary sm:mt-[33px]">
            <span>اكاديمية الماجستير</span>
            <span>—</span>
            <span>قبل 6 ساعات</span>
          </div> */}
          </div>
          {fileOperations}
        </div>
      </Wrapper>
    </Section>
  );
}

```

# src\components\page\FirstTitleSection\CenterizedTitle.tsx

```tsx
import React from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n.config";
import { getPageTitle } from "@/lib/utils";

export default function CenterizedTitle() {
  const t = useTranslations();
  const pathname = usePathname();
  const pageTitle = getPageTitle({ t, pathname });

  return (
    <h1 className="title-lg mb-[23px] !text-center leading-[1.25] sm:mb-[96px]">
      {pageTitle}
    </h1>
  );
}

```

# src\components\page\FirstTitleSection\FirstTitleSection.tsx

```tsx
"use client";

import React from "react";
import { usePathname } from "@/i18n.config";
// import { getTitleComponent } from "@/lib/utils";
import Wrapper from "@/components/Wrapper";

export default function FirstTitleSection() {
  const pathname = usePathname();

  // const TitleComponent = getTitleComponent(pathname);

  // return TitleComponent ? (
  //   <Wrapper>
  //     <TitleComponent />
  //   </Wrapper>
  // ) : (
  //   <></>
  // );
}

```

# src\components\page\ImageBg.tsx

```tsx
import React from "react";
import { twMerge } from "tailwind-merge";

export default function ImageBg({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="relative flex min-h-[260px] justify-center sm:min-h-[420px] 1920:min-h-[592px]">
      <TextSection title={title} subtitle={subtitle} />
      <ImageSection />
    </div>
  );
}

function TextSection({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="relative z-30 w-full max-w-mobile pt-[71px] text-start sm:mx-auto sm:max-w-desktop sm:px-[30px] sm:pt-[96px] xl:px-0 1920:max-w-desktop-lg 1920:pt-[138px]">
      <div className="mt-[30px] max-w-[654px] sm:mt-[24px] 1920:mt-[34px] 1920:max-w-[789px]">
        <h3 className="text-[16px] font-light leading-[22px] text-white/70 sm:text-[26px] sm:leading-[31px] 1920:text-[40px] 1920:leading-[48px]">
          {subtitle}
        </h3>
        <h1 className="mt-[9px] line-clamp-3 text-[25px] leading-[30px] text-white sm:mt-[22px] sm:text-[48px] sm:leading-[54px] 1920:mt-[32px] 1920:text-[60px] 1920:leading-[72px]">
          {title}
        </h1>
      </div>
    </div>
  );
}

function ImageSection() {
  return (
    <div className="navbar-inclusive-background w-full">
      <img
        src="/images/hero-bg.jpg"
        alt="hero bg"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70"></div>
    </div>
  );
}

```

# src\components\page\OnlyTitle.tsx

```tsx
"use client";

import React from "react";
import Section from "../Section";
import FirstTitleSection from "./FirstTitleSection/FirstTitleSection";
import Wrapper from "../Wrapper";
import { useTranslations } from "next-intl";

export default function OnlyTitle() {
  const t = useTranslations("Common");

  return (
    <Section
      id="page-print"
      className="mt-[61px] !max-w-none flex-col items-center sm:mt-[160px]"
    >
      {/* <FirstTitleSection></FirstTitleSection> */}
    </Section>
  );
}

```

# src\components\page\Page.tsx

```tsx
import React, { Fragment } from "react";
import FirstSection from "./FirstSection";

export default function PageWithFirstSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className={className}>
      {/* <FirstSection />
      {children} */}
    </main>
  );
}

```

# src\components\page\SliderBg.tsx

```tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import ScrollArrows from "@/components/ScrollArrows";
import { NewsItem, SliderItem } from "@/lib/types";
import useScrollControl from "@/app/_hooks/useScrollControl";
import useTextDirection from "../../app/_hooks/useTextDirection";
import { getImageUrl } from "@/lib/utils";
import Image from "next/image";

interface SliderBgProps {
  sliderItems: SliderItem[];
}

export default function SliderBg({ sliderItems }: SliderBgProps) {
  return <ScrollableCardsContainer sliderItems={sliderItems} />;
}

const ImageSection = ({ image }: { image: string }) => {
  return (
    <div className="relative w-screen">
      <Image
        placeholder="blur"
        blurDataURL={getImageUrl(image)}
        fill
        src={getImageUrl(image)}
        alt="hero bg"
        priority
        className="h-full w-full object-cover"
      />
      <div className="absolute top-0 h-full w-full bg-black/70"></div>
    </div>
  );
};

function ScrollableCardsContainer({
  sliderItems,
}: {
  sliderItems: SliderItem[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dir = useTextDirection();
  const [scrollAmount, setScrollAmount] = useState<number>();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const { scroll, handleScroll, resetScrollPosition } = useScrollControl({
    containerRef,
    useMultiples: true,
    baseScrollAmount: scrollAmount,
  });

  useEffect(() => {
    setScrollAmount(containerRef.current?.clientWidth);
  }, [containerRef.current]);

  const autoSlide = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      const isAtEnd = Math.abs(scrollLeft) >= scrollWidth - clientWidth;

      if (isAtEnd) resetScrollPosition();
      else
        scroll({
          direction: dir == "ltr" ? "right" : "left",
          isLTR: dir == "ltr",
        });
    }
  };

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(autoSlide, 5000);
  };

  useEffect(() => {
    resetInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [scrollAmount]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);

  return (
    <div className="relative flex min-h-[297px] justify-center sm:min-h-[560px] 1920:min-h-[952px]">
      <TextSection
        containerRef={containerRef}
        resetTimer={resetInterval}
        sliderItems={sliderItems}
      />
      <div
        ref={containerRef}
        className={twMerge(
          "navbar-inclusive-background absolute mx-auto h-full w-screen overflow-x-auto",
          "hide-scrollbar",
        )}
      >
        <div className="flex h-full w-fit">
          {sliderItems.map((newsItem, index) => (
            <ImageSection key={index} image={newsItem.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TextSection({
  containerRef,
  resetTimer,
  sliderItems,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
  resetTimer: () => void;
  sliderItems: SliderItem[];
}) {
  const [scrollAmount, setScrollAmount] = useState<number>();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setScrollAmount(containerRef.current?.clientWidth);
  }, [containerRef.current]);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const index = Math.round(
          containerRef.current.scrollLeft / scrollAmount!,
        );
        setCurrentIndex(Math.abs(index));
      }
    };

    containerRef.current?.addEventListener("scroll", handleScroll);

    return () =>
      containerRef.current?.removeEventListener("scroll", handleScroll);
  }, [scrollAmount]);

  const currentNews = sliderItems[currentIndex];

  return (
    <div className="relative z-30 w-full max-w-mobile pt-[51px] text-start sm:mx-auto sm:max-w-desktop sm:px-[30px] sm:pt-[116px] 1920:max-w-desktop-lg 1920:pt-[318px]">
      <ScrollArrows
        containerRef={containerRef}
        scrollAmount={scrollAmount}
        useMultiples={true}
        resetTimer={resetTimer}
        className="slider-bg-arrows"
      />

      <div className="mt-[30px] max-w-[654px] sm:mt-[24px] 1920:mt-[34px] 1920:max-w-[789px]">
        <h3 className="text-[16px] font-light leading-[22px] text-white/70 sm:text-[26px] sm:leading-[31px] 1920:text-[40px] 1920:leading-[48px]">
          {currentNews?.description}
        </h3>

        <h1 className="mt-[9px] line-clamp-3 text-[25px] leading-[30px] text-white sm:mt-[22px] sm:text-[48px] sm:leading-[54px] 1920:mt-[32px] 1920:text-[60px] 1920:leading-[72px]">
          {currentNews?.title}
        </h1>
      </div>
    </div>
  );
}

// "use client";

// import React, { Suspense, useEffect, useRef, useState } from "react";
// import { twMerge } from "tailwind-merge";
// import ScrollArrows from "@/components/ScrollArrows";
// import { NewsItem } from "@/lib/types";
// import useScrollControl from "@/app/_hooks/useScrollControl";
// import useTextDirection from "../../app/_hooks/useTextDirection";
// import { getImageUrl } from "@/lib/utils";
// import Image from "next/image";
// import DynamicImage, { PlaceholderImgData } from "../DynamicImage";

// interface HomeSliderData {
//   newsItems: NewsItem[];
//   placeholdersData: PlaceholderImgData[];
// }

// export default function SliderBg({
//   homeSliderData,
// }: {
//   homeSliderData: HomeSliderData;
// }) {
//   return <ScrollableCardsContainer homeSliderData={homeSliderData} />;
// }

// const ImageSection = ({
//   placeholderData,
// }: {
//   placeholderData: PlaceholderImgData;
// }) => {
//   return (
//     <div className="relative w-screen">
//       <DynamicImage
//         placeholderData={placeholderData}
//         alt="hero bg"
//         priority
//         className="h-full w-full object-cover"
//       />

//       <div className="absolute top-0 h-full w-full bg-black/70"></div>
//     </div>
//   );
// };

// function ScrollableCardsContainer({
//   homeSliderData,
// }: {
//   homeSliderData: HomeSliderData;
// }) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const dir = useTextDirection();
//   const [scrollAmount, setScrollAmount] = useState<number>();
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);

//   const { scroll, handleScroll, resetScrollPosition } = useScrollControl({
//     containerRef,
//     useMultiples: true,
//     baseScrollAmount: scrollAmount,
//   });

//   useEffect(() => {
//     setScrollAmount(containerRef.current?.clientWidth);
//   }, [containerRef.current]);

//   const autoSlide = () => {
//     if (containerRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
//       const isAtEnd = Math.abs(scrollLeft) >= scrollWidth - clientWidth;

//       if (isAtEnd) resetScrollPosition();
//       else
//         scroll({
//           direction: dir == "ltr" ? "right" : "left",
//           isLTR: dir == "ltr",
//         });
//     }
//   };

//   const resetInterval = () => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(autoSlide, 5000);
//   };

//   useEffect(() => {
//     resetInterval();

//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//       }
//     };
//   }, [scrollAmount]);

//   useEffect(() => {
//     if (containerRef.current) {
//       containerRef.current.addEventListener("scroll", handleScroll);
//     }
//     return () => {
//       if (containerRef.current) {
//         containerRef.current.removeEventListener("scroll", handleScroll);
//       }
//     };
//   }, [handleScroll]);

//   return (
//     <div className="relative flex min-h-[297px] justify-center sm:min-h-[560px] 1920:min-h-[952px]">
//       <TextSection
//         containerRef={containerRef}
//         resetTimer={resetInterval}
//         newsItems={homeSliderData.newsItems}
//       />
//       <div
//         ref={containerRef}
//         className={twMerge(
//           "navbar-inclusive-background absolute mx-auto h-full w-screen overflow-x-auto",
//           "hide-scrollbar",
//         )}
//       >
//         <div className="flex h-full w-fit">
//           {homeSliderData.newsItems.map((newsItem, index) => (
//             <ImageSection
//               key={index}
//               placeholderData={homeSliderData.placeholdersData[index]}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// function TextSection({
//   containerRef,
//   resetTimer,
//   newsItems,
// }: {
//   containerRef: React.RefObject<HTMLDivElement>;
//   resetTimer: () => void;
//   newsItems: NewsItem[];
// }) {
//   const [scrollAmount, setScrollAmount] = useState<number>();
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     setScrollAmount(containerRef.current?.clientWidth);
//   }, [containerRef.current]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (containerRef.current) {
//         const index = Math.round(
//           containerRef.current.scrollLeft / scrollAmount!,
//         );
//         setCurrentIndex(Math.abs(index));
//       }
//     };

//     containerRef.current?.addEventListener("scroll", handleScroll);

//     return () =>
//       containerRef.current?.removeEventListener("scroll", handleScroll);
//   }, [scrollAmount]);

//   const currentNews = newsItems[currentIndex];

//   return (
//     <div className="relative z-30 w-full max-w-mobile pt-[51px] text-start sm:mx-auto sm:max-w-desktop sm:px-[30px] sm:pt-[116px] 1920:max-w-desktop-lg 1920:pt-[318px]">
//       <ScrollArrows
//         containerRef={containerRef}
//         scrollAmount={scrollAmount}
//         useMultiples={true}
//         resetTimer={resetTimer}
//         className="slider-bg-arrows"
//       />

//       <div className="mt-[30px] max-w-[654px] sm:mt-[24px] 1920:mt-[34px] 1920:max-w-[789px]">
//         <h3 className="text-[16px] font-light leading-[22px] text-white/70 sm:text-[26px] sm:leading-[31px] 1920:text-[40px] 1920:leading-[48px]">
//           {currentNews?.description}
//         </h3>

//         <h1 className="mt-[9px] line-clamp-3 text-[25px] leading-[30px] text-white sm:mt-[22px] sm:text-[48px] sm:leading-[54px] 1920:mt-[32px] 1920:text-[60px] 1920:leading-[72px]">
//           {currentNews?.title}
//         </h1>
//       </div>
//     </div>
//   );
// }

```

# src\components\page\TitleAndImage.tsx

```tsx
"use client";

import React from "react";
import Section from "../Section";
import FirstTitleSection from "./FirstTitleSection/FirstTitleSection";
import Wrapper from "../Wrapper";
import { useTranslations } from "next-intl";

export default function TitleAndImage() {
  const t = useTranslations("Common");

  return (
    <Section
      id="page-print"
      className="mt-[61px] !max-w-none flex-col items-center sm:mt-[160px]"
    >
      {/* <FirstTitleSection></FirstTitleSection> */}
      <img
        src="/images/hero-bg.jpg"
        alt=""
        className="h-[297px] w-full object-cover sm:h-[831px]"
      />
    </Section>
  );
}

```

# src\components\Pagination.tsx

```tsx
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemsPerPage: number;
  totalItems: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  totalItems,
}) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
      <div className="flex items-center justify-center gap-3">
        <Button
          variant="white"
          size="icon"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="h-10 w-10 p-0 text-sm"
        >
          <i className="ri-arrow-right-line flippable"></i>
        </Button>
        {getPageNumbers().map((pageNumber, index) => (
          <React.Fragment key={index}>
            {pageNumber === "..." ? (
              <span className={cn("h-10 w-10 bg-white p-0 text-sm")}>...</span>
            ) : (
              <Button
                variant="white"
                onClick={() => onPageChange(pageNumber as number)}
                className={cn(
                  "h-10 w-10 p-0 text-sm",
                  currentPage === pageNumber
                    ? "bg-primary text-white"
                    : "bg-white",
                )}
              >
                {pageNumber}
              </Button>
            )}
          </React.Fragment>
        ))}
        <Button
          variant="white"
          size="icon"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="h-10 w-10 p-0 text-sm"
        >
          <i className="ri-arrow-left-line flippable"></i>
        </Button>
      </div>
    </div>
  );
};

export default Pagination;

```

# src\components\PDFDownloadButton.tsx

```tsx
import React from "react";
import { Button } from "@/components/ui/button";
import html2pdf from "html2pdf.js";
import { useTranslations } from "next-intl";

export interface PDFStyles {
  [key: string]: React.CSSProperties;
}

interface PDFDownloadButtonProps {
  pdfStyles?: PDFStyles;
}

const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({
  pdfStyles = {},
}) => {
  const t = useTranslations("Common");

  const [isLoading, setIsLoading] = React.useState(false);

  const handleDownload = () => {
    setIsLoading(true);
    const element = document.getElementById("print-section");
    if (!element) {
      console.error("Print section not found");
      setIsLoading(false);
      return;
    }

    // Clone the element
    const clonedElement = element.cloneNode(true) as HTMLElement;

    // Apply custom styles to the cloned element
    applyPDFStyles(clonedElement, pdfStyles);

    const opt = {
      margin: 10,
      filename: "organizational_structure.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf()
      .from(clonedElement)
      .set(opt)
      .save()
      .then(() => {
        setIsLoading(false);
      });
  };

  const applyPDFStyles = (element: HTMLElement, customStyles: PDFStyles) => {
    // Apply styles
    Object.entries(customStyles).forEach(([selector, styles]) => {
      const elements =
        selector === "body" ? [element] : element.querySelectorAll(selector);
      elements.forEach((el) => {
        Object.assign((el as HTMLElement).style, styles);
      });
    });
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={isLoading}
      variant="ghost"
      size="icon"
      className="w-fit items-center gap-[10px] text-[16px] font-bold leading-none"
    >
      <span>{isLoading ? t("loading") + "..." : t("download")}</span>

      <i className="ri-file-pdf-2-fill text-[20px]"></i>
    </Button>
  );
};

export default PDFDownloadButton;

```

# src\components\scrollable-container\ScrollableContainer.tsx

```tsx
import React, { useImperativeHandle, useRef } from "react";
import { twMerge } from "tailwind-merge";
import ScrollArrows from "../ScrollArrows";

const ScrollableCardsContainer = React.forwardRef<
  HTMLDivElement,
  {
    className?: string;
    children: React.ReactNode;
    wrapperClass?: string;
    arrowsAndWrapperContainerClass?: string;
    showArrows?: boolean;
  }
>(
  (
    {
      className,
      children,
      wrapperClass,
      showArrows,
      arrowsAndWrapperContainerClass,
    },
    ref,
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // const innerRef = useRef<HTMLDivElement>(null);

    // useImperativeHandle(ref, () => innerRef.current!);

    return (
      <div className={twMerge("relative", arrowsAndWrapperContainerClass)}>
        {showArrows && (
          <ScrollArrows
            containerRef={containerRef!}
            useMultiples={true}
            wrapperClassName="absolute center-vertically z-10 w-full justify-between h-full"
            buttonWrapperClass="items-center flex justify-center h-full w-[57px] bg-black/30 sm:w-[302px]"
            className="h-[24px] w-[24px] !rounded-none text-[14px] sm:h-[48px] sm:w-[48px] sm:text-[24px] 1920:h-[60px] 1920:w-[60px] 1920:text-[32px]"
            isChevron={true}
          ></ScrollArrows>
        )}
        <div
          ref={ref ?? containerRef}
          className={twMerge(
            "hide-scrollbar relative mx-auto w-full max-w-screen-pure overflow-x-auto",
            wrapperClass,
          )}
        >
          <div className={twMerge("flex w-fit", className)}>{children}</div>
        </div>
      </div>
    );
  },
);

ScrollableCardsContainer.displayName = "ScrollableCardsContainer";

export { ScrollableCardsContainer };

```

# src\components\scrollable-container\UpperSection.tsx

```tsx
"use client";

import { useEffect, useState } from "react";
import Section from "../Section";
import ScrollArrows from "../ScrollArrows";
import { twMerge } from "tailwind-merge";
import TitlesWrapper from "../TitlesWrapper";

export default function ScrollableContainerUpperSection({
  containerRef,
  hideArrows = false,
  title,
  title2,
  titleClass,
  className,
  arrowButtonsClass,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
  hideArrows?: boolean;
  title: string;
  title2?: string;
  titleClass?: string;
  className?: string;
  arrowButtonsClass?: string;
}) {
  const [scrollAmount, setScrollAmount] = useState<number>();

  useEffect(() => {
    if (containerRef.current) setScrollAmount(containerRef.current.clientWidth);
  }, [containerRef]);

  return (
    <TitlesWrapper className={twMerge("items-start", className)}>
      {title2 && <h3 className="title-sm">{title2}</h3>}

      <div className="flex items-center justify-between w-full">
        <h5 className={twMerge("title", titleClass)}>{title}</h5>
        {!hideArrows && (
          <ScrollArrows
            containerRef={containerRef}
            useMultiples={true}
            scrollAmount={scrollAmount}
            wrapperClassName="gap-[8px]"
            className={arrowButtonsClass}
          />
        )}
      </div>
    </TitlesWrapper>
  );
}

```

# src\components\ScrollArrowButton.tsx

```tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";

interface ScrollArrowButtonProps {
  direction: "left" | "right";
  canScroll: boolean;
  onClick: () => void;
  className?: string;
  wrapperClass?: string;
  isChevron?: boolean;
}

const ScrollArrowButton: React.FC<ScrollArrowButtonProps> = ({
  direction,
  canScroll,
  onClick,
  className,
  wrapperClass,
  isChevron,
}) => {
  return (
    <div className={wrapperClass}>
      <Button
        variant="secondary"
        className={twMerge(
          "h-[31px] w-[31px] rounded-full text-[18px] text-foreground flippable sm:h-[36px] sm:w-[36px] sm:text-[18px] 1920:h-[48px] 1920:w-[48px] 1920:text-[24px]",
          !canScroll && "disabled-scroll-button",
          className,
        )}
        size="icon"
        onClick={onClick}
      >
        <i
          className={
            isChevron
              ? `ri-arrow-${direction}-s-line`
              : `ri-arrow-${direction}-line`
          }
        ></i>
      </Button>
    </div>
  );
};

export default ScrollArrowButton;

```

# src\components\ScrollArrows.tsx

```tsx
import useScrollControl from "@/app/_hooks/useScrollControl";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "./ui/button";
import useTextDirection from "@/app/_hooks/useTextDirection";
import ScrollArrowButton from "./ScrollArrowButton";

export default function ScrollArrows({
  containerRef,
  scrollAmount,
  useMultiples = false,
  resetTimer,
  wrapperClassName,
  className,
  buttonWrapperClass,
  isChevron,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
  scrollAmount?: number;
  useMultiples?: boolean;
  resetTimer?: () => void;
  className?: string;
  wrapperClassName?: string;
  buttonWrapperClass?: string;
  isChevron?: boolean;
}) {
  const dir = useTextDirection();

  const { canScrollEnd, canScrollStart, handleScroll, scroll } =
    useScrollControl({
      containerRef,
      useMultiples,
      baseScrollAmount: scrollAmount,
      resetTimer,
    });

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
      handleScroll(); // Check initial scroll state
    }
    return () =>
      containerRef.current?.removeEventListener("scroll", handleScroll);
  }, [containerRef, handleScroll]);

  return (
    <div
      className={twMerge(
        "flex flex-row justify-start gap-[12px] sm:gap-[9px]",
        wrapperClassName,
      )}
    >
      <ScrollArrowButton
        isChevron={isChevron}
        wrapperClass={buttonWrapperClass}
        direction="right"
        canScroll={canScrollStart}
        onClick={() => scroll({ direction: "right", isLTR: dir == "ltr" })}
        className={className}
      />

      <ScrollArrowButton
        isChevron={isChevron}
        wrapperClass={buttonWrapperClass}
        direction="left"
        canScroll={canScrollEnd}
        onClick={() => scroll({ direction: "left", isLTR: dir == "ltr" })}
        className={className}
      />
    </div>
  );
}

```

# src\components\ScrollElement.tsx

```tsx
import { ComponentProps } from "@/lib/types";
import React from "react";
import { twMerge } from "tailwind-merge";
export default function ScrollElement({ children, ...props }: ComponentProps) {
  return (
    <div className={twMerge("w-screen-pure", props.className)}>{children}</div>
  );
}

```

# src\components\SearchSection.tsx

```tsx
import { Input } from "@/components/ui/input";

export default function SearchSection({
  searchTerm,
  setSearchTerm,
  placeholder,
}: {
  searchTerm: string;
  placeholder: string;
  setSearchTerm: (value: string) => void;
}) {
  return (
    <div className="flex flex-col gap-[14px] sm:flex-row mt-[36px] sm:mt-[68px] w-full sm:w-auto max-w-[351px] sm:max-w-[1216px]">
      <div className="relative">
        <Input
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-primary-300 !ring-0 min-w-[280px] rounded-full"
        />
        <i className="ri-search-line absolute end-6 top-1/2 transform -translate-y-1/2 text-primary-300 text-[20px]"></i>
      </div>
    </div>
  );
}

```

# src\components\Section.tsx

```tsx
import React from "react";
import { twMerge } from "tailwind-merge";
export default function Section({
  children,
  wrapperClass,
  as: Component = "div",
  ref,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLElement>> & {
  wrapperClass?: string;
  as?: React.ElementType;
  ref?: React.RefObject<HTMLElement>;
}) {
  return (
    <Component
      ref={ref}
      className={`flex w-full justify-center ${wrapperClass ?? ""}`}
    >
      <div
        {...props}
        className={twMerge(
          "mx-auto flex w-full max-w-[375px] justify-center sm:max-w-[1440px] 1920:max-w-[1920px]",
          props.className,
        )}
      >
        {children}
      </div>
    </Component>
  );
}

```

# src\components\SharedPage.tsx

```tsx
import React from "react";
import ActionsTitle from "./page/FirstTitleSection/ActionsTitle";
import FileOperations from "./FileOperations";
import Section from "./Section";
import Wrapper from "./Wrapper";
import FormattedTextViewer from "./FormattedTextViewer";

export default function SharedPage() {
  return (
    <main>
      <ActionsTitle title="الهيكل التنظيمي"></ActionsTitle>
      <img
        id="print-section"
        src="/images/hero-bg.jpg"
        alt="hero-bg"
        className="w-full"
      />
      <FormattedTextViewer>
        نص تجريبي يوضع للعناوين الرئيسية في بعض الصفحات ويتم استبداله لاحقا حسب
        المحتوى المتوفر هذا النص هو نص تجريبي يبدأ بعد النقطة وقد تم وضعه كمحتوى
        تجريبي. شهدت الملاعب المغلقة لجامعة كلكامش لقاءات نسوية لمراحل المتوسطة
        والإعدادية بين تربيات الكرخ الثانية والرصافة الثانية بمعدل فريقين لكل
        تربية بهدف الكشف عن الخبرات والإمكانيات الرياضية بغية رفد منتخباتنا
        الوطنية بالدماء الشابة التي تساهم في حصد الإنجازات والبطولات خلال
        المشاركات الدولية. الجدير بالذكر أن جامعة كلكامش مستمرة بدعمها المرأة
        وعلى كافة الأصعدة والمجالات وهذا يأتي ضمن سياستها بتحقيق أهداف التنمية
        المستدامة في خدمة المجتمع.
      </FormattedTextViewer>
    </main>
  );
}

```

# src\components\SurveyForm.tsx

```tsx
"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Input, InputProps } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";
import { twMerge } from "tailwind-merge";
import axiosInstance from "@/lib/axios";
import useCommonStore from "@/lib/zustand/common";

interface SurveyFormProps {
  title: string;
  endpoint: string;
}

export default function SurveyForm({ title, endpoint }: SurveyFormProps) {
  const t = useTranslations("Survey");
  const tCommon = useTranslations("Common");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    department: "",
    message: "",
  });

  const openSuccessModal = useCommonStore((state) => state.openSuccessModal);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axiosInstance.post(endpoint, formData);
      if (response.status === 200) {
        openSuccessModal(tCommon("generalSuccessMessage"));
        setFormData({
          name: "",
          email: "",
          phone: "",
          college: "",
          department: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputFields = [
    { name: "name", label: t("fullName"), type: "text", fullWidth: true },
    { name: "email", label: t("email"), type: "email" },
    { name: "phone", label: t("phone"), type: "tel" },
    { name: "college", label: t("college"), type: "text" },
    { name: "department", label: t("department"), type: "text" },
  ];

  return (
    <Section className="mt-[60px] bg-white py-[40px] sm:mt-[150px] sm:max-w-[1225px] sm:py-[87px] 1920:mt-[180px] 1920:max-w-[1316px]">
      <Wrapper className="!max-w-none sm:!max-w-[740px] 1920:!max-w-[740px]">
        <h1 className="mb-[30px] text-center text-[28px] font-medium text-primary sm:mb-[60px] sm:text-[38px]">
          {title}
        </h1>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-y-[28px] sm:grid-cols-2 sm:gap-x-[21px] sm:gap-y-[30px] 1920:gap-x-[28px] 1920:gap-y-[39px]"
        >
          {inputFields.map((field) => (
            <div
              key={field.name}
              className={`flex flex-col gap-[18px] sm:gap-[10px] 1920:gap-[18px] ${
                field.fullWidth ? "sm:col-span-2" : "sm:col-span-1"
              }`}
            >
              <label
                htmlFor={field.name}
                className="text-right text-[16px] font-medium leading-[1.35em] text-primary sm:text-[18px] 1920:text-[21px]"
              >
                {field.label}
              </label>
              <InputWithBg
                type={field.type}
                id={field.name}
                name={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                placeholder={t("writeHere")}
              />
            </div>
          ))}
          <div className="flex flex-col gap-[18px] sm:col-span-2 sm:gap-[10px] 1920:gap-[18px]">
            <label
              htmlFor="message"
              className="text-right text-[16px] font-medium leading-[1.35em] text-primary sm:text-[18px] 1920:text-[21px]"
            >
              {t("message")}
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("writeYourMessage")}
              className="min-h-[280px] bg-[#EFEFEF]"
            />
          </div>
          <div className="flex justify-end sm:col-span-2">
            <Button type="submit" className="!w-full" disabled={isSubmitting}>
              {isSubmitting ? t("loading") : t("send")}
            </Button>
          </div>
        </form>
      </Wrapper>
    </Section>
  );
}

const InputWithBg = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <Input
      ref={ref}
      className={twMerge("bg-[#EFEFEF]", className)}
      {...props}
    />
  ),
);

```

# src\components\TitlesWrapper.tsx

```tsx
import React from "react";
import Section from "./Section";
import { twMerge } from "tailwind-merge";
import Wrapper from "./Wrapper";

export default function TitlesWrapper({ ...props }) {
  return (
    <Section>
      <Wrapper
        className={twMerge(
          "mb-[22px] sm:mb-[61px] flex flex-col items-center",
          props.className
        )}
      >
        {props.children}
      </Wrapper>
    </Section>
  );
}

```

# src\components\ui\accordion.tsx

```tsx
"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { twMerge } from "tailwind-merge";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn(className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    openIcon?: React.ReactNode;
    closeIcon?: React.ReactNode;
    iconSize?: number;
    rotationAmount?: number;
  }
>(
  (
    {
      className,
      children,
      openIcon,
      closeIcon,
      iconSize = 28,
      rotationAmount = 180,
      ...props
    },
    ref,
  ) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "group flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline",
          className,
        )}
        {...props}
      >
        {children}
        {openIcon && closeIcon ? (
          <div
            className={twMerge(
              "relative origin-center transition-transform duration-300 ease-in-out",
              "group-data-[state=open]:rotate-custom",
            )}
            style={
              {
                width: iconSize,
                height: iconSize,
                "--rotation-amount": `${rotationAmount}deg`,
              } as React.CSSProperties
            }
          >
            <div className="delay-[0.25s] absolute inset-0 flex items-center justify-center transition-opacity duration-150 group-data-[state=open]:opacity-0">
              {closeIcon}
            </div>
            <div className="delay-[0.25s] absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-150 group-data-[state=open]:opacity-100">
              {openIcon}
            </div>
          </div>
        ) : (
          <ChevronDown className="h-7 w-7 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  ),
);

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

```

# src\components\ui\alert-dialog.tsx

```tsx
"use client";

import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import * as React from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-[10000] bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> & {
    onClickOutside?: () => void;
  }
>(({ className, onClickOutside, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay onClick={onClickOutside} />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-[10000] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className,
      )}
      {...props}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-start",
      className,
    )}
    {...props}
  />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className,
    )}
    {...props}
  />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className,
    )}
    {...props}
  />
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
};

```

# src\components\ui\button.tsx

```tsx
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap    ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-bold w-full",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:opacity-80",
        white:
          "bg-white text-foreground hover:opacity-80 group-hover:opacity-80 ",
        destructive:
          "bg-destructive text-destructive-foreground hover:opacity-80",
        outline: "border bg-transparent hover:opacity-80 text-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:opacity-80",
        ghost: "hover:opacity-80",
        link: "text-primary underline-offset-4 hover:opacity-80",
      },
      size: {
        default:
          "px-8 py-4 sm:py-3 1920:py-4  text-base sm:text-xs 1920:text-base",
        sm: "px-3",
        lg: "px-8",
        icon: "text-base  font-normal",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

```

# src\components\ui\drawer.tsx

```tsx
"use client";

import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      )}
      {...props}
    >
      {/* <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" /> */}
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};

```

# src\components\ui\input.tsx

```tsx
// src/components/ui/input.tsx

import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  suffixIcon?: React.ReactNode;
  inputClass?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, suffixIcon, inputClass, ...props }, ref) => {
    return (
      <div
        className={cn(
          "relative bg-white flex focus-within:ring-2 ring-offset-secondary focus-within:ring-secondary ",
          className
        )}
      >
        <input
          type={type}
          className={cn(
            "flex h-[52px] w-full  py-2 bg-transparent file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 px-[16px] text-sm  rounded-full",
            "rounded-none text-primary leading-[1.35em] placeholder-primary/40",
            "h-[60px] text-[14px]",
            "sm:h-[46px] sm:text-[14px]",
            "1920:h-[61px] 1920:text-[16px] border-0",
            inputClass
          )}
          ref={ref}
          {...props}
        />
        {suffixIcon && (
          <span className="flex items-center justify-center pointer-events-none">
            {suffixIcon}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };

```

# src\components\ui\label.tsx

```tsx
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }

```

# src\components\ui\menubar.tsx

```tsx
"use client";

import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const MenubarMenu = MenubarPrimitive.Menu;

const MenubarGroup = MenubarPrimitive.Group;

const MenubarPortal = MenubarPrimitive.Portal;

const MenubarSub = MenubarPrimitive.Sub;

const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      className
    )}
    {...props}
  />
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className
    )}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    ref
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
);
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  );
};
MenubarShortcut.displayname = "MenubarShortcut";

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};

```

# src\components\ui\navigation-menu.tsx

```tsx
import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}

```

# src\components\ui\radio-group.tsx

```tsx
"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-6 w-6 rounded-full border border-primary text-primary-300 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-3 w-3 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };

```

# src\components\ui\scroll-area.tsx

```tsx
"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };

```

# src\components\ui\select.tsx

```tsx
"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
    icon?: React.ReactNode;
  }
>(({ className, children, icon, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-[61px] w-full items-center justify-between rounded-[12px]  border border-input bg-background px-[28px] py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary  disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      {icon !== undefined ? (
        icon
      ) : (
        <ChevronDown className="h-4 w-4 opacity-50" />
      )}
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

// This is a solution to the issue of selection also invoking whatever is underneath the select content
// Based off solution suggested here: https://github.com/radix-ui/primitives/issues/1658#issuecomment-1517705980
const DelayedSelect: React.FC<React.PropsWithChildren<any>> = ({
  children,
  ...props
}) => {
  const [open, setOpen] = React.useState(false);
  const [delayedOpen, setDelayedOpen] = React.useState(false);

  const handleOpenChange = (
    newOpenState: boolean | ((prevState: boolean) => boolean)
  ) => {
    if (newOpenState) {
      setOpen(newOpenState);
      setDelayedOpen(newOpenState);
    } else {
      setOpen(newOpenState);
      setTimeout(() => {
        setDelayedOpen(newOpenState);
      }, 0);
    }
  };

  return (
    <SelectPrimitive.Root
      open={delayedOpen}
      onOpenChange={handleOpenChange}
      {...props}
    >
      {children}
    </SelectPrimitive.Root>
  );
};

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  DelayedSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};

```

# src\components\ui\textarea.tsx

```tsx
// src/components/ui/textarea.tsx

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[180px] w-full resize-none  bg-background px-[14px] py-[18px] text-sm focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50  ring-secondary ring-offset-secondary focus-visible:ring-secondary",
          "bg-white rounded-none text-primary leading-[1.35em] placeholder-primary/40",
          "h-[60px] text-[14px]",
          "sm:h-[60px] sm:text-[14px]",
          "1920:h-[61px] 1920:text-[16px]",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };

```

# src\components\Wrapper.tsx

```tsx
import { ComponentProps } from "@/lib/types";
import React from "react";
import { twMerge } from "tailwind-merge";
export default function Wrapper({ children, ...props }: ComponentProps) {
  return (
    <div
      {...props}
      className={twMerge(
        `mx-[16px] w-full max-w-mobile sm:max-w-desktop 1920:max-w-desktop-lg`,
        props.className,
      )}
    >
      {children}
    </div>
  );
}

```

# src\i18n.config.ts

```ts
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
};

export const { Link, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });

```

# src\i18n.ts

```ts
import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "./i18n.config";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../locales/${locale}.json`)).default,
  };
});

```

# src\lib\api_services\about-apis.ts

```ts
import { API_PATHS } from "./api-paths";
import axiosInstance from "../axios";

export interface RawAboutData {
  id: number;
  ar_about: string;
  en_about: string;
  ar_message: string;
  en_message: string;
  ar_vision: string;
  en_vision: string;
  ar_goals: string;
  en_goals: string;
}

export interface AboutData {
  id: number;
  about: string;
  message: string;
  vision: string;
  goals: string;
}

export interface AboutResponse {
  about: RawAboutData[];
}

function fixFieldNames(item: RawAboutData, lang: string): AboutData {
  const isEnglish = lang === "en";
  return {
    id: item.id,
    about: isEnglish ? item.en_about : item.ar_about,
    message: isEnglish ? item.en_message : item.ar_message,
    vision: isEnglish ? item.en_vision : item.ar_vision,
    goals: isEnglish ? item.en_goals : item.ar_goals,
  };
}

export const fetchAboutData = async (lang: string): Promise<AboutData> => {
  try {
    const response = await axiosInstance.get<AboutResponse>(
      `${API_PATHS.ABOUT}?lang=${lang}`,
    );
    return fixFieldNames(response.data.about[0], lang);
  } catch (error) {
    console.error("Error fetching about data:", error);
    throw error;
  }
};

```

# src\lib\api_services\api-paths.ts

```ts
import { ValueOf } from "next/dist/shared/lib/constants";

export const API_PATHS = {
  LANDING_PAGE: "/landingpage",
  STATISTICS: "/statistics",
  GOALS: "/goals",
  COLLEGES: "/colleges",
  RANKINGS: "/classification",
  E_SERVICES: "/service",
  CONTACT: "/contacts",
  LATEST_NEWS: "/latestnews",
  ABOUT: "/about",
  COUNCIL: "/council",
  PRESIDENT_SPEECH: "/presidentspeech",
  ORGANIZATIONAL_STRUCTURE: "/crganizationalchart",
};

export const sharedPageNames = {
  infrastructure: "infrastructure",
  halls: "halls",
  laboratories: "laboratories",
  "green areas": "green areas",
  "university life": "university life",
  "promotions form": "promotions form",
  guides: "guides",
  "organizing promotion transactions": "organizing promotion transactions",
  scientificJournals: "scientificJournals",
  practicalAndIntellectualOutput: "practicalAndIntellectualOutput",
  "teachers research": "teachers research",
  "authored books": "authored books",
  "scientific articles": "scientific articles",
  "quality and performance": "quality and performance",
  scopus: "scopus",
  scientificResearcher: "scientificResearcher",
  scientificResearchPortal: "scientificResearchPortal",
  "scientific activities": "scientific activities",
  seminars: "seminars",
  workshops: "workshops",
  courses: "courses",
  forums: "forums",
  admissionAndRegistration: "admissionAndRegistration",
  registrationTerms: "registrationTerms",
  registrationMechanism: "registrationMechanism",
  tuitionFees: "tuitionFees",
  discountsAndScholarships: "discountsAndScholarships",
  patents: "patents",
  universityCalendar: "universityCalendar",
  examInstructions: "examInstructions",
  studentDisciplineInstructions: "studentDisciplineInstructions",
  studentGuidelines: "studentGuidelines",
  topStudents: "topStudents",
  examSchedules: "examSchedules",
  studentActivities: "studentActivities",
  studentTeams: "studentTeams",
  ashurbanipalLibrary: "ashurbanipalLibrary",
  continuingEducationCenter: "continuingEducationCenter",
  urukCulturalCenter: "urukCulturalCenter",
  fitnessCenter: "fitnessCenter",
  gilgameshTheater: "gilgameshTheater",
  celebrationHallsAridoun: "celebrationHallsAridoun",
  olympicSwimmingpool: "olympicSwimmingpool",
  fiveasidePitches: "fiveasidePitches",
  trainingHalls: "trainingHalls",
  dentalClinics: "dentalClinics",
  cloningLibrary: "cloningLibrary",
  cafeteria: "cafeteria",
  graduates: "graduates",
  rehabilitationAndEmployment: "rehabilitationAndEmployment",
  consultingClinics: "consultingClinics",
  electronicInquiriesMinistryHigherEducation:
    "electronicInquiriesMinistryHigherEducation",
  sustainability: "sustainability",
};

export type SharedPage = (typeof sharedPageNames)[keyof typeof sharedPageNames];

```

# src\lib\api_services\colleges-apis.ts

```ts
import { API_PATHS } from "./api-paths";
import {
  College,
  RawCollege,
  CollegesResponse,
  CollegeCard,
  RawCollegeCard,
  Department,
  RawDepartment,
} from "../types";
import axiosInstance from "../axios";

function fixFieldNames(item: RawCollege, lang: string): College {
  const isEnglish = lang === "en";

  const fixedCards: CollegeCard[] = item.cards.map((card: RawCollegeCard) => ({
    id: card.id,
    title: isEnglish ? card.en_title || card.ar_title : card.ar_title,
    name: isEnglish ? card.en_name || card.ar_name : card.ar_name,
    image: card.image,
    description: isEnglish
      ? card.en_description || card.ar_description
      : card.ar_description,
    visible: card.visible,
  }));

  const fixedDepartments: Department[] = item.departments.map(
    (dept: RawDepartment) => ({
      id: dept.id,
      colleges_id: dept.colleges_id,
      name: isEnglish ? dept.en_name || dept.ar_name : dept.ar_name,
      description: isEnglish
        ? dept.en_description || dept.ar_description
        : dept.ar_description,
      image: dept.image,
      m_name: isEnglish ? dept.en_m_name || dept.ar_m_name : dept.ar_m_name,
      m_description: isEnglish
        ? dept.en_m_description || dept.ar_m_description
        : dept.ar_m_description,
      college_name: isEnglish
        ? dept.college_en_name || dept.college_ar_name
        : dept.college_ar_name,
      m_image: dept.m_image,
      depcol: dept.depcol,
    }),
  );

  return {
    id: item.id,
    name: isEnglish ? item.en_name || item.ar_name : item.ar_name,
    description: isEnglish
      ? item.en_description || item.ar_description
      : item.ar_description,
    image: item.image,
    icon: item.icon,
    depcol: item.depcol,
    cards: fixedCards,
    departments: fixedDepartments,
    staff: item.staff,
    news: item.news,
    goals: item.goals,
    graduation_projects: item.graduation_projects,
  };
}

export const fetchColleges = async (lang: string): Promise<College[]> => {
  try {
    const response = await axiosInstance.get<CollegesResponse>(
      `${API_PATHS.COLLEGES}?lang=${lang}`,
    );
    return response.data.colleges.map((item) => fixFieldNames(item, lang));
  } catch (error) {
    console.error("Error fetching colleges:", error);
    throw error;
  }
};

```

# src\lib\api_services\common-apis.ts

```ts
import { API_PATHS } from "./api-paths";
import {
  EService,
  RawEService,
  EServicesResponse,
  Contact,
  RawContact,
  ContactsResponse,
} from "../types";
import axiosInstance from "../axios";

function fixEServiceFieldNames(item: RawEService, lang: string): EService {
  const isEnglish = lang === "en";
  return {
    id: item.id,
    title: isEnglish ? item.en_title || item.ar_title : item.ar_title,
    icon: item.icon,
    link: item.link,
  };
}

function fixContactFieldNames(item: RawContact, lang: string): Contact {
  const isEnglish = lang === "en";
  return {
    id: item.id,
    email: item.email,
    phone: item.phone,
    address: isEnglish ? item.en_address : item.ar_address,
    working_hours: isEnglish ? item.en_working_hours : item.ar_working_hours,
    instagram: item.instagram,
    facebook: item.facebook,
    linkedin: item.linkedin,
    youtube: item.youtube,
  };
}

export const fetchEServices = async (lang: string): Promise<EService[]> => {
  try {
    const response = await axiosInstance.get<EServicesResponse>(
      `${API_PATHS.E_SERVICES}?lang=${lang}`,
    );
    return response.data.map((item) => fixEServiceFieldNames(item, lang));
  } catch (error) {
    console.error("Error fetching e-services:", error);
    throw error;
  }
};

export const fetchContact = async (lang: string): Promise<Contact> => {
  try {
    const response = await axiosInstance.get<ContactsResponse>(
      `${API_PATHS.CONTACT}?lang=${lang}`,
    );
    return fixContactFieldNames(response.data.contacts[0], lang);
  } catch (error) {
    console.error("Error fetching contact information:", error);
    throw error;
  }
};

export const fetchLinks = async (): Promise<RawContact> => {
  try {
    const response = await axiosInstance.get<ContactsResponse>(
      API_PATHS.CONTACT,
    );
    return response.data.contacts[0];
  } catch (error) {
    console.error("Error fetching contact information:", error);
    throw error;
  }
};

```

# src\lib\api_services\council-apis.ts

```ts
import { API_PATHS } from "./api-paths";
import axiosInstance from "../axios";

export interface RawCouncilMember {
  id: number;
  ar_name: string;
  en_name?: string;
  ar_position: string;
  en_position?: string;
  image: string;
  ar_description: string;
  en_description?: string;
}

export interface CouncilMember {
  id: number;
  name: string;
  position: string;
  image: string;
  description: string;
}

export interface CouncilResponse {
  council: RawCouncilMember[];
}

function fixFieldNames(item: RawCouncilMember, lang: string): CouncilMember {
  const isEnglish = lang === "en";
  return {
    id: item.id,
    name: isEnglish ? item.en_name || item.ar_name : item.ar_name,
    position: isEnglish
      ? item.en_position || item.ar_position
      : item.ar_position,
    image: item.image,
    description: isEnglish
      ? item.en_description || item.ar_description
      : item.ar_description,
  };
}

export const fetchCouncilMembers = async (
  lang: string,
): Promise<CouncilMember[]> => {
  try {
    const response = await axiosInstance.get<CouncilResponse>(
      `${API_PATHS.COUNCIL}?lang=${lang}`,
    );
    return response.data.council.map((member) => fixFieldNames(member, lang));
  } catch (error) {
    console.error("Error fetching council members:", error);
    throw error;
  }
};

```

# src\lib\api_services\goals-apis.ts

```ts
import { API_PATHS } from "./api-paths";
import { GoalItem, RawGoalItem, GoalsResponse } from "../types";
import axiosInstance from "../axios";

function fixFieldNames(item: RawGoalItem, lang: string): GoalItem {
  const isEnglish = lang === "en";
  return {
    id: item.id,
    title: isEnglish ? item.en_text : item.ar_text,
    description: isEnglish ? item.en_description : item.ar_description,
    image: item.image,
  };
}

export const fetchGoals = async (lang: string): Promise<GoalItem[]> => {
  try {
    const response = await axiosInstance.get<GoalsResponse>(
      `${API_PATHS.GOALS}?lang=${lang}`,
    );
    return response.data.goals.map((item) => fixFieldNames(item, lang));
  } catch (error) {
    console.error("Error fetching goals:", error);
    throw error;
  }
};

```

# src\lib\api_services\homepage-apis.ts

```ts
import axiosInstance from "../axios";
import { HomepageSliderItemsResponse, SliderItem } from "../types";
import { API_PATHS } from "./api-paths";

interface RawHomepageSliderItem {
  id: number;
  l_artitle?: string;
  l_entitle?: string;
  image: string;
  ar_description?: string;
  en_description?: string;
}

function fixFieldNames(item: RawHomepageSliderItem, lang: string): SliderItem {
  const isEnglish = lang === "en";
  return {
    id: item.id,
    title: isEnglish ? item.l_entitle : item.l_artitle,
    image: item.image,
    description: isEnglish ? item.en_description : item.ar_description,
  } as SliderItem;
}

export const fetchSliderItems = async (lang: string): Promise<SliderItem[]> => {
  try {
    const response = await axiosInstance.get<HomepageSliderItemsResponse>(
      `${API_PATHS.LANDING_PAGE}?lang=${lang}`,
    );
    return response.data.landingpage.map((item) => fixFieldNames(item, lang));
  } catch (error) {
    console.error("Error fetching academic rankings:", error);
    throw error;
  }
};

```

# src\lib\api_services\news-apis.ts

```ts
import { API_PATHS } from "./api-paths";
import { NewsItem, NewsResponse } from "../types";
import axiosInstance from "../axios";

export const getLatestNews = async (page: number): Promise<NewsResponse> => {
  try {
    const response = await axiosInstance.get<NewsResponse>(
      `${API_PATHS.LATEST_NEWS}?page=${page}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching latest news:", error);
    throw error;
  }
};

```

# src\lib\api_services\organizational-structure-apis.ts

```ts
import { API_PATHS } from "./api-paths";
import axiosInstance from "../axios";

export interface OrganizationalStructure {
  id: number;
  file: string;
}

export interface OrganizationalStructureResponse
  extends Array<OrganizationalStructure> {}

export const fetchOrganizationalStructure =
  async (): Promise<OrganizationalStructure> => {
    try {
      const response = await axiosInstance.get<OrganizationalStructureResponse>(
        API_PATHS.ORGANIZATIONAL_STRUCTURE,
      );
      return response.data[0]; // Return the first element of the array
    } catch (error) {
      console.error("Error fetching organizational structure:", error);
      throw error;
    }
  };

```

# src\lib\api_services\president-speech-apis.ts

```ts
import { API_PATHS } from "./api-paths";
import axiosInstance from "../axios";

export interface RawPresidentSpeech {
  id: number;
  en_name: string;
  ar_name: string;
  en_position: string;
  ar_position: string;
  image: string;
  en_description: string;
  ar_description: string;
}

export interface PresidentSpeech {
  id: number;
  name: string;
  position: string;
  image: string;
  description: string;
}

export interface PresidentSpeechResponse {
  data: RawPresidentSpeech;
}

function fixFieldNames(
  item: RawPresidentSpeech,
  lang: string,
): PresidentSpeech {
  const isEnglish = lang === "en";
  return {
    id: item.id,
    name: isEnglish ? item.en_name : item.ar_name,
    position: isEnglish ? item.en_position : item.ar_position,
    image: item.image,
    description: isEnglish ? item.en_description : item.ar_description,
  };
}

export const fetchPresidentSpeech = async (
  lang: string,
): Promise<PresidentSpeech> => {
  try {
    const response = await axiosInstance.get<PresidentSpeechResponse>(
      `${API_PATHS.PRESIDENT_SPEECH}`,
    );
    return fixFieldNames(response.data.data, lang);
  } catch (error) {
    console.error("Error fetching president's speech:", error);
    throw error;
  }
};

```

# src\lib\api_services\rankings-apis.ts

```ts
import { API_PATHS } from "./api-paths";
import { Ranking, RawRanking, RankingsResponse } from "../types";
import axiosInstance from "../axios";

function fixFieldNames(item: RawRanking, lang: string): Ranking {
  const isEnglish = lang === "en";
  return {
    id: item.id,
    name: isEnglish ? item.en_name || item.ar_name : item.ar_name,
    link: item.link,
    image: item.image,
    num: item.num,
  };
}

export const fetchRankings = async (lang: string): Promise<Ranking[]> => {
  try {
    const response = await axiosInstance.get<RankingsResponse>(
      `${API_PATHS.RANKINGS}?lang=${lang}`,
    );
    return response.data.map((item) => fixFieldNames(item, lang));
  } catch (error) {
    console.error("Error fetching academic rankings:", error);
    throw error;
  }
};

```

# src\lib\api_services\shared-pages-apis.ts

```ts
import axiosInstance from "../axios";
import { SharedPageData, SharedPageResponse } from "../types";

export const fetchSharedPageData = async (
  category: string,
): Promise<SharedPageData | null> => {
  try {
    const response = await axiosInstance.get<SharedPageResponse>(
      `/staticpages?category=${category}`,
    );
    console.log("response.data", response.data);
    return response.data.data[0] || null;
  } catch (error) {
    console.error("Error fetching shared page data:", error);
    return null;
  }
};

```

# src\lib\api_services\statistics-apis.ts

```ts
import { API_PATHS } from "./api-paths";
import { StatisticsItem, StatisticsResponse } from "../types";
import axiosInstance from "../axios";

export const fetchStatistics = async (): Promise<StatisticsItem> => {
  try {
    const response = await axiosInstance.get<StatisticsResponse>(
      API_PATHS.STATISTICS,
    );
    return response.data.statistics[0];
  } catch (error) {
    console.error("Error fetching statistics:", error);
    throw error;
  }
};

```

# src\lib\axios.ts

```ts
// src/lib/axios.ts
import axios from "axios";
import useCommonStore from "./zustand/common";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 100000000,
  headers: {
    "Content-Type": "application/json",
    "User-Agent": "node-fetch",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ERR_NETWORK")
      useCommonStore.getState().showErrorDialog("خطأ في الاتصال");
    return Promise.reject(error);
  },
);

export default axiosInstance;

```

# src\lib\consts.ts

```ts



```

# src\lib\data.ts

```ts
import {
  NewsItem,
  TransNewsItem,
  Rating,
  TransRating,
  MenuItem,
} from "./types";

import * as paths from "./paths";
import { TranslationFunction } from "./utils";
import { sharedPageNames } from "./api_services/api-paths";

// export const newsItems: (transNews: TransNewsItem[]) => NewsItem[] = (
//   transNews: TransNewsItem[],
// ) => [
//   {
//     id: 1,
//     title:
//       "رئيس جامعة كلكامش واللجنة الوزارية يتفقدون سير امتحانات الطلبة لمختلف الكليات",
//     subtitle: "قبل 6 ساعات — اكاديمية الماجستير",
//     content:
//       "Our university is undergoing a significant expansion, with new facilities being added to accommodate growing student needs.",
//     image: "/images/home/News/1.jpg",
//   },
//   {
//     id: 2,
//     title: "رئيس جامعة كلكامش الاهلية يقوم بجولة تفقدية بكلية التمريض",
//     subtitle: "قبل 6 ساعات — اكاديمية الماجستير",
//     content:
//       "The Department of Science has been awarded a prestigious grant for cutting-edge research in renewable energy.",
//     image: "/images/home/News/2.jpg",
//   },
//   {
//     id: 3,
//     title: "رئيس جامعة كلكامش الاهلية يقوم بجولة تفقدية بكلية التمريض",
//     subtitle: "قبل 6 ساعات — اكاديمية الماجستير",
//     content:
//       "We are excited to announce a new exchange program with partner universities across five continents.",
//     image: "/images/home/News/3.jpg",
//   },
//   {
//     id: 4,
//     title: "رئيس جامعة كلكامش الاهلية يقوم بجولة تفقدية بكلية التمريض",
//     subtitle: "قبل 6 ساعات — اكاديمية الماجستير",
//     content:
//       "Recent graduate makes waves in tech industry with innovative startup.",
//     image: "/images/home/News/4.jpg",
//   },
// ];

const newImages = [
  "/images/hero/2.png",
  "/images/hero/1.png",
  "/images/hero/4.png",
  "/images/hero/4.png",
];

export const ratingsItems: (transRatings: TransRating[]) => Rating[] = (
  transRatings: TransRating[],
) =>
  transRatings.map((el, index) => ({
    ...el,
    id: index + 1,
  }));

export const navItems = (t: TranslationFunction): MenuItem[] => [
  { label: t("home"), path: paths.HOME_ROUTE },
  {
    label: t("aboutUniversity"),
    path: paths.ABOUT_UNIVERSITY_ROUTE,
    items: [
      {
        label: t("aboutUs"),
        path: paths.ABOUT_UNIVERSITY_ROUTE,
      },
      {
        label: t("universityCouncil"),
        path: paths.UNIVERSITY_COUNCIL_ROUTE,
        items: [
          {
            label: t("universityPresident"),
            path: paths.UNIVERSITY_COUNCIL_ROUTE,
          },
          {
            label: t("assistantPresidentScientific"),
            path: paths.UNIVERSITY_COUNCIL_ROUTE,
          },
          {
            label: t("assistantPresidentAdministrative"),
            path: paths.UNIVERSITY_COUNCIL_ROUTE,
          },
          {
            label: t("collegeDeans"),
            path: paths.UNIVERSITY_COUNCIL_ROUTE,
          },
        ],
      },
      {
        label: t("presidentSpeech"),
        path: paths.PRESIDENT_SPEECH_ROUTE,
      },
      {
        label: t("organizationalStructure"),
        path: paths.ORGANIZATIONAL_STRUCTURE_ROUTE,
      },
      {
        label: t("infrastructure"),
        path: paths.getSharedPageRoute(sharedPageNames.infrastructure),
        items: [
          {
            label: t("halls"),
            path: paths.getSharedPageRoute(sharedPageNames.halls),
          },
          {
            label: t("laboratories"),
            path: paths.getSharedPageRoute(sharedPageNames.laboratories),
          },
          {
            label: t("greenAreas"),
            path: paths.getSharedPageRoute(sharedPageNames["green areas"]),
          },
        ],
      },
      {
        label: t("universityLife"),
        path: paths.getSharedPageRoute(sharedPageNames["university life"]),
        items: [
          {
            label: t("photoLibrary"),
            path: paths.PHOTO_LIBRARY_ROUTE,
          },
          {
            label: t("videoLibrary"),
            path: paths.VIDEO_LIBRARY_ROUTE,
          },
        ],
      },
      {
        label: t("agreementsPartnerships"),
        path: paths.AGREEMENTS_PARTNERSHIPS_ROUTE,
      },
      {
        label: t("transparencyPrinciple"),
        path: paths.TRANSPARENCY_PRINCIPLE_ROUTE,
      },
      {
        label: t("universityStrategy"),
        path: paths.UNIVERSITY_STRATEGY_ROUTE,
      },
    ],
  },
  {
    label: t("colleges"),
    path: paths.COLLEGES_ROUTE,
    items: [
      { label: "College 1", path: paths.COLLEGE_ROUTE("1") },
      { label: "College 2", path: paths.COLLEGE_ROUTE("2") },
    ],
  },
  {
    label: t("academicAffairs"),
    path: paths.ACADEMIC_AFFAIRS_ROUTE,
    items: [
      {
        label: t("scientificPromotions"),
        path: paths.SCIENTIFIC_PROMOTIONS_ROUTE,
        items: [
          {
            label: t("guidelines"),
            path: paths.SCIENTIFIC_PROMOTIONS_GUIDELINES_ROUTE,
          },
          {
            label: t("forms"),
            path: paths.PROMOTION_FORMS_ROUTE,
          },
          {
            label: t("instructions"),
            path: paths.PROMOTION_INSTRUCTIONS_ROUTE,
          },
        ],
      },
      {
        label: t("scientificConferences"),
        path: paths.SCIENTIFIC_CONFERENCES_ROUTE,
      },
      {
        label: t("scientificJournals"),
        path: paths.SCIENTIFIC_JOURNALS_ROUTE,
      },
      {
        label: t("electronicScientificProduction"),
        path: paths.ELECTRONIC_SCIENTIFIC_PRODUCTION_ROUTE,
      },
      {
        label: t("facultyResearch"),
        path: paths.FACULTY_RESEARCH_ROUTE,
      },
      {
        label: t("approvedBooks"),
        path: paths.APPROVED_BOOKS_ROUTE,
      },
      {
        label: t("scientificMissions"),
        path: paths.SCIENTIFIC_MISSIONS_ROUTE,
      },
      {
        label: t("inventionPatents"),
        path: paths.INVENTION_PATENTS_ROUTE,
      },
      {
        label: t("qualityAssurance"),
        path: paths.QUALITY_ASSURANCE_ROUTE,
      },
      {
        label: t("universityRankings"),
        path: paths.UNIVERSITY_RANKINGS_ROUTE,
        items: [
          { label: t("scopus"), path: paths.SCOPUS_ROUTE },
          {
            label: t("googleScholar"),
            path: paths.GOOGLE_SCHOLAR_ROUTE,
          },
          {
            label: t("researchGate"),
            path: paths.RESEARCH_GATE_ROUTE,
          },
        ],
      },
      {
        label: t("scientificActivities"),
        path: paths.SCIENTIFIC_ACTIVITIES_ROUTE,
        items: [
          {
            label: t("seminars"),
            path: paths.SEMINARS_ROUTE,
          },
          {
            label: t("workshops"),
            path: paths.WORKSHOPS_ROUTE,
          },
          { label: t("courses"), path: paths.COURSES_ROUTE },
          { label: t("forums"), path: paths.FORUMS_ROUTE },
        ],
      },
    ],
  },
  {
    label: t("studentAffairs"),
    path: paths.STUDENT_AFFAIRS_ROUTE,
    items: [
      {
        label: t("admissionRegistration"),
        path: paths.ADMISSION_REGISTRATION_ROUTE,
        items: [
          {
            label: t("admissionConditions"),
            path: paths.ADMISSION_CONDITIONS_ROUTE,
          },
          {
            label: t("registrationMechanism"),
            path: paths.REGISTRATION_MECHANISM_ROUTE,
          },
          {
            label: t("studyFees"),
            path: paths.STUDY_FEES_ROUTE,
          },
        ],
      },
      {
        label: t("scholarshipsGrants"),
        path: paths.SCHOLARSHIPS_GRANTS_ROUTE,
      },
      {
        label: t("academicCalendar"),
        path: paths.ACADEMIC_CALENDAR_ROUTE,
      },
      {
        label: t("universityInstructions"),
        path: paths.UNIVERSITY_INSTRUCTIONS_ROUTE,
      },
      {
        label: t("studentGuide"),
        path: paths.STUDENT_GUIDE_ROUTE,
      },
      {
        label: t("outstandingStudents"),
        path: paths.OUTSTANDING_STUDENTS_ROUTE,
      },
      {
        label: t("studentActivities"),
        path: paths.STUDENT_ACTIVITIES_ROUTE,
      },
      {
        label: t("studentClubs"),
        path: paths.STUDENT_CLUBS_ROUTE,
      },
    ],
  },
  {
    label: t("serviceCenters"),
    path: paths.SERVICE_CENTERS_ROUTE,
    items: [
      {
        label: t("digitalLibrary"),
        path: paths.DIGITAL_LIBRARY_ROUTE,
      },
      {
        label: t("continuingEducationCenter"),
        path: paths.CONTINUING_EDUCATION_CENTER_ROUTE,
      },
      {
        label: t("careerGuidanceCenter"),
        path: paths.CAREER_GUIDANCE_CENTER_ROUTE,
      },
      {
        label: t("physicalFitnessCenter"),
        path: paths.PHYSICAL_FITNESS_CENTER_ROUTE,
      },
      {
        label: t("gilgameshTheater"),
        path: paths.GILGAMESH_THEATER_ROUTE,
      },
      {
        label: t("audiovisualHalls"),
        path: paths.AUDIOVISUAL_HALLS_ROUTE,
      },
      {
        label: t("sportsStadium"),
        path: paths.SPORTS_STADIUM_ROUTE,
      },
      {
        label: t("fiveSidePlaygrounds"),
        path: paths.FIVE_SIDE_PLAYGROUNDS_ROUTE,
      },
      {
        label: t("trainingHalls"),
        path: paths.TRAINING_HALLS_ROUTE,
      },
      {
        label: t("dentalClinics"),
        path: paths.DENTAL_CLINICS_ROUTE,
      },
      {
        label: t("centralLibrary"),
        path: paths.CENTRAL_LIBRARY_ROUTE,
      },
      { label: t("cafeteria"), path: paths.CAFETERIA_ROUTE },
    ],
  },
  {
    label: t("eServices"),
    path: paths.E_SERVICES_ROUTE,
    items: [
      {
        label: t("studentPortal"),
        path: paths.STUDENT_PORTAL_ROUTE,
      },
      {
        label: t("facultyPortal"),
        path: paths.FACULTY_PORTAL_ROUTE,
      },
      {
        label: t("massarPlatform"),
        path: paths.MASSAR_PLATFORM_ROUTE,
      },
      {
        label: t("universityDigitalRepository"),
        path: paths.UNIVERSITY_DIGITAL_REPOSITORY_ROUTE,
      },
      {
        label: t("electronicPayment"),
        path: paths.ELECTRONIC_PAYMENT_ROUTE,
      },
      {
        label: t("graduatesPortal"),
        path: paths.GRADUATES_PORTAL_ROUTE,
        items: [
          {
            label: t("graduationConfirmationRequest"),
            path: paths.GRADUATION_CONFIRMATION_REQUEST_ROUTE,
          },
          {
            label: t("graduationDocumentRequest"),
            path: paths.GRADUATION_DOCUMENT_REQUEST_ROUTE,
          },
          {
            label: t("transcriptRequest"),
            path: paths.TRANSCRIPT_REQUEST_ROUTE,
          },
        ],
      },
      {
        label: t("universityIdIssuance"),
        path: paths.UNIVERSITY_ID_ISSUANCE_ROUTE,
      },
      {
        label: t("electronicParticipationCertificates"),
        path: paths.ELECTRONIC_PARTICIPATION_CERTIFICATES_ROUTE,
      },
    ],
  },
];

export const topbarNavItems = (t: TranslationFunction): MenuItem[] => [
  {
    label: t("Header.navLinks.universityAndCommunity"),
    items: [
      {
        path: paths.getSharedPageRoute(sharedPageNames.graduates),
        label: t("SharedPages.graduates"),
      },
      {
        path: paths.getSharedPageRoute(
          sharedPageNames.rehabilitationAndEmployment,
        ),
        label: t("SharedPages.rehabilitationAndEmployment"),
      },
      {
        path: paths.getSharedPageRoute(sharedPageNames.consultingClinics),
        label: t("SharedPages.consultingClinics"),
      },
      {
        path: paths.getSharedPageRoute(
          sharedPageNames.electronicInquiriesMinistryHigherEducation,
        ),
        label: t("SharedPages.electronicInquiriesMinistryHigherEducation"),
      },
      {
        label: t("Header.navLinks.surveys"),
        items: [
          {
            path: paths.GRADUATE_SURVEY_ROUTE,
            label: t("Header.navLinks.graduateSurvey"),
          },
          {
            path: paths.EMPLOYER_SURVEY_ROUTE,
            label: t("Header.navLinks.employerSurvey"),
          },
        ],
      },
    ],
  },
  {
    path: paths.getSharedPageRoute(sharedPageNames.sustainability),
    label: t("SharedPages.sustainability"),
  },
  { path: paths.NEWS_ROUTE, label: t("Header.navLinks.news") },
  { path: paths.CONTACT_ROUTE, label: t("Header.navLinks.contact") },
];

```

# src\lib\paths.ts

```ts
import { SharedPage } from "./api_services/api-paths";

export const HOME_ROUTE = "/";
export const ABOUT_UNIVERSITY_ROUTE = "/about";
export const COLLEGES_ROUTE = "/colleges";
export const ACADEMIC_AFFAIRS_ROUTE = "/academic-affairs";
export const STUDENT_AFFAIRS_ROUTE = "/student-affairs";
export const SERVICE_CENTERS_ROUTE = "/service-centers";
export const E_SERVICES_ROUTE = "/e-services";
export const RELATED_LOCATIONS_ROUTE = "/related-locations";

// Colleges and Departments
export const COLLEGE_ROUTE = (id: string) => `${COLLEGES_ROUTE}/${id}`;
export const DEPARTMENT_ROUTE = (collegeId: string, departmentId: string) =>
  `${COLLEGES_ROUTE}/${collegeId}/departments/${departmentId}`;

// About University routes
export const UNIVERSITY_COUNCIL_ROUTE = `${ABOUT_UNIVERSITY_ROUTE}/university-council`;
export const UNIVERSITY_PRESIDENT_ROUTE = `${UNIVERSITY_COUNCIL_ROUTE}/university-president`;
export const ASSISTANT_PRESIDENT_SCIENTIFIC_AFFAIRS_ROUTE = `${UNIVERSITY_COUNCIL_ROUTE}/assistant-president-scientific-affairs`;
export const ASSISTANT_PRESIDENT_ADMINISTRATIVE_AFFAIRS_ROUTE = `${UNIVERSITY_COUNCIL_ROUTE}/assistant-president-administrative-affairs`;
export const COLLEGE_DEANS_ROUTE = `${UNIVERSITY_COUNCIL_ROUTE}/college-deans`;
export const PRESIDENT_SPEECH_ROUTE = `${ABOUT_UNIVERSITY_ROUTE}/president-speech`;
export const ORGANIZATIONAL_STRUCTURE_ROUTE = `${ABOUT_UNIVERSITY_ROUTE}/organizational-structure`;
export const INFRASTRUCTURE_ROUTE = `${ABOUT_UNIVERSITY_ROUTE}/infrastructure`;
export const HALLS_ROUTE = `${INFRASTRUCTURE_ROUTE}/halls`;
export const LABORATORIES_ROUTE = `${INFRASTRUCTURE_ROUTE}/laboratories`;
export const GREEN_AREAS_ROUTE = `${INFRASTRUCTURE_ROUTE}/green-areas`;
export const UNIVERSITY_LIFE_ROUTE = `${ABOUT_UNIVERSITY_ROUTE}/university-life`;
export const PHOTO_LIBRARY_ROUTE = `${UNIVERSITY_LIFE_ROUTE}/photo-library`;
export const VIDEO_LIBRARY_ROUTE = `${UNIVERSITY_LIFE_ROUTE}/video-library`;
export const AGREEMENTS_PARTNERSHIPS_ROUTE = `${ABOUT_UNIVERSITY_ROUTE}/agreements-partnerships`;
export const TRANSPARENCY_PRINCIPLE_ROUTE = `${ABOUT_UNIVERSITY_ROUTE}/transparency-principle`;
export const UNIVERSITY_STRATEGY_ROUTE = `${ABOUT_UNIVERSITY_ROUTE}/university-strategy`;

// Academic Affairs
export const SCIENTIFIC_PROMOTIONS_ROUTE = `${ACADEMIC_AFFAIRS_ROUTE}/scientific-promotions`;
export const SCIENTIFIC_PROMOTIONS_GUIDELINES_ROUTE = `${SCIENTIFIC_PROMOTIONS_ROUTE}/guidelines`;
export const PROMOTION_FORMS_ROUTE = `${SCIENTIFIC_PROMOTIONS_ROUTE}/forms`;
export const PROMOTION_INSTRUCTIONS_ROUTE = `${SCIENTIFIC_PROMOTIONS_ROUTE}/instructions`;
export const SCIENTIFIC_CONFERENCES_ROUTE = `${ACADEMIC_AFFAIRS_ROUTE}/scientific-conferences`;
export const SCIENTIFIC_JOURNALS_ROUTE = `${ACADEMIC_AFFAIRS_ROUTE}/scientific-journals`;
export const ELECTRONIC_SCIENTIFIC_PRODUCTION_ROUTE = `${ACADEMIC_AFFAIRS_ROUTE}/electronic-scientific-production`;
export const FACULTY_RESEARCH_ROUTE = `${ACADEMIC_AFFAIRS_ROUTE}/faculty-research`;
export const APPROVED_BOOKS_ROUTE = `${ACADEMIC_AFFAIRS_ROUTE}/approved-books`;
export const SCIENTIFIC_MISSIONS_ROUTE = `${ACADEMIC_AFFAIRS_ROUTE}/scientific-missions`;
export const INVENTION_PATENTS_ROUTE = `${ACADEMIC_AFFAIRS_ROUTE}/invention-patents`;
export const QUALITY_ASSURANCE_ROUTE = `${ACADEMIC_AFFAIRS_ROUTE}/quality-assurance`;
export const UNIVERSITY_RANKINGS_ROUTE = `${ACADEMIC_AFFAIRS_ROUTE}/university-rankings`;
export const SCOPUS_ROUTE = `${UNIVERSITY_RANKINGS_ROUTE}/scopus`;
export const GOOGLE_SCHOLAR_ROUTE = `${UNIVERSITY_RANKINGS_ROUTE}/google-scholar`;
export const RESEARCH_GATE_ROUTE = `${UNIVERSITY_RANKINGS_ROUTE}/research-gate`;
export const SCIENTIFIC_ACTIVITIES_ROUTE = `${ACADEMIC_AFFAIRS_ROUTE}/scientific-activities`;
export const SEMINARS_ROUTE = `${SCIENTIFIC_ACTIVITIES_ROUTE}/seminars`;
export const WORKSHOPS_ROUTE = `${SCIENTIFIC_ACTIVITIES_ROUTE}/workshops`;
export const COURSES_ROUTE = `${SCIENTIFIC_ACTIVITIES_ROUTE}/courses`;
export const FORUMS_ROUTE = `${SCIENTIFIC_ACTIVITIES_ROUTE}/forums`;

// Student Affairs
export const ADMISSION_REGISTRATION_ROUTE = `${STUDENT_AFFAIRS_ROUTE}/admission-registration`;
export const ADMISSION_CONDITIONS_ROUTE = `${ADMISSION_REGISTRATION_ROUTE}/admission-conditions`;
export const REGISTRATION_MECHANISM_ROUTE = `${ADMISSION_REGISTRATION_ROUTE}/registration-mechanism`;
export const STUDY_FEES_ROUTE = `${ADMISSION_REGISTRATION_ROUTE}/study-fees`;
export const SCHOLARSHIPS_GRANTS_ROUTE = `${STUDENT_AFFAIRS_ROUTE}/scholarships-grants`;
export const ACADEMIC_CALENDAR_ROUTE = `${STUDENT_AFFAIRS_ROUTE}/academic-calendar`;
export const UNIVERSITY_INSTRUCTIONS_ROUTE = `${STUDENT_AFFAIRS_ROUTE}/university-instructions`;
export const STUDENT_GUIDE_ROUTE = `${STUDENT_AFFAIRS_ROUTE}/student-guide`;
export const OUTSTANDING_STUDENTS_ROUTE = `${STUDENT_AFFAIRS_ROUTE}/outstanding-students`;
export const STUDENT_ACTIVITIES_ROUTE = `${STUDENT_AFFAIRS_ROUTE}/student-activities`;
export const STUDENT_CLUBS_ROUTE = `${STUDENT_AFFAIRS_ROUTE}/student-clubs`;

// Service Centers
export const DIGITAL_LIBRARY_ROUTE = `${SERVICE_CENTERS_ROUTE}/digital-library`;
export const CONTINUING_EDUCATION_CENTER_ROUTE = `${SERVICE_CENTERS_ROUTE}/continuing-education-center`;
export const CAREER_GUIDANCE_CENTER_ROUTE = `${SERVICE_CENTERS_ROUTE}/career-guidance-center`;
export const PHYSICAL_FITNESS_CENTER_ROUTE = `${SERVICE_CENTERS_ROUTE}/physical-fitness-center`;
export const GILGAMESH_THEATER_ROUTE = `${SERVICE_CENTERS_ROUTE}/gilgamesh-theater`;
export const AUDIOVISUAL_HALLS_ROUTE = `${SERVICE_CENTERS_ROUTE}/audiovisual-halls`;
export const SPORTS_STADIUM_ROUTE = `${SERVICE_CENTERS_ROUTE}/sports-stadium`;
export const FIVE_SIDE_PLAYGROUNDS_ROUTE = `${SERVICE_CENTERS_ROUTE}/five-side-playgrounds`;
export const TRAINING_HALLS_ROUTE = `${SERVICE_CENTERS_ROUTE}/training-halls`;
export const DENTAL_CLINICS_ROUTE = `${SERVICE_CENTERS_ROUTE}/dental-clinics`;
export const CENTRAL_LIBRARY_ROUTE = `${SERVICE_CENTERS_ROUTE}/central-library`;
export const CAFETERIA_ROUTE = `${SERVICE_CENTERS_ROUTE}/cafeteria`;

// E-Services
export const STUDENT_PORTAL_ROUTE = `${E_SERVICES_ROUTE}/student-portal`;
export const FACULTY_PORTAL_ROUTE = `${E_SERVICES_ROUTE}/faculty-portal`;
export const MASSAR_PLATFORM_ROUTE = `${E_SERVICES_ROUTE}/massar-platform`;
export const UNIVERSITY_DIGITAL_REPOSITORY_ROUTE = `${E_SERVICES_ROUTE}/university-digital-repository`;
export const ELECTRONIC_PAYMENT_ROUTE = `${E_SERVICES_ROUTE}/electronic-payment`;
export const GRADUATES_PORTAL_ROUTE = `${E_SERVICES_ROUTE}/graduates-portal`;
export const GRADUATION_CONFIRMATION_REQUEST_ROUTE = `${GRADUATES_PORTAL_ROUTE}/graduation-confirmation-request`;
export const GRADUATION_DOCUMENT_REQUEST_ROUTE = `${GRADUATES_PORTAL_ROUTE}/graduation-document-request`;
export const TRANSCRIPT_REQUEST_ROUTE = `${GRADUATES_PORTAL_ROUTE}/transcript-request`;
export const UNIVERSITY_ID_ISSUANCE_ROUTE = `${E_SERVICES_ROUTE}/university-id-issuance`;
export const ELECTRONIC_PARTICIPATION_CERTIFICATES_ROUTE = `${E_SERVICES_ROUTE}/electronic-participation-certificates`;

// shared pages
export const SHARED_PAGES_ROUTE = "/shared-pages";
export const getSharedPageRoute = (name: SharedPage) =>
  `${SHARED_PAGES_ROUTE}/${name}`;

// Topbar navigation
export const CONTACT_ROUTE = "/contact";
export const NEWS_ROUTE = "/news";
export const SUSTAINABILITY_ROUTE = "/sustainability";
export const UNIVERSITY_AND_COMMUNITY_ROUTE = "/university-and-community";

export const QUALIFICATION_EMPLOYMENT_ROUTE = `${UNIVERSITY_AND_COMMUNITY_ROUTE}/qualification-employment`;
export const CONSULTING_CLINIC_ROUTE = `${UNIVERSITY_AND_COMMUNITY_ROUTE}/consulting-clinic`;
export const MINISTRY_INQUIRIES_ROUTE = `${UNIVERSITY_AND_COMMUNITY_ROUTE}/ministry-inquiries`;
export const SURVEYS_ROUTE = `${UNIVERSITY_AND_COMMUNITY_ROUTE}/surveys`;
export const GRADUATE_SURVEY_ROUTE = `${SURVEYS_ROUTE}/graduate-survey`;
export const EMPLOYER_SURVEY_ROUTE = `${SURVEYS_ROUTE}/employer-survey`;

export const NOT_FOUND_ROUTE = "/not_found";

// // FirstSection path arrays
export const SLIDER_BG_ROUTES: string[] = [HOME_ROUTE];

export const IMAGE_BG_ROUTES: string[] = [
  RELATED_LOCATIONS_ROUTE,
  CONTACT_ROUTE,
  ABOUT_UNIVERSITY_ROUTE,
];

// export const TITLE_AND_IMAGE_ROUTE_PATTERNS: string[] = [
//   SUSTAINABILITY_ROUTE,
//   GRADUATES_ROUTE,
//   QUALIFICATION_EMPLOYMENT_ROUTE,
//   CONSULTING_CLINIC_ROUTE,
//   MINISTRY_INQUIRIES_ROUTE,
//   "/news/\\d+", // This will match /news/ followed by one or more digits
// ];

// export const ONLY_TITLE_ROUTE_PATTERNS: string[] = [UNIVERSITY_COUNCIL_ROUTE];

// // Titles path arrays
// export const CENTERIZED_TITLE_ROUTES: string[] = [
//   SUSTAINABILITY_ROUTE,
//   GRADUATES_ROUTE,
//   QUALIFICATION_EMPLOYMENT_ROUTE,
//   CONSULTING_CLINIC_ROUTE,
//   MINISTRY_INQUIRIES_ROUTE,
// ];

// export const TITLE_WITH_ACTIONS_ROUTES: string[] = [
//   "/news/\\d+", // This will match /news/ followed by one or more digits
//   UNIVERSITY_COUNCIL_ROUTE,
// ];

```

# src\lib\providers\counter-store-provider.tsx

```tsx
// src/providers/counter-store-provider.tsx
"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";
import {
  CounterStore,
  createCounterStore,
  initCounterStore,
} from "../zustand/newtitle-store";
import { NewsResponse } from "../types";

export type CounterStoreApi = ReturnType<typeof createCounterStore>;

export const CounterStoreContext = createContext<CounterStoreApi | undefined>(
  undefined,
);

export interface CounterStoreProviderProps {
  children: ReactNode;
  newsResponse: NewsResponse;
}

export const CounterStoreProvider = ({
  children,
  newsResponse,
}: CounterStoreProviderProps) => {
  const storeRef = useRef<CounterStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createCounterStore(initCounterStore(newsResponse));
  }

  return (
    <CounterStoreContext.Provider value={storeRef.current}>
      {children}
    </CounterStoreContext.Provider>
  );
};

export const useCounterStore = <T,>(
  selector: (store: CounterStore) => T,
): T => {
  const counterStoreContext = useContext(CounterStoreContext);

  if (!counterStoreContext) {
    throw new Error(`useCounterStore must be used within CounterStoreProvider`);
  }

  return useStore(counterStoreContext, selector);
};

```

# src\lib\providers\news-provider.tsx

```tsx
"use client";

import { type ReactNode, createContext, useContext } from "react";
import { useStore } from "zustand";
import { NewsResponse } from "../types";
import { createNewsStore, NewsState } from "../zustand/newsStore";

export const NewsStoreContext = createContext<ReturnType<
  typeof createNewsStore
> | null>(null);

export interface NewsStoreProviderProps {
  children: ReactNode;
  initialState: Partial<NewsState>;
}

export const NewsStoreProvider = ({
  children,
  initialState,
}: NewsStoreProviderProps) => {
  const store = createNewsStore(initialState);

  return (
    <NewsStoreContext.Provider value={store}>
      {children}
    </NewsStoreContext.Provider>
  );
};

export const useNewsStore = () => {
  const store = useContext(NewsStoreContext);
  if (!store) {
    throw new Error("useNewsStore must be used within NewsStoreProvider");
  }
  return useStore(store);
};

```

# src\lib\server-utils.ts

```ts
"use server";

import { getPlaiceholder } from "plaiceholder";

export async function getImagePlaceholder(src: string) {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer()),
  );

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
    data: { src, height, width },
  };
}

```

# src\lib\types.ts

```ts
import { sharedPageNames } from "./api_services/api-paths";

export type SliderElement = {
  image: string;
  title: string;
  subTitle: string;
};

export interface MenuItem {
  path?: string;
  label: string;
  items?: MenuItem[];
}

export type Statistic = {
  value: number;
  description: string;
};

export type Goal = { title: string; description: string };

export type ComponentProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLElement>
>;
// export type ComponentProps<T> = React.FC<
//   T & React.ReactHTMLElement<HTMLElement> & React.HTMLAttributes<HTMLElement>
// >;
// React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className, variant, size, asChild = false, ...props }, ref) =

export type CardData = {
  href: string;
  imgUrl: string;
  title: string;
};

export type TransNewsItem = {
  id: number;
  image: string;
  title: string;
  description: string;
};

export type Rating = {
  stars: number;
  job: string;
  name: string;
  comment: string;
};

export type TransRating = {
  stars: number;
  job: string;
  name: string;
  comment: string;
};

export type Location = {
  province: string;
  address: string;
  phoneNumbers: string[];
  googleMapsLink: string;
};

// // types.ts

export interface SliderItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

export interface HomepageSliderItemsResponse {
  landingpage: SliderItem[];
}

export interface StatisticsItem {
  id: number;
  students: number;
  administrative_staff: number;
  technical_and_professional_staff: number;
  faculty_members: number;
}

export interface StatisticsResponse {
  statistics: StatisticsItem[];
}

export interface RawGoalItem {
  id: number;
  ar_text: string;
  en_text: string;
  ar_description: string;
  en_description: string;
  image: string;
}

export interface GoalItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface GoalsResponse {
  goals: RawGoalItem[];
}

export interface RawCollegeCard {
  id: number;
  ar_title: string;
  en_title?: string;
  ar_name: string | null;
  en_name?: string | null;
  image: string | null;
  ar_description: string;
  en_description?: string;
  visible: number;
}

export interface CollegeCard {
  id: number;
  title: string;
  name: string | null;
  image: string | null;
  description: string;
  visible: number;
}

export interface RawDepartment {
  id: number;
  colleges_id: number;
  ar_name: string;
  en_name?: string;
  ar_description: string;
  en_description?: string;
  image: string;
  ar_m_name: string;
  en_m_name?: string;
  ar_m_description: string;
  en_m_description?: string;
  college_ar_name: string;
  college_en_name?: string;
  m_image: string;
  depcol: string;
}

export interface Department {
  id: number;
  colleges_id: number;
  name: string;
  description: string;
  image: string;
  m_name: string;
  m_description: string;
  college_name: string;
  m_image: string;
  depcol: string;
}

export interface RawCollege {
  id: number;
  ar_name: string;
  en_name?: string;
  ar_description: string;
  en_description?: string;
  image: string;
  icon: string;
  depcol: string;
  cards: RawCollegeCard[];
  departments: RawDepartment[];
  staff: any[];
  news: any[];
  goals: any[];
  graduation_projects: any[];
}

export interface College {
  id: number;
  name: string;
  description: string;
  image: string;
  icon: string;
  depcol: string;
  cards: CollegeCard[];
  departments: Department[];
  staff: any[];
  news: any[];
  goals: any[];
  graduation_projects: any[];
}

export interface CollegesResponse {
  colleges: RawCollege[];
}

export interface RawRanking {
  id: number;
  en_name: string;
  ar_name: string;
  link: string;
  image: string;
  num: string;
}

export interface Ranking {
  id: number;
  name: string;
  link: string;
  image: string;
  num: string;
}

export type RankingsResponse = RawRanking[];

export interface RawEService {
  id: number;
  en_title: string;
  ar_title: string;
  icon: string;
  link: string;
}

export interface EService {
  id: number;
  title: string;
  icon: string;
  link: string;
}

export type EServicesResponse = RawEService[];

export interface RawContact {
  id: number;
  email: string;
  phone: string;
  en_address: string;
  ar_address: string;
  en_working_hours: string;
  ar_working_hours: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  youtube: string;
}

export interface Contact {
  id: number;
  email: string;
  phone: string;
  address: string;
  working_hours: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  youtube: string;
}

export interface ContactsResponse {
  contacts: RawContact[];
}

export type UploadedImage = {
  id: number;
  static_pages_id: number;
  photo_library_id: number;
  image: string;
};

export interface SharedPageData {
  id: number;
  category: string;
  en_title: string;
  ar_title: string;
  en_description: string;
  ar_description: string;
  images: UploadedImage[];
}

export interface SharedPageResponse {
  data: SharedPageData[];
}

export type NewsItem = {
  id: number;
  category: string;
  en_title: string;
  ar_title: string;
  video: string;
  en_subtext: string;
  ar_subtext: string;
  en_description: string;
  ar_description: string;
  image: string;
  colleges_id: number;
  departments_id: number | null;
  created_at: string;
  updated_at: string;
  publish: number;
};

export type NewsResponse = {
  latestnews: {
    current_page: number;
    data: NewsItem[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
  };
  pages: number;
};

```

# src\lib\utils.ts

```ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { CONTACT_ROUTE, HOME_ROUTE, NEWS_ROUTE } from "./paths";
import { TextDirection } from "@/app/_hooks/useTextDirection";
import { IReactToPrintProps } from "react-to-print";
import { locales } from "@/i18n.config";
import { RefObject } from "react";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shareCurrentURL() {
  if (navigator.share) {
    navigator
      .share({
        title: "مشاركة الرابط",
        url: window.location.href,
      })
      .then(() => console.log("Share was successful."))
      .catch((error) => console.log("Sharing failed:", error));
  } else {
    console.log("Web Share API not supported in this browser");
    // You might want to provide a fallback sharing method here
  }
}

export const routes = [
  { key: "home", path: HOME_ROUTE },
  // { key: "about", path: ABOUT_ROUTE },
  // { key: "services", path: SERVICES_ROUTE },
  // { key: "branches", path: BRANCHES_ROUTE },
  // { key: "jobs", path: JOBS_ROUTE },
  { key: "contact", path: CONTACT_ROUTE },
  // { key: "joinUs", path: JOIN_US_ROUTE },
  { key: "news", path: NEWS_ROUTE, includeSubPaths: true },
];

export type TranslationFunction = (key: string) => string;

// export function getBgComponent(pathname: string): React.ComponentType | null {
//   console.log(pathname);
//   console.log(matchesPattern(pathname, TITLE_AND_IMAGE_ROUTE_PATTERNS));
//   if (matchesPattern(pathname, SLIDER_BG_ROUTES)) {
//     return SliderBg;
//   } else if (matchesPattern(pathname, IMAGE_BG_ROUTES)) {
//     return ImageBg;
//   } else if (matchesPattern(pathname, TITLE_AND_IMAGE_ROUTE_PATTERNS)) {
//     return TitleAndImage;
//   } else if (matchesPattern(pathname, ONLY_TITLE_ROUTE_PATTERNS)) {
//     return OnlyTitle;
//   }
//   return null;
// }

// export function getTitleComponent(
//   pathname: string,
// ): React.ComponentType | null {
//   console.log(matchesPattern(pathname, TITLE_WITH_ACTIONS_ROUTES));
//   if (matchesPattern(pathname, CENTERIZED_TITLE_ROUTES)) {
//     return CenterizedTitle;
//   } else if (matchesPattern(pathname, TITLE_WITH_ACTIONS_ROUTES)) {
//     return ActionsTitle;
//   }
//   return null;
// }

// function matchesPattern(pathname: string, patterns: string[]): boolean {
//   return patterns.some((pattern) => {
//     const regex = new RegExp(`^${pattern}$`);
//     return regex.test(pathname);
//   });
// }

export const scrollToElement = (
  container: RefObject<HTMLDivElement>,
  elementId: string,
  duration: number,
) => {
  const targetElement = document.getElementById(elementId);
  if (!targetElement) return;

  const targetPosition =
    targetElement.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    if (container.current) container.current.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  // Easing function
  const ease = (t: number, b: number, c: number, d: number) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  requestAnimationFrame(animation);
};

export function getPageTitle({
  t,
  pathname,
}: {
  t: TranslationFunction;
  pathname: string;
}): string {
  const key = pathname.split("/").pop() || "home";
  const keyCamelCase = key
    .split("-")
    .map((word, index) => (index === 0 ? word : capitalize(word)))
    .join("");
  return t(`Header.navLinks.${keyCamelCase}`);
}

const getPrintProps = ({
  dir,
  content,
}: {
  dir: TextDirection;
  content: IReactToPrintProps["content"];
}): IReactToPrintProps => ({
  content,
  pageStyle: `
    body {
      direction: ${dir};
    }
  `,
  bodyClass: "print-body",
  documentTitle: ".",
});

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const getImageUrl = (imagePath: string) =>
  process.env.NEXT_PUBLIC_ASSETS_URL + "/" + imagePath;

export function removeLocaleFromPathname(pathname: string): string {
  // Create a regex pattern that matches any of the locales at the start of the pathname
  const localePattern = `^/(${locales.join("|")})`;
  const regex = new RegExp(localePattern);

  // Remove the locale from the pathname if it exists
  return pathname.replace(regex, "");
}

export function getLocaleFromPathname(pathname: string): string | null {
  // Create a regex pattern that matches any of the locales at the start of the pathname
  const localePattern = `^/(${locales.join("|")})`;
  const regex = new RegExp(localePattern);

  // Extract the locale from the pathname if it exists
  const match = pathname.match(regex);

  // If a match is found, return the locale without the leading slash
  // Otherwise, return null
  return match ? match[1] : null;
}

export function isEmptyHtml(htmlString: string) {
  // Parse the HTML string
  const parsedHtml = htmlString.replace(/>\s+</g, "><").trim();

  // Remove all valid empty HTML tags
  const withoutEmptyTags = parsedHtml.replace(/<[^>]*><\/[^>]*>/g, "");

  // Check if anything remains
  return withoutEmptyTags.length === 0;
}

export { getPrintProps };

```

# src\lib\zustand\common.ts

```ts
import { create } from "zustand";
import { HOME_ROUTE } from "../paths";

interface CommonState {
  hasError: boolean;
  isDrawerVisible: boolean;
  isSuccessModalOpen: boolean;
  successMessage: string;
  toggleDrawer: (show: boolean) => void;
  errorMessage: string;
  showErrorDialog: (message: string) => void;
  hideErrorDialog: () => void;
  openSuccessModal: (message?: string) => void;
  closeSuccessModal: () => void;
}

const useCommonStore = create<CommonState>((set) => ({
  hasError: false,
  isDrawerVisible: false,
  isSuccessModalOpen: false,
  successMessage: "",
  toggleDrawer: (show) => {
    set({
      isDrawerVisible: show,
    });
  },
  errorMessage: "",
  showErrorDialog: (message) =>
    set((state) => ({
      hasError: true,
      errorMessage: message,
    })),
  hideErrorDialog: () => {
    console.log("setting has error to false");
    set((state) => ({ hasError: false, errorMessage: "" }));
  },
  openSuccessModal: (message = "") =>
    set({
      isSuccessModalOpen: true,
      successMessage: message,
    }),

  closeSuccessModal: () => {
    set({ isSuccessModalOpen: false, successMessage: "" });

    window.location.href = HOME_ROUTE;
  },
}));

export default useCommonStore;

```

# src\lib\zustand\newsStore.ts

```ts
import { create } from "zustand";
import { NewsItem, NewsResponse } from "@/lib/types";
import { getLatestNews } from "@/lib/api_services/news-apis";

export interface NewsState {
  news: NewsItem[];
  pagination: {
    currentPage: number;
    totalPages: number;
    perPage: number;
    total: number;
  };
  isLoading: boolean;
  fetchNews: () => Promise<void>;
  setPage: (page: number) => void;
}

export const createNewsStore = (initialState: Partial<NewsState> = {}) =>
  create<NewsState>((set, get) => ({
    news: [],
    pagination: {
      currentPage: 1,
      totalPages: 1,
      perPage: 15,
      total: 0,
    },
    isLoading: false,
    fetchNews: async () => {
      set({ isLoading: true });
      const { pagination } = get();
      try {
        const response: NewsResponse = await getLatestNews(
          pagination.currentPage,
        );
        set({
          news: response.latestnews.data,
          pagination: {
            currentPage: response.latestnews.current_page,
            totalPages: response.latestnews.last_page,
            perPage: response.latestnews.per_page,
            total: response.latestnews.total,
          },
          isLoading: false,
        });
      } catch (error) {
        console.error("Failed to fetch news:", error);
        set({ isLoading: false });
      }
    },
    setPage: (page) =>
      set((state) => ({
        pagination: { ...state.pagination, currentPage: page },
      })),
    ...initialState,
  }));

// export const useNewsStore =  create<NewsState>((set, get) => ({
//   test: "",
//   setTest: (value) => set({ test: value }),
//   news: [],
//   pagination: {
//     currentPage: 1,
//     totalPages: 1,
//     perPage: 15,
//     total: 0,
//   },
//   isLoading: false,
//   fetchNews: async () => {
//     set({ isLoading: true });
//     const { pagination } = get();
//     try {
//       const response: NewsResponse = await getLatestNews(
//         pagination.currentPage,
//       );
//       set({
//         news: response.latestnews.data,
//         pagination: {
//           currentPage: response.latestnews.current_page,
//           totalPages: response.latestnews.last_page,
//           perPage: response.latestnews.per_page,
//           total: response.latestnews.total,
//         },
//         isLoading: false,
//       });
//     } catch (error) {
//       console.error("Failed to fetch news:", error);
//       set({ isLoading: false });
//     }
//   },
//   setPage: (page) =>
//     set((state) => ({
//       pagination: { ...state.pagination, currentPage: page },
//     })),
//   initializeState: (initialData: NewsResponse) =>
//     set({
//       news: initialData.latestnews.data,
//       pagination: {
//         currentPage: initialData.latestnews.current_page,
//         totalPages: initialData.latestnews.last_page,
//         perPage: initialData.latestnews.per_page,
//         total: initialData.latestnews.total,
//       },
//     }),
// }));

```

# src\lib\zustand\newtitle-store.ts

```ts
// src/stores/counter-store.ts
import { createStore } from "zustand/vanilla";
import { NewsResponse } from "../types";

export type CounterState = {
  count: string;
  newsResponse?: NewsResponse;
};

export type CounterActions = {
  setCount: (value: string) => void;
};

export type CounterStore = CounterState & CounterActions;

export const initCounterStore = (newsResponse: NewsResponse): CounterState => {
  return { count: "initCounterStore", newsResponse };
};

export const defaultInitState: CounterState = {
  count: "init",
};

export const createCounterStore = (
  initState: CounterState = defaultInitState,
) => {
  return createStore<CounterStore>()((set) => ({
    ...initState,
    setCount: (value) => set((state) => ({ count: value })),
  }));
};

```

# src\middleware.ts

```ts
import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n.config";
import { NextRequest } from "next/server";
import { getLocaleFromPathname, removeLocaleFromPathname } from "./lib/utils";

// export default createMiddleware({
//   // A list of all locales that are supported
//   locales,

//   // Used when no locale matches
//   defaultLocale: "ar",

// });

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: "ar",
});

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const locale = getLocaleFromPathname(pathname);

  // Call the intlMiddleware
  const response = intlMiddleware(request);

  if (locale?.trim()) {
    // Add the custom header to the response
    response.headers.set("x-locale", locale);
  }

  // Add the custom header to the response
  response.headers.set("x-pathname", removeLocaleFromPathname(pathname));

  return response;
}

export const config = {
  matcher: [
    // Match all pathnames except for:
    // - API routes
    // - Next.js specific files
    // - Static files with common extensions
    "/((?!api|_next|.*\\..+).*)",
    // Match all root level pathnames without extensions (e.g., /about)
    "/",
  ],
};

```

# tailwind.config.ts

```ts
import type { Config } from "tailwindcss";
import plugin from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      rotate: {
        custom: "var(--rotation-amount)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          300: "#9350F2",
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          100: "#FFF7ED",
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      screens: {
        1920: "1920px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        appear: "appear 0.1s ease-out",
        vanish: "vanish 0.1s ease-in",
      },
      width: {
        mobile: "343px",
        desktop: "1200px",
        "desktop-lg": "1578px",
        "screen-pure": "var(--screen-width)",
      },
      maxWidth: {
        mobile: "343px",
        desktop: "1200px",
        "desktop-lg": "1578px",
        "screen-pure": "var(--screen-width)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        ".clickable-area": {
          "&::after": {
            content: '""',
            position: "absolute",
            inset: "0",
            margin: "-0.75rem", // equivalent to -m-3
          },
        },

        ".flippable": {
          '[dir="ltr"] &': {
            transform: "scaleX(-1)",
          },
        },

        ".center-vertically": {
          top: "50%",
          transform: "translateY(-50%)",
        },

        ".center-horizontally": {
          left: "50%",
          transform: "translateX(-50%)",
        },
      };

      addUtilities(newUtilities);
    },
  ],
} satisfies Config;

export default config;

```

# tsconfig.json

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

```

