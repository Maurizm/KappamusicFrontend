const playerReducer = (state, action) => {
  switch (action.type) {
    case "SET_CURRENT_SONG":
      return {
        ...state,
        currentSong: action.data,
      };
    case "SET_SONGS_LIST":
      return {
        ...state,
        songsList: action.data,
      };
    case "SET_USER_DATA":
      return {
        ...state,
        userData: action.data,
      };
    case "SET_PLAYLIST_ARRAY":
      return {
        ...state,
        playlistSongs: action.data,
      };
    case "SET_PLAYLIST_INDEX":
      return {
        ...state,
        playlistIndex: action.data,
      };

    default:
      break;
  }
};

export default playerReducer;
