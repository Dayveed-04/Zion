import Calendar from '../assets/images/Calendar.svg';
import Clock from '../assets/images/Clock.svg';

interface EventCardProps {
  title: string;
  tagLabel: string;
  tagColor: string;
  date: string;
  time?: string;
  description: string;
}

const EventCard = ({ title, tagLabel, tagColor, date, time, description }: EventCardProps) => {
  return (
    <div className={`bg-white rounded-lg border-l-4 border-[#D92521] shadow-md p-4 sm:p-5 hover:shadow-lg transition-shadow`}>
      <div className="flex justify-between items-start mb-2 sm:mb-3">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 flex-1 pr-2">{title}</h3>
        <span className={`${tagColor} text-black text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-0.5 sm:py-1 rounded-full whitespace-nowrap`}>
          {tagLabel}
        </span>
      </div>

      <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
         <img src={Calendar} alt="Calendar" className="w-3 h-3 sm:w-3 sm:h-3 flex-shrink-0" />
          <p className="font-medium">{date}</p>
      </div>
    
        <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
          {time && (
            <>
              <img src={Clock} alt="Clock" className="w-3 h-3 sm:w-3 sm:h-3 flex-shrink-0" />
              <p className="text-[10px] sm:text-xs">{time}</p>
            </>
          )}
        </div>

      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
};

export default EventCard;