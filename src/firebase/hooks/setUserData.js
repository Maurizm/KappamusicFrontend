import {
  collection,
  getDocs,
  where,
  query,
  setDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { auth, db } from "../credenciales";

export const setUserData = async () => {
  const q = query(
    collection(db, "users"),
    where("email", "==", auth.currentUser.email) //CAMBIAR A user.uid para el deploy????
  );
  await getDocs(q).then((querySnapshot) => {
    querySnapshot.docs.map((doc) => {
      setDoc(doc.ref, {
        ...doc.data(),
        playlists: ["lula", "lulu", "llule", "asjdoajsodjo", "prueba1"],
      });
    });
  });

  console.log(q);
};
