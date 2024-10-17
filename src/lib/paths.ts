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
export const PHOTO_LIBRARY_ROUTE = `${ABOUT_UNIVERSITY_ROUTE}/photo-library`;
export const VIDEO_LIBRARY_ROUTE = `${ABOUT_UNIVERSITY_ROUTE}/video-library`;
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
export const STUDENTS_LIFE_ROUTE = `${STUDENT_AFFAIRS_ROUTE}/students-life`;
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
