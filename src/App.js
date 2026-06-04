import { useEffect, useState } from "react";
import Loader from "./components/Loader";

import Navbar from "./components/Navbar";
import Carousel from "./components/Caurosel";
import About from "./pages/About";
import TourPackages from "./pages/TourPackages";
import Destinations from "./pages/Destinations";
import CarRent from "./pages/CarRent";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollTop";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // loader time

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader/>;

  return (
    <div>
      <Navbar />
      <Carousel />
      <About />
      <TourPackages />
      <Destinations />
      <CarRent />
      <Contact />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;