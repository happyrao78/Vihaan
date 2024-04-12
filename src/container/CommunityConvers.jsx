// this is the about section of the page and contains agamification part of commits
import React from 'react';
import { Link } from 'react-router-dom';

const CommunityConvers = () => {
  return (
    <section className="flex items-center justify-center flex-col bg-grid overflow-visible pb-32 gap-8 md:gap-12 lg:gap-16 p-4 text-gray-50">
      <div className="mx-auto grid min-w-0 max-w-screen-2xl grid-cols-1 gap-4 sm:px-4 sm:grid-cols-2 pt-32 pb-12">
        <div className="flex flex-col items-start gap-6 px-4">
          <h1 className="text-5xl sm:text-6xl text-gray-50 font-medium mb-4">
            Tech-savvy fitness camaraderie in AALA
          </h1>
          <p className="text-lg font-[200] pb-4 text-gray-200 sm:text-xl">
            To keep us engaged and motivated, the app regularly organizes
            community challenges and events. These challenges could be virtual
            races, fitness challenges, or safe driving competitions. By
            participating, we can compete with others, earn rewards, and feel a
            sense of camaraderie within our community.
          </p>
          <Link
            to="/registration"
            className="flex items-start gap-4 w-full sm:w-[50%]"
          >
            <>
              <button className="w-full relative bg-gradient-83 from-[#00febe] to-[#FF5500] text-white inline-flex h-[3rem] items-center justify-center gap-[1rem] rounded-full border-opacity-[1] border-[rgb(242,246,250,0.1)] px-[2.5rem] text-center text-base font-[800] transition-all tracking-wide hover:scale-105">
                GET STARTED
              </button>
            </>
          </Link>
        </div>
        <div className="quotes relative flex flex-col items-center lg:items-start ">
          <article className="relative w-fit bg-[rgb(35,38,45,1)] border border-gray-500 flex flex-col gap-3 p-5 text-gray-200 shadow-md ml-16 -translate-y-4 scale-90 ">
            <header className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                alt=""
                className="h-10 w-10 object-cover rounded-full border border-white"
              />
              <strong className="text-white">Mukul</strong>
              <time
                className="text-xs text-gray-200"
                datetime="2021-09-12T00:00:00.000Z"
              >
                9/12/2021
              </time>
            </header>
            <p>
              Istg, AALA is such a great help !! I was struggling to find the
              best health insurance for me and it helped me find one just within
              few minutes.
            </p>
          </article>
          <article className="relative w-fit bg-[rgb(35,38,45,1)] border border-gray-500 flex flex-col gap-3 p-5 text-gray-200 shadow-md z-20 ml-6 ">
            <header className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
                alt=""
                className="h-10 w-10 object-cover rounded-full border border-white"
              />
              <strong className="text-white">Ananaya</strong>
              <time
                className="text-xs text-gray-200"
                datetime="2022-09-28T00:00:00.000Z"
              >
                9/28/2022
              </time>
            </header>
            <p>Omg , I won 100 % zomato food coupon . I love you AALA!!</p>
          </article>
          <article className="relative w-fit bg-[rgb(35,38,45,1)] border border-gray-500 flex flex-col gap-3 p-5 text-gray-200 shadow-md z-10 ml-24 -translate-y-6 scale-90 ">
            <header className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
                alt=""
                className="h-10 w-10 object-cover rounded-full border border-white"
              />
              <strong className="text-white">Vim</strong>
              <time
                className="text-xs text-gray-200"
                datetime="2022-10-09T00:00:00.000Z"
              >
                10/9/2022
              </time>
            </header>
            <p>Thank you AALA ,I saved money on my vehicle premium.</p>
            <p>@AALA is so futuristic. 🔥</p>
          </article>
          <article className="relative w-fit bg-[rgb(35,38,45,1)] border border-gray-500 flex flex-col gap-3 p-5 text-gray-200 shadow-md -translate-y-12 ">
            <header className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
                alt=""
                className="h-10 w-10 object-cover rounded-full border border-white"
              />
              <strong className="text-white">Yakshit</strong>
              <time
                className="text-xs text-gray-200"
                datetime="2022-08-30T00:00:00.000Z"
              >
                8/30/2022
              </time>
            </header>
            <p>AALA re AALA mujhe AALA pe pyaar AALA.</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default CommunityConvers;
