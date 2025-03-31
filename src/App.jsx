import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Sample from "./components/Sample";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<>
          <Hero />
          <About />
          <Projects />
          <Contact />
          
        </>} />
        <Route path="/details-page" element={<Sample />} /> {/* Project Page Route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
