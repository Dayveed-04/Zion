import Card from "../components/Card";
import OfferingsHero from '../assets/images/Offering.svg';
import Tithe from '../assets/images/tithe.svg';



export const Offerings=()=>{
    return(
    <div className="gap-9 flex flex-col mt-8 ">
       <section className="  relative w-full min-h-[50vh] md:min-h-[70vh] lg:min-h-screen flex items-center justify-start">
             <img
             src={OfferingsHero}
             alt="Hero Background"
             className="absolute inset-0 w-full h-full object-cover object-top md:object-center "
             />
             <div className="absolute inset-0 bg-black/50 z-0"></div>
        </section>
        <div className=" min-h-screen  space-y-8 px-4 md:px-8">
        <Card
            header="Tithes and Offeriing"
            paragraph={[
            "Account No:0000000000",
            "Bank Name:Sterling Bank",
            ]}
            imageUrl={Tithe}
            imagePosition="right"
            textAlign="left"
            bgColor="bg-[#DB241E]"
            textColor="text-white"
            headerColor="text-white"
        
         />
         <Card
            header="BUILDING FUND"
            paragraph={[
            "Account No:0012197993",
            "Bank Name:Sterling Bank",
            ]}
            textAlign="left"
            bgColor="bg-[#DB241E]"
            textColor="text-white"
            headerColor="text-white"
        
         />
      </div>

    </div>
    );
}

export default Offerings;