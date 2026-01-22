interface ValueCardProps {
  title: string;
  description: string;
}

const ValueCard = ({ title, description }: ValueCardProps) => {
  return (
    <div className="text-center">
      <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{title}</h3>
      <p className="text-xs sm:text-sm text-white/90">{description}</p>
    </div>
  );
};

export default ValueCard;