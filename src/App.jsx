import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SubmissionSection from "./pages/StoreSubmit";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit-store" element={<SubmissionSection />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
