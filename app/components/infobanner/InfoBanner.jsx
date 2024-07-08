import React from "react";

const InfoBanner = () => {
  return (
    <div className="flex flex-col gap-16 md:gap-40 lg:flex-row bg-primary  absolute max-w-screen left-0 right-0 items-center justify-center p-8 uppercase">
      <div className="flex flex-col gap-4 ">
        <h1 className="text-8xl font-semibold">45</h1>
        <p className="text-4xl">Different modules</p>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-8xl font-semibold">60</h1>
        <p className="text-4xl ">Minutes per class</p>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-8xl font-semibold">100</h1>
        <p className="text-4xl  ">Classes per week</p>
      </div>
    </div>
  );
};

export default InfoBanner;
