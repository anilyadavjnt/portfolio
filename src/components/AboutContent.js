import { Link } from 'react-router-dom';
import './AboutContentStyles.css';

import iOS from '../assets/ios-featured.avif';
import xCode from '../assets/xCode.png';

const AboutContent = () => {
  return (
    <div className='about'>
      <div className='left'>
        <h1>Who Am I?</h1>
        <p>
          Im iOS developer. I create responsive secure mobile apps for
          my clients.
        </p>
        <Link to='/contact'>
          <button className='btn'>Contact</button>
        </Link>
      </div>
      <div className='right'>
        <div className='img-container'>
          <div className='img-stack top'>
            <img src={iOS} alt='iOS' className='img' />
          </div>
          <div className='img-stack bottom'>
            <img src={xCode} alt='xCode' className='img' />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutContent;
