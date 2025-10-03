interface WeekItem {
  title: string;
  schedule: string;
}

interface WeeklyCardProps {
  schedules: WeekItem[];
  bgColor?: string;
  textColor?: string;
}

const WeeklyCard = ({ 
  schedules,
  bgColor = 'bg-white',
  textColor = 'text-gray-800'
}: WeeklyCardProps) => {
  return (
    <div className={`${bgColor} rounded-lg shadow-lg p-6 max-w-3xl mx-auto`}>
      <div className="space-y-4">
        {schedules.map((item, index) => (
          <div key={index} className="grid grid-cols-2 gap-2 ">
            <h3 className={`text-sm sm:text-base md:text-2xl font-bold ${textColor}`}>
              {item.title}
            </h3>
            <p className={`text-xs sm:text-sm md:text-xl  ${textColor}`}>
              {item.schedule}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyCard;