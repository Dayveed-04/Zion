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
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer flex flex-col items-start p-4 sm:p-6"
    >
      <div className="mb-3 sm:mb-4">
        <img 
          src={iconUrl} 
          alt={title} 
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
        />
      </div>
      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">{title}</h3>
      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default InfoCard;