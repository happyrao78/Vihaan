import React from 'react';
import Tilty from 'react-tilty';
import happy from '../assets/2.png';

const Team = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-grid overflow-visible text-gray-50">
      <div className="max-w-screen-xl w-full px-4">
        <div className="flex flex-col items-center hover:text-white transition ease-in-out duration-200">
          <h2 className="text-5xl sm:text-6xl px-2 s:px-4 text-center font-semibold max-w-3xl">
            Meet the Developer
          </h2>
          
          <div className="mt-8" id='team'>
            <Tilty className="tilty" glare={true} maxGlare={0.5}>
              <article className="noise-panel flex flex-col relative text-gray-200 items-center rounded-xl overflow-hidden">
                <div className="flex flex-col gap-6 p-6 text-center">
                  <aside className="code">Happy Yadav</aside>
                  <img src={happy} alt="happy yadav" className="object-cover mx-auto w-auto h-[20rem]" />
                  <h3 className="heading-3 text-gray-100">
                    "One man’s constant is another man’s variable."
                  </h3>
                </div>
              </article>
            </Tilty>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
