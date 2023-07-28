import Hero from '../Componant/Hero/Hero';
import NavBar from '../Componant/Navbar/NavBar';
import Service from '../Componant/Service/Service';
import TitleSection from '../Componant/TitleSection/TitleSection';
import './HomePage.css';
import service from '../assets/image/تنزيل.jpg';
import service1 from '../assets/image/تنزيل (1).jpg';
import service2 from '../assets/image/istockphoto-1359876068-612x612.jpg';
import Ad from '../Componant/AdSection/Ad';
import Footer from '../Componant/Footer/Footer';

function HomePage() {
  return (
    <div className='container'>
      <NavBar/>
      <Hero/>
      <TitleSection/>
      <Service image={service} reverce={true} title="Your title here" 
      dis="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos maiores possimus, perferendis vero fuga nobis natus nostrum deserunt accusamus est inventore quia omnis quos voluptas expedita tempore dicta quo debitis."/>
      <Service image={service1} reverce={false} title="Your title here" 
      dis="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos maiores possimus, perferendis vero fuga nobis natus nostrum deserunt accusamus est inventore quia omnis quos voluptas expedita tempore dicta quo debitis."/>
      <Service image={service2} reverce={true} title="Your title here" 
      dis="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos maiores possimus, perferendis vero fuga nobis natus nostrum deserunt accusamus est inventore quia omnis quos voluptas expedita tempore dicta quo debitis."/>
      <Ad/>
      <Footer/>
    </div>
  );
}

export default HomePage