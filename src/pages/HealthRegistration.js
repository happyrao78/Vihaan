import React from 'react';
import health from '../assets/health.svg';
import logo from '../assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { db } from '../firebase';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { auth } from '../firebase';
import HealthRegister from '../components/HealthRegister';

const HealthRegistration = () => {
  const navigate = useNavigate();
  const [step, setStep] = React.useState(0);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    coins: 0,
    score: 0,
  });
  const prevStep = () => {
    setStep((step) => step - 1);
  };
  const nextStep = () => {
    setStep((step) => step + 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.phone
      );

      updateProfile(auth.currentUser, {
        displayName: formData.name,
      });
      const user = userCredential.user;
      const formDataCopy = { ...formData, coins: 50 };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
      await setDoc(doc(db, 'users', user.uid), formDataCopy);
      toast.success('Account Creation successful');
      toast.warning('50 Coins Added to Your Account', {
        icon: '🚀',
      });
      navigate('/registration/Health/questionnaire');
    } catch (error) {
      toast.error('Something went wrong with the registration');
    }
  };
  const form = [
    <HealthRegister
      key={HealthRegister}
      handleChange={handleChange}
      nextStep={nextStep}
      formData={formData}
      handleSubmit={handleSubmit}
    />,
  ];
  return (
    <>
      <section className="relative overflow-x-hidden w-screen min-h-screen h-full">
        <div className="w-screen min-h-screen h-full flex md:flex-row flex-col">
          <div className="flex flex-col items-center justify-start p-4 w-full md:w-[50%] lg:w-[45%]">
            <div className="flex items-center justify-center flex-col p-4 w-full h-full bg-grid">
              <Link to="/" className="flex items-start justify-start w-full">
                <img src={logo} alt="logo" className="w-20 h-auto" />
              </Link>
              {form[step]}
            </div>
          </div>
          <div className="flex flex-col items-center justify-start p-4 w-full md:w-[50%] lg:w-[55%] bg-white">
            <div className="flex items-center justify-center flex-col h-full gap-6">
              <div className="flex items-center justify-center p-4 w-full">
                <h1 className="text-4xl px-2 s:px-4 text-center text-gray-800 font-bold sm:max-w-xl uppercase">
                  “Health is a state of complete harmony of the body, mind, and spirit”
                </h1>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={health}
                  alt="health"
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

export default HealthRegistration;
