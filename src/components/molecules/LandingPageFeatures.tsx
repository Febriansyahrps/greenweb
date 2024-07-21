/* eslint-disable @next/next/no-img-element */
import { Button } from "antd";
import React from "react";

const LandingPageFeatures = () => {
  return (
    <div className="feature-section lg:px-12 sm:px-6 px-4">
      <div className="container-1440 py-16">
        <div className="feature-item grid grid-cols-2 gap-10 mb-12">
          <div>
            <img
              src="https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDgwNDY2NXw&ixlib=rb-4.0.3&q=80&w=1080"
              alt="features"
              className="w-full h-[400px] object-cover rounded"
            />
          </div>
          <div className="flex justify-center flex-col text-left">
            <p className="text-[#191818]">
              Monitor and reduce your impact on the environment
            </p>
            <h2 className="text-[#191818] font-semibold my-4">
              Track Your Carbon Footprint
            </h2>
            <h5 className="text-[#191818]">
              Use our tools to calculate and track your carbon footprint over
              time, and receive personalized tips on how to reduce it.
            </h5>
          </div>
        </div>
        <div className="feature-item grid grid-cols-2 gap-10 my-12">
          <div>
            <img
              src="https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDgwNDY2NXw&ixlib=rb-4.0.3&q=80&w=1080"
              alt="features"
              className="w-full h-[400px] object-cover rounded"
            />
          </div>
          <div className="flex justify-center flex-col text-left">
            <p className="text-[#191818]">
              Monitor and reduce your impact on the environment
            </p>
            <h2 className="text-[#191818] font-semibold my-4">
              Track Your Carbon Footprint
            </h2>
            <h5 className="text-[#191818]">
              Use our tools to calculate and track your carbon footprint over
              time, and receive personalized tips on how to reduce it.
            </h5>
          </div>
        </div>
        <div className="feature-item grid grid-cols-2 gap-10 my-12">
          <div>
            <img
              src="https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDgwNDY2NXw&ixlib=rb-4.0.3&q=80&w=1080"
              alt="features"
              className="w-full h-[400px] object-cover rounded"
            />
          </div>
          <div className="flex justify-center flex-col text-left">
            <p className="text-[#191818]">
              Monitor and reduce your impact on the environment
            </p>
            <h2 className="text-[#191818] font-semibold my-4">
              Track Your Carbon Footprint
            </h2>
            <h5 className="text-[#191818]">
              Use our tools to calculate and track your carbon footprint over
              time, and receive personalized tips on how to reduce it.
            </h5>
          </div>
        </div>
        <div className="mt-24 text-center text-[#191818] ">
          <h2 className="font-semibold">Track Your Impact</h2>
          <h5 className="mt-6 mb-7">
            Use our carbon footprint calculator to measure your environmental
            impact and learn how to reduce it.
          </h5>
          <div className="flex justify-center gap-4">
            <Button type="primary">Calculate Your Carbon Footprint</Button>
            <Button>Join the Discussion Forum</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageFeatures;
