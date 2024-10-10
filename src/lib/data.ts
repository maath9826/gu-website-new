import {
  NewsItem,
  TransNewsItem,
  Rating,
  TransRating,
  MenuItem,
} from "./types";

import * as paths from "./paths";
import { TranslationFunction } from "./utils";

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
            path: paths.UNIVERSITY_PRESIDENT_ROUTE,
          },
          {
            label: t("assistantPresidentScientific"),
            path: paths.ASSISTANT_PRESIDENT_SCIENTIFIC_AFFAIRS_ROUTE,
          },
          {
            label: t("assistantPresidentAdministrative"),
            path: paths.ASSISTANT_PRESIDENT_ADMINISTRATIVE_AFFAIRS_ROUTE,
          },
          {
            label: t("collegeDeans"),
            path: paths.COLLEGE_DEANS_ROUTE,
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
        path: paths.INFRASTRUCTURE_ROUTE,
        items: [
          { label: t("halls"), path: paths.HALLS_ROUTE },
          {
            label: t("laboratories"),
            path: paths.LABORATORIES_ROUTE,
          },
          {
            label: t("greenAreas"),
            path: paths.GREEN_AREAS_ROUTE,
          },
        ],
      },
      {
        label: t("universityLife"),
        path: paths.UNIVERSITY_LIFE_ROUTE,
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
        path: paths.getSharedPageRoute("graduates"),
        label: t("Header.navLinks.graduates"),
      },
      {
        path: paths.QUALIFICATION_EMPLOYMENT_ROUTE,
        label: t("Header.navLinks.qualificationEmployment"),
      },
      {
        path: paths.CONSULTING_CLINIC_ROUTE,
        label: t("Header.navLinks.consultingClinic"),
      },
      {
        path: paths.MINISTRY_INQUIRIES_ROUTE,
        label: t("Header.navLinks.ministryInquiries"),
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
    path: paths.SUSTAINABILITY_ROUTE,
    label: t("Header.navLinks.sustainability"),
  },
  { path: paths.NEWS_ROUTE, label: t("Header.navLinks.news") },
  { path: paths.CONTACT_ROUTE, label: t("Header.navLinks.contact") },
];
