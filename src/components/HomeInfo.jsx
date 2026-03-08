import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='text-xs sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-2.5 px-3 sm:py-4 sm:px-8 text-white mx-2 sm:mx-5 max-w-[calc(100vw-1rem)]'>
        Hi, I'm
        <span className='font-semibold mx-1 sm:mx-2 text-white'>Siddhant Roy</span>
        👋
        <br />
        <span className='text-[0.7rem] sm:text-base'>An Information-Technology Engineer</span>
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium text-sm sm:text-xl text-center'>
          Graduated in 2023 <br /> and picked up many skills along the way.
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Know more!
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-sm text-center sm:text-xl'>
        Get ready for your exams with some of my<br /> Typed Books
        </p>

        <Link to='/Books' className='neo-brutalism-white neo-btn'>
          Get Books 
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium text-sm sm:text-xl text-center'>
      Get ready for your exams with my <br/> Handwritten IT/ComputerScience Engineering Notes
      </p>

      <Link to='/HandWritten' className='neo-brutalism-white neo-btn'>
        Get Handwritten Notes
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
