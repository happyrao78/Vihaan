import React from 'react';
import driveCalculation from '../assets/hreccomendation.svg';
import { Link } from 'react-router-dom';

const HealthRecommendation = () => {
  return (
    <section
      className="relative overflow-x-hidden pb-20 pt-14 sm:pt-20 bg-grid"
      id="selectionPage"
    >
      <div className="z-[-30] absolute inset-0"></div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center justify-center p-4 w-full">
          <h1 className="text-5xl px-2 s:px-4 text-center text-gray-50 font-bold sm:max-w-4xl uppercase">
            HERE ARE THE PREMIUM DEALS FOR YOUR SCORES.
          </h1>
        </div>
        <div className="flex items-center sm:flex-row flex-col justify-center sm:justify-between gap-4 w-full xs:w-[85%] lg:w-[75%]">
          <div className="mx-auto grid min-w-0 max-w-screen-2xl grid-cols-1 gap-6 xs:px-2 lg:px-4 sm:grid-cols-2">
            <Link
              to="https://www.bajajfinserv.in/insurance/bajaj-allianz-extra-care-plus-plan"
              className="noise-panel flex flex-col min-w-0 relative text-gray-200 md:hover:scale-105 p-3 transition ease-in-out duration-500"
            >
              <div className="flex flex-1 flex-col">
                <aside className="code p-4 text-2xl">Bajaj Allianz Individual</aside>
                <div className="flex h-full flex-col justify-center gap-2">
                  <img
                    src={driveCalculation}
                    alt="driveCalculation"
                    className="mx-auto h-[20rem]"
                  />
                </div>
              </div>
            </Link>
            <Link
              to="https://www.bajajfinserv.in/insurance/bajaj-allianz-health-guard-insurance-plan"
              className="noise-panel flex flex-col min-w-0 relative text-gray-200 md:hover:scale-105 p-3 transition ease-in-out duration-500"
            >
              <div className="flex flex-1 flex-col">
              <aside className="code p-4 text-2xl">Bajaj Allianz Family</aside>
                <div className="flex h-full flex-col justify-center gap-2">
                  <img
                    src={driveCalculation}
                    alt="driveCalculation"
                    className="mx-auto h-[20rem]"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthRecommendation;
