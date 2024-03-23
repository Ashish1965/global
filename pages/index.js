import React, { useState } from "react";
import Forum from "@/components/Forum";
import Market from "@/components/Market";
import SideNavbar from "@/components/SideMenu";

const home = () => {
  const [item, setItem] = useState(true);

  return (
    <div>
      <div className="flex w-full justify-between md:hidden">
        <h1
          onClick={() => setItem(true)}
          className={
            item
              ? "font-bold bg-gray-800 text-white text-center py-4 px-4 w-1/2"
              : "font-bold py-4 px-4 bg-gray-600 text-white text-center w-1/2"
          }
        >
          DISSCUSSION FORUM
        </h1>
        <h1
          onClick={() => setItem(false)}
          className={
            !item
              ? "font-bold bg-gray-800 text-white text-center items-center py-4 px-4 w-1/2"
              : "font-bold py-4 px-4 bg-gray-600 text-white text-center items-center w-1/2"
          }
        >
          MARKET STORY
        </h1>
      </div>
      <div className="flex justify-center md:hidden">
        <SideNavbar />
        {item && <Forum />}
        {!item && <Market />}
      </div>

      <div className="hidden md:flex md:gap-10">
        <SideNavbar />
        <Forum />
        <Market />
      </div>
    </div>
  );
};

export default home;
