import NavLinks, { NavLinksResponsive } from "./NavLinks";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Logo from "./NavbarLogo";
import { useState } from "react";

export default function Navbar(): JSX.Element {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="navbar bg-gray-900 lg:min-w-fit lg:w-[60%] lg:max-w-[850px] lg:px-3 lg:rounded-full mx-auto flex justify-around lg:mt-5">
      <div className="navbar-start">
        <div className="lg:hidden">
          <button className="p-3" onClick={toggleSidebar}>
            <img
              className=""
              src={"/images/burger.svg"}
              alt="bars"
              width={20}
              height={20}
            />
          </button>
          <NavLinksResponsive
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </div>
        <Logo />
      </div>
      <div className="navbar-center hidden lg:flex">
        <NavLinks />
      </div>

      <div className="navbar-end flex items-center gap-2">
        <ConnectButton
          showBalance={false}
          accountStatus={"full"}
          chainStatus={"icon"}
        />
      </div>
    </nav>
  );
}
