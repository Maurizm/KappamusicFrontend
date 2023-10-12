//import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import MusicPlayer from "./components/MusicPlayer";
import songs from "./assets/songs.json";
import SearchBar from "./components/SearchBar";
import TopBar from "./pages/HomePage/TopBar/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:searchTerm" element={<SearchPage />} />
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </>
  );
}

export default App;
