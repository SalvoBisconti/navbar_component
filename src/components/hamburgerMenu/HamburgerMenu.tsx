import List from "../list";
import { Dispatch } from "react";
const HamburgerMenu = (props: {
  openMenu: boolean;
  setOpenMenu: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { openMenu, setOpenMenu } = props;

  return (
    <div
      className={`  ${
        openMenu ? " right-[0px] " : "h-0 w-0    "
      } z-20 fixed h-screen w-screen   bg-[#161a1d] top-[0px] right-[-1000px] p-3  flex justify-center items-center md:hidden  transition-all duration-[1300ms]`}
    >
      <List
        display={` ${openMenu ? "block" : "hidden"} `}
        direction={` ${openMenu ? "flex-col" : "flex-row"} `}
        gap={` ${openMenu ? "gap-8" : ""} `}
        height={` ${openMenu ? "h-1/2" : ""} `}
        text={` ${openMenu ? "text-4xl" : ""} `}
        align={` ${openMenu ? "items-center" : ""} `}
        setOpenMenu={setOpenMenu}
      />
    </div>
  );
};

export default HamburgerMenu;
