import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { auth } from "../../firebase/credenciales";

const Login = () => {
  const [registrando, setRegistrando] = useState(false);

  const functAutenticacion = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;

    if (registrando) {
      try {
        await createUserWithEmailAndPassword(auth, correo, contraseña);
      } catch (error) {
        alert("La contraseña debe tener más de 8 caracteres");
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, correo, contraseña);
      } catch (error) {
        alert("El correo o la contraseña son incorrectos");
      }
    }
  };
  const imagenesCarrusel = [
    "assets/im1.jpeg",
    "assets/im2.jpeg",
    "assets/im3.jpeg",
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      className="padre"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#0A100D",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Slider {...settings}>
        {imagenesCarrusel.map((imagen, index) => (
          <div key={index}>
            <img
              src={imagen}
              alt={`Imagen ${index + 1}`}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}
      </Slider>
      <div
        className="card card-body shadow-lg"
        style={{ backgroundColor: "#0A100D" }}
      ></div>
      <div 
        className="card card-body shadow-lg"
        style={{ backgroundColor: "#0A100D" }}
      >
        <h1 style={{ color: "#dee2e6" }}>KappaMusic</h1>
        <form onSubmit={functAutenticacion}>
          <h2>Email </h2>
          <input
            type="text"
            placeholder="Ingresar Email"
            className="cajatexto"
            id="email"
          />
          <h2>Contraseña</h2>
          <input
            type="password"
            placeholder="Ingresar contraseña"
            className="cajatexto"
            id="password"
          />
          <button className="btnform">
            {registrando ? "Registrate" : "Inicia Sesion"}
          </button>
        </form>
        <h4 className="texto">
          {registrando ? "Si ya tienes cuenta" : "No tienes cuenta "}
          <button
            className="btnswitch"
            onClick={() => setRegistrando(!registrando)}
          >
            {registrando ? "Inicia Sesion" : "Registrate"}
          </button>
        </h4>
      </div>
    </div>
  );
};

export default Login;
