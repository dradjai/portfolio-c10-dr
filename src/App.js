
import Header from './components/Header';
import About from './components/About';
import Gallery from './components/Gallery'
import Skill from './components/Skill';
import Footer from './components/Footer';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <main>
      <Header/>
      <About />
      <Gallery />
      <Skill />
      <Footer />

     </main>
  );
}

export default App;
