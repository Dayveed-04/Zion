interface InfoCardProps {
  iconUrl: string;
  title: string;
  description: string;
  onClick?: () => void;
}

const InfoCard = ({ iconUrl, title, description, onClick }: InfoCardProps) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer flex flex-col items-start"
    >
      <div className="mb-4">
        <img 
          src={iconUrl} 
          alt={title} 
          className="w-12 h-12 object-contain"
        />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default InfoCard;