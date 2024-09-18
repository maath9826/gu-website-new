// src/app/_components/News/NavElements.tsx

import React from "react";
import { Link, usePathname } from "@/i18n.config";
import { useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";
import * as paths from "@/lib/paths";

const NavElements: React.FC = () => {
  const t = useTranslations("Header.navLinks");

  const navItems = [
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
