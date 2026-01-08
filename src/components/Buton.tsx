interface ButtonProps {
  text: string;
  bgColor?: string;   
  textColor?: string; 
   fontWeight?: string;      
  letterSpacing?: string;   
  fontFamily?: string;
  borderRadius?: string;
  onClick?: () => void;
}

const Button = ({
  text,
  bgColor = "bg-black",   
  textColor = "text-white", 
  fontWeight = "",       
  letterSpacing = "",
  fontFamily = "",  
  borderRadius = "",
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 text-md rounded-lg hover:opacity-90 transition ${bgColor} ${textColor} ${fontWeight} ${letterSpacing} ${fontFamily} ${borderRadius}`}
    >
      {text}
    </button>
  );
};

export default Button;
