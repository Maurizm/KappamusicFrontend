import { collection, getDocs, where, query } from "firebase/firestore";
import { auth, db } from "../credenciales";

export const getUserData = async (setData) => {
  await getDocs(
    query(collection(db, "users"), where("email", "==", auth.currentUser.email))
  ).then((querySnapshot) => {
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      //id: doc.id,
    }));
    //console.log(newData);
    setTimeout(function () {
      //console.log("adentro");
      setData([...newData]);
    }, 500);
  });
};
