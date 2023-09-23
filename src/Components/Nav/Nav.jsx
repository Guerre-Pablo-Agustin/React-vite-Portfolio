//react
import { useState } from "react";
//Icons
import {
  RiCheckboxBlankCircleFill,
  RiMenu3Fill,
  RiCloseLine,
} from "react-icons/ri";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className=" italic flex items-center w-full p-6 h-[10vh] justify-between xl:justify-start">
      <div className="hl:w-1/6 text-center">
        <span className="font-bold text-4xl relative p-1 bg-white">
          Portfolio <span className="text-primary">.</span>
          <RiCheckboxBlankCircleFill className="absolute -left-3 -bottom-3 text-primary -z-10" />
        </span>
      </div>
      <nav
        className={`fixed italic w-[80%] md:w-[60%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static
         flex-1 flex flex-col xl:flex-row items-center justify-center gap-10
         transition-all duration-500 z-50 max-[900px]:bg-primary`}
      >
        <a href="#Home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <button onClick={() => setShowMenu(!showMenu)} className="xl:hidden text-4xl">
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-4xl"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
  );
};

export default Nav;
