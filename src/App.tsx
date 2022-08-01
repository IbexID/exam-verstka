import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import IndexAlt from "./pages/IndexAlt";

function App() {
  return (
    <BrowserRouter basename="/exam-verstka">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/alt" element={<IndexAlt />} />
        <Route path="*" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
