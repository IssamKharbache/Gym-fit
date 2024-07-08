import { memberships } from "@/app/data";
import React from "react";

const Cards = ({ modal }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full gap-6">
      {memberships.map((membership, idx) => {
        return (
          <div
            key={idx}
            className="flex flex-col justify-between w-full max-w-sm mx-auto p-4 bg-white sm:p-8"
          >
            <div className="">
              <h5 className="mb-16 text-6xl text-center font-medium text-gray-900">
                {membership.title}
              </h5>
              <div className="flex items-baseline justify-center text-gray-900">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-extrabold tracking-tight">
                  {membership.price}
                </span>
                <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                  /month
                </span>
              </div>
              <ul role="list" className="space-y-5 my-7">
                {membership.featured.map((feature, idx) => (
                  <li key={`f_${idx}`} className="flex">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-xl  font-normal leading-tight text-gray-900 ms-3">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex  items-center justify-center">
              <button
                onClick={modal.open}
                type="button"
                className=" bg-primary hover:bg-primary-hover px-8 py-4 text-2xl duration-300 "
              >
                Join now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
