interface ButtonProps {
  text: string;
  bgColor?: string;   
  textColor?: string; 
  onClick?: () => void;
}

const Button = ({
  text,
  bgColor = "bg-black",   
  textColor = "text-white",   
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-9 py-2 rounded-lg hover:opacity-90 transition ${bgColor} ${textColor}`}
    >
      {text}
    </button>
  );
};

export default Button;
