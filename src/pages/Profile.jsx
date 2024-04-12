import React, { useEffect } from 'react';
import {auth, db} from '../firebase';
import { Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
const Profile = () => {
   const [user, setUser] = React.useState(null);
   const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    coins: 0,
    score: 0,
   })
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  },[])
  useEffect(() => {
    async function fetch(){
    if (!user) {
      return;
    }
    const docRef = doc(db, 'users', auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setFormData({ ...docSnap.data() });
    }
    console.log(formData, 1);}
    fetch();
  }, [user]);
  return (
    <>
      <div className="lg:py-18 grid-container relative py-12 sm:py-14 md:py-16 xl:py-20 text-gray-50">
        <div className="bg-grid absolute inset-0"></div>
        <div className="relative flex flex-col items-center gap-6 text-center">
          <h1 className="text-5xl sm:text-6xl px-2 s:px-4 text-center text-gray-50 lg:text-7xl xl:text-8xl font-bold sm:max-w-4xl capitalize">
            Welcome {user?.displayName}
          </h1>
          <p className="text-sm s:text-base font-light px-4 s:px-8 text-center text-gray-100 sm:text-xl max-w-2xl lg:max-w-4xl">
            To AALA Community for Daily Challenges, rewards, and much more.
          </p>
        </div>
      </div>
      <div className="flex lg:flex-row border-t border-gray-500 flex-col-reverse !text-gray-50">
        <aside className="border-inherit min-w-[30ch] lg:max-w-xs xl:max-w-sm lg:border-r border-t lg:border-t-0">
          <div className="p-6 lg:p-8 xl:p-10 lg:border-b border-gray-500 ">
            <h2 className="code ">Popular Challenges</h2>
            <ul className="mt-4 space-y-4 ">
              <li className="">
                <Link
                  className="body link-underline border-pink-light text-lg text-pink-light "
                  to=""
                  rel="prefetch"
                >
                  Run with AALA
                </Link>
              </li>
              <li className="">
                <Link
                  className="body link-underline border-pink-light text-lg text-pink-light "
                  to=""
                  rel="prefetch"
                >
                 Drive with AALA
                </Link>
              </li>
              <li className="">
                <Link
                  className="body link-underline border-pink-light text-lg text-pink-light "
                  to=""
                  rel="prefetch"
                >
                 AALA Streaks
                </Link>
              </li>
              <li className="">
                <Link
                  className="body link-underline border-pink-light text-lg text-pink-light "
                  to=""
                  rel="prefetch"
                >
                  AALA personal Community
                </Link>
              </li>
            </ul>
          </div>
          <div className="p-6 lg:p-8 xl:p-10 lg:border-b border-gray-500 ">
            <h2 className="code ">Rewards</h2>
            <p className="body mb-6 mt-4 text-green-500 font-black text-lg">Coins: {formData.coins}</p>
            <Link to="" className="button button-sm ">
              {/* <svg
                data-hk="0-0"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className=" "
              >
                <path
                  d="M2.88 16.88C2.3182 17.4425 2.00264 18.205 2.00264 19C2.00264 19.795 2.3182 20.5575 2.88 21.12C3.4425 21.6818 4.205 21.9974 5 21.9974C5.795 21.9974 6.5575 21.6818 7.12 21.12C7.64992 20.5513 7.93841 19.7991 7.9247 19.0219C7.91099 18.2447 7.59614 17.5032 7.04649 16.9535C6.49684 16.4039 5.75529 16.089 4.97809 16.0753C4.20089 16.0616 3.4487 16.3501 2.88 16.88ZM5.71 19.71C5.5217 19.8983 5.2663 20.0041 5 20.0041C4.7337 20.0041 4.4783 19.8983 4.29 19.71C4.1017 19.5217 3.99591 19.2663 3.99591 19C3.99591 18.7337 4.1017 18.4783 4.29 18.29C4.38296 18.1963 4.49356 18.1219 4.61542 18.0711C4.73728 18.0203 4.86799 17.9942 5 17.9942C5.13201 17.9942 5.26272 18.0203 5.38458 18.0711C5.50644 18.1219 5.61704 18.1963 5.71 18.29C5.80373 18.383 5.87812 18.4936 5.92889 18.6154C5.97966 18.7373 6.0058 18.868 6.0058 19C6.0058 19.132 5.97966 19.2627 5.92889 19.3846C5.87812 19.5064 5.80373 19.617 5.71 19.71ZM5 12C4.73478 12 4.48043 12.1054 4.29289 12.2929C4.10536 12.4804 4 12.7348 4 13C4 13.2652 4.10536 13.5196 4.29289 13.7071C4.48043 13.8946 4.73478 14 5 14C6.32608 14 7.59785 14.5268 8.53553 15.4645C9.47322 16.4021 10 17.6739 10 19C10 19.2652 10.1054 19.5196 10.2929 19.7071C10.4804 19.8946 10.7348 20 11 20C11.2652 20 11.5196 19.8946 11.7071 19.7071C11.8946 19.5196 12 19.2652 12 19C12 17.1435 11.2625 15.363 9.94975 14.0503C8.63699 12.7375 6.85652 12 5 12ZM5 8C4.73478 8 4.48043 8.10536 4.29289 8.29289C4.10536 8.48043 4 8.73478 4 9C4 9.26522 4.10536 9.51957 4.29289 9.70711C4.48043 9.89464 4.73478 10 5 10C7.38695 10 9.67613 10.9482 11.364 12.636C13.0518 14.3239 14 16.6131 14 19C14 19.2652 14.1054 19.5196 14.2929 19.7071C14.4804 19.8946 14.7348 20 15 20C15.2652 20 15.5196 19.8946 15.7071 19.7071C15.8946 19.5196 16 19.2652 16 19C15.9923 16.084 14.8353 13.2886 12.78 11.22C10.7114 9.16472 7.91601 8.00775 5 8ZM15.61 8.39C12.7888 5.58754 8.97655 4.01018 5 4C4.73478 4 4.48043 4.10536 4.29289 4.29289C4.10536 4.48043 4 4.73478 4 5C4 5.26522 4.10536 5.51957 4.29289 5.70711C4.48043 5.89464 4.73478 6 5 6C8.44781 6 11.7544 7.36964 14.1924 9.80761C16.6304 12.2456 18 15.5522 18 19C18 19.2652 18.1054 19.5196 18.2929 19.7071C18.4804 19.8946 18.7348 20 19 20C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19C19.9898 15.0235 18.4125 11.2112 15.61 8.39Z"
                  fill="currentColor"
                ></path>
              </svg> */}
              <span className="code ">Offers</span>
            </Link>
          </div>
        </aside>

        <section className="mx-auto w-full px-4 lg:px-0">
          <div className="flex flex-col items-center gap-20 py-8 lg:p-12 xl:p-20 ">
            <ul className="flex max-w-screen-md flex-col gap-y-4 md:gap-y-6 lg:gap-y-8 ">
              <li className="">
                <article className="border border-gray-500 bg-[rgb(35,38,45)] p-5 outline-pink-light transition-transform duration-300 ease-out focus-within:outline hover:scale-[1.03]">
                  <Link
                    to=""
                    rel="prefetch"
                    className="block outline-none"
                  >
                    <header>
                      <time
                        className="code text-gray-200"
                        datetime="2023-06-29T00:00:00.000Z"
                      >
                        July 22, 2023
                      </time>
                    </header>

                    <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" width="725" height="241" alt="" className="my-8" loading="lazy" decoding="async"/>

                    <div className="mt-6 grid gap-x-16 gap-y-4 md:grid-cols-2">
                      <h3 className="heading-4 md:heading-3">
                      User Profiles
                      </h3>
                      <p className="text-gray-200">
                      Create profiles on the platform, providing basic information such as name, profile picture, and location. 
                      </p>
                    </div>
                  </Link>
                </article>
              </li>
              
              <li className="">
                <article className="border border-gray-500 bg-[rgb(35,38,45)] p-5 outline-pink-light transition-transform duration-300 ease-out focus-within:outline hover:scale-[1.03]">
                  <Link
                    to=""
                    rel="prefetch"
                    className="block outline-none"
                  >
                    <header>
                      <time
                        className="code text-gray-200"
                        datetime="2023-02-03T00:00:00.000Z"
                      >
                      June 22, 2023
                      </time>
                    </header>

                    <img src="https://plus.unsplash.com/premium_photo-1670505059783-806c0708bb31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" width="1500" height="643" alt="" className="my-8" loading="lazy" decoding="async"/>

                    <div className="mt-6 grid gap-x-16 gap-y-4 md:grid-cols-2">
                      <h3 className="heading-4 md:heading-3">
                      Driving Score
                      </h3>
                      <p className="text-gray-200">
                      Create a scoring system that evaluates each user's driving behavior based on factors such as speed, acceleration, braking, adherence to traffic rules, and overall safety. 
                      </p>
                    </div>
                  </Link>
                </article>
              </li>
              <li className="">
                <article className="border border-gray-500 bg-[rgb(35,38,45)] p-5 outline-pink-light transition-transform duration-300 ease-out focus-within:outline hover:scale-[1.03]">
                  <Link
                    to=""
                    rel="prefetch"
                    className="block outline-none"
                  >
                    <header>
                      <time
                        className="code text-gray-200"
                        datetime="2023-06-07T00:00:00.000Z"
                      >
                        June 22, 2023
                      </time>
                    </header>

                    <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" width="1500" height="643" alt="" className="my-8" loading="lazy" decoding="async"/>

                    <div className="mt-6 grid gap-x-16 gap-y-4 md:grid-cols-2">
                      <h3 className="heading-4 md:heading-3">
                      Leaderboards
                      </h3>
                      <p className="text-gray-200">
                      Leaderboards to showcase top-performing drivers based on their driving scores and streaks.
                      </p>
                    </div>
                  </Link>
                </article>
              </li>
              <li className="">
                <article className="border border-gray-500 bg-[rgb(35,38,45)] p-5 outline-pink-light transition-transform duration-300 ease-out focus-within:outline hover:scale-[1.03]">
                  <Link
                    to=""
                    rel="prefetch"
                    className="block outline-none"
                  >
                    <header>
                      <time
                        className="code text-gray-200"
                        datetime="2023-01-27T00:00:00.000Z"
                      >
                        June 22, 2023
                      </time>
                    </header>
                    
                    <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1275&q=80" width="1500" height="643" alt="" className="my-8" loading="lazy" decoding="async"/>

                    <div className="mt-6 grid gap-x-16 gap-y-4 md:grid-cols-2">
                      <h3 className="heading-4 md:heading-3">
                      Gamification Elements
                      </h3>
                      <p className="text-gray-200">
                      Implement gamification elements like badges, trophies, and virtual rewards to incentivize positive driving behavior. These rewards can be linked to achievements like completing a certain number of safe drives, earning high scores, or reaching specific milestones.
                      </p>
                    </div>
                  </Link>
                </article>
              </li>
            </ul>

            <nav aria-label="Pagination" className="mx-auto ">
              <ul className="flex items-center gap-4">
                <li className="hidden sm:inline-block">
                  <Link
                    to=""
                    className="relative rounded-md w-10 h-10 flex items-center justify-center border border-transparent transition-colors duration-150"
                    aria-current="page"
                  >
                    1
                  </Link>
                </li>
                <li className="hidden sm:inline-block">
                  <Link
                    to=""
                    className="relative rounded-md w-10 h-10 flex items-center justify-center border border-transparent transition-colors duration-150 hover:border-white focus:border-white"
                  >
                    2
                  </Link>
                </li>
                <li className="hidden sm:inline-block">
                  <Link
                    to=""
                    className="relative rounded-md w-10 h-10 flex items-center justify-center border border-transparent transition-colors duration-150 hover:border-white focus:border-white"
                  >
                    3
                  </Link>
                </li>
                <li className="hidden sm:inline-block">
                  <Link
                    to=""
                    className="relative rounded-md w-10 h-10 flex items-center justify-center border border-transparent transition-colors duration-150 hover:border-white focus:border-white"
                  >
                    4
                  </Link>
                </li>
                <li className="sm:hidden">
                  <p aria-current="page" className="">
                    Page 1 of 4
                  </p>
                </li>
                <li className="next ease rounded-full border border-white transition-colors duration-150">
                  <Link
                    to=""
                    rel="prefetch"
                    className="flex h-10 w-10 items-center justify-center"
                  >
                    <svg
                      data-hk="0-0"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Go to page 2 of 4"
                      className= ""
                    >
                      <path
                        d="M17.92 11.62C17.8724 11.4973 17.801 11.3851 17.71 11.29L12.71 6.29C12.6168 6.19676 12.5061 6.1228 12.3842 6.07234C12.2624 6.02188 12.1319 5.99591 12 5.99591C11.7337 5.99591 11.4783 6.1017 11.29 6.29C11.1968 6.38324 11.1228 6.49393 11.0723 6.61575C11.0219 6.73758 10.9959 6.86814 10.9959 7C10.9959 7.2663 11.1017 7.5217 11.29 7.71L14.59 11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H14.59L11.29 16.29C11.1963 16.383 11.1219 16.4936 11.0711 16.6154C11.0203 16.7373 10.9942 16.868 10.9942 17C10.9942 17.132 11.0203 17.2627 11.0711 17.3846C11.1219 17.5064 11.1963 17.617 11.29 17.71C11.383 17.8037 11.4936 17.8781 11.6154 17.9289C11.7373 17.9797 11.868 18.0058 12 18.0058C12.132 18.0058 12.2627 17.9797 12.3846 17.9289C12.5064 17.8781 12.617 17.8037 12.71 17.71L17.71 12.71C17.801 12.6149 17.8724 12.5028 17.92 12.38C18.02 12.1365 18.02 11.8635 17.92 11.62Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </div>
    </>
  );
};

export default Profile;
