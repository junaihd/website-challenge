import './App.css';
import Header from './header';
import Navbar from './navbar';
import About from './about';
import Cards from './cards';
import Contact from './contact';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Cards/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
