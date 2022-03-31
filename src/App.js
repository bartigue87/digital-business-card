import "./index.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Headshot from "./components/Headshot";
import Links from "./components/Links";
import Bio from "./components/Bio";

function App() {
  return (
    <div className="page-container">
      <Headshot />
      <div className="text-container">
        <Bio />
        <Links />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
