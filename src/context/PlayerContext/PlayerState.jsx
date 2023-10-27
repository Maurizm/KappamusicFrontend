import React, { useEffect, useReducer } from "react";
import playerReducer from "./PlayerReducer";
import playerContext from "./PlayerContext";
import songs from "../../assets/songs.json";
import { getData } from "../../firebase/hooks/getData";
import { getUserData } from "../../firebase/hooks/getUserData";

function PlayerState(props) {
  const initialState = {
    currentSong: {},
    songsList: [],
    userData: [],
  };
  const [state, dispatch] = useReducer(playerReducer, initialState);

  useEffect(() => {
    const getMusicLibrary = async () => {
      await getData(setSongsList);
      await getUserData(setUserData);
    };
    getMusicLibrary();
  }, []);

  const setCurrentSong = (song) =>
    dispatch({ type: "SET_CURRENT_SONG", data: song });
  const setSongsList = (musicLibrary) =>
    dispatch({ type: "SET_SONGS_LIST", data: musicLibrary });
  const setUserData = (userData) =>
    dispatch({ type: "SET_USER_DATA", data: userData });

  return (
    <playerContext.Provider
      value={{
        currentSong: state.currentSong,
        songsList: state.songsList,
        userData: state.userData,
        setUserData,

        setCurrentSong,
        setSongsList,
      }}
    >
      {props.children}
    </playerContext.Provider>
  );
}

export default PlayerState;
