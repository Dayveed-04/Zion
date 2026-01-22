import { Calendar } from 'lucide-react';

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
    <div className={`bg-white rounded-lg border-l-4 ${tagColor.replace('bg-', 'border-')} shadow-md p-4 sm:p-5 hover:shadow-lg transition-shadow`}>
      <div className="flex justify-between items-start mb-2 sm:mb-3">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 flex-1 pr-2">{title}</h3>
        <span className={`${tagColor} text-white text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full whitespace-nowrap`}>
          {tagLabel}
        </span>
      </div>

      <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
        <Calendar size={16} className="flex-shrink-0" />
        <div>
          <p className="font-medium">{date}</p>
          {time && <p className="text-[10px] sm:text-xs">{time}</p>}
        </div>
      </div>

      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
};

export default EventCard;