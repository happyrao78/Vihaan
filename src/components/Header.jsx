// this is the nav bar and contains all the information for pages and features
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/logo.svg';
import { onAuthStateChanged } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024) setIsOpen(false);
    });
  }, []);
  const auth = getAuth();
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setLoggedIn(user ? true : false);
    });
  }, [auth]);
  return (
    <div className="sticky top-0 z-20 max-h-screen text-white">
      <header className="noise-container shadow-lg">
        <div className="noise"></div>
        <nav className="px-[1rem] mx-auto w-full max-w-screen-2xl md:px-6 flex h-[5rem] justify-center items-center">
          <Link
            to="/"
            title="Home"
            data-home-link=""
            className="flex items-center justify-center"
          >
            <img src={logo} alt="logo" className="w-20 h-auto" />
          </Link>

          <div className="ml-16 hidden shrink flex-row items-center gap-16 lg:flex">
            <HashLink smooth to="/#home" rel="prefetch" className="link">
              Home
            </HashLink>
            <HashLink smooth to="/#about" rel="prefetch" className="link">
              About
            </HashLink>
            <HashLink smooth to="/#community" rel="prefetch" className="link">
              Community
            </HashLink>
            <HashLink smooth to="/#team" rel="prefetch" className="link">
              Team
            </HashLink>
            <HashLink smooth to="/#contact" rel="prefetch" className="link">
              Contact
            </HashLink>
          </div>

          <div className="flex-1"></div>

          <div className="hidden lg:block">
            <div className="flex items-center gap-4 transition-all">
              {loggedIn ? (
                <button
                  onClick={() => {
                    auth.signOut();
                  }}
                  className="relative bg-white text-[#17191e] border  hover:bg-transparent hover:text-white hover:border-white hover:border  inline-flex h-[3rem] items-center justify-center gap-[1rem] rounded-full border-opacity-[1] border-[rgb(242,246,250,0.1)] px-[2.5rem] text-center text-base transition-all tracking-wide"
                >
                  LOGOUT
                </button>
              ) : (
                <button
                  onClick={() => {
                    navigate('/login');
                  }}
                  className="relative bg-white text-[#17191e] border  hover:bg-transparent hover:text-white hover:border-white hover:border  inline-flex h-[3rem] items-center justify-center gap-[1rem] rounded-full border-opacity-[1] border-[rgb(242,246,250,0.1)] px-[2.5rem] text-center text-base transition-all tracking-wide"
                >
                  LOGIN
                </button>
              )}
            </div>
          </div>
          <button
            id="header-drawer-button"
            type="button"
            className="link ml-6 lg:hidden"
            aria-controls="header-drawer"
            aria-expanded="false"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <svg
              data-hk="0-0"
              width="24"
              height="17"
              viewBox="0 0 24 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 "
            >
              <line y1="0.5" x2="24" y2="0.5" stroke="currentColor"></line>
              <line y1="8.5" x2="24" y2="8.5" stroke="currentColor"></line>
              <line y1="16.5" x2="24" y2="16.5" stroke="currentColor"></line>
            </svg>
            <span className="sr-only">Show Menu</span>
          </button>
        </nav>
        <div
          className={
            'flex items-start justify-center fixed top-0 z-[2] w-screen min-h-screen h-full' +
            (isOpen ? ' showpopup' : ' noshowpopup')
          }
        >
          <div className="flex items-center justify-center noise-container flex-col h-full w-full">
            <div className="noise"></div>
            <nav
              aria-label="Primary"
              className="flex flex-col divide-y w-full text-xl divide-gray-500 p-2 text-left"
            >
              <div className="flex w-full items-center justify-between p-6">
                <Link to="/">
                  {' '}
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center justify-center "
                  >
                    <img src={logo} alt="logo" className="w-20 h-auto" />
                  </div>
                </Link>
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-black bg-white rounded-full p-3 s:p-4 md:w-12 md:h-12 s:w-10 s:h-10 h-10 w-10 flex items-center justify-center focus:outline-none"
                  >
                    X
                  </button>
                </div>
              </div>
              <HashLink smooth to="/#home" rel="prefetch" className="link p-5">
                Home
              </HashLink>
              <HashLink smooth to="/#about" rel="prefetch" className="link p-5">
                About
              </HashLink>
              <HashLink
                smooth
                to="/#community"
                rel="prefetch"
                className="link p-5"
              >
                Community
              </HashLink>
              <HashLink smooth to="/#team" rel="prefetch" className="link p-5">
                Team
              </HashLink>
              <HashLink
                smooth
                to="/#contact"
                rel="prefetch"
                className="link p-5"
              >
                Contact
              </HashLink>
              <div className="flex items-center sm:flex-row flex-col justify-center sm:justify-between gap-4 w-full p-6">
                <div className="flex items-center gap-4 w-[80%] sm:w-[40%]">
                  {loggedIn ? (
                    <button
                      onClick={() => {
                        auth.signOut();
                      }}
                      className="button button-white w-full relative bg-gradient-83 from-[#00febe] to-[#FF5500] text-white inline-flex h-[3rem] items-center justify-center gap-[1rem] rounded-full border-opacity-[1] border-[rgb(242,246,250,0.1)] px-[2.5rem] text-center text-base font-[800] transition-all tracking-wide"
                    >
                      LOGOUT
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        navigate('/login');
                      }}
                      className="button button-white w-full relative bg-gradient-83 from-[#00febe] to-[#FF5500] text-white inline-flex h-[3rem] items-center justify-center gap-[1rem] rounded-full border-opacity-[1] border-[rgb(242,246,250,0.1)] px-[2.5rem] text-center text-base font-[800] transition-all tracking-wide"
                    >
                      LOGIN
                    </button>
                  )}
                </div>
                <div className="flex items-center justify-center w-[80%] sm:w-[40%]">
                  <button className="hover:bg-white bg-[#262626] group  transition-all  hover:text-black text-white  p-4 w-full flex items-center justify-center rounded-full">
                    <p className="flex items-center justify-center gap-2 font-medium transition-all text-xs sm:text-sm">
                      JOIN OUR COMMUNITY{' '}
                      <span className="group-hover:text-black text-white group-hover:pl-1 transition-all">
                        <svg
                          width="11"
                          height="10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m6.143 9 4-4-4-4M10.143 5H1"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </p>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <hr className="border-gray-500"></hr>
    </div>
  );
};

export default Header;
