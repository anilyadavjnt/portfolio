import Footer from '../components/Footer';
import Form from '../components/Form';
import HeroImg2 from '../components/HeroImg2';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading='Contact.' text='Lets have a chat' />
      <Form />
      <Footer />
    </div>
  );
};
export default Contact;
