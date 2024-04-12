// this is the first question for lifestyle and habbits and will be verified further
import React from 'react';
import hfirst1 from '../../assets/hFirst1.svg';
import hfirst from '../../assets/hFirst.svg';
import drivingbutton from '../../assets/drivingbutton.svg';
import { motion } from 'framer-motion';

const FirstQuestionnare = ({ nextStep, handleChange, score, setScore }) => {
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 2, ease: 'easeInOut' }}
      className="flex items-center justify-center flex-col gap-2 w-full"
    >
      <div className="flex items-center sm:flex-row flex-col justify-center sm:justify-between gap-4 w-full xs:w-[85%] lg:w-[75%] p-2 lg:p-6">
        <form className="mx-auto grid min-w-0 max-w-screen-2xl grid-cols-1 gap-6 xs:px-2 lg:px-4 sm:grid-cols-2">
          <div className="noise-panel flex flex-col min-w-0 relative text-gray-200 md:hover:scale-105 transition ease-in-out duration-500">
            <label
              htmlFor="1"
              className="flex flex-1 flex-col gap-6 p-6 text-left "
            >
              <div className="flex h-full flex-col justify-center gap-2">
                <div className="flex items-center justify-between w-full">
                  <aside className="code text-2xl p-1">Yes</aside>
                  <input
                    type="radio"
                    id="1"
                    name="score"
                    required
                    value={5}
                    onChange={handleChange}
                    className="p-3 flex items-center justify-center cursor-pointer"
                  />
                </div>
                <img src={hfirst} alt="hfirst1" className="mx-auto h-[15rem]" />
                <div className="heading-3 p-2 flex w-full justify-end">
                  <img
                    src={drivingbutton}
                    alt="drivingbutton"
                    className="object-cover h-[2.5rem] opacity-0 w-[2.5rem]"
                  />
                </div>
              </div>
            </label>
          </div>
          <div className="noise-panel flex flex-col min-w-0 relative text-gray-200 md:hover:scale-105 transition ease-in-out duration-500">
            <label
              htmlFor="2"
              className="flex flex-1 flex-col gap-6 p-6 text-left "
            >
              <div className="flex h-full flex-col justify-center gap-2">
                <div className="flex items-center justify-between w-full">
                  <aside className="code text-2xl p-1">No</aside>
                  <input
                    type="radio"
                    id="2"
                    required
                    name="score"
                    value={0}
                    onChange={() => {
                      setScore(0);
                    }}
                    className="p-3 flex items-center justify-center cursor-pointer"
                  />
                </div>
                <img src={hfirst1} alt="hfirst2" className="mx-auto h-[15rem]" />
                <div className="heading-3 p-2 flex w-full justify-end ">
                  <img
                    src={drivingbutton}
                    alt="drivingbutton"
                    className="object-cover h-[2.5rem] opacity-0 w-[2.5rem]"
                  />
                </div>
              </div>
            </label>
          </div>
        </form>
      </div>
      <button
        onClick={nextStep}
        className="button button-white max-w-xl  mb-32 md:mb-12 w-[90%] relative bg-[#FF5500] text-white inline-flex h-[3rem] items-center justify-center gap-[1rem] rounded-lg border-opacity-[1] border-[rgb(242,246,250,0.1)] px-[2.5rem] text-center text-xl font-[500] transition-all tracking-wide"
      >
        Next
      </button>
    </motion.div>
  );
};

export default FirstQuestionnare;
