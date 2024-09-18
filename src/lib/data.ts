import { NewsItem, TransNewsItem, Rating, TransRating } from "./types";

import * as paths from "./paths";

export const newsItems: (transNews: TransNewsItem[]) => NewsItem[] = (
  transNews: TransNewsItem[],
) => [
  {
    id: 1,
    title:
      "رئيس جامعة كلكامش واللجنة الوزارية يتفقدون سير امتحانات الطلبة لمختلف الكليات",
    subtitle: "قبل 6 ساعات — اكاديمية الماجستير",
    content:
      "Our university is undergoing a significant expansion, with new facilities being added to accommodate growing student needs.",
    image: "/images/home/News/1.jpg",
  },
  {
    id: 2,
    title: "رئيس جامعة كلكامش الاهلية يقوم بجولة تفقدية بكلية التمريض",
    subtitle: "قبل 6 ساعات — اكاديمية الماجستير",
    content:
      "The Department of Science has been awarded a prestigious grant for cutting-edge research in renewable energy.",
    image: "/images/home/News/2.jpg",
  },
  {
    id: 3,
    title: "رئيس جامعة كلكامش الاهلية يقوم بجولة تفقدية بكلية التمريض",
    subtitle: "قبل 6 ساعات — اكاديمية الماجستير",
    content:
      "We are excited to announce a new exchange program with partner universities across five continents.",
    image: "/images/home/News/3.jpg",
  },
  {
    id: 4,
    title: "رئيس جامعة كلكامش الاهلية يقوم بجولة تفقدية بكلية التمريض",
    subtitle: "قبل 6 ساعات — اكاديمية الماجستير",
    content:
      "Recent graduate makes waves in tech industry with innovative startup.",
    image: "/images/home/News/4.jpg",
  },
];

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

