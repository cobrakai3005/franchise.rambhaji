import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyRamBhaji from "../components/WhyRamBhaji";
import FranchiseGallery from "../components/FranchiseGallery";
import BusinessModel from "../components/BusinessModel";
import FranchiseJourney from "../components/FranchiseJourney";
import SkillRequirements from "../components/SkillRequirements";
import TrainingSupport from "../components/TrainingSupport";
import FAQ from "../components/FAQ";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function FranchisePage({ onNavigate }) {
  return (
    <main>
      <Navbar onNavigate={onNavigate} page="franchise" />
      <Hero />
      <WhyRamBhaji />
      <FranchiseGallery />
      <BusinessModel />
      <FranchiseJourney />
      <SkillRequirements />
      <TrainingSupport />
      <FAQ />
      <ContactForm />
      <Footer onNavigate={onNavigate} page="franchise" />
    </main>
  );
}
