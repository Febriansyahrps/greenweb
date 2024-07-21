import { Button, Dropdown } from "antd";
import React, { useEffect, useState } from "react";
import HeaderFeaturesDropdown from "../molecules/HeaderFeaturesDropdown";
import { Header as AntdHeader } from "antd/lib/layout/layout";

const Header = () => {
  const [headerActive, setHeaderActive] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const scrollDirectionHandler = () => {
      setScrollPosition(window.scrollY);
      if (window.scrollY > 50) {
        setHeaderActive(true);
      } else {
        setHeaderActive(false);
      }
    };
    window.addEventListener("scroll", scrollDirectionHandler);
    return () => {
      window.removeEventListener("scroll", scrollDirectionHandler);
    };
  }, []);

  const mouseEnterHandler = () => {
    setHeaderActive(true);
  };

  const mouseLeaveHandler = () => {
    if (scrollPosition <= 50) {
      setHeaderActive(false);
    } else {
      setHeaderActive(true);
    }
  };

  return (
    <header
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className={
        headerActive
          ? "fixed header-section bg-[#fff] w-full lg:px-12 sm:px-6 px-4 shadow-md"
          : "fixed header-section  w-full lg:px-12 sm:px-6 px-4 "
      }
    >
      <div className="container-1440">
        <AntdHeader>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-10">
              <h3
                className={
                  headerActive
                    ? "font-bold text-[#191818]"
                    : "font-bold text-[#fff]"
                }
              >
                GreenWeb
              </h3>
              <HeaderFeaturesDropdown />
            </div>
            <div className="flex gap-4">
              <Button type="primary">Login</Button>
              <Button>Register</Button>
            </div>
          </div>
        </AntdHeader>
      </div>
    </header>
  );
};

export default Header;
