import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Homepage";
import ProfileHost from "./Components/ProfileHost";
import ProfileTraveller from "./Components/ProfileTraveller";
import CustomFooter from "./Components/CustomFooter";
import { useState, useEffect } from "react";
import CustomNavbar from "./Components/CustomNavbar";
import CustomNavbar2 from "./Components/CustomNavbar2";
import ScrollToTop from "./Components/ScrollToTop";
import { AuthProvider } from "./Components/AuthContext";
import Mission from "./Components/Mission";
import EditHostProfile from "./Components/EditHostProfile";
import EditTravelerProfile from "./Components/EditTravelerProfile";
import DeleteProfile from "./Components/DeleteProfile";

const App = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingDown(currentScrollY > lastScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <header>
          <CustomNavbar />
          <CustomNavbar2
            className={isScrollingDown ? "navbar-hidden" : "navbar-visible"}
          />
        </header>
        <main>
          <Routes>
            <Route path="/host/:id" element={<ProfileHost />} />
            <Route path="/traveler/:id" element={<ProfileTraveller />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/edit/traveler" element={<EditTravelerProfile />} />
            <Route path="/edit/host" element={<EditHostProfile />} />
            {/* <Route path="/delete/profile" element={<DeleteProfile />} /> */}
            <Route
              path="*"
              element={
                <h1 className="text-center not-found">NOT FOUND - 404 </h1>
              }
            />
          </Routes>
        </main>
        <footer>
          <CustomFooter />
        </footer>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
