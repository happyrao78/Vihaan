import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from '../firebase';
import FirstQuestionnare from '../components/driveQuestionnare/FirstQuestionnare';
import SecondQuestionnare from '../components/driveQuestionnare/SecondQuestionnare';
import ThirdQuestionnare from '../components/driveQuestionnare/ThirdQuestionnare';
import { toast } from 'react-toastify';
import { auth } from '../firebase';
import { doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore';

const DrivingQuestionnaire = () => {
 
  const navigate = useNavigate();
  const [step, setStep] = React.useState(0);
  const [score, setScore] = React.useState(0);
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

  const handleChange = (event) => {
    const value = parseInt(event.target.value);
    setScore((prevScore) => prevScore + value);
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const auth = getAuth();
      const docRef = doc(db, 'users', auth.currentUser.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setFormData({ ...docSnap.data() });
      }
      console.log(formData, 1);
    });
  }, [step]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, 'users', auth.currentUser.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setFormData({ ...docSnap.data() });
      }
      console.log(formData);
      const formDataCopy = {
        ...formData,
        score,
        timestamp: serverTimestamp(),
        userRef: auth.currentUser.uid,
      };
      await updateDoc(docRef, formDataCopy);
      navigate('/drive/calculatingScore');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const question = [
    'Car Service',
    'What type of drive u like',
    'Music you like in the car',
  ];
  const questionnare = [
    <FirstQuestionnare
      nextStep={nextStep}
      handleChange={handleChange}
      score={score}
      setScore={setScore}
    />,
    <SecondQuestionnare
      nextStep={nextStep}
      prevStep={prevStep}
      handleChange={handleChange}
      score={score}
      setScore={setScore}
    />,
    <ThirdQuestionnare
      nextStep={nextStep}
      prevStep={prevStep}
      handleChange={handleChange}
      score={score}
      setScore={setScore}
      handleSubmit={handleSubmit}
    />,
  ];
  return (
    <section
      className="relative overflow-x-hidden pb-20 pt-14 sm:pt-20 bg-grid"
      id="selectionPage"
    >
      <div className="z-[-30] absolute inset-0"></div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center justify-center p-4 w-full">
          <h1 className="text-5xl px-2 s:px-4 text-center text-gray-50 font-bold sm:max-w-4xl uppercase">
            {question[step]}
          </h1>
        </div>
        {questionnare[step]}
      </div>
    </section>
  );
};

export default DrivingQuestionnaire;
