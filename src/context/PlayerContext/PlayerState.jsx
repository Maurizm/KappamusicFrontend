import React, { useEffect, useReducer } from "react";
import playerReducer from "./PlayerReducer";
import playerContext from "./PlayerContext";
import songs from "../../assets/songs.json";
//import { getData } from "../../firebase/hooks/getData";

function PlayerState(props) {
  const initialState = {
    currentSong: {},
    songsList: songs, // CAMBIAR A [] cuando se implemente firebase
  };
  const [state, dispatch] = useReducer(playerReducer, initialState);

  //PARA DESPUES DE IMPLEMENTAR EL FIREBASE
  // useEffect(() => {
  //   const getMusicLibrary = async () => {
  //     await getData(setSongsList);
  //   };
  //   getMusicLibrary();
  // }, []);

  const setCurrentSong = (song) =>
    dispatch({ type: "SET_CURRENT_SONG", data: song });
  const setSongsList = (musicLibrary) =>
    dispatch({ type: "SET_SONGS_LIST", data: musicLibrary });
  return (
    <playerContext.Provider
      value={{
        currentSong: state.currentSong,
        songsList: state.songsList,

        setCurrentSong,
        setSongsList,
      }}
    >
      {props.children}
    </playerContext.Provider>
  );
}

export default PlayerState;
