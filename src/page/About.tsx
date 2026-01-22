import InfoCard from '../components/InfoCard';
import MinistryCard from '../components/MinistryCard';
import ValueCard from '../components/ValueCard';
import LoveIcon from '../assets/images/LoveIcon.svg';
import CommunityIcon from '../assets/images/CommunityIcon.svg';
import GlobeIcon from '../assets/images/GlobeIcon.svg';
import BibleIcon from '../assets/images/BibleIcon.svg';


const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          Discover our journey, mission, and the divine calling that guides Zion the 
        </p>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            City of the Lord Ministries.
        </p>
      </section>

      <section className="bg-red-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">Our Journey</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
               Zion the City of the Lord Ministries Inc. was founded by our late father,Apostle Alexander Oyewole Bangbola, and commenced service <br/>
                on May 2, 1999 at his living room at 33A Cooper Road, Ikoyi Lagos.
           </p>
            <p>
              This is a follow up to a divine calling he received in clear dream on march 1 , 1999 where God had shown him the name of the Ministry <br/>
              from Isaiah 60:14
            </p>
            <p>
              He was told specifically not to invite anyone, but start only with his wife, Pastor(Mrs.) Grace Oibagie
             </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <h2 className="text-xl md:text-3xl font-bold text-gray-900 text-center mb-10">Our Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoCard
            iconUrl={LoveIcon}
            title="Love and Fellowship"
            description="Building a community rooted in Christ's love and genuine fellowship"
          />
          <InfoCard
            iconUrl={BibleIcon}
            title="Biblical Teaching"
            description="Grounding our faith in the Word of God through sound biblical teaching"
          />
          <InfoCard
            iconUrl={CommunityIcon}
            title="Community Service"
            description="Serving our community and reaching out to those in need"
          />
          <InfoCard
            iconUrl={GlobeIcon}
            title="Global Impact"
            description="Spreading the gospel message to all nations"
          />
        </div>
      </section>

      <section className="bg-[#DB241E] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-10">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              title="Faith"
              description="Trusting in God's promises and His unfailing love."
            />
            <ValueCard
              title="Prayer"
              description="Maintaining constant communion with God throught prayer"
            />
            <ValueCard
              title="Unity"
              description="Working together as one body in Christ"
            />
          </div>
        </div>
      </section>


      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">Our Ministry Focus</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MinistryCard
            title="Daughters of Zion Women's Ministry"
            description="Daughters of Zion(DOZ) is our powerful women's ministry dedicated to empowering women through prayer, fellowship,and spiritual growth.We host regular vigils,prayer meetings, and special programs throughout the year including the Doz Vigil, Praying Mothers, and Woman Thou Art Loose programs."
          />
          <MinistryCard
            title="Children's Ministry"
            description=" Our Children's Department is committed to nuturing the next generation with age-appropriate teaching, engaging activities, and a strong foundation in biblical principles.we have a full calendar of events designed to help children grow in their faith."
          />
          <MinistryCard
            title="Family Ministry"
            description='We believe in strengthening families through programs like "Your Spouse Your BestFriend" and family-oriented events that build strong Christ-centered relationships.'
          />
          <MinistryCard
            title="Prayer Ministry"
            description="Prayer is the  foundation of our ministry. With weekly prayer sessions, monthly vigils,and mountain prayer retreats,we maintain a strong culture of intercession and seeking God's face."
          />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;