import React from "react";

const Market = () => {
  return (
    <div className="w-full md:w-1/5 h-screen flex flex-col">
      <h1 className="hidden text-red-400 font-bold text-xl bg-gray-200 md:inline-block ml-5 p-3 rounded-md">
        Market Story
      </h1>
      <div className="flex flex-col p-5 border-gray-200 gap-5">
        
        <div className="flex flex-col border-2">
          <img src="/OIP.jfif" alt="" className="relative " />
          <div className="mx-4">
            <h1 className="font-bold py-2 mx-auto">The coldest sunset</h1>
            <p className="w-full py-1 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="flex flex-col border-2">
          <img src="/OIP.jfif" alt="" className="relative " />
          <div className="mx-4">
            <h1 className="font-bold py-2 mx-auto">The coldest sunset</h1>
            <p className="w-full py-1 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="flex flex-col border-2">
          <img src="/OIP.jfif" alt="" className="relative " />
          <div className="mx-4">
            <h1 className="font-bold py-2 mx-auto">The coldest sunset</h1>
            <p className="w-full py-1 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Market;
