import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../credenciales";

export const getData = async (setMusic) => {
  await getDocs(collection(db, "songs")).then((querySnapshot) => {
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    console.log("songlist", newData);
    setMusic(newData);
  });
};
