import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Homepage";
import WelcomeHost from "./Components/WelcomeHost";
import WelcomeTraveller from "./Components/WelcomeTraveller";
// import CustomNavbar from "./Components/CustomNavbar";
// import CustomNavbar2 from "./Components/CustomNavbar2";
import CustomFooter from "./Components/CustomFooter";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route element={<WelcomeHost />} path="/welcome/host" />
          <Route element={<WelcomeTraveller />} path="/welcome/traveller" />
          <Route element={<HomePage />} path="/" />
          <Route
            element={<h1 className="text-center">NOT FOUND - 404 </h1>}
            path="*"
          />
        </Routes>
      </main>
      <footer>
        <CustomFooter></CustomFooter>
      </footer>
    </BrowserRouter>
  );
}

export default App;
