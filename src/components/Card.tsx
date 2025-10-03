

interface CardProps {
  header: string;
  paragraph: string[];
  imageUrl?: string;
  imagePosition?: 'left' | 'right';
  textAlign?: 'left' | 'right' | 'center';
  bgColor?: string;
  textColor?: string;
  headerColor?: string;
  imageClassName?: string;
}

const Card = ({ 
  header,
  paragraph,
  imageUrl, 
  imagePosition = 'right',
  textAlign = 'left',
  bgColor = 'bg-white',
  textColor = 'text-gray-800',
  headerColor = 'text-gray-900',
  imageClassName = ''
}: CardProps) => {
  const isImageLeft = imagePosition === 'left';
  const alignmentClass = textAlign === 'left' ? 'text-left' : textAlign === 'right' ? 'text-right' : 'text-center';
  
  return (
    <div className={`w-full ${bgColor} rounded-lg shadow-lg overflow-hidden max-w-3xl mx-auto pb-9`}>
      <div className={`flex   ${isImageLeft ? 'flex-row' : 'flex-row-reverse'} flex-nowrap`}>
         {imageUrl && (
          <div className="flex-1 p-6 p-2 md:p-6  min-w-[80px] md:min-w-[100px] max-w-[200px] md:max-w-[300px]">
            <img 
              src={imageUrl} 
              alt={header}
              className={`w-full h-auto max-h-80 object-cover rounded-lg ${imageClassName}`}
            />
          </div>
        )}
        <div className={`flex-1 p-2 md:p-4 flex flex-col justify-center ${alignmentClass}`}>
          <h3 className={`text-sm sm:text-xs md:text-2xl font-bold mb-2 md:mb-4   ${headerColor}`}>{header}</h3>
          { paragraph.map((para,index) =>(
          <p key={index} className={`text-xs sm:text-sm md:text-xl my-2  leading-relaxed  ${textColor}`}>{para}</p>))}
        </div>
      </div>
    </div>
  );
}; 

export default Card;