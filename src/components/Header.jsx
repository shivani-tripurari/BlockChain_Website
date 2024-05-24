import { useLocation } from "react-router-dom";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import { useState } from "react";
import Button from "./Button.jsx";
import MenuSvg from "../assets/svg/MenuSvg.jsx";
import { HamburgerMenu } from "./design/Header.jsx";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { Link } from "react-router-dom";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };
  const handleClick = () => {
    if (!openNavigation) {
      return;
    }
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdropbackdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-4 lg:px-6.9 xl:px-8 py-1.7 max-lg:py-3">
        <a className="block w-12rem xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row ">
            {navigation.map((item) =>
              item.samePage ? (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase text-n-1 transition-colors  {item.onlyMobile ? 'lg:hidden': ''} px-4 py-4 md:py-8 lg:mr-0.25 text-xs font-semibold 
                ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg: leading-5 hover:text-n-1 xl:px-12 `}
                >
                  {item.title}
                </a>
              ) : (
                <Link
                  key={item.id}
                  to={item.url}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase text-n-1 transition-colors ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-4 py-4 md:py-8 lg:mr-0.25 text-xs font-semibold 
                  ${
                    item.url === pathname.hash
                      ? "z-2 lg:text-n-1"
                      : "lg:text-n-1/50"
                  } lg: leading-5 hover:text-n-1 xl:px-12`}
                >
                  {item.title}
                </Link>
              )
            )}
          </div>

          <HamburgerMenu />
        </nav>

        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors
        hover:text-n-1 lg:block"
        >
          New account
        </a>
        <Button className="hidden lg:flex " href="#login">
          Sign in
        </Button>

        <Button
          px="px-3"
          className="ml-auto lg:hidden"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
