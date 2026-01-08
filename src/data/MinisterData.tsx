export interface Minister {
  id: number;
  name: string;
  title?: string;
  imageUrl: string;
  role: 'apostle' | 'pastor' | 'deacon' | 'deaconess';
}

export const leadersData: Minister[] = [
  {
    id: 1,
    name: "APOSTLE OLUSEUN ADELEKE",
    title: "General Overseer",
    imageUrl: "/src/assets/images/ministers/apostle-adeleke.jpg",
    role: 'apostle'
  },
  {
    id: 2,
    name: "Pastor Olagoke Wisdom",
    imageUrl: "/src/assets/images/ministers/pastor-wisdom.jpg",
    role: 'pastor'
  },
  {
    id: 3,
    name: "Pastor Chris Fidelis",
    imageUrl: "/src/assets/images/ministers/pastor-chris.jpg",
    role: 'pastor'
  }
];

export const allMinistersData: Minister[] = [
  {
    id: 4,
    name: "Pastor John West",
    imageUrl: "/src/assets/images/ministers/pastor-west.jpg",
    role: 'pastor'
  },
  {
    id: 5,
    name: "Elder Alex Ofili",
    imageUrl: "/src/assets/images/ministers/elder-alex.jpg",
    role: 'pastor'
  },
  {
    id: 6,
    name: "Elder Engineer Ayodu",
    imageUrl: "/src/assets/images/ministers/elder-engineer.jpg",
    role: 'pastor'
  },
  {
    id: 7,
    name: "Elder Sam",
    imageUrl: "/src/assets/images/ministers/elder-sam.jpg",
    role: 'pastor'
  },
  {
    id: 8,
    name: "Deaconess Ifeye Marino Laidpe",
    imageUrl: "/src/assets/images/ministers/deaconess-ifeye.jpg",
    role: 'deaconess'
  },
  {
    id: 9,
    name: "Deacon Bobby Laidpe",
    imageUrl: "/src/assets/images/ministers/deacon-bobby.jpg",
    role: 'deacon'
  },
  {
    id: 10,
    name: "Deaconess Jovita Nwagbo",
    imageUrl: "/src/assets/images/ministers/deaconess-jovita.jpg",
    role: 'deaconess'
  },
  {
    id: 11,
    name: "Deacon Odima Iwegbu",
    imageUrl: "/src/assets/images/ministers/deacon-odima.jpg",
    role: 'deacon'
  },
  {
    id: 12,
    name: "Deaconess Doris Morgan",
    imageUrl: "/src/assets/images/ministers/deaconess-doris.jpg",
    role: 'deaconess'
  },
  {
    id: 13,
    name: "Deaconess Felix Omolangbon",
    imageUrl: "/src/assets/images/ministers/deaconess-felix.jpg",
    role: 'deaconess'
  },
  {
    id: 14,
    name: "Deacon Kelvin Boisel",
    imageUrl: "/src/assets/images/ministers/deacon-kelvin.jpg",
    role: 'deacon'
  },
  {
    id: 15,
    name: "Deaconess Medol Ogunmusi",
    imageUrl: "/src/assets/images/ministers/deaconess-medol.jpg",
    role: 'deaconess'
  },
  {
    id: 16,
    name: "Deacon Isaac David",
    imageUrl: "/src/assets/images/ministers/deacon-isaac.jpg",
    role: 'deacon'
  },
  {
    id: 17,
    name: "Deacon David Arulomoebe",
    imageUrl: "/src/assets/images/ministers/deacon-david.jpg",
    role: 'deacon'
  },
  {
    id: 18,
    name: "Deaconess Judith Essienma",
    imageUrl: "/src/assets/images/ministers/deaconess-judith.jpg",
    role: 'deaconess'
  },
  {
    id: 19,
    name: "Deacon Peter Agada",
    imageUrl: "/src/assets/images/ministers/deacon-peter.jpg",
    role: 'deacon'
  }
];