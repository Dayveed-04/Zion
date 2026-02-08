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
    tagLabel: "Regular",
    tagColor: "bg-[#B590EC]",
    date: "2nd Friday of Every Month",
    time: "Virtual",
    description: "Monthly online Vigil-Virtual service"
  },
 
  {
    id: 2,
    title: "DOZ Vigil (Online)",
    category: "weekly",
    tagLabel: "Regular",
    tagColor: "bg-[#B590EC]",
    date: "2nd Friday of Every Month",
    time: "virtual",
    description: "Monthly online Vigil-Virtual service"
  },
   {
    id: 3,
    title: "Praying Mothers",
    category: "weekly",
    tagLabel: "Regular",
    tagColor: "bg-[#B590EC]",
    date: "3rd Sunday of the Month",
    time: "",
    description: "A special gathering of mothers to pray together"
  },

  {
    id: 4,
    title: "Woman Thou Art Loose",
    category: "quarterly",
    tagLabel: "Quarterly",
    tagColor: "bg-[#57B3E1]",
    date: "March 19th & September 9th,2026",
    time: "",
    description: "Twice a year empowerment program for women"
  },
    {
    id: 5,
    title: "Mountain Prayer Retreat",
    category: "quarterly",
    tagLabel: "Quarterly",
    tagColor: "bg-[#57B3E1]",
    date: "April 9-11 & November 12-14, 2026",
    time: "",
    description: "Two intensive prayer retreats held twice yearly"
  },
  
  {
    id: 6,
    title: "Your Spouse Your Best Friend",
    category: "annual",
    tagLabel: "Annual",
    tagColor: "bg-[#64E359]",
    date: "February 14th, 2026",
    time: "4:00PM-7:00PM Studio Vic/Island",
    description: "A special Valentine's Day program for married couples"
  },
   {
    id: 8,
    title: "Pastors Appreciation",
    category: "annual",
    tagLabel: "Annual",
    tagColor: "bg-[#64E359]",
    date: "Easter Sunday,2026",
    time: "",
    description: "Honoring our pastors and church leaders"
  },
   {
    id: 9,
    title: "Mother's Day",
    category: "annual",
    tagLabel: "Annual",
    tagColor: "bg-[#64E359]",
    date: "March,2026",
    time: "",
    description: "celebrating mothers with a special picnic"
  },
  {
    id: 10,
    title: "Daughter Of Zion Week",
    category: "annual",
    tagLabel: "Annual",
    tagColor: "bg-[#64E359]",
    date: "August 28-30,2026",
    time: "",
    description: "Three-day celebration and empowerment"
  },
  { 
    id: 11,
    title: "DOZ Camping",
    category: "annual",
    tagLabel: "Annual",
    tagColor: "bg-[#64E359]",
    date: "2026",
    time: "Friday-Mainland, Saturday-Island",
    description: "Weekend camping experience with fellowship and worship"
  },
  {
    id: 12,
    title: "Appreciating DOZ",
    category: "annual",
    tagLabel: "Annual",
    tagColor: "bg-[#64E359]",
    date: "January 4th,2026",
    time: "",
    description: "Year-end appreciation and sharing of gifts"
  },

  {
    id: 13,
    title: "Doz Weekly Prayer",
    category: "children",
    tagLabel: "Children",
    tagColor: "bg-[#E16B68]",
    date: "Every Tuesday Night",
    time: "11:30PM-12:30AM",
    description: ""
  },
  {
    id: 14,
    title: "Mother's Day (Children)",
    category: "children",
    tagLabel: "Children",
    tagColor: "bg-[#E16B68]",
    date: "May (2nd Sunday)",
    time: "",
    description: "Children honoring and celebrating their mothers"
  },
  {
    id: 15,
    title: "Mother's Day (Children)",
    category: "children",
    tagLabel: "Children",
    tagColor: "bg-[#E16B68]",
    date: "May (2nd Sunday)",
    time: "",
    description: "Children honoring and celebrating their mothers"
  },
  {
    id: 16,
    title: "Mother's Day (Children)",
    category: "children",
    tagLabel: "Children",
    tagColor: "bg-[#E16B68]",
    date: "May (2nd Sunday)",
    time: "",
    description: "Children honoring and celebrating their mothers"
  },
  {
    id: 17,
    title: "Mother's Day (Children)",
    category: "children",
    tagLabel: "Children",
    tagColor: "bg-[#E16B68]",
    date: "May (2nd Sunday)",
    time: "",
    description: "Children honoring and celebrating their mothers"
  },
  {
    id: 18,
    title: "Mother's Day (Children)",
    category: "children",
    tagLabel: "Children",
    tagColor: "bg-[#E16B68]",
    date: "May (2nd Sunday)",
    time: "",
    description: "Children honoring and celebrating their mothers"
  },
  {
    id: 19,
    title: "Mother's Day (Children)",
    category: "children",
    tagLabel: "Children",
    tagColor: "bg-[#E16B68]",
    date: "May (2nd Sunday)",
    time: "",
    description: "Children honoring and celebrating their mothers"
  },
  {
    id: 20,
    title: "Mother's Day (Children)",
    category: "children",
    tagLabel: "Children",
    tagColor: "bg-[#E16B68]",
    date: "May (2nd Sunday)",
    time: "",
    description: "Children honoring and celebrating their mothers"
  },
  {
    id: 21,
    title: "Mother's Day (Children)",
    category: "children",
    tagLabel: "Children",
    tagColor: "bg-[#E16B68]",
    date: "May (2nd Sunday)",
    time: "",
    description: "Children honoring and celebrating their mothers"
  },
   
];

export const filterCategories = [
  { id: 'all', label: 'All Events', color: 'bg-[#DB241E]' },
  { id: 'weekly', label: 'Weekly/Monthly', color: 'bg-white' },
  { id: 'quarterly', label: 'Quarterly', color: 'bg-white' },
  { id: 'annual', label: 'Annual Events', color: 'bg-white' },
  { id: 'children', label: 'Children Event', color: 'bg-white' }
];