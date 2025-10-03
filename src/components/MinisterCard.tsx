import React from 'react';

interface MinsterCardProps {
  imageUrl: string;
  title: string;
  description: string;
  bgColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  isFirst?: boolean;
}

const MinisterCard: React.FC<MinsterCardProps> = ({
  imageUrl,
  title,
  description,
  bgColor = 'bg-white',
  titleColor = 'text-gray-900',
  descriptionColor = 'text-gray-600',
  isFirst = false
}) => {
  return (
    <div className={`${bgColor} border border-gray-100 rounded-lg shadow-lg p-6 flex flex-col items-center text-center w-full ${isFirst ? 'mb-16' : ''}`}>
      <img 
        src={imageUrl} 
        alt={title}
        className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover mb-4"
      />
      <h3 className={`text-sm md:text-3xl font-bold mb-2 md:mb-4  ${titleColor}`}>{title}</h3>
      <p className={`${isFirst ? 'text-lg font-medium' : 'text-base'} text-xs md:text-xl leading-relaxed ${descriptionColor}`}>
        {description}
      </p>
    </div>
  );
};

export default MinisterCard ;
