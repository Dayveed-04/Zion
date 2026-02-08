import Apostle from '../assets/images/apostle.jpg';
import Chigozie from '../assets/images/chigozie.jpg';
import Chris from '../assets/images/chris.jpg';
import John from '../assets/images/john.png';
import Alex from '../assets/images/alex.png';
import Anadu from '../assets/images/anadu.jpg';
import Sam from '../assets/images/sam.jpg';
import Nkiru from '../assets/images/nkiru.jpg';
import Bobby from '../assets/images/bobby.jpg';
import Jovita from '../assets/images/jovita.jpg';
import Obinna from '../assets/images/obinna.jpg';
import Gloria from '../assets/images/gloria.jpg';
import Fola from '../assets/images/fola.jpg';
import Kelvin from '../assets/images/kelvin.jpg';
import Mabel from '../assets/images/mabel.jpg';
import Itake from '../assets/images/itake.jpg';
import Anifowoshe from '../assets/images/anifowoshe.jpg';
import Judith from '../assets/images/judith.jpg';
import Peter from '../assets/images/peter.jpg';
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
    title: "God's Overseer Zion",
    imageUrl: Apostle,
    role: 'apostle'
  },
  {
    id: 2,
    name: "Pastor Chigozie Wisdom",
    imageUrl:Chigozie ,
    role: 'pastor'
  },
  {
    id: 3,
    name: "Pastor Chris Fidelis",
    imageUrl: Chris,
    role: 'pastor'
  }
];

export const allMinistersData: Minister[] = [
  {
    id: 4,
    name: "Pastor John West",
    imageUrl: John,
    role: 'pastor'
  },
  {
    id: 5,
    name: "Elder Alex Ofili",
    imageUrl: Alex,
    role: 'pastor'
  },
  {
    id: 6,
    name: "Elder Engineer Anadu",
    imageUrl: Anadu,
    role: 'pastor'
  },
  {
    id: 7,
    name: "Elder Sam",
    imageUrl: Sam,
    role: 'pastor'
  },
  {
    id: 8,
    name: "Deaconess Nkiru Meima Ladipo",
    imageUrl:Nkiru,
    role: 'deaconess'
  },
  {
    id: 9,
    name: "Deacon Bobby Laidpo",
    imageUrl: Bobby,
    role: 'deacon'
  },
  {
    id: 10,
    name: "Deaconess Jovita Nwagbo",
    imageUrl: Jovita,
    role: 'deaconess'
  },
  {
    id: 11,
    name: "Deacon Obinna Nwagbo",
    imageUrl: Obinna,
    role: 'deacon'
  },
  {
    id: 12,
    name: "Deaconess Gloria Morgan",
    imageUrl: Gloria,
    role: 'deaconess'
  },
  {
    id: 13,
    name: "Deaconess Fola Omotinugbon",
    imageUrl: Fola,
    role: 'deaconess'
  },
  {
    id: 14,
    name: "Deacon Kelvin Bobai",
    imageUrl: Kelvin,
    role: 'deacon'
  },
  {
    id: 15,
    name: "Deaconess Mabel Ogunmusi",
    imageUrl: Mabel,
    role: 'deaconess'
  },
  {
    id: 16,
    name: "Deacon Itake David",
    imageUrl: Itake,
    role: 'deacon'
  },
  {
    id: 17,
    name: "Deacon David Anifowoshe",
    imageUrl: Anifowoshe,
    role: 'deacon'
  },
  {
    id: 18,
    name: "Deaconess Judith Enatama",
    imageUrl: Judith,
    role: 'deaconess'
  },
  {
    id: 19,
    name: "Deacon Peter Aguda",
    imageUrl: Peter,
    role: 'deacon'
  }
];