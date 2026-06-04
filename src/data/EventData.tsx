export type EventCategory =
  | "all"
  | "weekly"
  | "quarterly"
  | "annual"
  | "children";

export interface Event {
  id: number;
  title: string;
  category: EventCategory;
  tagLabel: string;
  tagColor: string;
  date: string;
  time: string;
  description: string;
}

export const eventsData: Event[] = [
  {
    id: 1,
    title: "Command the Week",
    category: "weekly",
    tagLabel: "Regular",
    tagColor: "bg-[#B590EC]",
    date: "Every Monday ",
    time: "6:00am-6:30am",
    description: "",
  },

  {
    id: 2,
    title: "General Church Vigil",
    category: "weekly",
    tagLabel: "Regular",
    tagColor: "bg-[#B590EC]",
    date: "Last Friday of Every Month",
    time: "11pm-4am",
    description: "",
  },
  {
    id: 3,
    title: "Evangelism and Hour of Prevailing Prayers",
    category: "weekly",
    tagLabel: "Regular",
    tagColor: "bg-[#B590EC]",
    date: "Every 2nd Saturday",
    time: "8am-11am",
    description: "",
  },

  {
    id: 4,
    title: "Sunday Service",
    category: "weekly",
    tagLabel: "Regular",
    tagColor: "bg-[#B590EC]",
    date: "Every Sunday",
    time: "8am-10:30am",
    description: "",
  },

  {
    id: 5,
    title: "Feast of The Trumpet",
    category: "annual",
    tagLabel: "Annual",
    tagColor: "bg-[#64E359]",
    date: "October 1st,2026",
    time: "",
    description: "",
  },
  {
    id: 6,
    title: "Feast of the Tabernacle",
    category: "annual",
    tagLabel: "Annual",
    tagColor: "bg-[#64E359]",
    date: "October 25th,2026",
    time: "9am-12:30pm",
    description: "",
  },
  {
    id: 7,
    title: "Cross-Over Service",
    category: "annual",
    tagLabel: "Annual",
    tagColor: "bg-[#64E359]",
    date: "December 31st,2026",
    time: "10pm-12:30am",
    description: "",
  },
  {
    id: 8,
    title: "Family Sunday",
    category: "annual",
    tagLabel: "Annual",
    tagColor: "bg-[#64E359]",
    date: "Novemeber 2026",
    time: "",
    description: "",
  },

  {
    id: 9,
    title: "Children Retreat",
    category: "children",
    tagLabel: "Children",
    tagColor: "bg-[#E16B68]",
    date: "August 2026",
    time: "",
    description: "",
  },
  {
    id: 10,
    title: "Childrens Christmas Party",
    category: "children",
    tagLabel: "Children",
    tagColor: "bg-[#E16B68]",
    date: "December 13th, 2026",
    time: "",
    description: "",
  },
  {
    id: 11,
    title: "Sisters General Meeting",
    category: "quarterly",
    tagLabel: "Quarterly",
    tagColor: "bg-[#219FD999]",
    date: "2nd Sunday of Every Month",
    time: "",
    description: "",
  },
];

export const filterCategories = [
  { id: "all", label: "All Events", color: "bg-[#DB241E]" },
  { id: "weekly", label: "Weekly/Monthly", color: "bg-white" },
  { id: "annual", label: "Annual Events", color: "bg-white" },
  { id: "quarterly", label: "Women Event", color: "bg-white" },
  { id: "children", label: "Children Event", color: "bg-white" },
];
