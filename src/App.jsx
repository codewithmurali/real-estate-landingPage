
import AboutUs from './components/AboutUs'
import Amenities from './components/Amenities'
import FAQ from './components/FAQ'
import KeyFeatures from './components/KeyFeatures'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Partner from './components/Partner'
import StreetView from './components/StreetView'
function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <AboutUs />
      <Amenities/>
      <StreetView  />
      <KeyFeatures/>
      <FAQ />

    </>
  );
}

export default App;
