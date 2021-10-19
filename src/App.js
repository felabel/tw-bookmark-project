// import logo from './logo.svg';
// import guitar from "./guitar.jpg"
import './App.css';
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Features from "./components/Features"
import DownloadCard from "./components/DownloadCard"
import Faqs from "./components/Faqs"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Features />
      <DownloadCard />
      <Faqs />
      <Footer />
    </div>
    
  
  );
}

export default App;
