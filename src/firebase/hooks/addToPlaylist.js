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

export const addToPlaylist = async (song, userData, playlistId) => {
  //   await getDocs(
  //     query(
  //       collection(db, "users"),
  //       where("email", "==", auth.currentUser.email),
  //       where("playlist", "array-contains", { id: playlistId })
  //     )
  //   ).then((querySnapshot) => {
  //     querySnapshot.docs.map((doc) => {
  //       updateDoc(doc.ref, {
  //         ...doc.data(),
  //         playlists: {
  //           playlistSet: arrayUnion(song),
  //         },
  //       });
  //     });
  //   });
  //////////////////////////////////
  //   await getDocs(
  //     query(collection(db, "users"), where("email", "==", auth.currentUser.email))
  //   ).then(async (querySnapshot) => {
  //     const newData = querySnapshot.docs.map((doc) => ({
  //       ...doc.data().playlists.map((playlist) => {
  //         if (playlist.id == playlistId) {
  //           return "lule";
  //         }
  //       }),
  //       //id: doc.id,
  //     }));
  //     console.log(newData);
  //   });
  let playlistsArray = userData[0].playlists;
  let index = playlistsArray.findIndex((playlist) => playlist.id == playlistId);

  if (playlistsArray[index].playlistSet.some((item) => item.id === song.id)) {
    throw new Error("Canció ya esta en la playlist");
  } else {
    playlistsArray[index].playlistSet.push(song);
    await getDocs(
      query(
        collection(db, "users"),
        where("email", "==", auth.currentUser.email)
      )
    ).then((querySnapshot) => {
      querySnapshot.docs.map((doc) => {
        updateDoc(doc.ref, {
          ...doc.data(),
          playlists: playlistsArray,
        });
      });
    });
  }
};
