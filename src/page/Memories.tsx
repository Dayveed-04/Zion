import { useState } from "react";
import MemoriesHero from '../assets/images/Memories.svg';



export const Memories = () => {
    const[activeTab, setActiveTab] = useState("Albums");
    return(
        <div className="gap-9 flex flex-col mt-8 ">
             <section className=" relative w-full min-h-[50vh] md:min-h-[70vh] lg:min-h-screen flex items-center justify-start ">
                <img
                 src={MemoriesHero}
                 alt="Hero Background"
                 className="absolute inset-0 w-full h-full object-cover object-top md:object-center "
                 />
                  <div className="absolute inset-0 bg-black/50 z-0"></div>
                  <div className=" px-4 z-10 w-full max-w-7xl mx-auto mt-20 text-center">
                     <h1 className="text-xl sm:text-lg md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                      Memories </h1>
                   </div>
             </section>
               <div className="top-20 z-40">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center gap-8">
                        <button
                            onClick={() => setActiveTab("Albums")}
                            className={`py-4 px-6 font-semibold transition-all ${
                                activeTab === "Albums"
                                    ? "text-[#DB241E] ]"
                                    : "text-gray-600 hover:text-[#DB241E]"
                            }`}
                        >
                            Albums
                        </button>
                        <button
                            onClick={() => setActiveTab("POV")}
                            className={`py-4 px-6 font-semibold transition-all ${
                                activeTab === "POV"
                                    ? "text-[#DB241E] "
                                    : "text-gray-600 hover:text-[#DB241E]"
                            }`}
                        >
                            POV
                        </button>
                    </div>
                </div>
            </div>
             <div className="container mx-auto px-4 md:px-8 pb-16">
                <div className="grid grid-cols-3 gap-3 md:gap-6">
                    {[...Array(6)].map((_, index) => (
                        <div
                            key={index}
                            className="aspect-square bg-[#DB241E] rounded-lg"
                        ></div>
                    ))}
                </div>
            </div>
        </div>

    )
}


export default Memories;