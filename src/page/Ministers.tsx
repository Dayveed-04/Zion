import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import MinisterCard from '../components/MinisterCard';
import MinisterHero from '../assets/images/Ministers.svg';

const Ministers = () => {
    const navigate = useNavigate();

    return (
        <div className="gap-9 flex flex-col mt-8">
            <div className="absolute top-4 left-4 md:top-2 md:left-8 z-20">
            <button 
                onClick={() => navigate('/')}
                className="text-[#DB241E] hover:text-[#c01f1a] t bg-white/80 rounded-full p-2"
            >
                <ArrowLeft size={30} />
            </button>
            </div>
            
            <div className="gap-9  mt-8 ">
             <section className=" relative w-full  min-h-[50vh] md:min-h-[70vh] lg:min-h-screen flex items-center justify-start">
             <img
             src={MinisterHero}
             alt="Hero Background"
             className="absolute inset-0 w-full h-full object-cover object-top md:object-center "
              />
              </section>
            </div>
          <div className="flex flex-col gap-9 mt-10 max-w-2xl mx-auto px-4 md:px-8 ">
         <MinisterCard
          imageUrl={MinisterHero}
          title="Rev. Sarah Johnson"
          description="Senior Pastor with 15 years of ministry experience, dedicated to spreading God's word and building strong communities of faith."
          bgColor="bg-[#F8F9FA]"
          titleColor="text-black"
          descriptionColor="text-black"
          isFirst={true}
        />
          <MinisterCard
            imageUrl={MinisterHero}
            title="Pastor Michael Chen"
            description="Youth Minister passionate about mentoring the next generation."
            bgColor="bg-[#F8F9FA]"
            titleColor="text-black"
            descriptionColor="text-black"
          />
           <MinisterCard
            imageUrl={MinisterHero}
            title="Pastor Michael Chen"
            description="Youth Minister passionate about mentoring the next generation."
            bgColor="bg-[#F8F9FA]"
            titleColor="text-black"
            descriptionColor="text-black"
          />
           <MinisterCard
            imageUrl={MinisterHero}
            title="Pastor Michael Chen"
            description="Youth Minister passionate about mentoring the next generation."
            bgColor="bg-[#F8F9FA]"
            titleColor="text-black"
            descriptionColor="text-black"
          />
           <MinisterCard
            imageUrl={MinisterHero}
            title="Pastor Michael Chen"
            description="Youth Minister passionate about mentoring the next generation."
            bgColor="bg-[#F8F9FA]"
            titleColor="text-black"
            descriptionColor="text-black"
          />
           <MinisterCard
            imageUrl={MinisterHero}
            title="Pastor Michael Chen"
            description="Youth Minister passionate about mentoring the next generation."
            bgColor="bg-[#F8F9FA]"
            titleColor="text-black"
            descriptionColor="text-black"
          />
          
          
         
        </div>
      </div>
    );
}

export default Ministers;