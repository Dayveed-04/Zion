import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#971C1A] py-6">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 gap-4 md:gap-8 h-full place-items-start">
          <div className="text-left md:text-left order-2 md:order-1">
            <h3 className="font-semibold mb-2 text-sm md:text-base text-white">Zion</h3>
            <p className="text-muted-foreground not-italic text-xs md:text-sm leading-relaxed text-gray-400">
              Zion the city of the lord ministries
            </p>
            <div className="flex gap-3 mt-3">
              
               <a href="https://facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
              
                <FaFacebook size={18} />
              </a>
              
               <a href="https://instagram.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          <div className="text-right order-3 justify-self-end">
            <h3 className="font-semibold mb-2 text-sm md:text-base text-white">Address</h3>
            <address className="text-muted-foreground not-italic text-xs md:text-sm leading-relaxed text-gray-400">
              6, Zion close, Sangotedo, Ajah Lagos<br />
              Psalms 102:13
            </address>
          </div>
        </div>

        <div className="w-[calc(100%-6rem)] mx-auto h-px bg-black mt-8"></div>

        <p className="text-center text-sm text-gray-400 mt-3">
          ©2026Zion the City of the Lord Ministries Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;