import './App.css';
import { NavBar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Skills } from './components/skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Clients } from './components/Clients';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">   
      <NavBar/>
      <Banner/>
      <Projects/>
      <Skills/>
      {/* <Contact/> */}
      <Clients/>
      <Footer/>
    </div>
  );
}
export default App;
