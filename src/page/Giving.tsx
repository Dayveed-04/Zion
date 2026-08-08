import InfoCard from "../components/InfoCard";
import LoveIcon from "../assets/images/LoveIcon.svg";
import EventsIcon from "../assets/images/EventIcon.svg";
import CommunityIcon from "../assets/images/CommunityIcon.svg";
import AccountCard from "../components/AccountCard";

const Giving = () => {
  return (
    <div className="min-h-screen bg-white ">
      <section className="max-w-4xl mx-auto px-4 py-12 max-md:py-8 text-center mb-16 max-md:mb-10 mt-8">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          Tithes And Offering
        </h1>
        <p className="text-gray-600 mb-2 max-md:text-sm">
          Honor the Lord with your wealth and with the first fruits of all your
          produce
        </p>
        <p className="text-[#DB241E] font-semibold">- Proverbs 3:9</p>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-32 max-md:pb-16">
        <div className="border-4 border-[#DB241E] rounded-lg p-8 max-md:p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-md:gap-6">
            <InfoCard
              iconUrl={LoveIcon}
              title="Worship & Gratitude"
              description="Giving is an act of worship, expressing our gratitude to God for His abundant blessings"
            />
            <InfoCard
              iconUrl={EventsIcon}
              title="Kingdom Work"
              description="Your gifts support the ministry, outreach programs, and the maintenance of God's house"
            />
            <InfoCard
              iconUrl={CommunityIcon}
              title="Helping Others"
              description="Together we can make a greater impact in our community and reach more souls for Christ"
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-32 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-40 max-md:mb-20">
          <AccountCard
            title="Tithes and Offering"
            accountNo="0000000000"
            bankName="Sterling Bank"
          />
          <AccountCard
            title="Building Fund"
            accountNo="0012197903"
            bankName="Sterling Bank"
          />
        </div>
      </section>
    </div>
  );
};

export default Giving;