export const navItems = (t: (key: string) => string) => [
  { title: t("home"), path: paths.HOME_ROUTE },
  {
    title: t("aboutUniversity.aboutUniversity"),
    path: paths.ABOUT_UNIVERSITY_ROUTE,
    items: [
      {
        title: t("aboutUniversity.aboutUs"),
        path: paths.ABOUT_UNIVERSITY_ROUTE,
      },
      {
        title: t("aboutUniversity.universityCouncil"),
        path: paths.UNIVERSITY_COUNCIL_ROUTE,
        items: [
          {
            title: t("aboutUniversity.universityPresident"),
            path: paths.UNIVERSITY_PRESIDENT_ROUTE,
          },
          {
            title: t("aboutUniversity.assistantPresidentScientific"),
            path: paths.ASSISTANT_PRESIDENT_SCIENTIFIC_AFFAIRS_ROUTE,
          },
          {
            title: t("aboutUniversity.assistantPresidentAdministrative"),
            path: paths.ASSISTANT_PRESIDENT_ADMINISTRATIVE_AFFAIRS_ROUTE,
          },
          {
            title: t("aboutUniversity.collegeDeans"),
            path: paths.COLLEGE_DEANS_ROUTE,
          },
        ],
      },
      {
        title: t("aboutUniversity.presidentSpeech"),
        path: paths.PRESIDENT_SPEECH_ROUTE,
      },
      {
        title: t("aboutUniversity.organizationalStructure"),
        path: paths.ORGANIZATIONAL_STRUCTURE_ROUTE,
      },
      {
        title: t("aboutUniversity.infrastructure"),
        path: paths.INFRASTRUCTURE_ROUTE,
        items: [
          { title: t("aboutUniversity.halls"), path: paths.HALLS_ROUTE },
          {
            title: t("aboutUniversity.laboratories"),
            path: paths.LABORATORIES_ROUTE,
          },
          {
            title: t("aboutUniversity.greenAreas"),
            path: paths.GREEN_AREAS_ROUTE,
          },
        ],
      },
      {
        title: t("aboutUniversity.universityLife"),
        path: paths.UNIVERSITY_LIFE_ROUTE,
        items: [
          {
            title: t("aboutUniversity.photoLibrary"),
            path: paths.PHOTO_LIBRARY_ROUTE,
          },
          {
            title: t("aboutUniversity.videoLibrary"),
            path: paths.VIDEO_LIBRARY_ROUTE,
          },
        ],
      },
      {
        title: t("aboutUniversity.agreementsPartnerships"),
        path: paths.AGREEMENTS_PARTNERSHIPS_ROUTE,
      },
      {
        title: t("aboutUniversity.transparencyPrinciple"),
        path: paths.TRANSPARENCY_PRINCIPLE_ROUTE,
      },
      {
        title: t("aboutUniversity.universityStrategy"),
        path: paths.UNIVERSITY_STRATEGY_ROUTE,
      },
    ],
  },
  {
    title: t("colleges"),
    path: paths.COLLEGES_ROUTE,
    items: [
      { title: "College 1", path: paths.COLLEGE_ROUTE("1") },
      { title: "College 2", path: paths.COLLEGE_ROUTE("2") },
    ],
  },
  {
    title: t("academicAffairs.academicAffairs"),
    path: paths.ACADEMIC_AFFAIRS_ROUTE,
    items: [
      {
        title: t("academicAffairs.scientificPromotions"),
        path: paths.SCIENTIFIC_PROMOTIONS_ROUTE,
        items: [
          {
            title: t("academicAffairs.guidelines"),
            path: paths.SCIENTIFIC_PROMOTIONS_GUIDELINES_ROUTE,
          },
          {
            title: t("academicAffairs.forms"),
            path: paths.PROMOTION_FORMS_ROUTE,
          },
          {
            title: t("academicAffairs.instructions"),
            path: paths.PROMOTION_INSTRUCTIONS_ROUTE,
          },
        ],
      },
      {
        title: t("academicAffairs.scientificConferences"),
        path: paths.SCIENTIFIC_CONFERENCES_ROUTE,
      },
      {
        title: t("academicAffairs.scientificJournals"),
        path: paths.SCIENTIFIC_JOURNALS_ROUTE,
      },
      {
        title: t("academicAffairs.electronicScientificProduction"),
        path: paths.ELECTRONIC_SCIENTIFIC_PRODUCTION_ROUTE,
      },
      {
        title: t("academicAffairs.facultyResearch"),
        path: paths.FACULTY_RESEARCH_ROUTE,
      },
      {
        title: t("academicAffairs.approvedBooks"),
        path: paths.APPROVED_BOOKS_ROUTE,
      },
      {
        title: t("academicAffairs.scientificMissions"),
        path: paths.SCIENTIFIC_MISSIONS_ROUTE,
      },
      {
        title: t("academicAffairs.inventionPatents"),
        path: paths.INVENTION_PATENTS_ROUTE,
      },
      {
        title: t("academicAffairs.qualityAssurance"),
        path: paths.QUALITY_ASSURANCE_ROUTE,
      },
      {
        title: t("academicAffairs.universityRankings"),
        path: paths.UNIVERSITY_RANKINGS_ROUTE,
        items: [
          { title: t("academicAffairs.scopus"), path: paths.SCOPUS_ROUTE },
          {
            title: t("academicAffairs.googleScholar"),
            path: paths.GOOGLE_SCHOLAR_ROUTE,
          },
          {
            title: t("academicAffairs.researchGate"),
            path: paths.RESEARCH_GATE_ROUTE,
          },
        ],
      },
      {
        title: t("academicAffairs.scientificActivities"),
        path: paths.SCIENTIFIC_ACTIVITIES_ROUTE,
        items: [
          {
            title: t("academicAffairs.seminars"),
            path: paths.SEMINARS_ROUTE,
          },
          {
            title: t("academicAffairs.workshops"),
            path: paths.WORKSHOPS_ROUTE,
          },
          { title: t("academicAffairs.courses"), path: paths.COURSES_ROUTE },
          { title: t("academicAffairs.forums"), path: paths.FORUMS_ROUTE },
        ],
      },
    ],
  },
  {
    title: t("studentAffairs.studentAffairs"),
    path: paths.STUDENT_AFFAIRS_ROUTE,
    items: [
      {
        title: t("studentAffairs.admissionRegistration"),
        path: paths.ADMISSION_REGISTRATION_ROUTE,
        items: [
          {
            title: t("studentAffairs.admissionConditions"),
            path: paths.ADMISSION_CONDITIONS_ROUTE,
          },
          {
            title: t("studentAffairs.registrationMechanism"),
            path: paths.REGISTRATION_MECHANISM_ROUTE,
          },
          {
            title: t("studentAffairs.studyFees"),
            path: paths.STUDY_FEES_ROUTE,
          },
        ],
      },
      {
        title: t("studentAffairs.scholarshipsGrants"),
        path: paths.SCHOLARSHIPS_GRANTS_ROUTE,
      },
      {
        title: t("studentAffairs.academicCalendar"),
        path: paths.ACADEMIC_CALENDAR_ROUTE,
      },
      {
        title: t("studentAffairs.universityInstructions"),
        path: paths.UNIVERSITY_INSTRUCTIONS_ROUTE,
      },
      {
        title: t("studentAffairs.studentGuide"),
        path: paths.STUDENT_GUIDE_ROUTE,
      },
      {
        title: t("studentAffairs.outstandingStudents"),
        path: paths.OUTSTANDING_STUDENTS_ROUTE,
      },
      {
        title: t("studentAffairs.studentActivities"),
        path: paths.STUDENT_ACTIVITIES_ROUTE,
      },
      {
        title: t("studentAffairs.studentClubs"),
        path: paths.STUDENT_CLUBS_ROUTE,
      },
    ],
  },
  {
    title: t("serviceCenters.serviceCenters"),
    path: paths.SERVICE_CENTERS_ROUTE,
    items: [
      {
        title: t("serviceCenters.digitalLibrary"),
        path: paths.DIGITAL_LIBRARY_ROUTE,
      },
      {
        title: t("serviceCenters.continuingEducationCenter"),
        path: paths.CONTINUING_EDUCATION_CENTER_ROUTE,
      },
      {
        title: t("serviceCenters.careerGuidanceCenter"),
        path: paths.CAREER_GUIDANCE_CENTER_ROUTE,
      },
      {
        title: t("serviceCenters.physicalFitnessCenter"),
        path: paths.PHYSICAL_FITNESS_CENTER_ROUTE,
      },
      {
        title: t("serviceCenters.gilgameshTheater"),
        path: paths.GILGAMESH_THEATER_ROUTE,
      },
      {
        title: t("serviceCenters.audiovisualHalls"),
        path: paths.AUDIOVISUAL_HALLS_ROUTE,
      },
      {
        title: t("serviceCenters.sportsStadium"),
        path: paths.SPORTS_STADIUM_ROUTE,
      },
      {
        title: t("serviceCenters.fiveSidePlaygrounds"),
        path: paths.FIVE_SIDE_PLAYGROUNDS_ROUTE,
      },
      {
        title: t("serviceCenters.trainingHalls"),
        path: paths.TRAINING_HALLS_ROUTE,
      },
      {
        title: t("serviceCenters.dentalClinics"),
        path: paths.DENTAL_CLINICS_ROUTE,
      },
      {
        title: t("serviceCenters.centralLibrary"),
        path: paths.CENTRAL_LIBRARY_ROUTE,
      },
      { title: t("serviceCenters.cafeteria"), path: paths.CAFETERIA_ROUTE },
    ],
  },
  {
    title: t("eServices.eServices"),
    path: paths.E_SERVICES_ROUTE,
    items: [
      {
        title: t("eServices.studentPortal"),
        path: paths.STUDENT_PORTAL_ROUTE,
      },
      {
        title: t("eServices.facultyPortal"),
        path: paths.FACULTY_PORTAL_ROUTE,
      },
      {
        title: t("eServices.massarPlatform"),
        path: paths.MASSAR_PLATFORM_ROUTE,
      },
      {
        title: t("eServices.universityDigitalRepository"),
        path: paths.UNIVERSITY_DIGITAL_REPOSITORY_ROUTE,
      },
      {
        title: t("eServices.electronicPayment"),
        path: paths.ELECTRONIC_PAYMENT_ROUTE,
      },
      {
        title: t("eServices.graduatesPortal"),
        path: paths.GRADUATES_PORTAL_ROUTE,
        items: [
          {
            title: t("eServices.graduationConfirmationRequest"),
            path: paths.GRADUATION_CONFIRMATION_REQUEST_ROUTE,
          },
          {
            title: t("eServices.graduationDocumentRequest"),
            path: paths.GRADUATION_DOCUMENT_REQUEST_ROUTE,
          },
          {
            title: t("eServices.transcriptRequest"),
            path: paths.TRANSCRIPT_REQUEST_ROUTE,
          },
        ],
      },
      {
        title: t("eServices.universityIdIssuance"),
        path: paths.UNIVERSITY_ID_ISSUANCE_ROUTE,
      },
      {
        title: t("eServices.electronicParticipationCertificates"),
        path: paths.ELECTRONIC_PARTICIPATION_CERTIFICATES_ROUTE,
      },
    ],
  },
];
