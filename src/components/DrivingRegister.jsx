// this is the registraion details page of the user and is completely user centric
import React from 'react';
import { motion } from 'framer-motion';

const DrivingRegister = ({ handleChange, nextStep, formData, handleSubmit }) => {
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
      className="flex items-start justify-start flex-col h-full gap-4 w-full"
    >
      <div className="flex items-start justify-start w-full">
        <h1 className="text-5xl text-left text-gray-50 font-bold sm:max-w-4xl">
          Registration Form
        </h1>
      </div>
      <div className="flex items-start justify-start h-full w-full">
        <div className="flex items-start justify-start flex-col gap-6 w-full">
          <form className="flex items-start justify-start w-full h-full gap-4 flex-col">
            <div className="flex flex-col items-start justify-start gap-2 w-full">
              <label htmlFor="name" className="text-gray-50">
                Name
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-md border border-[#757575] bg-transparent text-gray-50"
                name="name"
                id="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-2 w-full">
              <label htmlFor="email" className="text-gray-50">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 rounded-md border border-[#757575] bg-transparent text-gray-50"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-2 w-full">
              <label htmlFor="phone" className="text-gray-50">
                Phone
              </label>
              <input
                type="tel"
                className="w-full p-3 rounded-md border border-[#757575] bg-transparent text-gray-50"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-2 w-full">
              <label htmlFor="gender" className="text-gray-50">
                Gender
              </label>
              <select
                type="text"
                className="w-full p-3 rounded-md border border-[#757575] bg-transparent text-gray-50"
                name="gender"
                id="gender"
                placeholder="Gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option className="text-black" value="">
                  Gender
                </option>
                <option className="text-black" value="Male">
                  Male
                </option>
                <option className="text-black" value="Female">
                  Female
                </option>
                <option className="text-black" value="Both">
                  Both
                </option>
              </select>
            </div>
          </form>
          <button
            onClick={handleSubmit}
            className="button mb-24 md:mb-12 button-white w-full relative bg-[#00febe] text-white inline-flex h-[3rem] items-center justify-center gap-[1rem] rounded-lg border-opacity-[1] border-[rgb(242,246,250,0.1)] px-[2.5rem] text-center text-xl font-[500] transition-all tracking-wide"
          >
            Next
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default DrivingRegister;
