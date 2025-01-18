import { FaGithubSquare, FaHome, FaInstagram, FaPhone } from 'react-icons/fa';
import './FooterStyles.css';
import { MdEmail } from 'react-icons/md';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
            <div>
              <p>Scheme No 78, Indore</p>
              <p>Madhya Pradesh.</p>
            </div>
          </div>
          <div className='phone'>
            <h4>
              <FaPhone
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
              9752111420
            </h4>
          </div>
          <div className='email'>
            <h4>
              <MdEmail
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
              anilyadavjnt@gmail.com
            </h4>
          </div>
        </div>
        <div className='right'>
          <h4>About Me</h4>
          <p>
            I'm an iOS Developer seeking new opportunities to grow in my Mobile
            Development career. People enjoy working with me because of my
            extensive amount of passion, enthusiasm and strong desire to learn
            through doing. I also bring a great deal of positivity, drive and
            attention to detail every team that I work with.
          </p>
          <div className='social'>
            <a
              href='https://github.com/anilyadavjnt'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithubSquare
                size={30}
                style={{ color: '#fff', marginRight: '1rem' }}
              />
            </a>
            <a
              href='https://www.linkedin.com/in/anilyadavjnt/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedin
                size={30}
                style={{ color: '#fff', marginRight: '1rem' }}
              />
            </a>
            <a
              href='https://www.facebook.com/anilyadavjnt/'
              target='_blank'
              rel='noreferrer'
            >
              <FaFacebook
                size={30}
                style={{ color: '#fff', marginRight: '1rem' }}
              />
            </a>
            <a
              href='https://www.instagram.com//anilyadav9071/'
              target='_blank'
              rel='noreferrer'
            >
              <FaInstagram
                size={30}
                style={{ color: '#fff', marginRight: '1rem' }}
              />
            </a>
            <a
              href='https://x.com/anilyadavjnt'
              target='_blank'
              rel='noreferrer'
            >
              <FaTwitter
                size={30}
                style={{ color: '#fff', marginRight: '1rem' }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
