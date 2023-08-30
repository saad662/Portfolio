import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Form } from "./components/form";
import { Resume } from "./components/resume";
import { Footer } from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Banner  />
      <Skills  />
      <Resume  />
      <Projects  />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
