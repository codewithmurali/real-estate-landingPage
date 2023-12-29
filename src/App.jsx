
import AboutUs from './components/AboutUs'
import Amenities from './components/Amenities'
import FAQ from './components/FAQ'
import Floor from './components/Floor'
import KeyFeatures from './components/KeyFeatures'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import Partner from './components/Partner'
import StreetView from './components/StreetView'
function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <AboutUs />
      <Amenities/>
      <StreetView  />
      <KeyFeatures/>
      <Floor/>
      <FAQ />

    </>
  );
}

export default App;
