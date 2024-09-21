export type SliderElement = {
  image: string;
  title: string;
  subTitle: string;
};

export type NewsItem = {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  image: string;
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
