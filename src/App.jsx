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
import Maven from "./pages/Maven";
import ShopInVerse from "./pages/ShopInVerse";
import Aliexpress from "./pages/Exness";
import Betng from "./pages/LxBet";
import Instant from "./pages/Instant";
import FundedPro from "./pages/Fundedpro";

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
        <Route path="/shopinverse" element={<ShopInVerse />} />
        <Route path="/aliexpress" element={<Aliexpress />} />
        <Route path="/maven" element={<Maven />} />
        <Route path="/1xbetng" element={<Betng />} />
        <Route path="/funderpro" element={<FundedPro />} />
        <Route path="/instant" element={<Instant />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/affiliate" element={<AffiliateDisclosure />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/term" element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
