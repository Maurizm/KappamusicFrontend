//import "./App.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
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
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/credenciales";

import LoginPage from "./pages/LoginPage";
import EditProfilePage from "./pages/EditProfilePage";
import LoadingComponent from "./components/LoadingComponent";
import PlaylistPage from "./pages/PlaylistPage";
import { useContext, useEffect, useState } from "react";
import playerContext from "./context/PlayerContext/PlayerContext";
import GenrePage from "./pages/GenrePage";

function App() {
  const { playlistSongs } = useContext(playerContext);
  const [user, loading, error] = useAuthState(auth);
  const [playerKey, setPlayerKey] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    setPlayerKey((i) => i + 1);
  }, [playlistSongs]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (loading) {
    return <LoadingComponent fullscreen={true} />;
  }
  if (user) {
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
            <div style={{ marginTop: 15 }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search/:searchTerm" element={<SearchPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/editProfile" element={<EditProfilePage />} />
                <Route
                  path="/playlist/:playlistId"
                  element={<PlaylistPage />}
                />
                <Route path="/genre/:genreName" element={<GenrePage />} />
                <Route path="*" element={<Navigate to={"/"} replace />} />
              </Routes>
            </div>
          </div>
        </div>
        <div style={{ position: "fixed", bottom: 0, left: 0, width: "100%" }}>
          <MusicPlayer key={playerKey} />
        </div>
      </div>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="*" element={<Navigate to={"/"} replace />} />
    </Routes>
  );
}

export default App;
