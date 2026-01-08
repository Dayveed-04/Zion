interface MinistryCardProps {
  title: string;
  description: string;
  bgColor?: string;
}

const MinistryCard = ({ title, description, bgColor = 'bg-red-100' }: MinistryCardProps) => {
  return (
    <div className={`${bgColor} rounded-lg p-6 shadow-md`}>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
};

export default MinistryCard;