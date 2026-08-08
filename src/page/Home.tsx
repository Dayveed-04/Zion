import Button from "../components/Buton";
import HomeHero from "../assets/images/Home-Hero.svg";
import InfoCard from "../components/InfoCard";
import LoveIcon from "../assets/images/LoveIcon.svg";
import CommunityIcon from "../assets/images/CommunityIcon.svg";
import GlobeIcon from "../assets/images/GlobeIcon.svg";
import EventIcon from "../assets/images/EventIcon.svg";
import Event from "../components/Event";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="gap-9 flex flex-col mt-8 ">
      <section className="relative w-full h-[60vh] md:h-[80vh] lg:h-screen flex items-center justify-center overflow-hidden">
        <img
          src={HomeHero}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover object-cover"
        />
        <div className="absolute inset-0 bg-[#D92521]/30 z-0"></div>
        <div className="relative z-10 px-2 sm:px-4 md:px-6 lg:px-8 w-full flex items-center flex-col">
          <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-light font-sans text-white mb-3 leading-tight">
            Welcome to Zion
          </h1>
          <p className="text-sm sm:text-base md:text-xl lg:text-xl font-light font-sans text-white">
            Zion The City Of The Lord Ministries Inc.
          </p>
          <p className="text-sm sm:text-base md:text-xl lg:text-xl font-light font-sans text-white">
            Come and join our family{" "}
          </p>
          <div className="flex flex-row sm:flex-row gap-4 items-start mt-3 ">
            <div className="flex gap-4  origin-left font-sans">
              <Button
                text="View Events"
                bgColor="bg-black"
                fontFamily="font-sans"
                fontWeight="font-light"
                borderRadius="rounded-xl"
                onClick={() => navigate("/events")}
              />
              <Button
                text="Plan Your visit"
                bgColor="bg-opacity-20 bg-black"
                fontFamily="font-sans"
                fontWeight="font-light"
                borderRadius="rounded-xl"
                onClick={() => navigate("/visit")}
              />
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/30 rounded-full blur-xl"></div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoCard
            iconUrl={LoveIcon}
            title="Our Mission"
            description="Learn about our calling and purpose in serving the community"
          />
          <InfoCard
            iconUrl={EventIcon}
            title="Events"
            description="Learn about our calling and purpose in serving the community"
          />
          <InfoCard
            iconUrl={CommunityIcon}
            title="Leadership"
            description="Learn about our calling and purpose in serving the community"
          />
          <InfoCard
            iconUrl={GlobeIcon}
            title="Visit Us"
            description="Learn about our calling and purpose in serving the community"
          />
        </div>
      </section>
      <section className="bg-red-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Upcoming Events
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Event
              frequency="Every Tuesday"
              title="DOZ Weekly Prayer"
              time="11:30 PM - 12:30 AM"
            />
            <Event
              frequency="2nd Friday Monthly"
              title="DOZ Vigil"
              time="11:30 PM - 12:30 AM"
            />
            <Event
              frequency="3rd Sunday Monthly"
              title="Praying Mothers"
              time="11:30 PM - 12:30 AM"
            />
          </div>

          <div className="flex justify-center">
            <Button
              text="View Full Calendar"
              bgColor="bg-[#D92521]"
              fontFamily="font-sans"
              fontWeight="font-light"
              borderRadius="rounded-xl"
              onClick={() => navigate("/events")}
            />
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center flex-col mb-16 px-4 text-center">
        <h2 className="text-lg sm:text-xl font-bold mb-4">
          Join Our Community
        </h2>
        <p className="mb-4 text-sm sm:text-base md:text-xl lg:text-xl">
          We invite you to be part of our growing family. Experience the love,
        </p>
        <p className="mb-6 text-sm sm:text-base md:text-xl lg:text-xl">
          fellowship,and spiritual growth at Zion City of the Lord.
        </p>
        <Button
          text="Plan Your Visit"
          bgColor="bg-[#D92521]"
          fontFamily="font-sans"
          fontWeight="font-light"
          borderRadius="rounded-xl"
          onClick={() => navigate("/visit")}
        />
      </section>
    </div>
  );
};

export default Home;
