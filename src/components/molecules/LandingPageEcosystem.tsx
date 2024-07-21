/* eslint-disable @next/next/no-img-element */
import React from "react";

const LandingPageEcosystem = () => {
  return (
    <div className="ecosystem-section lg:px-12 sm:px-6 px-4">
      <div className="container-1440 py-16">
        <h2 className="font-semibold text-center text-[#191818]">
          Ecosystem Health Monitoring
        </h2>
        <h5 className="text-center text-[#191818]">
          Explore stunning images showcasing the beauty of various ecosystems
          around the world.
        </h5>
        <div className="grid grid-cols-3 gap-6 mt-12">
          <div>
            <img
              src="https://images.unsplash.com/photo-1625472603517-1b0dc72846ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDgwNDY2NXw&ixlib=rb-4.0.3&q=80&w=1080"
              alt="ecosystem 1"
              className="w-full max-h-[300px] object-cover rounded"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1625472603517-1b0dc72846ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDgwNDY2NXw&ixlib=rb-4.0.3&q=80&w=1080"
              alt="ecosystem 1"
              className="w-full max-h-[300px] object-cover rounded"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1625472603517-1b0dc72846ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDgwNDY2NXw&ixlib=rb-4.0.3&q=80&w=1080"
              alt="ecosystem 1"
              className="w-full max-h-[300px] object-cover rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageEcosystem;
