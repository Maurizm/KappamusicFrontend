import {
  and,
  arrayUnion,
  collection,
  collectionGroup,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { auth, db } from "../credenciales";

export const updatePlaylistName = async (name, userData, playlistId) => {
  let playlistsArray = userData[0].playlists;
  let index = playlistsArray.findIndex((playlist) => playlist.id == playlistId);
  playlistsArray[index].name = name;

  await getDocs(
    query(collection(db, "users"), where("email", "==", auth.currentUser.email))
  ).then((querySnapshot) => {
    querySnapshot.docs.map((doc) => {
      updateDoc(doc.ref, {
        ...doc.data(),
        playlists: playlistsArray,
      });
    });
  });
};
