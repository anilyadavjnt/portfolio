import './HeroImgStyles.css'
import IntroImg from '../assets/intro-bg.jpg'
import { Link } from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='intro-img' src={IntroImg} alt='IntroImg'/>
      </div>
      <div className='content'>
        <p>HI, I'M Anil Kumar Yadav</p>
        <h1>iOS Developer.</h1>
        <div>
          <Link to='/project' className='btn'>Projects</Link>
          <Link to='/contact' className='btn btn-light'>Contact</Link>
        </div>
      </div>
    </div>
  )
}
export default HeroImg