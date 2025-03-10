import styles from "./App.module.css";
import { Experience} from "./components/Experience/Experience";
import { About } from "./components/About/About";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects"
import { Contact } from "./components/Contact/Contact";

function App() {
  

  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App;
