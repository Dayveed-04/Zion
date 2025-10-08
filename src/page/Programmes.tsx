import { useState } from "react";
import WeeklyCard from "../components/weeklyCard";
import { weeklySchedules } from "../data/WeeklyData";
import DepartmentCard from "../components/DepartmentCard";
import { departments } from "../data/DepartmentData";
import ProgrammesHero from '../assets/images/Program-Hero.svg';


const Programmes = () =>{
     const [activeTab, setActiveTab] = useState("weekly");

    return(
        <div className="gap-9 flex flex-col mt-8 ">
             <section className=" relative w-full min-h-[50vh] md:min-h-[70vh] lg:min-h-screen flex items-center justify-start ">
                <img
                 src={ProgrammesHero}
                 alt="Hero Background"
                 className="absolute inset-0 w-full h-full object-cover object-top md:object-center "
                 />
                  <div className="absolute inset-0 bg-black/50 z-0"></div>
                  <div className=" px-4 z-10 w-full max-w-7xl mx-auto mt-20 text-center ">
                     <h1 className="text-xl sm:text-lg md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
                      Church Schedule </h1>
            </div>
            </section>

             <div className="bg-white top-20 z-40">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center gap-5">
                        <button
                            onClick={() => setActiveTab("weekly")}
                            className={`py-4 px-6 font-semibold transition-all ${
                                activeTab === "weekly"
                                    ? "text-[#DB241E] ]"
                                    : "text-gray-600 hover:text-[#DB241E]"
                            }`}
                        >
                            Weekly
                        </button>
                        <button
                            onClick={() => setActiveTab("department")}
                            className={`py-4 px-6 font-semibold transition-all ${
                                activeTab === "department"
                                    ? "text-[#DB241E] "
                                    : "text-gray-600 hover:text-[#DB241E]"
                            }`}
                        >
                            Department
                        </button>
                    </div>
                </div>
            </div>
            <div className=" px-4 md:px-8">
                {activeTab === "weekly" && (
                    <div className="space-y-8">
                        <WeeklyCard
                             schedules={weeklySchedules}
                             bgColor="bg-[#DB241E]"
                             textColor="text-white"
                        />
                    </div>
                )}
                {activeTab === "department" && (
                    <div className="space-y-8">
                         <DepartmentCard
                            departments={departments}
                            bgColor="bg-[#DB241E]"
                            textColor="text-white"
                            headerBgColor="bg-[#DB241E]"
                        />
                  
                    </div>
                )}
                </div>
           
         </div>
    )
}

export default Programmes;