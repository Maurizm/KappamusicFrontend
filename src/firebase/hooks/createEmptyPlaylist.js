import {
  arrayUnion,
  collection,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { auth, db } from "../credenciales";

export const createEmptyPlaylist = async (playlistLength) => {
  // const q = query(
  //   collection(db, "users"),
  //   where("email", "==", auth.currentUser.email)
  // );
  await getDocs(
    query(collection(db, "users"), where("email", "==", auth.currentUser.email))
  ).then((querySnapshot) => {
    querySnapshot.docs.map((doc) => {
      updateDoc(doc.ref, {
        ...doc.data(),
        playlists: arrayUnion({
          id: crypto.randomUUID(), // crea id random sin necesidad de librerias.
          name: `Playlist #${playlistLength + 1}`,
          playlistSet: [],
        }),
      });
    });
  });
};
