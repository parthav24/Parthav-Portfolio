import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";
import Home from "./components/Home.jsx";
import NavBar from "./components/Navbar.jsx";
import Portfolio from "./components/Portfolio.jsx";
import SocialLinks from "./components/SocialLinks.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
