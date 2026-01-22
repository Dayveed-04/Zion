interface EventProps {
  frequency: string;
  title: string;
  time: string;
}

const Event = ({ frequency, title, time }: EventProps) => {
  return (
    <div className="bg-white rounded-lg  shadow-md hover:shadow-lg p-3 sm:p-6 transition-shadow">
      <p className="text-xs sm-text-sm text-red-500 text-sm font-semibold mb-1 sm:mb-2">{frequency}</p>
      <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-xs text-sm text-gray-600">{time}</p>
    </div>
  );
};

export default Event;