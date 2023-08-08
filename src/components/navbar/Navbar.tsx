import List from "../list";
import HamburgerMenu from "../hamburgerMenu";
import { useState } from "react";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const onHandleClick = (): void => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <div className="h-[70px] z-10 bg-[#161a1d] fixed w-screen p-3  flex justify-between items-center transition-all duration-700">
      <h1 className="font-mono text-white font-bold md:text-xl text-lg transition-all duration-1000">
        LOGO
      </h1>
      <button className="group md:hidden z-30" onClick={onHandleClick}>
        <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[48px] h-[48px] transform transition-all bg-[#161a1d] ring-0 ring-gray-300 hover:ring-4 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
          <div className="flex flex-col justify-between w-[24px] h-[24px] transform transition-all duration-300 origin-center overflow-hidden ">
            <div
              className={`bg-white h-[3px] w-8 rounded transform transition-all duration-300 origin-left  ${
                openMenu && "rotate-[42deg]"
              } 
              `}
            ></div>
            <div
              className={`bg-white h-[3px] w-2/3 rounded transform transition-all duration-300  0 ${
                openMenu && "hidden"
              } `}
            ></div>
            <div
              className={`bg-white h-[3px] w-8 rounded transform transition-all duration-300 origin-left ${
                openMenu && "-rotate-[42deg]"
              }`}
            ></div>
          </div>
        </div>
      </button>

      <List
        display="hidden"
        direction="flex-row"
        gap=""
        height=""
        text="text-xl"
        align=""
        setOpenMenu={setOpenMenu}
      />
      <HamburgerMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </div>
  );
};

export default Navbar;
