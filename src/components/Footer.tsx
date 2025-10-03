import Facebook from '../assets/images/Facebook.svg';
import Youtube from '../assets/images/Youtube.svg';
import Instagram from '../assets/images/Instagram.svg';
import Button from './Buton';

const Footer = () => {
  return (
    <footer className="w-full bg-secondary py-10">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 items-start">
          <div className="text-left md:text-left order-2 md:order-1">
            <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">Address</h3>
            <address className="text-muted-foreground not-italic text-xs md:text-sm leading-relaxed">
              6, Zion close, Sangotedo, Ajah
              Lagos<br />
              Psalms 102:13
            </address>
          </div>

      
          <div className="col-span-2 md:col-span-1 flex justify-center order-1 md:order-2">
            <div className="scale-75 md:scale-100">
              <Button
                text='Contact Us'
                bgColor='bg-[#EDCD15]'
              />
            </div>
          </div>

          <div className="text-right order-3">
            <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base hidden md:block">Connect with us</h3>
            <div className="flex justify-end space-x-3 md:space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={Facebook} alt="Facebook" className="w-6 h-6 md:w-7 md:h-7" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <img src={Youtube} alt="Youtube" className="w-6 h-6 md:w-7 md:h-7" />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} alt="Instagram" className="w-6 h-6 md:w-7 md:h-7" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;