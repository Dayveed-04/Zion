interface EventProps {
  frequency: string;
  title: string;
  time: string;
}

const Event = ({ frequency, title, time }: EventProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <p className="text-red-500 text-sm font-semibold mb-2">{frequency}</p>
      <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{time}</p>
    </div>
  );
};

export default Event;