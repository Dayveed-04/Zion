export interface DepartmentItem {
  title: string;
  date?: string; 
  schedule: string;
}

export interface Department {
  id: string;
  name: string;
  items: DepartmentItem[];
  hasDateColumn?: boolean; 
}

export const departments: Department[] = [
  {
    id: "women",
    name: "Daughters of Zion[WOMEN]",
    items: [
      { title: "Sunday Service", schedule: "Every Sunday (8:00 AM - 11:00 AM)" },
      { title: "Bible Study", schedule: "Every Wednesday (6:00 PM - 8:00 PM)" }
    ]
  },
  {
    id: "children",
    name: "Children Department",
    hasDateColumn: true, 
    items: [
      { title: "Youth Service", date: "Every Saturday", schedule: "4:00 PM - 6:00 PM" },
      { title: "Teen Bible Study", date: "Every Tuesday", schedule: "5:00 PM - 6:30 PM" },
      { title: "Youth Fellowship", date: "Every Friday", schedule: "7:00 PM - 9:00 PM" }  
    ]
  },
  {
    id: "youth",
    name: "Youth Department",
    items: [
      { title: "Sunday School", schedule: "Every Sunday (9:00 AM - 10:30 AM)" },
      { title: "Kids Club", schedule: "Every Saturday (3:00 PM - 5:00 PM)" }
    ]
  }
];