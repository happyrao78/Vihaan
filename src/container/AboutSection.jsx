// this is the about section of the page and contains a brief description of the product
import React from 'react';

const AboutSection = () => {
  return (
    <section
      className="flex items-center justify-center flex-col relative overflow-x-hidden pb-32  bg-grid p-4 gap-1"
      id="about"
    >
      <div className="flex items-center flex-col justify-center py-4">
        <h2 className="text-5xl sm:text-6xl px-2 s:px-4 text-center text-gray-50 lg:text-7xl xl:text-8xl font-[600]  max-w-3xl">
          AALA
        </h2>
        <p className="text-sm font-light px-4 s:px-8 text-center text-gray-100 max-w-3xl uppercase">
          Artificial Intelligence-Assisted Insurance Policy and Gamification
          Platform
        </p>
      </div>
      <div className="flex items-center justify-center p-1">
        <p className="text-sm s:text-base font-normal px-4 s:px-8 text-center text-gray-50 sm:text-xl max-w-3xl">
          AALA algos through testing, validation, and continuous improvement of
          AI algorithms through real-world data analysis and feedback loops AALA
          has described bajaj allianz insurance more beneficial with amount
          settlement ration of 97.9% and claim settlement ration of 99 %.
        </p>
      </div>
      <div className="mt-10 w-full max-w-5xl s:px-4 mb-8">
        <article className="noise-panel flex flex-col min-w-0 relative text-gray-200">
          <div className="flex flex-1 flex-col gap-6 p-6 text-left">
            <aside className="font-[300] uppercase">
              Real-World Insurance Comparison
            </aside>
            <dl className="relative my-2 flex flex-1 flex-col gap-2">
              <div className="group flex w-full flex-col justify-center gap-x-3 gap-y-1 md:flex-row">
                <dt className="heading-4 flex items-center whitespace-nowrap text-sm  md:text-white md:basis-52 md:justify-end md:text-2xl">
                  Bajaj Allianz
                </dt>
                <dd className="flex w-full items-center gap-3 rounded-lg border p-1 border-gray-200">
                  <div
                    className="noise-underlay relative flex h-8 items-center justify-end rounded bg-blue-green-gradient"
                    style={{ width: '98%' }}
                  >
                    <p className="md:text-bold flex-shrink-0 select-none pr-2 font-mono text-xl text-white ">
                      <span className="sr-only">Score:</span>
                      98
                    </p>
                  </div>
                </dd>
              </div>
              <div className="group flex w-full flex-col justify-center gap-x-3 gap-y-1 md:flex-row">
                <dt className="heading-4 flex items-center whitespace-nowrap text-sm md:text-2xl md:text-white md:basis-52 md:justify-end ">
                  Canara HSBC
                </dt>
                <dd className="flex w-full items-center gap-3 rounded-lg border border-gray-400 p-1 md:border-gray-200">
                  <div
                    className="noise-underlay relative flex h-8 items-center justify-end rounded bg-[rgb(84,88,100)] md:bg-blue-green-gradient"
                    style={{ width: '68%' }}
                  >
                    <p className="md:text-bold flex-shrink-0 select-none pr-2 font-mono text-xl text-white ">
                      <span className="sr-only">Score:</span>
                      68
                    </p>
                  </div>
                </dd>
              </div>
              <div className="group flex w-full flex-col justify-center gap-x-3 gap-y-1 md:flex-row">
                <dt className="heading-4 flex items-center whitespace-nowrap text-sm  md:text-white md:basis-52 md:justify-end md:text-2xl">
                  LIC
                </dt>
                <dd className="flex w-full items-center gap-3 rounded-lg border border-gray-400 p-1 md:border-gray-200">
                  <div
                    className="noise-underlay relative flex h-8 items-center justify-end rounded bg-[rgb(84,88,100)] md:bg-blue-green-gradient"
                    style={{ width: '63%' }}
                  >
                    <p className="md:text-bold flex-shrink-0 select-none pr-2 font-mono text-xl text-white ">
                      <span className="sr-only">Score:</span>
                      63
                    </p>
                  </div>
                </dd>
              </div>
              <div className="group flex w-full flex-col justify-center gap-x-3 gap-y-1 md:flex-row">
                <dt className="heading-4 flex items-center whitespace-nowrap text-sm md:text-2xl md:text-white md:basis-52 md:justify-end">
                  Kotak Life
                </dt>
                <dd className="flex w-full items-center gap-3 rounded-lg border border-gray-400 p-1 md:border-gray-200">
                  <div
                    className="noise-underlay relative flex h-8 items-center justify-end rounded bg-[rgb(84,88,100)] md:bg-blue-green-gradient"
                    style={{ width: '58%' }}
                  >
                    <p className="md:text-bold flex-shrink-0 select-none pr-2 font-mono text-xl text-white ">
                      <span className="sr-only">Score:</span>
                      58
                    </p>
                  </div>
                </dd>
              </div>
              <div className="group flex w-full flex-col justify-center gap-x-3 gap-y-1 md:flex-row">
                <dt className="heading-4 flex items-center whitespace-nowrap text-sm  md:text-white md:basis-52 md:justify-end md:text-2xl">
                  Max Life
                </dt>
                <dd className="flex w-full items-center gap-3 rounded-lg border border-gray-400 p-1 md:border-gray-200">
                  <div
                    className="noise-underlay relative flex h-8 items-center justify-end rounded bg-[rgb(84,88,100)] md:bg-blue-green-gradient"
                    style={{ width: '54%' }}
                  >
                    <p className="md:text-bold flex-shrink-0 select-none pr-2 font-mono text-xl text-white ">
                      <span className="sr-only">Score:</span>
                      54
                    </p>
                  </div>
                </dd>
              </div>
            </dl>
            <footer className="mt-auto">
              <p className="text-center text-white">
                Based on AALA Analytics real-world Insurance data
              </p>
            </footer>
          </div>
        </article>
      </div>
    </section>
  );
};

export default AboutSection;
