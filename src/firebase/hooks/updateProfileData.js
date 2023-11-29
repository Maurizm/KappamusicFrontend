import {
  arrayUnion,
  collection,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { auth, db } from "../credenciales";

export const updateProfileData = async (newName, newProfileLink) => {
  const q = query(
    collection(db, "users"),
    where("email", "==", auth.currentUser.email)
  );
  await getDocs(q).then((querySnapshot) => {
    querySnapshot.docs.map((doc) => {
      updateDoc(doc.ref, {
        ...doc.data(),
        name: newName,
        profilePhotoLink: newProfileLink,
      });
    });
  });
};
