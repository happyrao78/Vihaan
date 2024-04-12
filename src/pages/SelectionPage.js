import React from 'react';
import { Link } from 'react-router-dom';
import driving from '../assets/driving.svg';
import health from '../assets/health.svg';
import drivingbutton from '../assets/drivingbutton.svg';
import healthbutton from '../assets/healthbutton.svg';

const SelectionPage = () => {
  return (
    <section
      className="relative overflow-x-hidden pb-20 pt-14 sm:pt-20 bg-grid"
      id="selectionPage"
    >
      <div className="z-[-30] absolute inset-0"></div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center justify-center p-4 w-full">
          <h1 className="text-5xl px-2 s:px-4 text-center text-gray-50 font-bold sm:max-w-4xl uppercase">
            Select what you want to analyse!?
          </h1>
        </div>
        <div className="flex items-center sm:flex-row flex-col justify-center sm:justify-between gap-4 w-full xs:w-[85%] lg:w-[75%] p-2 lg:p-6">
          <div className="mx-auto grid min-w-0 max-w-screen-2xl grid-cols-1 gap-6 xs:px-2 lg:px-4 sm:grid-cols-2">
            <Link
              to="/registration/drive"
              className="noise-panel flex flex-col min-w-0 relative text-gray-200 md:hover:scale-105 transition ease-in-out duration-500"
            >
              <div className="flex flex-1 flex-col gap-6 p-6 text-left ">
                <div className="flex h-full flex-col justify-center gap-2">
                  <aside className="code p-1">AALA DRIVE SCORE</aside>
                  <img
                    src={driving}
                    alt="driving"
                    className="mx-auto h-[15rem]"
                  />
                  <Link
                    to="/registration/drive"
                    className="heading-3 p-2 flex w-full justify-end"
                  >
                    <img
                      src={drivingbutton}
                      alt="drivingbutton"
                      className="object-cover h-[2.5rem] w-[2.5rem]"
                    />
                  </Link>
                </div>
              </div>
            </Link>
            <Link
              to="/registration/health"
              className="noise-panel flex flex-col min-w-0 relative text-gray-200 md:hover:scale-105 transition ease-in-out duration-500"
            >
              <div className="flex flex-1 flex-col gap-6 p-6 text-left ">
                <div className="flex h-full flex-col justify-center gap-2">
                  <aside className="code">AALA HEALTH SCORE</aside>
                  <img
                    src={health}
                    alt="health"
                    className="mx-auto h-[15rem]"
                  />
                  <Link
                    to="/registration/health"
                    className="heading-3 p-2 flex w-full justify-end "
                  >
                    <img
                      src={healthbutton}
                      alt="healthbutton"
                      className="object-cover h-[2.5rem] w-[2.5rem]"
                    />
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectionPage;
