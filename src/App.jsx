import { useState } from "react";
import logo from "./assets/logo.png";
import hero from "./assets/hero.png";
import traveloka from "./assets/Traveloka.svg";
import booking from "./assets/Booking.svg";
import tiket from "./assets/tiket.com.svg";
import tripad from "./assets/Tripadvisor.svg";
import vector from "./assets/Vector.svg";
import Music from "./assets/Music.svg";
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
            <div className="fixed bottom-0 right-0 left-0 p-4 border backdrop-blur-sm bg-white bg-opacity-30">
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

      <section className="lg:px-28 py-16 lg:py-16 md:px-4">
        <div className="grid grid-cols-12">
          <div className="lg:col-span-6 col-span-12 order-2 lg:order-1">
            <div className="my-8">
              <button className="px-8 py-4 bg-white text-pink-400 flex gap-2 text-sm font-bold drop-shadow-sm-shadow rounded-full mx-auto lg:mx-0">
                Explore the World!
                <img src={vector} alt="vector" />
              </button>
              <h1 className="font-bold lg:text-start lg:text-[69px] text-[40px] md:text-[52px] text-center mt-4 mb-6 md:mb-[43px] md:mt-[43px] ">
                From Southeast Asia{" "}
                <span className="text-pink-400">to the World.</span>
              </h1>
              <p className="text-gray-400 text-center lg:w-full lg:text-start md:text-[18px] md:mb-[43px] w-3/4 mx-auto text-base mb-8">
                Stay updated with travel tips, recommendations, and latest
                promos.
              </p>
              <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-6">
                <button className="py-6 px-8 bg-blue-600 rounded-full text-white drop-shadow-sm-shadow text-sm font-bold">
                  Get started
                </button>
                <button className="py-6 px-8 bg-white rounded-full border border-blue-500 drop-shadow-sm text-sm font-bold flex justify-center items-center gap-2">
                  <img src={Music} alt="Music" className="w-6 h-6" /> Watch Demo
                </button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12 order-1">
            <img src={hero} alt="Hero" className="w-full" />
          </div>
        </div>
      </section>
    </div>
  );
}
