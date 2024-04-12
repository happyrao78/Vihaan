import React from 'react';
import driving from '../assets/driving.svg';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword} from 'firebase/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import {auth} from '../firebase';
const DriveRegistration = () => {
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  async function onSubmit(e) {
    e.preventDefault();
    try {
      
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        toast.success('Logged In Successfully');
        navigate('/profile');
      }
    } catch (error) {
      toast.error('Bad user Credentials');
    }
  }
  return (
    <>
      <section className="relative overflow-x-hidden w-screen min-h-screen h-full">
        <div className="w-screen min-h-screen h-full flex md:flex-row flex-col">
          <div className="flex flex-col items-center justify-start p-4 w-full md:w-[50%] lg:w-[45%]">
            <div className="flex items-center justify-center flex-col p-4 w-full h-full bg-grid">
              <Link to="/" className="flex items-start justify-start w-full">
                <img src={logo} alt="logo" className="w-20 h-auto" />
              </Link>
              <motion.div
                variants={variants}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{ duration: 2, ease: 'easeInOut' }}
                className="flex items-start justify-start flex-col h-full gap-4 w-full"
              >
                <div className="flex items-center justify-center h-full w-full">
                  <div className="flex items-center justify-center flex-col gap-6 h-full w-full">
                    <div className="flex items-start justify-start w-full">
                      <h1 className="text-5xl text-center text-gray-50 font-bold sm:max-w-4xl">
                        Login Form
                      </h1>
                    </div>
                    <form className="flex items-center justify-center w-full gap-4 flex-col">
                      <div className="flex flex-col items-start justify-start gap-2 w-full">
                        <label htmlFor="name" className="text-gray-50">
                          Email
                        </label>
                        <input
                          className="w-full p-3 rounded-md border border-[#757575] bg-transparent text-gray-50"
                          id="email"
                          type="email"
                          placeholder="Email"
                          onChange={onChange}
                          required
                          value={formData.email}
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start gap-2 w-full">
                        <label htmlFor="email" className="text-gray-50">
                          Password
                        </label>
                        <div className="relative w-full">
                          <input
                            className="w-full p-3 rounded-md border border-[#757575] bg-transparent text-gray-50 transition-all"
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={formData.password}
                            onChange={onChange}
                            required
                          />
                          {showPassword ? (
                            <AiFillEyeInvisible
                              className="absolute right-3 top-4 text-xl cursor-pointer text-white"
                              onClick={() =>
                                setShowPassword((prevState) => !prevState)
                              }
                            />
                          ) : (
                            <AiFillEye
                              className="absolute right-3 top-4 text-xl cursor-pointer text-white"
                              onClick={() =>
                                setShowPassword((prevState) => !prevState)
                              }
                            />
                          )}
                        </div>
                      </div>
                    </form>
                    <button
                      onClick={onSubmit}
                      className="button mb-24 md:mb-12 button-white w-full relative bg-[#00febe] text-white inline-flex h-[3rem] items-center justify-center gap-[1rem] rounded-lg border-opacity-[1] border-[rgb(242,246,250,0.1)] px-[2.5rem] text-center text-xl font-[500] transition-all tracking-wide"
                    >
                      SUBMIT
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start p-4 w-full md:w-[50%] lg:w-[55%] bg-white">
            <div className="flex items-center justify-center flex-col h-full gap-6">
              <div className="flex items-center justify-center p-4 w-full">
                <h1 className="text-4xl px-2 s:px-4 text-center text-gray-800 font-bold sm:max-w-xl uppercase">
                  “Protecting What Matters Most: Your Shield in Uncertain Times”
                </h1>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={driving}
                  alt="driving"
                  className="mx-auto w-auto h-[30rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DriveRegistration;
