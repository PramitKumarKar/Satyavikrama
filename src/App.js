import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Team from "./components/Team";
import Services from "./components/Services"
import Contact from "./components/Contact";
// import SocialLinks from "./components/SocialLinks";
// import mandirImage from './assets/RamMandir.jpg'
function App() {
  return (
    <div className='bg-mandirImage bg-no-repeat bg-cover bg-center bg-fixed bg-opacity-20 backdrop-blur-lg'>
    <Navbar/>
    <Home/>
    <About/>
    <Team/>
    <Services/>
    <Contact/>
    
    {/* <SocialLinks/> */}
    </div>
   
  );
}

export default App;
