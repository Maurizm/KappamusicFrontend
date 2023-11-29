/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/credenciales";

export const Home = ({ correoUsuario }) => {
  return (
    <h2>
      bienvenido usuario {correoUsuario}
      <button className="btn btn-primary" onClick={() => signOut(auth)}>
        Logout
      </button>
    </h2>
  );
};
export default Home;
