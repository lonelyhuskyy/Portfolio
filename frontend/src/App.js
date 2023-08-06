import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Technologies } from './components/Technologies';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Skills />
      <Technologies />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
