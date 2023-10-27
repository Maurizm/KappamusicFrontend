import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../credenciales";

export const setNewUser = async () => {
  //Estado inicial de los nuevos usuarios registrados.
  await addDoc(collection(db, "users"), {
    id: auth.currentUser.uid,
    name: auth.currentUser.email,
    email: auth.currentUser.email,
    favorites: [],
    playlists: [],
    profilePhotoLink: "",
  });
};
