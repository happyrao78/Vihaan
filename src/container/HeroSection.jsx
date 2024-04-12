import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section
      className="landing-section relative overflow-x-hidden pb-40 pt-14 sm:pt-20 lg:pt-32 bg-grid"
      id="home"
    >
      <div className="z-[-30] absolute inset-0"></div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center justify-center p-4 w-full">
          <h1 className="text-5xl sm:text-6xl px-2 s:px-4 text-center text-gray-50 lg:text-7xl xl:text-8xl font-bold sm:max-w-4xl uppercase">
            I’m not perfect <br className="hidden sm:block" />
            just insured.
          </h1>
        </div>
        <div className="flex items-center justify-center p-1">
          <p className="text-sm s:text-base font-light px-4 s:px-8 text-center text-gray-100 sm:text-xl max-w-2xl lg:max-w-4xl">
            AALA is an AI-powered system that combines insurance policies,
            gamification, and advanced analytics. It promotes safer driving
            behavior by monitoring factors like speed, acceleration, braking,
            and traffic rule adherence. By incentivizing and encouraging
            fitness, AALA aims to enhance driver accountability and fitness.
          </p>
        </div>
        <div className="flex items-center sm:flex-row flex-col justify-center sm:justify-between gap-4 w-full xs:w-[80%] md:w-[75%]  p-6">
          <Link
            to="/registration"
            className="flex items-center gap-4 w-full sm:w-[50%]"
          >
            <>
              <button className="w-full relative bg-gradient-83 from-[#00febe] to-[#FF5500] text-white inline-flex h-[3rem] items-center justify-center gap-[1rem] rounded-full border-opacity-[1] border-[rgb(242,246,250,0.1)] px-[2.5rem] text-center text-base font-[800] transition-all tracking-wide hover:scale-105">
                GET STARTED
              </button>
            </>
          </Link>
          <Link
            to="/community"
            className="flex items-center justify-center w-full sm:w-[50%]"
          >
            <button className="hover:bg-white bg-[#262626] group transition-all hover:text-black text-white p-4 w-full flex items-center justify-center rounded-full">
              <p className="flex items-center justify-center gap-2 font-medium transition-all text-xs sm:text-sm">
                JOIN OUR COMMUNITY{' '}
                <span className="group-hover:text-black text-white group-hover:pl-1 transition-all">
                  <svg
                    width="11"
                    height="10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m6.143 9 4-4-4-4M10.143 5H1"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
              </p>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
