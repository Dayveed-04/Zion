
import { useNavigate } from "react-router-dom";
import arrow from '../assets/images/arrow.svg';
import { allMinistersData } from "../data/MinisterData";


const MinistersList = () => {
const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">

      <section className="max-w-6xl mx-auto px-4 py-12 text-center mb-16">
        <div className="mb-4  text-black self-start cursor-pointer ">
           <img
            src={arrow}
            alt="Search"
            width={15}
            height={15}
            onClick={()=> navigate('/ministers')}
           />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Ministers
        </h1>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {allMinistersData.map((minister) => (
            <div key={minister.id} className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-[#DB241E] mb-3">
                <img
                  src={minister.imageUrl}
                  alt={minister.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 text-center">
                {minister.name}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MinistersList;