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
