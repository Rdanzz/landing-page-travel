import { useState } from "react";
import logo from "./assets/logo.png";
import { CiMenuBurger } from "react-icons/ci";
import { BiBookAlt, BiLoader, BiMale } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { TbDoorExit } from "react-icons/tb";
import Navigation from "./components/Navigation";
import LoginSign from "./components/LoginSign";
import { motion } from "framer-motion";

export default function App() {
  const [showNavigations, setShowNavigations] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const toggleNavigations = () => {
    setShowNavigations(!showNavigations);
  };

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  return (
    <div>
      <nav className="py-6 px-4">
        <div className="lg:mx-24">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <img className="w-32 order-1 sm:order-2" src={logo} alt="Logo" />

            <div className="order-2 hidden lg:block">
              <ul className="flex gap-16 text-gray-500">
                <li>Home</li>
                <li>Discover</li>
                <li>Special</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* Menu Button */}
            <div
              className="bg-blue-500 p-3 rounded-lg cursor-pointer order-2 lg:hidden sm:order-1 hover:bg-blue-800 transition"
              onClick={toggleNavigations}
            >
              <button>
                <CiMenuBurger size={20} color="white" strokeWidth={3} />
              </button>
            </div>

            {/* Button Login and SignUp (Hidden on small screens) */}
            <div className="order-3 hidden sm:block">
              <button className="grow bg-white px-8 py-4 font-semibold rounded-full text-sm">
                Login
              </button>
              <button className="grow bg-blue-800 px-8 py-4 font-bold rounded-full text-sm text-white">
                SignUp
              </button>
            </div>
          </div>

          {/* Bottom Navigation (with motion) */}
          {showNavigations && (
            <div className="fixed bottom-0 right-0 left-0 p-4 border">
              <motion.ul
                className="flex justify-between"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Navigation icon={IoHomeOutline} label="Home" isActive={true} />
                <Navigation icon={BiBookAlt} label="Discover" />
                <Navigation icon={BiLoader} label="Special" />
                <Navigation icon={BiMale} label="Contact" />
                <Navigation
                  icon={TbDoorExit}
                  label="More"
                  onClick={toggleButtons}
                />
              </motion.ul>

              {/* Display Login/SignUp Buttons when More is clicked */}
              {showButtons && <LoginSign />}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
