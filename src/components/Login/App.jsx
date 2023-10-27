/* eslint-disable no-unused-vars */
import { useState } from "react";

//importando los modulos de firebase
//import appFirebase from '../src/credenciales'
import { onAuthStateChanged } from "firebase/auth";

//importar nuestros componentes
import Login from "../Login/Login";
import Home from "../Login/Home";

import "./App.css";
import { auth } from "../../firebase/credenciales";

function App() {
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

export default App;
