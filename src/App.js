import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./Components/CustomNavbar";
import CustomNavbar2 from "./Components/CustomNavbar2";
import CustomFooter from "./Components/CustomFooter";
import DiscoverSection from "./Components/DiscoverSection";
import TravellersSection from "./Components/TravellersSection";
import HostsSection from "./Components/HostsSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* // <BrowserRouter> */}
      <header>
        <CustomNavbar />
        <CustomNavbar2 />
      </header>
      <main>
        {/* <Routes> */}
        <DiscoverSection />
        <TravellersSection />
        <HostsSection />
        {/* </Routes> */}
      </main>
      <footer>
        <CustomFooter />
      </footer>
      {/* // </BrowserRouter> */}
    </>
  );
}

export default App;
