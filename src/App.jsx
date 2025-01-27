import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "aos/dist/aos.css";
import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter as Router, } from 'react-router-dom';

import Header from "./components/Header";
import TrustedBySection from './components/TrustedBySection';
import CompaniesLogoSection from './components/CompaniesLogoSection';
import Footer from './components/Footer';
import Subscription from './components/Subscription';
import NumberSection from './components/NumberSection';
import AppSection from './components/AppSection';
import HappyClients from './components/HappyClient';
import FAQAccordion from './components/FaqAccordian';
import TestimonialSlider from './components/Testimonial';
import BlogSection from './components/BlogSection';
import StepSection from './components/StepSection';
import VideoSection from './components/VideoSection';
import WhyChooseSection from './components/WhyChooseSection';
import AboutSection from './components/AboutSection';
import OurServiceSection from './components/OurServiceSection';
import Banner from './components/Banner';

function App() {
  return (
    <Router>
      <Header />
      <Banner />
      <TrustedBySection />
      <OurServiceSection />
      <AboutSection />
      <WhyChooseSection />
      <VideoSection />
      <HappyClients />
      <StepSection />
      <BlogSection />
      <TestimonialSlider />
      <FAQAccordion />
      <AppSection />
      <NumberSection />
      <Subscription />
      <CompaniesLogoSection />
      <Footer />
      <Analytics />
    </Router>
  );
}

export default App;
