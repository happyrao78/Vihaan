// this is the about section of the page and contains a brief description of the community
import React from 'react';
const CommunityBeliefs = () => {
  return (
    <section
      className="flex items-center justify-center flex-col bg-grid overflow-visible pb-32 p-4 mt-2 gap-1"
      id="community"
    >
      <div className="flex items-center flex-col justify-center py-4 mb-12">
        <h2 className="text-5xl sm:text-6xl px-2 s:px-4 text-center text-gray-50 font-[600] max-w-3xl">
          AALA <br />
          <strong className="text-5xl sm:text-6xl px-2 s:px-4 text-center text-gray-50 lg:text-7xl xl:text-8xl">
            Community
          </strong>
        </h2>
      </div>
      <div className="mx-auto grid min-w-0 max-w-screen-xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3">
        <article className="noise-panel flex flex-col min-w-0 relative bg-blue-purple-gradient text-gray-100 md:hover:scale-105 transition ease-in-out duration-500">
          <svg
            width="140"
            height="104"
            viewBox="0 0 140 104"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-2 top-8"
          >
            <g opacity="0.2" filter="url(#filter0_f_247_1221)">
              <rect
                opacity="0.5"
                x="6"
                y="27.5371"
                width="109.983"
                height="70.8367"
                rx="3.67159"
                fill="white"
              ></rect>
              <path
                opacity="0.5"
                d="M115.983 31.9433C115.983 33.971 114.339 35.6149 112.312 35.6149L9.67157 35.6149C7.64381 35.6149 5.99998 33.971 5.99999 31.9433L5.99999 31.2086C5.99999 29.1808 7.64381 27.537 9.67158 27.537L112.312 27.537C114.339 27.537 115.983 29.1808 115.983 31.2086L115.983 31.9433Z"
                fill="white"
              ></path>
            </g>
            <g opacity="0.4" filter="url(#filter1_f_247_1221)">
              <rect
                opacity="0.5"
                x="17.9326"
                y="16.082"
                width="109.983"
                height="70.8367"
                rx="3.67159"
                fill="white"
              ></rect>
              <path
                opacity="0.5"
                d="M130.67 16.8167C130.67 18.8445 129.026 20.4883 126.998 20.4883L24.358 20.4883C22.3302 20.4883 20.6864 18.8444 20.6864 16.8167L20.6864 16.082C20.6864 14.0542 22.3302 12.4104 24.358 12.4104L126.998 12.4104C129.026 12.4104 130.67 14.0542 130.67 16.082L130.67 16.8167Z"
                fill="white"
              ></path>
            </g>
            <g opacity="0.5">
              <path
                d="M140 9L30 8.99999L30 3.67159C30 1.64383 31.6438 6.39452e-08 33.6716 2.41218e-07L136.328 9.21576e-06C138.356 9.39304e-06 140 1.64384 140 3.6716L140 9Z"
                fill="white"
              ></path>
              <rect
                opacity="0.5"
                x="30"
                width="109.983"
                height="70.8367"
                rx="3.67159"
                fill="white"
              ></rect>
            </g>
            <circle opacity="0.4" cx="37" cy="5" r="2" fill="white"></circle>
            <circle opacity="0.4" cx="43" cy="5" r="2" fill="white"></circle>
            <circle opacity="0.4" cx="49" cy="5" r="2" fill="white"></circle>
            <defs>
              <filter
                id="filter0_f_247_1221"
                x="0.395727"
                y="21.9327"
                width="121.192"
                height="82.0453"
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
                  stdDeviation="2.80214"
                  result="effect1_foregroundBlur_247_1221"
                ></feGaussianBlur>
              </filter>
              <filter
                id="filter1_f_247_1221"
                x="13.4492"
                y="7.92698"
                width="121.704"
                height="83.4751"
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
                  stdDeviation="2.24171"
                  result="effect1_foregroundBlur_247_1221"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg>
          <div className="flex flex-1 flex-col gap-6 p-6 text-left">
            <aside className="code">Interaction</aside>
            <div className="before:float-right before:h-1 before:w-32">
              <h3 className="heading-3 text-gray-100">Social Interaction</h3>
            </div>
            <p className="body text-gray-100">
              Users can engage in forums, chat groups, and social media
              integration to foster a sense of community and encourage
              peer-to-peer interaction.
            </p>
          </div>
        </article>

        <article className="noise-panel flex flex-col min-w-0 relative bg-red-pink-gradient text-gray-100 md:hover:scale-105 transition ease-in-out duration-500">
          <svg
            width="105"
            height="119"
            viewBox="0 0 105 119"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-2 top-6"
          >
            <g opacity="0.5">
              <g opacity="0.2" filter="url(#filter0_f_252_1342)">
                <rect
                  x="6.00012"
                  y="23.8284"
                  width="73.0131"
                  height="89.1717"
                  rx="1.55917"
                  fill="white"
                ></rect>
              </g>
              <g opacity="0.4" filter="url(#filter1_f_252_1342)">
                <rect
                  x="17.6938"
                  y="13.6938"
                  width="72.4146"
                  height="89.1717"
                  rx="1.55917"
                  fill="white"
                ></rect>
              </g>
              <g opacity="0.5" filter="url(#filter2_f_252_1342)">
                <path
                  d="M29.6553 3.55917C29.6553 2.69807 30.3534 2 31.2145 2H84.8723C85.2751 2 85.6623 2.15589 85.9527 2.43501L102.19 18.0399C102.496 18.3338 102.668 18.7398 102.668 19.164V89.6125C102.668 90.4736 101.97 91.1717 101.109 91.1717H31.2145C30.3534 91.1717 29.6553 90.4736 29.6553 89.6125V3.55917Z"
                  fill="white"
                ></path>
              </g>
              <g filter="url(#filter3_f_252_1342)">
                <path
                  d="M83 3.64376L83 19.4408C83 20.3019 83.6981 21 84.5592 21L101.108 21C102.515 21 103.203 19.2842 102.185 18.313L85.6357 2.51593C84.6435 1.56883 83 2.2721 83 3.64376Z"
                  fill="white"
                ></path>
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_252_1342"
                x="0.0154452"
                y="17.8437"
                width="84.9824"
                height="101.141"
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
                  stdDeviation="2.99234"
                  result="effect1_foregroundBlur_252_1342"
                ></feGaussianBlur>
              </filter>
              <filter
                id="filter1_f_252_1342"
                x="12.9061"
                y="8.90611"
                width="81.99"
                height="98.7471"
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
                  stdDeviation="2.39387"
                  result="effect1_foregroundBlur_252_1342"
                ></feGaussianBlur>
              </filter>
              <filter
                id="filter2_f_252_1342"
                x="28.0962"
                y="0.440834"
                width="76.1314"
                height="92.29"
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
                  stdDeviation="0.779583"
                  result="effect1_foregroundBlur_252_1342"
                ></feGaussianBlur>
              </filter>
              <filter
                id="filter3_f_252_1342"
                x="81.4408"
                y="0.522377"
                width="22.7891"
                height="22.0368"
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
                  stdDeviation="0.779583"
                  result="effect1_foregroundBlur_252_1342"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg>
          <div className="flex flex-1 flex-col gap-6 p-6 text-left">
            <aside className="code">Expert</aside>
            <div className="before:float-right before:h-1 before:w-32">
              <h3 className="heading-3 text-gray-100">Expert Involvement</h3>
            </div>
            <p className="body text-gray-100">
              Collaborating with industry experts, influencers, and fitness
              professionals to provide guidance, expert advice, and exclusive
              content for the community.
            </p>
          </div>
        </article>
        <article className="noise-panel flex flex-col min-w-0 relative bg-blue-green-gradient text-gray-100 md:hover:scale-105 transition ease-in-out duration-500">
          <svg
            width="113"
            height="123"
            viewBox="0 0 113 123"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-0 top-6"
          >
            <g opacity="0.2" filter="url(#filter0_f_252_1350)">
              <circle cx="61" cy="61.5" r="56.5" fill="white"></circle>
            </g>
            <g opacity="0.4" filter="url(#filter1_f_252_1350)">
              <circle cx="61.0001" cy="61.5" r="39.4434" fill="white"></circle>
            </g>
            <circle
              opacity="0.4"
              cx="60.9999"
              cy="61.5001"
              r="23.4528"
              fill="white"
            ></circle>
            <defs>
              <filter
                id="filter0_f_252_1350"
                x="0.0226417"
                y="0.522642"
                width="121.955"
                height="121.955"
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
                  stdDeviation="2.23868"
                  result="effect1_foregroundBlur_252_1350"
                ></feGaussianBlur>
              </filter>
              <filter
                id="filter1_f_252_1350"
                x="17.0793"
                y="17.5793"
                width="87.8415"
                height="87.8416"
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
                  stdDeviation="2.23868"
                  result="effect1_foregroundBlur_252_1350"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg>
          <div className="flex flex-1 flex-col gap-6 p-6 text-left">
            <aside className="code">Content</aside>
            <div className="before:float-right before:h-1 before:w-32">
              <h3 className="heading-3 text-gray-100">
                User Generated Content
              </h3>
            </div>
            <p className="body text-gray-100">
              AALA encourages users to share their experiences, driving tips,
              and fitness journeys, creating a collaborative environment where
              knowledge and insights are exchanged.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default CommunityBeliefs;
