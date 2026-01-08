import Location from '../assets/images/map.svg';

const Visit = () => {
  return (
    <div className="min-h-screen bg-white">
      
      <section className="max-w-4xl mx-auto px-4 py-12 text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Visit Us
        </h1>
        <p className="text-gray-600 leading-relaxed">
          We would love to welcome you to our church family. Here's everything you need to know for your visit.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-32 mb-32">
        <div className="bg-red-100 p-6 ">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Location</h3>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-[#DB241E]  flex items-center justify-center">
                <img src={Location} alt="Location Icon" className=" w-6 h-6" />
              </div>
            </div>
            <div>
              <p className="text-gray-800 font-medium mb-1">
                6, Zion Close, Sangotedo, Ajah, Lagos State
              </p>
              <p className="text-gray-600 text-sm">Psalms 102:13</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Visit;