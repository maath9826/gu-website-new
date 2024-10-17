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

export const navItems = (
  t: TranslationFunction,
  sharedPagesT: TranslationFunction,
): MenuItem[] => [
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
        // items: [
        //   {
        //     label: t("universityPresident"),
        //     path: paths.UNIVERSITY_COUNCIL_ROUTE,
        //   },
        //   {
        //     label: t("assistantPresidentScientific"),
        //     path: paths.UNIVERSITY_COUNCIL_ROUTE,
        //   },
        //   {
        //     label: t("assistantPresidentAdministrative"),
        //     path: paths.UNIVERSITY_COUNCIL_ROUTE,
        //   },
        //   {
        //     label: t("collegeDeans"),
        //     path: paths.UNIVERSITY_COUNCIL_ROUTE,
        //   },
        // ],
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
        label: sharedPagesT(sharedPageNames.infrastructure),
        path: paths.getSharedPageRoute(sharedPageNames.infrastructure),
        items: [
          {
            label: sharedPagesT(sharedPageNames.halls),
            path: paths.getSharedPageRoute(sharedPageNames.halls),
          },
          {
            label: sharedPagesT(sharedPageNames.laboratories),
            path: paths.getSharedPageRoute(sharedPageNames.laboratories),
          },
          {
            label: sharedPagesT(sharedPageNames["green areas"]),
            path: paths.getSharedPageRoute(sharedPageNames["green areas"]),
          },
        ],
      },
      {
        label: sharedPagesT(sharedPageNames["university life"]),
        path: paths.getSharedPageRoute(sharedPageNames["university life"]),
        // items: [
        //   {
        //     label: t("photoLibrary"),
        //     path: paths.PHOTO_LIBRARY_ROUTE,
        //   },
        //   {
        //     label: t("videoLibrary"),
        //     path: paths.VIDEO_LIBRARY_ROUTE,
        //   },
        // ],
      },
      {
        label: t("agreementsPartnerships"),
        path: paths.AGREEMENTS_PARTNERSHIPS_ROUTE,
      },
      // {
      //   label: t("transparencyPrinciple"),
      //   path: paths.TRANSPARENCY_PRINCIPLE_ROUTE,
      // },
      {
        label: sharedPagesT(sharedPageNames["GilgameshUniversityStrategy"]),
        path: paths.getSharedPageRoute(
          sharedPageNames["GilgameshUniversityStrategy"],
        ),
      },
    ],
  },
  // {
  //   label: t("colleges"),
  //   path: paths.COLLEGES_ROUTE,
  //   items: [
  //     { label: "College 1", path: paths.COLLEGE_ROUTE("1") },
  //     { label: "College 2", path: paths.COLLEGE_ROUTE("2") },
  //   ],
  // },
  {
    label: t("academicAffairs"),
    items: [
      {
        label: sharedPagesT(sharedPageNames["academic promotions"]),
        path: paths.getSharedPageRoute(sharedPageNames["academic promotions"]),
        items: [
          {
            label: sharedPagesT(sharedPageNames["guides"]),
            path: paths.getSharedPageRoute(sharedPageNames["guides"]),
          },
          {
            label: sharedPagesT(sharedPageNames["upgrade forms"]),
            path: paths.getSharedPageRoute(sharedPageNames["upgrade forms"]),
          },
          {
            label: sharedPagesT(sharedPageNames["organizing promotion"]),

            path: paths.getSharedPageRoute(
              sharedPageNames["organizing promotion"],
            ),
          },
        ],
      },
      // {
      //   label: t("scientificConferences"),
      //   path: paths.SCIENTIFIC_CONFERENCES_ROUTE,
      // },
      {
        label: sharedPagesT("scientificJournals"),
        path: paths.getSharedPageRoute(sharedPageNames["scientificJournals"]),
      },
      {
        label: sharedPagesT("practicalAndIntellectualOutput"),
        path: paths.getSharedPageRoute(
          sharedPageNames["practicalAndIntellectualOutput"],
        ),
        items: [
          {
            label: sharedPagesT(sharedPageNames["facultyResearch"]),
            path: paths.getSharedPageRoute(sharedPageNames["facultyResearch"]),
          },
          {
            label: sharedPagesT("authoredBooks"),
            path: paths.getSharedPageRoute(sharedPageNames["authoredBooks"]),
          },
          {
            label: sharedPagesT("scientificArticles"),
            path: paths.getSharedPageRoute(
              sharedPageNames["scientificArticles"],
            ),
          },
          {
            label: sharedPagesT("patents"),
            path: paths.getSharedPageRoute(sharedPageNames["patents"]),
          },
        ],
      },
      {
        label: sharedPagesT(sharedPageNames["quality and performance"]),
        path: paths.getSharedPageRoute(
          sharedPageNames["quality and performance"],
        ),
      },
      {
        label: sharedPagesT(sharedPageNames["universitydigitalidentity"]),
        path: paths.getSharedPageRoute(
          sharedPageNames["universitydigitalidentity"],
        ),
        items: [
          {
            label: sharedPagesT(sharedPageNames["scopus"]),
            path: paths.getSharedPageRoute(sharedPageNames["scopus"]),
          },
          {
            label: sharedPagesT(sharedPageNames["google scholar"]),
            path: paths.getSharedPageRoute(sharedPageNames["google scholar"]),
          },
          {
            label: sharedPagesT(sharedPageNames["scientificResearchPortal"]),
            path: paths.getSharedPageRoute(
              sharedPageNames["scientificResearchPortal"],
            ),
          },
        ],
      },
      {
        label: sharedPagesT(sharedPageNames["scientific activities"]),
        path: paths.getSharedPageRoute(
          sharedPageNames["scientific activities"],
        ),
        items: [
          {
            label: sharedPagesT(sharedPageNames["seminars"]),
            path: paths.getSharedPageRoute(sharedPageNames["seminars"]),
          },
          {
            label: sharedPagesT(sharedPageNames["workshops"]),
            path: paths.getSharedPageRoute(sharedPageNames["workshops"]),
          },
          {
            label: sharedPagesT(sharedPageNames["courses"]),
            path: paths.getSharedPageRoute(sharedPageNames["courses"]),
          },
          {
            label: sharedPagesT(sharedPageNames["forums"]),
            path: paths.getSharedPageRoute(sharedPageNames["forums"]),
          },
        ],
      },
    ],
  },
  {
    label: t("studentAffairs"),
    items: [
      {
        label: sharedPagesT(sharedPageNames["admissionAndRegistration"]),
        path: paths.getSharedPageRoute(
          sharedPageNames["admissionAndRegistration"],
        ),
        items: [
          {
            label: sharedPagesT(sharedPageNames["registrationTerms"]),
            path: paths.getSharedPageRoute(
              sharedPageNames["registrationTerms"],
            ),
          },
          {
            label: sharedPagesT(sharedPageNames["registrationMechanism"]),
            path: paths.getSharedPageRoute(
              sharedPageNames["registrationMechanism"],
            ),
          },
          {
            label: sharedPagesT(sharedPageNames["tuitionFees"]),
            path: paths.getSharedPageRoute(sharedPageNames["tuitionFees"]),
          },
          {
            label: sharedPagesT(sharedPageNames["discountsAndScholarships"]),
            path: paths.getSharedPageRoute(
              sharedPageNames["discountsAndScholarships"],
            ),
          },
        ],
      },

      // {
      //   label: t("academicCalendar"),
      //   path: paths.ACADEMIC_CALENDAR_ROUTE,
      // },
      {
        label: sharedPagesT(sharedPageNames["examInstructions"]),
        path: paths.getSharedPageRoute(sharedPageNames["examInstructions"]),
      },
      {
        label: sharedPagesT(sharedPageNames["studentDisciplineInstructions"]),
        path: paths.getSharedPageRoute(
          sharedPageNames["studentDisciplineInstructions"],
        ),
      },
      {
        label: sharedPagesT(sharedPageNames["studentGuidelines"]),
        path: paths.getSharedPageRoute(sharedPageNames["studentGuidelines"]),
      },
      {
        label: sharedPagesT(sharedPageNames["topStudents"]),
        path: paths.getSharedPageRoute(sharedPageNames["topStudents"]),
      },
      {
        label: sharedPagesT(sharedPageNames["examSchedules"]),
        path: paths.getSharedPageRoute(sharedPageNames["examSchedules"]),
      },
      {
        label: t("studentsLife"),
        items: [
          {
            label: sharedPagesT(sharedPageNames["studentActivities"]),
            path: paths.getSharedPageRoute(
              sharedPageNames["studentActivities"],
            ),
          },
          {
            label: sharedPagesT(sharedPageNames["studentTeams"]),
            path: paths.getSharedPageRoute(sharedPageNames["studentTeams"]),
          },
        ],
      },
    ],
  },
  {
    label: t("serviceCenters"),

    items: [
      {
        label: sharedPagesT(sharedPageNames["ashurbanipalLibrary"]),
        path: paths.getSharedPageRoute(sharedPageNames["ashurbanipalLibrary"]),
      },
      {
        label: sharedPagesT(sharedPageNames["continuingEducationCenter"]),
        path: paths.getSharedPageRoute(
          sharedPageNames["continuingEducationCenter"],
        ),
      },
      {
        label: sharedPagesT(sharedPageNames["urukCulturalCenter"]),
        path: paths.getSharedPageRoute(sharedPageNames["urukCulturalCenter"]),
      },
      {
        label: sharedPagesT(sharedPageNames["fitnessCenter"]),
        path: paths.getSharedPageRoute(sharedPageNames["fitnessCenter"]),
      },
      {
        label: sharedPagesT(sharedPageNames["gilgameshTheater"]),
        path: paths.getSharedPageRoute(sharedPageNames["gilgameshTheater"]),
      },
      {
        label: sharedPagesT(sharedPageNames["celebrationHallsAridoun"]),
        path: paths.getSharedPageRoute(
          sharedPageNames["celebrationHallsAridoun"],
        ),
      },
      {
        label: sharedPagesT(sharedPageNames["olympicSwimmingpool"]),
        path: paths.getSharedPageRoute(sharedPageNames["olympicSwimmingpool"]),
      },
      {
        label: sharedPagesT(sharedPageNames["fiveasidePitches"]),
        path: paths.getSharedPageRoute(sharedPageNames["fiveasidePitches"]),
      },
      {
        label: sharedPagesT(sharedPageNames["trainingHalls"]),
        path: paths.getSharedPageRoute(sharedPageNames["trainingHalls"]),
      },
      {
        label: sharedPagesT(sharedPageNames["dentalClinics"]),
        path: paths.getSharedPageRoute(sharedPageNames["dentalClinics"]),
      },
      {
        label: sharedPagesT(sharedPageNames["cloningLibrary"]),
        path: paths.getSharedPageRoute(sharedPageNames["cloningLibrary"]),
      },
      {
        label: sharedPagesT(sharedPageNames["cafeteria"]),
        path: paths.getSharedPageRoute(sharedPageNames["cafeteria"]),
      },
    ],
  },
  // {
  //   label: t("eServices"),
  //   path: paths.E_SERVICES_ROUTE,
  //   items: [
  //     {
  //       label: t("studentPortal"),
  //       path: paths.STUDENT_PORTAL_ROUTE,
  //     },
  //     {
  //       label: t("facultyPortal"),
  //       path: paths.FACULTY_PORTAL_ROUTE,
  //     },
  //     {
  //       label: t("massarPlatform"),
  //       path: paths.MASSAR_PLATFORM_ROUTE,
  //     },
  //     {
  //       label: t("universityDigitalRepository"),
  //       path: paths.UNIVERSITY_DIGITAL_REPOSITORY_ROUTE,
  //     },
  //     {
  //       label: t("electronicPayment"),
  //       path: paths.ELECTRONIC_PAYMENT_ROUTE,
  //     },
  //     {
  //       label: t("graduatesPortal"),
  //       path: paths.GRADUATES_PORTAL_ROUTE,
  //       items: [
  //         {
  //           label: t("graduationConfirmationRequest"),
  //           path: paths.GRADUATION_CONFIRMATION_REQUEST_ROUTE,
  //         },
  //         {
  //           label: t("graduationDocumentRequest"),
  //           path: paths.GRADUATION_DOCUMENT_REQUEST_ROUTE,
  //         },
  //         {
  //           label: t("transcriptRequest"),
  //           path: paths.TRANSCRIPT_REQUEST_ROUTE,
  //         },
  //       ],
  //     },
  //     {
  //       label: t("universityIdIssuance"),
  //       path: paths.UNIVERSITY_ID_ISSUANCE_ROUTE,
  //     },
  //     {
  //       label: t("electronicParticipationCertificates"),
  //       path: paths.ELECTRONIC_PARTICIPATION_CERTIFICATES_ROUTE,
  //     },
  //   ],
  // },
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
