import { NavLink } from "react-router-dom";
import Logo from '../assets/images/logo.svg';
import { useState } from "react";
import { Menu } from "lucide-react"; 


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className=" fixed w-full top-0 left-0 z-50 bg-white shadow-sm ">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
         <div className="flex-1 md:hidden"></div>
          <div className="flex  justify-center md:justify-start w-16 h-16">
               <img src={Logo} alt="logo"  className="w-full h-full object-contain"  />
          </div>
          <div className="flex-1 flex justify-end md:hidden">
            <button
              className="  flex items-center "
              onClick={() => setIsOpen(!isOpen)}
             >
              <Menu className="w-6 h-6 text-foreground" />
            </button>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center" >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-yellow-500 underline underline-offset-4' : 'text-muted-foreground'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/programmes"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-yellow-500 underline underline-offset-4' : 'text-muted-foreground'
              }`
            }
          >
            Programmes
          </NavLink>
          <NavLink
            to="/memories"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-yellow-500 underline underline-offset-4' : 'text-muted-foreground'
              }`
            }
          >
            Memories
          </NavLink>
          <NavLink
            to="/offerings"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-yellow-500 underline underline-offset-4' : 'text-muted-foreground'
              }`
            }
          >
            Offerings
          </NavLink>
        </nav>
      </div>

       {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col p-4 space-y-4 items-center">
            <NavLink to="/" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/programmes" onClick={() => setIsOpen(false)}>
              Programmes
            </NavLink>
            <NavLink to="/memories" onClick={() => setIsOpen(false)}>
              Memories
            </NavLink>
            <NavLink to="/offerings" onClick={() => setIsOpen(false)}>
              Offerings
            </NavLink>
          </nav>
        </div>
      )} 
    </header>
  );
};

export default Header;