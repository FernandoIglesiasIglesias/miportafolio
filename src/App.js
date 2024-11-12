import { makeStyles } from "@material-ui/core";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";


function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <About title="Sobre mi" id="about" dark={true }/>
      <Skills title="Mi evolución como programador" id="conocimientos" dark={false }/>
      <Contact title="Contacta conmigo" id="contact" dark={true }/>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {

  }
}))

export default App;
