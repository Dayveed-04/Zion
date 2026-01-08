import { useNavigate } from 'react-router-dom';
import Button from '../components/Buton';
import { leadersData } from '../data/MinisterData';

const Ministers = () => {
  const navigate = useNavigate();
  const [apostle] = leadersData.filter(m => m.role === 'apostle');
  const pastors = leadersData.filter(m => m.role === 'pastor');

  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-4xl mx-auto px-4 py-12 text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Ministers
        </h1>
        <p className="text-gray-600">
          Meet the dedicated servants leading Zion the City of the Lord Ministries
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="flex flex-col items-center space-y-12">
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#DB241E] mb-4">
              <img
                src={apostle.imageUrl}
                alt={apostle.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-gray-600 mb-1">{apostle.title}</p>
            <h3 className="text-lg font-bold text-gray-900">{apostle.name}</h3>
          </div>

          <div className="grid grid-cols-2 gap-16">
            {pastors.map((pastor) => (
              <div key={pastor.id} className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#DB241E] mb-4">
                  <img
                    src={pastor.imageUrl}
                    alt={pastor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-base font-semibold text-gray-900 text-center">
                  {pastor.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex justify-center pb-32">
        <div onClick={() => navigate('/ministers/all')}>
          <Button text="VIEW LIST OF MINISTERS" bgColor="bg-[#DB241E]" />
        </div>
      </section>
    </div>
  );
};

export default Ministers;