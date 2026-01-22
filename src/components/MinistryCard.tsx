interface MinistryCardProps {
  title: string;
  description: string;
  bgColor?: string;
}

const MinistryCard = ({ title, description, bgColor = 'bg-red-100' }: MinistryCardProps) => {
  return (
    <div className={`${bgColor} rounded-lg p-4 sm:pb-6 shadow-md`}>
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{title}</h3>
      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
};

export default MinistryCard;