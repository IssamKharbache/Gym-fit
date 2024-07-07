import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        {/* text container*/}
        <div className="relative mb-16">
          <h1 className="text-[80px] lg:text-[200px] text-gray-200 opacity-40">
            Who we are
          </h1>
          <div className="absolute bottom-2 lg:bottom-4 right-0">
            <h1 className="text-primary text-center text-2xl lg:text-8xl">
              Who we are
            </h1>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col lg:flex-row gap-8 px-8 xl:px-0">
          {/* image */}
          <Image
            src="/aboutgym.png"
            height={1500}
            width={1500}
            alt="whoarewe"
            className="w-full lg:w-[50%]  object-cover"
          />
          <p className="text-gray-400 text-xl  md:text-4xl mb-6">
            Welcome to Fit Gym, where your fitness journey begins! At Fit Gym,
            we provide state-of-the-art equipment, a variety of group classes,
            and personalized training to help you achieve your fitness goals.
            Our expert trainers and supportive community are here to guide and
            motivate you every step of the way. Join us today and become the
            best version of yourself at Fit Gym!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
