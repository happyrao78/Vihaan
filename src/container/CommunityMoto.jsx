// this is the about section of the page and contains a brief description of the motp part of the community
import React from 'react';
import { Link } from 'react-router-dom';

const CommunityMoto = () => {
  return (
    <section className="company contact relative mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-end overflow-hidden px-4 py-10 pb-0">
      <section className="flex flex-col items-center justify-center gap-y-8 md:gap-y-12 lg:gap-y-16 relative z-10 pb-32">
        <h2 className="text-3xl sm:text-6xl px-2 s:px-4 text-center text-gray-50 font-[600]  max-w-4xl">
          The AALA Community
        </h2>
        <p className="text-sm s:text-base font-light px-4 s:px-8 text-center text-gray-100 sm:text-xl max-w-2xl lg:max-w-4xl">
          A remarkable blend of enthusiasts, fitness aficionados, and insurance
          advocates. Empowering environment, inspiring each other towards
          healthier living and safer roads. A supportive haven for personal
          growth and shared achievements.
        </p>
        <Link
          to="/registration"
          className="bg-white hover:bg-transparent hover:border hover:border-white hover:text-white transition-all border border-transparent rounded-full font-medium h-[4rem] max-w-2xl flex items-center justify-center text-[#17191e] px-10 py-4 text-center text-lg"
        >
          Join Now
        </Link>
      </section>
    </section>
  );
};

export default CommunityMoto;
