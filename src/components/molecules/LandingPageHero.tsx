import { Button } from "antd";
import React from "react";

const LandingPageHero = () => {
  return (
    <div className="hero-section h-screen w-full bg-center bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1574169208383-fb087432973a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDgwNDY2NXw&ixlib=rb-4.0.3&q=80&w=1920')]">
      <div className="hero-title bg-[#00000050] h-full flex justify-center items-center lg:px-12 sm:px-6 px-4">
        <div className="container-1440 flex-col  flex justify-center items-center ">
          <h1 className="text-[#fff] text-center font-semibold">
            Empower Yourself to Make a Difference
          </h1>
          <h3 className="text-[#fff] text-center mt-2">
            Track your carbon footprint and monitor ecosystem health
          </h3>
          <Button className="mt-6" type="primary">
            <h4>Join Us</h4>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPageHero;
