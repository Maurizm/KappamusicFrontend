//import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div>
      <div>
        <TopBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search/:searchTerm" element={<SearchPage />} />
          <Route path="*" element={<Navigate to={"/"} replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
