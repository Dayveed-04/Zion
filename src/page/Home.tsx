import { Link } from "react-router-dom";
import Button from "../components/Buton";
import Card from "../components/Card";
import HomeHero from '../assets/images/Home-Hero.svg';
import Mandate from '../assets/images/Mandate.svg';
import Vision from '../assets/images/Vision.svg';

const Home = () =>{
    return(
      <div className="gap-9 flex flex-col mt-8 ">
       <section className=" relative w-full min-h-[50vh] md:min-h-[70vh] lg:min-h-screen flex items-center justify-start ">
        <img
        src={HomeHero}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-top md:object-center"
        />
    <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="relative z-10 px-1 sm:px-2 md:px-4 lg:px-6 w-full ">
        <h1 className="text-xl sm:text-lg md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
          Come and join <br/> Our Family
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <div className=" scale-50 sm:scale-100 origin-left">
             <Button
           text='Our Programmes'
            bgColor='bg-[#DB241E]'
           />
           </div>
        </div>
      </div>
      
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/30 rounded-full blur-xl"></div>
    </section>
    <div className="min-h-screen  space-y-8 px-4 md:px-8">
    <Card
      header="Mandate"
      paragraph={[
        "To take the gospel to all four corners of the earth"
      ]}
      imageUrl={Mandate}
      imagePosition="right"
      textAlign="center"
      bgColor="bg-[#DB241E]"
      textColor="text-white"
      headerColor="text-white"
    />
    <Card 
     header="Our Vision"
      paragraph={[
        "To gather people I (God) will bless and prepare for heaven"
      ]}
      imageUrl={Vision}
      imagePosition="left"
      textAlign="center"
      bgColor="bg-[#EDCD15]"
      textColor="text-white"
      headerColor="text-white"
    />
         <div className="flex justify-center py-8">
            <div className="scale-90 sm:scale-100">
               <Link to="/ministers">
              <Button
                text='Our Ministers'
                bgColor='bg-[#EDCD15]'
              />
              </Link>
            </div>
          </div>
    </div>
    </div>
   
    );
} 

export default Home;