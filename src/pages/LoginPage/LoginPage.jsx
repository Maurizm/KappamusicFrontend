import React, { useState } from "react";
import { auth } from "../../firebase/credenciales";
import Home from "./Home";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import "./LoginPage.css";

function LoginPage() {
  const [usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else {
      setUsuario(null);
    }
  });

  return (
    <div>{usuario ? <Home correoUsuario={usuario.email} /> : <Login />}</div>
  );
}

export default LoginPage;
