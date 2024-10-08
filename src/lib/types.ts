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

export type CardData = { href: string; imgUrl: string; title: string };

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

// types.ts

export interface NewsItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

export interface NewsResponse {
  landingpage: NewsItem[];
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
