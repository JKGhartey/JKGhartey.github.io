import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import HeroSection from "./components/hero/HeroSection";
import HelpSection from "./components/help/HelpSection";
import Fans from "./components/Fans/Fans";
import Influencer from "./components/Influencer/Influencer";
import Assurance from "./components/Assurance/Assurance";
import Advert from "./components/Advert/Advert";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <HeroSection />
      <HelpSection />
      <Fans />
      <Influencer />
      <Assurance />
      <Advert />
      <Footer />
      <Routes>
        <Route path="/" />
      </Routes>
    </Router>
  );
}

export default App;
