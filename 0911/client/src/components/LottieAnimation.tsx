import Lottie from 'lottie-react';
import { RingLoader } from 'react-spinners';

import animationData from '../assets/Animation - 1725586915720.json'; // Lottie JSON 파일을 불러오기
import './Spinner.css';

const LottieAnimation = () => {
  return (
    <div style={{ width: '400px', height: '400px' }}>
      <Lottie animationData={animationData} loop={true} />;
    </div>
  );
};

export const Spinner = () => {
  return (
    <div className="spinner-container">
      <RingLoader />
    </div>
  );
};

export default LottieAnimation;
