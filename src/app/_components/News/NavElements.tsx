import React from "react";
import { Link, usePathname } from "@/i18n.config";
import { useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";
import * as paths from "@/lib/paths";

const NavElements: React.FC = () => {
  const t = useTranslations("Header.navLinks");
  const aboutT = useTranslations("Header.navLinks.aboutUniversity");

  const navItems = [
    { title: t("home"), path: paths.HOME_ROUTE },
    {
      title: aboutT("aboutUniversity"),
      path: paths.ABOUT_UNIVERSITY_ROUTE,
      items: [
        { title: aboutT("aboutUs"), path: paths.ABOUT_UNIVERSITY_ROUTE },
        {
          title: aboutT("universityCouncil"),
          path: paths.UNIVERSITY_COUNCIL_ROUTE,
          items: [
            {
              title: aboutT("universityPresident"),
              path: paths.UNIVERSITY_PRESIDENT_ROUTE,
            },
            {
              title: aboutT("assistantPresidentScientific"),
              path: paths.ASSISTANT_PRESIDENT_SCIENTIFIC_AFFAIRS_ROUTE,
            },
            {
              title: aboutT("assistantPresidentAdministrative"),
              path: paths.ASSISTANT_PRESIDENT_ADMINISTRATIVE_AFFAIRS_ROUTE,
            },
            { title: aboutT("collegeDeans"), path: paths.COLLEGE_DEANS_ROUTE },
          ],
        },
        {
          title: aboutT("presidentSpeech"),
          path: paths.PRESIDENT_SPEECH_ROUTE,
        },
        {
          title: aboutT("organizationalStructure"),
          path: paths.ORGANIZATIONAL_STRUCTURE_ROUTE,
        },
        {
          title: aboutT("infrastructure"),
          path: paths.INFRASTRUCTURE_ROUTE,
          items: [
            { title: aboutT("halls"), path: paths.HALLS_ROUTE },
            { title: aboutT("laboratories"), path: paths.LABORATORIES_ROUTE },
            { title: aboutT("greenAreas"), path: paths.GREEN_AREAS_ROUTE },
          ],
        },
        {
          title: aboutT("universityLife"),
          path: paths.UNIVERSITY_LIFE_ROUTE,
          items: [
            { title: aboutT("photoLibrary"), path: paths.PHOTO_LIBRARY_ROUTE },
            { title: aboutT("videoLibrary"), path: paths.VIDEO_LIBRARY_ROUTE },
          ],
        },
        {
          title: aboutT("agreementsPartnerships"),
          path: paths.AGREEMENTS_PARTNERSHIPS_ROUTE,
        },
        {
          title: aboutT("transparencyPrinciple"),
          path: paths.TRANSPARENCY_PRINCIPLE_ROUTE,
        },
        {
          title: aboutT("universityStrategy"),
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
      title: t("academicAffairs"),
      path: paths.ACADEMIC_AFFAIRS_ROUTE,
      items: [
        {
          title: "Scientific Promotions",
          path: paths.SCIENTIFIC_PROMOTIONS_ROUTE,
        },
        { title: "Research Plans", path: paths.RESEARCH_PLANS_ROUTE },
        {
          title: "Educational Scholarships",
          path: paths.EDUCATIONAL_SCHOLARSHIPS_ROUTE,
        },
        { title: "Academic Calendar", path: paths.ACADEMIC_CALENDAR_ROUTE },
        {
          title: "Scientific Conferences",
          path: paths.SCIENTIFIC_CONFERENCES_ROUTE,
        },
        {
          title: "Scientific Production",
          path: paths.SCIENTIFIC_PRODUCTION_ROUTE,
        },
        { title: "Teaching Methods", path: paths.TEACHING_METHODS_ROUTE },
        { title: "Central Library", path: paths.CENTRAL_LIBRARY_ROUTE },
        { title: "Quality Assurance", path: paths.QUALITY_ASSURANCE_ROUTE },
        { title: "Invention Patents", path: paths.INVENTION_PATENTS_ROUTE },
        { title: "Scholarships", path: paths.SCHOLARSHIPS_ROUTE },
        { title: "Google Scholar", path: paths.GOOGLE_SCHOLAR_ROUTE },
        { title: "Research Gate", path: paths.RESEARCH_GATE_ROUTE },
        {
          title: "Scientific Activities",
          path: paths.SCIENTIFIC_ACTIVITIES_ROUTE,
        },
      ],
    },
    {
      title: t("studentAffairs"),
      path: paths.STUDENT_AFFAIRS_ROUTE,
      items: [
        {
          title: "Admission & Registration",
          path: paths.ADMISSION_REGISTRATION_ROUTE,
        },
        {
          title: "Admission Conditions",
          path: paths.ADMISSION_CONDITIONS_ROUTE,
        },
        {
          title: "Registration Mechanism",
          path: paths.REGISTRATION_MECHANISM_ROUTE,
        },
        { title: "Academic Programs", path: paths.ACADEMIC_PROGRAMS_ROUTE },
        { title: "University Exams", path: paths.UNIVERSITY_EXAMS_ROUTE },
        { title: "Student Housing", path: paths.STUDENT_HOUSING_ROUTE },
        { title: "Student Activities", path: paths.STUDENT_ACTIVITIES_ROUTE },
        {
          title: "Student Instructions",
          path: paths.STUDENT_INSTRUCTIONS_ROUTE,
        },
        { title: "Honor Students", path: paths.HONOR_STUDENTS_ROUTE },
        { title: "Student Guidance", path: paths.STUDENT_GUIDANCE_ROUTE },
        { title: "Student Clubs", path: paths.STUDENT_CLUBS_ROUTE },
      ],
    },
    {
      title: t("serviceCenters"),
      path: paths.SERVICE_CENTERS_ROUTE,
      items: [
        {
          title: "Continuing Education Center",
          path: paths.CONTINUING_EDUCATION_CENTER_ROUTE,
        },
        { title: "Consulting Office", path: paths.CONSULTING_OFFICE_ROUTE },
        { title: "Cultural Relations", path: paths.CULTURAL_RELATIONS_ROUTE },
        { title: "Media Center", path: paths.MEDIA_CENTER_ROUTE },
        {
          title: "Psychological Counseling",
          path: paths.PSYCHOLOGICAL_COUNSELING_ROUTE,
        },
        { title: "Sports Facilities", path: paths.SPORTS_FACILITIES_ROUTE },
        { title: "Training Halls", path: paths.TRAINING_HALLS_ROUTE },
        { title: "Dental Clinics", path: paths.DENTAL_CLINICS_ROUTE },
        { title: "Pharmacy", path: paths.PHARMACY_ROUTE },
      ],
    },
    {
      title: t("eServices"),
      path: paths.E_SERVICES_ROUTE,
      items: [
        { title: "Student Portal", path: paths.STUDENT_PORTAL_ROUTE },
        { title: "Faculty Portal", path: paths.FACULTY_PORTAL_ROUTE },
        { title: "Alumni Portal", path: paths.ALUMNI_PORTAL_ROUTE },
        { title: "University Email", path: paths.UNIVERSITY_EMAIL_ROUTE },
        { title: "Digital Library", path: paths.DIGITAL_LIBRARY_ROUTE },
        { title: "Graduates Portal", path: paths.GRADUATES_PORTAL_ROUTE },
        { title: "Transcript Request", path: paths.TRANSCRIPT_REQUEST_ROUTE },
        {
          title: "Graduation Document Request",
          path: paths.GRADUATION_DOCUMENT_REQUEST_ROUTE,
        },
        {
          title: "Academic Performance Report",
          path: paths.ACADEMIC_PERFORMANCE_REPORT_ROUTE,
        },
        { title: "Electronic Payment", path: paths.ELECTRONIC_PAYMENT_ROUTE },
      ],
    },
  ];

  return (
    <nav className="mt-[61px] flex h-fit flex-col items-center gap-[30px] border-0 bg-transparent text-center sm:mt-0 sm:h-full sm:flex-row sm:gap-0">
      {navItems.map((item, index) => (
        <React.Fragment key={item.path}>
          <NavItem title={item.title} path={item.path} items={item.items} />
          {index !== navItems.length - 1 && (
            <div className="mx-0 hidden h-4 border-e border-white/10 sm:block"></div>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

const NavItem = ({
  title,
  path,
  items,
}: {
  title: string;
  path: string;
  items?: {
    title: string;
    path: string;
    items?: { title: string; path: string }[];
  }[];
}) => {
  const pathname = usePathname();

  return (
    <div className="group relative sm:h-full">
      <Link
        href={path}
        className={twMerge(
          "text-base font-light tracking-[-0.004em] transition-all duration-300 hover:opacity-60 sm:flex sm:h-full sm:items-center sm:px-[20px] sm:text-sm 1920:px-[30px] 1920:text-base",
          pathname === path &&
            "relative after:absolute after:bottom-0 after:start-0 after:h-0.5 after:bg-secondary after:content-[''] sm:after:ms-[20px] sm:after:w-[calc((100%-40px)*0.8)] 1920:after:ms-[30px] 1920:after:w-[calc((100%-60px)*0.8)]",
        )}
      >
        {title}
      </Link>
      {items && (
        <div className="absolute hidden animate-vanish whitespace-nowrap bg-black/50 shadow-lg group-hover:block group-hover:animate-appear">
          <div
            className="py-2"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {items.map((item, index) => (
              <NavSubItem key={index} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const NavSubItem = ({
  item,
}: {
  item: {
    title: string;
    path: string;
    items?: { title: string; path: string }[];
  };
}) => {
  return (
    <div className="group/sub relative">
      <Link
        href={item.path}
        className="block px-6 py-3 text-sm text-white hover:bg-black/30"
        role="menuitem"
      >
        {item.title}
      </Link>
      {item.items && (
        <div className="absolute start-full top-0 hidden animate-vanish whitespace-nowrap bg-black/50 shadow-lg group-hover/sub:block group-hover/sub:animate-appear">
          <div className="py-2" role="menu" aria-orientation="vertical">
            {item.items.map((subItem, subIndex) => (
              <Link
                key={subIndex}
                href={subItem.path}
                className="block px-6 py-3 text-sm text-white hover:bg-black/30"
                role="menuitem"
              >
                {subItem.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavElements;
