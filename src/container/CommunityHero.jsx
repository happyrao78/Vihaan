// this is the about section of the page and contains a UI of the hero section
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const CommunityHero = () => {
  return (
    <section className="flex items-center justify-center flex-col bg-grid overflow-visible pb-32 gap-8 md:gap-12 lg:gap-16 p-4 text-gray-50">
      <div className="mx-auto grid min-w-0 max-w-screen-2xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 pt-20 pb-12">
        <div className="lg:py-20 px-4">
          <h1 className="text-5xl sm:text-6xl  text-gray-50 lg:text-6xl font-medium mb-10">
            Driving towards fitness, united in AALA's tech-inspired community
          </h1>
          <p className="text-lg font-[200] pb-4 text-gray-200 sm:text-xl">
            The AALA app boasts a vibrant and supportive community that connects
            tech-savvy individuals, health enthusiasts, and insurance companies.
            Users can interact through forums, chat groups, and social media
            integration, fostering a collaborative environment where fitness
            journeys, safe driving achievements, and expert insights are shared.
          </p>
          <p className="text-lg font-[200] pb-4 text-gray-200 sm:text-xl">
            Regular community challenges and events, such as virtual races and
            safe driving competitions, promote friendly competition and
            camaraderie.
          </p>
          <p className="text-lg font-[200] pb-4 text-gray-200 sm:text-xl">
            With a focus on user-generated content and expert involvement, AALA
            cultivates a motivating and engaging space where members can thrive
            in their pursuit of improved fitness levels and safer driving
            behavior.
          </p>
        </div>
        <div className="noise-underlay flex items-center">
          <div className="hero-graphic relative scale-150 md:scale-125 lg:translate-x-16 xl:translate-x-32">
            <svg
              data-hk="0-0"
              width="868"
              height="868"
              viewBox="0 0 868 868"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full "
            >
              <g filter="url(#filter0_f_816_816)">
                <circle
                  cx="433.551"
                  cy="433.717"
                  r="397.433"
                  fill="url(#paint0_linear_816_816)"
                ></circle>
              </g>
              <g filter="url(#filter1_f_816_816)">
                <circle
                  cx="433.504"
                  cy="433.669"
                  r="319.675"
                  transform="rotate(118.514 433.504 433.669)"
                  fill="url(#paint1_linear_816_816)"
                ></circle>
              </g>
              <g filter="url(#filter2_f_816_816)">
                <circle
                  cx="433.503"
                  cy="433.67"
                  r="245.706"
                  transform="rotate(30 433.503 433.67)"
                  fill="url(#paint2_linear_816_816)"
                ></circle>
              </g>
              <g filter="url(#filter3_f_816_816)">
                <circle
                  cx="433.551"
                  cy="433.716"
                  r="176.292"
                  transform="rotate(150 433.551 433.716)"
                  fill="url(#paint3_linear_816_816)"
                ></circle>
              </g>
              <g filter="url(#filter4_f_816_816)">
                <circle
                  cx="433.405"
                  cy="433.405"
                  r="95.4049"
                  fill="#222222"
                ></circle>
              </g>
              <defs>
                <filter
                  id="filter0_f_816_816"
                  x="1.55094"
                  y="1.71622"
                  width="864.001"
                  height="864.001"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="17.2835"
                    result="effect1_foregroundBlur_816_816"
                  ></feGaussianBlur>
                </filter>
                <filter
                  id="filter1_f_816_816"
                  x="72.2872"
                  y="72.4527"
                  width="722.433"
                  height="722.433"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="20.7402"
                    result="effect1_foregroundBlur_816_816"
                  ></feGaussianBlur>
                </filter>
                <filter
                  id="filter2_f_816_816"
                  x="132.448"
                  y="132.615"
                  width="602.109"
                  height="602.109"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="27.6536"
                    result="effect1_foregroundBlur_816_816"
                  ></feGaussianBlur>
                </filter>
                <filter
                  id="filter3_f_816_816"
                  x="215.75"
                  y="215.915"
                  width="435.603"
                  height="435.603"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="20.7402"
                    result="effect1_foregroundBlur_816_816"
                  ></feGaussianBlur>
                </filter>
                <filter
                  id="filter4_f_816_816"
                  x="303.433"
                  y="303.433"
                  width="259.944"
                  height="259.944"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="17.2835"
                    result="effect1_foregroundBlur_816_816"
                  ></feGaussianBlur>
                </filter>
                <linearGradient
                  id="paint0_linear_816_816"
                  x1="36.1178"
                  y1="831.15"
                  x2="913.207"
                  y2="726.696"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3245FF"></stop>
                  <stop offset="1" stop-color="#BC52EE"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_816_816"
                  x1="113.829"
                  y1="753.345"
                  x2="885.446"
                  y2="422.127"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#D83333"></stop>
                  <stop offset="1" stop-color="#F041FF"></stop>
                </linearGradient>
                <linearGradient
                  id="paint2_linear_816_816"
                  x1="679.209"
                  y1="187.964"
                  x2="86.0375"
                  y2="436.973"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4AF2C8"></stop>
                  <stop offset="1" stop-color="#2F4CB3"></stop>
                </linearGradient>
                <linearGradient
                  id="paint3_linear_816_816"
                  x1="257.26"
                  y1="610.007"
                  x2="646.315"
                  y2="563.674"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3245FF"></stop>
                  <stop offset="1" stop-color="#BC52EE"></stop>
                </linearGradient>
              </defs>
            </svg>
            <Link
              to="/"
              title="Home"
              data-home-link=""
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  flex items-center justify-center"
            >
              <img src={logo} alt="logo" className="w-20 h-auto" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityHero;
