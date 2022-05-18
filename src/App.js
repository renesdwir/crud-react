import Navbar from "./components/Navbar";
import CoverPage from "./pages/CoverPage";
import { Routes, Route, Link } from "react-router-dom";
import AddPage from "./pages/AddPage";
import EditPage from "./pages/EditPage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
