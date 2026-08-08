import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import { useState } from "react";
import { Menu } from "lucide-react";
import Button from "./Buton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className=" fixed w-full top-0 left-0 z-50 bg-white shadow-md ">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex-1 md:hidden"></div>
        <div className="flex  justify-center md:justify-start w-16 h-16">
          <img src={Logo} alt="logo" className="w-full h-full object-contain" />
        </div>
        <div className="flex-1 flex justify-end md:hidden">
          <button
            className="  flex items-center "
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6 text-foreground" />
          </button>
        </div>

        <nav className="hidden md:flex items-center space-x-8 flex-1 justify-end">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-extralight  font-sans transition-colors hover:text-primary ${
                isActive
                  ? "text-yellow-500 underline underline-offset-4"
                  : "text-muted-foreground"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm font-extralight transition-colors hover:text-primary ${
                isActive
                  ? "text-yellow-500 underline underline-offset-4"
                  : "text-muted-foreground"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              `text-sm font-extralight transition-colors hover:text-primary ${
                isActive
                  ? "text-yellow-500 underline underline-offset-4"
                  : "text-muted-foreground"
              }`
            }
          >
            Events
          </NavLink>
          <NavLink
            to="/ministers"
            className={({ isActive }) =>
              `text-sm font-extralight transition-colors hover:text-primary ${
                isActive
                  ? "text-yellow-500 underline underline-offset-4"
                  : "text-muted-foreground"
              }`
            }
          >
            Ministers
          </NavLink>
          <NavLink
            to="/giving"
            className={({ isActive }) =>
              `text-sm font-extralight transition-colors hover:text-primary ${
                isActive
                  ? "text-yellow-500 underline underline-offset-4"
                  : "text-muted-foreground"
              }`
            }
          >
            Giving
          </NavLink>
          <NavLink
            className="text-sm font-extralight"
            to="/visit"
            onClick={() => setIsOpen(false)}
          >
            <div className="scale-50 sm:scale-100">
              <Button text="Visit us" bgColor="bg-black" />
            </div>
          </NavLink>
        </nav>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col p-4 space-y-4 items-center">
            <NavLink
              className="text-sm font-extralight"
              to="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              className="text-sm font-extralight"
              to="/about"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              className="text-sm font-extralight"
              to="/events"
              onClick={() => setIsOpen(false)}
            >
              Events
            </NavLink>
            <NavLink
              className="text-sm font-extralight"
              to="/ministers"
              onClick={() => setIsOpen(false)}
            >
              Ministers
            </NavLink>
            <NavLink
              className="text-sm font-extralight"
              to="/giving"
              onClick={() => setIsOpen(false)}
            >
              Giving
            </NavLink>
            <NavLink
              className="text-sm font-extralight"
              to="/visit"
              onClick={() => setIsOpen(false)}
            >
              <Button text="Visit us" bgColor="bg-black" />
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
