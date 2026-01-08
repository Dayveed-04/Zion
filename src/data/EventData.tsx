export type EventCategory = 'all' | 'weekly' | 'quarterly' | 'annual' | 'children';

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
    title: "DOZ Weekly Prayer",
    category: "weekly",
    tagLabel: "regular",
    tagColor: "bg-purple-500",
    date: "Every Tuesday/Wed",
    time: "11:30 PM",
    description: "Join us for weekly prayer and spiritual renewal every Tuesday and Wednesday"
  },
  {
    id: 2,
    title: "DOZ Vigil (Divinity)",
    category: "quarterly",
    tagLabel: "Quarterly",
    tagColor: "bg-purple-500",
    date: "Last Friday of the Month",
    time: "",
    description: "Monthly holy ghost vigil service"
  },
  {
    id: 3,
    title: "Praying Mothers",
    category: "weekly",
    tagLabel: "regular",
    tagColor: "bg-purple-500",
    date: "3rd Saturday of the Month",
    time: "",
    description: "Supporting Mothers in fervent prayers and supplication"
  },
  {
    id: 4,
    title: "Woman Thou Art Loose",
    category: "annual",
    tagLabel: "Annual",
    tagColor: "bg-blue-500",
    date: "March 7th (Registration Jan. 2025)",
    time: "",
    description: "Empowerment event for women and girls to be renewed"
  },
  {
    id: 5,
    title: "Mountain Prayer Retreat",
    category: "quarterly",
    tagLabel: "Quarterly",
    tagColor: "bg-blue-500",
    date: "Jan 5-11 & November 15-21, 2026",
    time: "",
    description: "Intensive prayer mountain retreat for spiritual growth"
  },
  {
    id: 6,
    title: "Your Spouse Your Best Friend",
    category: "quarterly",
    tagLabel: "Quarterly",
    tagColor: "bg-green-500",
    date: "Quarterly",
    time: "7:00 PM - 9:00 PM (Sunday Evening)",
    description: "Marriage enrichment program for couples"
  },
  {
    id: 7,
    title: "Pastors Appreciation",
    category: "annual",
    tagLabel: "Annual",
    tagColor: "bg-green-500",
    date: "October",
    time: "",
    description: "Honoring our pastors and their families"
  },
  {
    id: 8,
    title: "Mother's Day",
    category: "annual",
    tagLabel: "Annual",
    tagColor: "bg-green-500",
    date: "May (2nd Sunday)",
    time: "",
    description: "Celebrating mothers and their godly devotion"
  },
  {
    id: 9,
    title: "Daughter of Zion Week",
    category: "annual",
    tagLabel: "Annual",
    tagColor: "bg-green-500",
    date: "",
    time: "",
    description: "Yearly ladies retreat and empowerment"
  },
  {
    id: 10,
    title: "DOZ Camping",
    category: "annual",
    tagLabel: "Annual",
    tagColor: "bg-green-500",
    date: "1st Saturday in August",
    time: "Aug. 2nd, 2025",
    description: "Annual end of the glorious camp fellowship and fun retreat"
  },
  {
    id: 11,
    title: "Appreciating DOZ",
    category: "annual",
    tagLabel: "Annual",
    tagColor: "bg-green-500",
    date: "November (last)",
    time: "",
    description: "Appreciation and seed sowing day"
  },
  {
    id: 12,
    title: "New Year Thanksgiving",
    category: "annual",
    tagLabel: "Annual",
    tagColor: "bg-red-500",
    date: "",
    time: "",
    description: "Thanksgiving service and praise service"
  },
  {
    id: 13,
    title: "Love and Gifting Sunday",
    category: "annual",
    tagLabel: "Annual",
    tagColor: "bg-red-500",
    date: "February, 9th, 2025",
    time: "",
    description: "Special day for fellowship and caring for one another"
  },
  {
    id: 14,
    title: "Children's Prayer and Fasting",
    category: "children",
    tagLabel: "Children",
    tagColor: "bg-red-500",
    date: "",
    time: "",
    description: "Prayer and fasting training for children"
  },
  {
    id: 15,
    title: "Mother's Day (Children)",
    category: "children",
    tagLabel: "Children",
    tagColor: "bg-red-500",
    date: "May (2nd Sunday)",
    time: "",
    description: "Children honoring and celebrating their mothers"
  },
  {
    id: 16,
    title: "Easter Sunday (Children)",
    category: "children",
    tagLabel: "Children",
    tagColor: "bg-red-500",
    date: "April 20th, 2025",
    time: "",
    description: "Worship, fun, candy, and fellowship with children! Children learn about Jesus Christ"
  },
  {
    id: 17,
    title: "Father's Day (Children)",
    category: "children",
    tagLabel: "Children",
    tagColor: "bg-red-500",
    date: "June 15th, 2025",
    time: "",
    description: "Children honoring their fathers"
  },
  {
    id: 18,
    title: "Teachers and Children's Retreat",
    category: "children",
    tagLabel: "Children",
    tagColor: "bg-red-500",
    date: "August (TBD)",
    time: "",
    description: "Retreat day for spiritual development and fun activities"
  },
  {
    id: 19,
    title: "Children's Feasting and Prayer",
    category: "children",
    tagLabel: "Children",
    tagColor: "bg-red-500",
    date: "September 14th, 2025",
    time: "",
    description: "Special teaching and lessons for kids on communion"
  },
  {
    id: 20,
    title: "Children's Christmas Party",
    category: "children",
    tagLabel: "Children",
    tagColor: "bg-red-500",
    date: "",
    time: "",
    description: "Year end celebration with our little ones"
  }
];

export const filterCategories = [
  { id: 'all', label: 'All Events', color: 'bg-[#DB241E]' },
  { id: 'weekly', label: 'Weekly/Monthly', color: 'bg-white' },
  { id: 'quarterly', label: 'Quarterly', color: 'bg-white' },
  { id: 'annual', label: 'Annual Events', color: 'bg-white' },
  { id: 'children', label: 'Children Event', color: 'bg-white' }
];