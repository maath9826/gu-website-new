export const HOME_ROUTE = "/";
export const ABOUT_UNIVERSITY_ROUTE = "/about-university";
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

// Academic Affairs
export const SCIENTIFIC_PROMOTIONS_ROUTE = `${ACADEMIC_AFFAIRS_ROUTE}/scientific-promotions`;
export const RESEARCH_PLANS_ROUTE = `${ACADEMIC_AFFAIRS_ROUTE}/research-plans`;
export const EDUCATIONAL_SCHOLARSHIPS_ROUTE = `${ACADEMIC_AFFAIRS_ROUTE}/educational-scholarships`;
export const ACADEMIC_CALENDAR_ROUTE = `${ACADEMIC_AFFAIRS_ROUTE}/academic-calendar`;
export const SCIENTIFIC_CONFERENCES_ROUTE = `${ACADEMIC_AFFAIRS_ROUTE}/scientific-conferences`;
export const SCIENTIFIC_PRODUCTION_ROUTE = `${ACADEMIC_AFFAIRS_ROUTE}/scientific-production`;
export const TEACHING_METHODS_ROUTE = `${ACADEMIC_AFFAIRS_ROUTE}/teaching-methods`;
export const CENTRAL_LIBRARY_ROUTE = `${ACADEMIC_AFFAIRS_ROUTE}/central-library`;
export const QUALITY_ASSURANCE_ROUTE = `${ACADEMIC_AFFAIRS_ROUTE}/quality-assurance`;
export const INVENTION_PATENTS_ROUTE = `${ACADEMIC_AFFAIRS_ROUTE}/invention-patents`;
export const SCHOLARSHIPS_ROUTE = `${ACADEMIC_AFFAIRS_ROUTE}/scholarships`;
export const GOOGLE_SCHOLAR_ROUTE = `${ACADEMIC_AFFAIRS_ROUTE}/google-scholar`;
export const RESEARCH_GATE_ROUTE = `${ACADEMIC_AFFAIRS_ROUTE}/research-gate`;
export const SCIENTIFIC_ACTIVITIES_ROUTE = `${ACADEMIC_AFFAIRS_ROUTE}/scientific-activities`;

// Student Affairs
export const ADMISSION_REGISTRATION_ROUTE = `${STUDENT_AFFAIRS_ROUTE}/admission-registration`;
export const ADMISSION_CONDITIONS_ROUTE = `${STUDENT_AFFAIRS_ROUTE}/admission-conditions`;
export const REGISTRATION_MECHANISM_ROUTE = `${STUDENT_AFFAIRS_ROUTE}/registration-mechanism`;
export const ACADEMIC_PROGRAMS_ROUTE = `${STUDENT_AFFAIRS_ROUTE}/academic-programs`;
export const UNIVERSITY_EXAMS_ROUTE = `${STUDENT_AFFAIRS_ROUTE}/university-exams`;
export const STUDENT_HOUSING_ROUTE = `${STUDENT_AFFAIRS_ROUTE}/student-housing`;
export const STUDENT_ACTIVITIES_ROUTE = `${STUDENT_AFFAIRS_ROUTE}/student-activities`;
export const STUDENT_INSTRUCTIONS_ROUTE = `${STUDENT_AFFAIRS_ROUTE}/student-instructions`;
export const HONOR_STUDENTS_ROUTE = `${STUDENT_AFFAIRS_ROUTE}/honor-students`;
export const STUDENT_GUIDANCE_ROUTE = `${STUDENT_AFFAIRS_ROUTE}/student-guidance`;
export const STUDENT_CLUBS_ROUTE = `${STUDENT_AFFAIRS_ROUTE}/student-clubs`;

// Service Centers
export const CONTINUING_EDUCATION_CENTER_ROUTE = `${SERVICE_CENTERS_ROUTE}/continuing-education`;
export const CONSULTING_OFFICE_ROUTE = `${SERVICE_CENTERS_ROUTE}/consulting-office`;
export const CULTURAL_RELATIONS_ROUTE = `${SERVICE_CENTERS_ROUTE}/cultural-relations`;
export const MEDIA_CENTER_ROUTE = `${SERVICE_CENTERS_ROUTE}/media-center`;
export const PSYCHOLOGICAL_COUNSELING_ROUTE = `${SERVICE_CENTERS_ROUTE}/psychological-counseling`;
export const SPORTS_FACILITIES_ROUTE = `${SERVICE_CENTERS_ROUTE}/sports-facilities`;
export const TRAINING_HALLS_ROUTE = `${SERVICE_CENTERS_ROUTE}/training-halls`;
export const DENTAL_CLINICS_ROUTE = `${SERVICE_CENTERS_ROUTE}/dental-clinics`;
export const PHARMACY_ROUTE = `${SERVICE_CENTERS_ROUTE}/pharmacy`;

// E-Services
export const STUDENT_PORTAL_ROUTE = `${E_SERVICES_ROUTE}/student-portal`;
export const FACULTY_PORTAL_ROUTE = `${E_SERVICES_ROUTE}/faculty-portal`;
export const ALUMNI_PORTAL_ROUTE = `${E_SERVICES_ROUTE}/alumni-portal`;
export const UNIVERSITY_EMAIL_ROUTE = `${E_SERVICES_ROUTE}/university-email`;
export const DIGITAL_LIBRARY_ROUTE = `${E_SERVICES_ROUTE}/digital-library`;
export const GRADUATES_PORTAL_ROUTE = `${E_SERVICES_ROUTE}/graduates-portal`;
export const TRANSCRIPT_REQUEST_ROUTE = `${E_SERVICES_ROUTE}/transcript-request`;
export const GRADUATION_DOCUMENT_REQUEST_ROUTE = `${E_SERVICES_ROUTE}/graduation-document-request`;
export const ACADEMIC_PERFORMANCE_REPORT_ROUTE = `${E_SERVICES_ROUTE}/academic-performance-report`;
export const ELECTRONIC_PAYMENT_ROUTE = `${E_SERVICES_ROUTE}/electronic-payment`;

export const NOT_FOUND_ROUTE = "/not_found";

export const SLIDER_BG_ROUTES: string[] = [HOME_ROUTE];

export const IMAGE_BG_ROUTES: string[] = [RELATED_LOCATIONS_ROUTE];

export const CENTERIZED_TITLE_ROUTES: string[] = [];

export const TITLE_WITH_ACTIONS_ROUTES: string[] = [];
