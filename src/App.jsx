import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SubmissionSection from "./pages/StoreSubmit";
import AboutSection from "./components/About";
import StoreSection from "./pages/FundedNext";
import Exness from "./pages/Exness";
import Ftmo from "./pages/Ftmo";
import Oraimo from "./pages/Oraimo";
import AffiliateDisclosure from "./components/Affilaire";
import PrivacyPolicy from "./components/Privacy";
import TermsAndConditions from "./components/term";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit-store" element={<SubmissionSection />} />
        <Route path="/fundednext" element={<StoreSection />} />
        <Route path="/exness" element={<Exness />} />
        <Route path="/ftmo" element={<Ftmo />} />
        <Route path="/oraimo" element={<Oraimo />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/affiliate" element={<AffiliateDisclosure />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/term" element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
