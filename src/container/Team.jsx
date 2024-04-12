import React from 'react';
import mukul from '../assets/mukul.png';
import yakshit from '../assets/yakshit.png';
import ananaya from '../assets/ananaya.png';
import vaishnavi from '../assets/vaishnavi.png';
import vimeet from '../assets/vimeet.png';
const Team = () => {
  return (
    <section
      className="flex items-center justify-center flex-col bg-grid overflow-visible pb-32 gap-y-8 md:gap-y-12 lg:gap-y-16 p-4 mt-2 gap-1 text-gray-50"
      id="team"
    >
      <div className="flex items-center flex-col justify-center pt-4">
        <h2 className="text-5xl sm:text-6xl px-2 s:px-4 text-center text-gray-50 font-[600]  max-w-3xl">
          Our Team
        </h2>
      </div>
      <div className="mx-auto grid min-w-0 max-w-screen-xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3">
        <article className="noise-panel flex flex-col min-w-0 relative text-gray-200">
          <div className="flex flex-1 flex-col gap-6 p-6 text-left ">
            <div className="flex h-full flex-col justify-between ">
              <aside className="code">Mukul Goyal</aside>
              <img
                src={mukul}
                alt="mukul goyal"
                className="object-cover mx-auto w-auto h-[20rem]"
              />
              <h3 className="heading-3 text-gray-100">
                "One man’s constant is another man’s variable."
              </h3>
            </div>
          </div>
        </article>
        <article className="noise-panel flex flex-col min-w-0 relative text-gray-200">
          <div className="flex flex-1 flex-col gap-6 p-6 text-left ">
            <div className="flex h-full flex-col justify-between ">
              <aside className="code">Yakshit Garg</aside>
              <img
                src={yakshit}
                alt="yakshit"
                className="object-cover mx-auto w-auto h-[20rem]"
              />
              <h3 className="heading-3 text-gray-100">
                "First, solve the problem. Then, write the code."
              </h3>
            </div>
          </div>
        </article>
        <article className="noise-panel flex flex-col min-w-0 relative text-gray-200">
          <div className="flex flex-1 flex-col gap-6 p-6 text-left ">
            <div className="flex h-full flex-col justify-between ">
              <aside className="code">Ananaya Bansal</aside>
              <img
                src={ananaya}
                alt="ananaya"
                className="object-cover mx-auto w-auto h-[20rem]"
              />
              <h3 className="heading-3 text-gray-100">
                "Technology is a useful servant but a dangerous master."
              </h3>
            </div>
          </div>
        </article>
        <article className="noise-panel flex flex-col min-w-0 relative text-gray-200">
          <div className="flex flex-1 flex-col gap-6 p-6 text-left ">
            <div className="flex h-full flex-col justify-between ">
              <aside className="code">Vimeet</aside>
              <img
                src={vimeet}
                alt="vimmet"
                className="object-cover mx-auto w-auto h-[20rem]"
              />
              <h3 className="heading-3 text-gray-100">
                "Premature optimization is the root of all evil."
              </h3>
            </div>
          </div>
        </article>
        <article className="noise-panel flex flex-col min-w-0 relative text-gray-200">
          <div className="flex flex-1 flex-col gap-6 p-6 text-left ">
            <div className="flex h-full flex-col justify-between ">
              <aside className="code">Vaishnavi</aside>
              <img
                src={vaishnavi}
                alt="vaishnavi"
                className="object-cover mx-auto w-auto h-[20rem]"
              />
              <h3 className="heading-3 text-gray-100">
                "Software being 'Done' is like lawn being 'Mowed'."
              </h3>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Team;
