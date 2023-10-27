import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { auth, db } from "../credenciales";

export const removeFavorites = async (song) => {
  const q = query(
    collection(db, "users"),
    where("email", "==", auth.currentUser.email)
  );
  await getDocs(q).then((querySnapshot) => {
    querySnapshot.docs.map((doc) => {
      updateDoc(doc.ref, {
        ...doc.data(),
        favorites: arrayRemove(song),
      });
    });
  });
};
