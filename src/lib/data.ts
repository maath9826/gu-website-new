import { NewsItem, TransNewsItem, Rating, TransRating } from "./types";

export const newsItems: (transNews: TransNewsItem[]) => NewsItem[] = (
  transNews: TransNewsItem[]
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
  transRatings: TransRating[]
) =>
  transRatings.map((el, index) => ({
    ...el,
    id: index + 1,
  }));
