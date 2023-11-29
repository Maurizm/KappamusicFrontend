import React, { useEffect, useReducer } from "react";
import playerReducer from "./PlayerReducer";
import playerContext from "./PlayerContext";
import songs from "../../assets/songs.json";
import { getData } from "../../firebase/hooks/getData";
import { getUserData } from "../../firebase/hooks/getUserData";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { auth, db } from "../../firebase/credenciales";

function PlayerState(props) {
  const initialState = {
    currentSong: {},
    songsList: [],
    userData: [],
    playlistSongs: [],
    playlistIndex: -1,
  };
  const [state, dispatch] = useReducer(playerReducer, initialState);

  useEffect(() => {
    const getMusicLibrary = async () => {
      await getData(setSongsList);
      //onSnapshot para cargar datos en tiempo real
      //Necesario el de crear constante para que agregue delay(supongo) y se cargue nuevos datos.
      onSnapshot(
        query(
          collection(db, "users"),
          where("email", "==", auth.currentUser.email)
        ),
        (snapshot) => {
          const newData = snapshot.docs.map((doc) => ({ ...doc.data() }));
          //setUserData(snapshot.docs.map((doc) => ({ ...doc.data() })));
          setUserData(newData);
          console.log("snapshot", newData);
        }
      );
    };
    getMusicLibrary();
  }, []);

  const setCurrentSong = (song) =>
    dispatch({ type: "SET_CURRENT_SONG", data: song });
  const setSongsList = (musicLibrary) =>
    dispatch({ type: "SET_SONGS_LIST", data: musicLibrary });
  const setUserData = (userData) =>
    dispatch({ type: "SET_USER_DATA", data: userData });
  const setPlaylistSongs = (songsArray) =>
    dispatch({ type: "SET_PLAYLIST_ARRAY", data: songsArray });
  const setPlaylistIndex = (index) =>
    dispatch({ type: "SET_PLAYLIST_INDEX", data: index });

  return (
    <playerContext.Provider
      value={{
        currentSong: state.currentSong,
        songsList: state.songsList,
        userData: state.userData,
        playlistSongs: state.playlistSongs,
        playlistIndex: state.playlistIndex,
        setUserData,
        setCurrentSong,
        setSongsList,
        setPlaylistSongs,
        setPlaylistIndex,
      }}
    >
      {props.children}
    </playerContext.Provider>
  );
}

export default PlayerState;
