import React from "react";

const MobileView = () => {
  return (
    <div className="flex lg:hidden absolute top-0 left-0 h-screen w-screen bg-black/95 z-50 flex-col justify-center items-center text-white text-center">
      <h2 className=" text-3xl">This website is not supported on mobile</h2>
      <h1 className="text-6xl font-extrabold">YET</h1>
      <p className="text-xl">Please use a desktop or laptop</p>
    </div>
  );
};

export default MobileView;
