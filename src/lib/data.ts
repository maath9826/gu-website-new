import {
  NewsItem,
  TransNewsItem,
  Rating,
  TransRating,
  MenuItem,
} from "./types";

import * as paths from "./paths";
import { TranslationFunction } from "./utils";

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

export const navItems = (t: TranslationFunction): MenuItem[] => [
  { label: t("home"), path: paths.HOME_ROUTE },
  {
    label: t("aboutUniversity.aboutUniversity"),
    path: paths.ABOUT_UNIVERSITY_ROUTE,
    items: [
      {
        label: t("aboutUniversity.aboutUs"),
        path: paths.ABOUT_UNIVERSITY_ROUTE,
      },
      {
        label: t("aboutUniversity.universityCouncil"),
        path: paths.UNIVERSITY_COUNCIL_ROUTE,
        items: [
          {
            label: t("aboutUniversity.universityPresident"),
            path: paths.UNIVERSITY_PRESIDENT_ROUTE,
          },
          {
            label: t("aboutUniversity.assistantPresidentScientific"),
            path: paths.ASSISTANT_PRESIDENT_SCIENTIFIC_AFFAIRS_ROUTE,
          },
          {
            label: t("aboutUniversity.assistantPresidentAdministrative"),
            path: paths.ASSISTANT_PRESIDENT_ADMINISTRATIVE_AFFAIRS_ROUTE,
          },
          {
            label: t("aboutUniversity.collegeDeans"),
            path: paths.COLLEGE_DEANS_ROUTE,
          },
        ],
      },
      {
        label: t("aboutUniversity.presidentSpeech"),
        path: paths.PRESIDENT_SPEECH_ROUTE,
      },
      {
        label: t("aboutUniversity.organizationalStructure"),
        path: paths.ORGANIZATIONAL_STRUCTURE_ROUTE,
      },
      {
        label: t("aboutUniversity.infrastructure"),
        path: paths.INFRASTRUCTURE_ROUTE,
        items: [
          { label: t("aboutUniversity.halls"), path: paths.HALLS_ROUTE },
          {
            label: t("aboutUniversity.laboratories"),
            path: paths.LABORATORIES_ROUTE,
          },
          {
            label: t("aboutUniversity.greenAreas"),
            path: paths.GREEN_AREAS_ROUTE,
          },
        ],
      },
      {
        label: t("aboutUniversity.universityLife"),
        path: paths.UNIVERSITY_LIFE_ROUTE,
        items: [
          {
            label: t("aboutUniversity.photoLibrary"),
            path: paths.PHOTO_LIBRARY_ROUTE,
          },
          {
            label: t("aboutUniversity.videoLibrary"),
            path: paths.VIDEO_LIBRARY_ROUTE,
          },
        ],
      },
      {
        label: t("aboutUniversity.agreementsPartnerships"),
        path: paths.AGREEMENTS_PARTNERSHIPS_ROUTE,
      },
      {
        label: t("aboutUniversity.transparencyPrinciple"),
        path: paths.TRANSPARENCY_PRINCIPLE_ROUTE,
      },
      {
        label: t("aboutUniversity.universityStrategy"),
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
    label: t("academicAffairs.academicAffairs"),
    path: paths.ACADEMIC_AFFAIRS_ROUTE,
    items: [
      {
        label: t("academicAffairs.scientificPromotions"),
        path: paths.SCIENTIFIC_PROMOTIONS_ROUTE,
        items: [
          {
            label: t("academicAffairs.guidelines"),
            path: paths.SCIENTIFIC_PROMOTIONS_GUIDELINES_ROUTE,
          },
          {
            label: t("academicAffairs.forms"),
            path: paths.PROMOTION_FORMS_ROUTE,
          },
          {
            label: t("academicAffairs.instructions"),
            path: paths.PROMOTION_INSTRUCTIONS_ROUTE,
          },
        ],
      },
      {
        label: t("academicAffairs.scientificConferences"),
        path: paths.SCIENTIFIC_CONFERENCES_ROUTE,
      },
      {
        label: t("academicAffairs.scientificJournals"),
        path: paths.SCIENTIFIC_JOURNALS_ROUTE,
      },
      {
        label: t("academicAffairs.electronicScientificProduction"),
        path: paths.ELECTRONIC_SCIENTIFIC_PRODUCTION_ROUTE,
      },
      {
        label: t("academicAffairs.facultyResearch"),
        path: paths.FACULTY_RESEARCH_ROUTE,
      },
      {
        label: t("academicAffairs.approvedBooks"),
        path: paths.APPROVED_BOOKS_ROUTE,
      },
      {
        label: t("academicAffairs.scientificMissions"),
        path: paths.SCIENTIFIC_MISSIONS_ROUTE,
      },
      {
        label: t("academicAffairs.inventionPatents"),
        path: paths.INVENTION_PATENTS_ROUTE,
      },
      {
        label: t("academicAffairs.qualityAssurance"),
        path: paths.QUALITY_ASSURANCE_ROUTE,
      },
      {
        label: t("academicAffairs.universityRankings"),
        path: paths.UNIVERSITY_RANKINGS_ROUTE,
        items: [
          { label: t("academicAffairs.scopus"), path: paths.SCOPUS_ROUTE },
          {
            label: t("academicAffairs.googleScholar"),
            path: paths.GOOGLE_SCHOLAR_ROUTE,
          },
          {
            label: t("academicAffairs.researchGate"),
            path: paths.RESEARCH_GATE_ROUTE,
          },
        ],
      },
      {
        label: t("academicAffairs.scientificActivities"),
        path: paths.SCIENTIFIC_ACTIVITIES_ROUTE,
        items: [
          {
            label: t("academicAffairs.seminars"),
            path: paths.SEMINARS_ROUTE,
          },
          {
            label: t("academicAffairs.workshops"),
            path: paths.WORKSHOPS_ROUTE,
          },
          { label: t("academicAffairs.courses"), path: paths.COURSES_ROUTE },
          { label: t("academicAffairs.forums"), path: paths.FORUMS_ROUTE },
        ],
      },
    ],
  },
  {
    label: t("studentAffairs.studentAffairs"),
    path: paths.STUDENT_AFFAIRS_ROUTE,
    items: [
      {
        label: t("studentAffairs.admissionRegistration"),
        path: paths.ADMISSION_REGISTRATION_ROUTE,
        items: [
          {
            label: t("studentAffairs.admissionConditions"),
            path: paths.ADMISSION_CONDITIONS_ROUTE,
          },
          {
            label: t("studentAffairs.registrationMechanism"),
            path: paths.REGISTRATION_MECHANISM_ROUTE,
          },
          {
            label: t("studentAffairs.studyFees"),
            path: paths.STUDY_FEES_ROUTE,
          },
        ],
      },
      {
        label: t("studentAffairs.scholarshipsGrants"),
        path: paths.SCHOLARSHIPS_GRANTS_ROUTE,
      },
      {
        label: t("studentAffairs.academicCalendar"),
        path: paths.ACADEMIC_CALENDAR_ROUTE,
      },
      {
        label: t("studentAffairs.universityInstructions"),
        path: paths.UNIVERSITY_INSTRUCTIONS_ROUTE,
      },
      {
        label: t("studentAffairs.studentGuide"),
        path: paths.STUDENT_GUIDE_ROUTE,
      },
      {
        label: t("studentAffairs.outstandingStudents"),
        path: paths.OUTSTANDING_STUDENTS_ROUTE,
      },
      {
        label: t("studentAffairs.studentActivities"),
        path: paths.STUDENT_ACTIVITIES_ROUTE,
      },
      {
        label: t("studentAffairs.studentClubs"),
        path: paths.STUDENT_CLUBS_ROUTE,
      },
    ],
  },
  {
    label: t("serviceCenters.serviceCenters"),
    path: paths.SERVICE_CENTERS_ROUTE,
    items: [
      {
        label: t("serviceCenters.digitalLibrary"),
        path: paths.DIGITAL_LIBRARY_ROUTE,
      },
      {
        label: t("serviceCenters.continuingEducationCenter"),
        path: paths.CONTINUING_EDUCATION_CENTER_ROUTE,
      },
      {
        label: t("serviceCenters.careerGuidanceCenter"),
        path: paths.CAREER_GUIDANCE_CENTER_ROUTE,
      },
      {
        label: t("serviceCenters.physicalFitnessCenter"),
        path: paths.PHYSICAL_FITNESS_CENTER_ROUTE,
      },
      {
        label: t("serviceCenters.gilgameshTheater"),
        path: paths.GILGAMESH_THEATER_ROUTE,
      },
      {
        label: t("serviceCenters.audiovisualHalls"),
        path: paths.AUDIOVISUAL_HALLS_ROUTE,
      },
      {
        label: t("serviceCenters.sportsStadium"),
        path: paths.SPORTS_STADIUM_ROUTE,
      },
      {
        label: t("serviceCenters.fiveSidePlaygrounds"),
        path: paths.FIVE_SIDE_PLAYGROUNDS_ROUTE,
      },
      {
        label: t("serviceCenters.trainingHalls"),
        path: paths.TRAINING_HALLS_ROUTE,
      },
      {
        label: t("serviceCenters.dentalClinics"),
        path: paths.DENTAL_CLINICS_ROUTE,
      },
      {
        label: t("serviceCenters.centralLibrary"),
        path: paths.CENTRAL_LIBRARY_ROUTE,
      },
      { label: t("serviceCenters.cafeteria"), path: paths.CAFETERIA_ROUTE },
    ],
  },
  {
    label: t("eServices.eServices"),
    path: paths.E_SERVICES_ROUTE,
    items: [
      {
        label: t("eServices.studentPortal"),
        path: paths.STUDENT_PORTAL_ROUTE,
      },
      {
        label: t("eServices.facultyPortal"),
        path: paths.FACULTY_PORTAL_ROUTE,
      },
      {
        label: t("eServices.massarPlatform"),
        path: paths.MASSAR_PLATFORM_ROUTE,
      },
      {
        label: t("eServices.universityDigitalRepository"),
        path: paths.UNIVERSITY_DIGITAL_REPOSITORY_ROUTE,
      },
      {
        label: t("eServices.electronicPayment"),
        path: paths.ELECTRONIC_PAYMENT_ROUTE,
      },
      {
        label: t("eServices.graduatesPortal"),
        path: paths.GRADUATES_PORTAL_ROUTE,
        items: [
          {
            label: t("eServices.graduationConfirmationRequest"),
            path: paths.GRADUATION_CONFIRMATION_REQUEST_ROUTE,
          },
          {
            label: t("eServices.graduationDocumentRequest"),
            path: paths.GRADUATION_DOCUMENT_REQUEST_ROUTE,
          },
          {
            label: t("eServices.transcriptRequest"),
            path: paths.TRANSCRIPT_REQUEST_ROUTE,
          },
        ],
      },
      {
        label: t("eServices.universityIdIssuance"),
        path: paths.UNIVERSITY_ID_ISSUANCE_ROUTE,
      },
      {
        label: t("eServices.electronicParticipationCertificates"),
        path: paths.ELECTRONIC_PARTICIPATION_CERTIFICATES_ROUTE,
      },
    ],
  },
];

export const topbarNavItems = (t: TranslationFunction): MenuItem[] => [
  {
    path: paths.UNIVERSITY_AND_COMMUNITY_ROUTE,
    label: t("Header.topbarNavLinks.universityAndCommunity"),
    items: [
      {
        path: paths.GRADUATES_ROUTE,
        label: t("Header.topbarNavLinks.graduates"),
      },
      {
        path: paths.QUALIFICATION_EMPLOYMENT_ROUTE,
        label: t("Header.topbarNavLinks.qualificationEmployment"),
      },
      {
        path: paths.CONSULTING_CLINIC_ROUTE,
        label: t("Header.topbarNavLinks.consultingClinic"),
      },
      {
        path: paths.MINISTRY_INQUIRIES_ROUTE,
        label: t("Header.topbarNavLinks.ministryInquiries"),
      },
      {
        path: paths.SURVEYS_ROUTE,
        label: t("Header.topbarNavLinks.surveys"),
        items: [
          {
            path: paths.GRADUATE_SURVEY_ROUTE,
            label: t("Header.topbarNavLinks.graduateSurvey"),
          },
          {
            path: paths.EMPLOYER_SURVEY_ROUTE,
            label: t("Header.topbarNavLinks.employerSurvey"),
          },
        ],
      },
    ],
  },
  {
    path: paths.SUSTAINABILITY_ROUTE,
    label: t("Header.topbarNavLinks.sustainability"),
  },
  { path: paths.NEWS_ROUTE, label: t("Header.topbarNavLinks.news") },
  { path: paths.CONTACT_ROUTE, label: t("Header.topbarNavLinks.contact") },
];
