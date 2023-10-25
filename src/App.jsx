//import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import MusicPlayer from "./components/MusicPlayer";
import FavoritesPage from "./pages/FavoritesPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <SideBar />
        <div
          style={{
            paddingLeft: 50,
            width: "100%",
            paddingRight: 20,
            marginBottom: 200,
          }}
        >
          <TopBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search/:searchTerm" element={<SearchPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<Navigate to={"/"} replace />} />
          </Routes>
        </div>
      </div>
      <div style={{ position: "fixed", bottom: 0, left: 0, width: "100%" }}>
        <MusicPlayer />
      </div>
    </div>
  );
}

export default App;
