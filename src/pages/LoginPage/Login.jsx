import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "firebase/auth";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { auth } from "../../firebase/credenciales";
import { setNewUser } from "../../firebase/hooks/setNewUser";
import { enqueueSnackbar } from "notistack";
import { Box } from "@mui/material";
import Logo from "../../assets/im1.jpeg";

const Login = () => {
  const [registrando, setRegistrando] = useState(false);
  const [email, setEmail] = useState(""); // Estado para el correo electrónico de restablecimiento de contraseña
  const [showPassword, setShowPassword] = useState(false);

  const functAutenticacion = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;
    //alert(correo)
    if (registrando === true) {
      try {
        await createUserWithEmailAndPassword(auth, correo, contraseña).then(
          () => setNewUser()
        );
        window.location.reload();
      } catch (error) {
        //alert(error.code);
        if (error.code === "auth/email-already-in-use") {
          //alert("dirección de correo electrónico  ya está registrada");
          enqueueSnackbar(
            "Dirección de correo electrónico ya está registrada",
            { variant: "error" }
          );
        } else {
          if (error.code === "auth/weak-password") {
            //alert("La contraseña que ingresaste no es segura intenta de nuevo");
            enqueueSnackbar(
              "La contraseña que ingresaste no es segura intenta de nuevo",
              { variant: "warning" }
            );
          } else {
            if (error.code === "auth/invalid-email") {
              //alert("El usuario/contraseña es invalido");
              enqueueSnackbar("El usuario/contraseña es invalido", {
                variant: "warning",
              });
            }
          }
        }
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, correo, contraseña);
        window.location.reload();
      } catch (error) {
        //alert(error.code)
        if (error.code === "auth/invalid-email") {
          //alert("El usuario/contraseña es invalido"); //Se verifica que cuando el campo email este vacio se muestre un mensaje “El usuario/contraseña es invalido”
          enqueueSnackbar("El usuario/contraseña es invalido", {
            variant: "warning",
          });
        } else {
          if (error.code === "auth/invalid-login-credentials") {
            //alert("Credenciales Incorrectas"); //cuando pones mal la contraseña
            enqueueSnackbar("Credenciales Incorrectas", {
              variant: "error",
            });
          } else {
            if (error.code === "auth/missing-password") {
              //alert("El usuario/contraseña es invalido"); //cuando la contraseña esta vacia
              enqueueSnackbar("El usuario/contraseña es invalido", {
                variant: "warning",
              });
            }
          }
        }
      }
    }
  };

/* para restablecer la contraseña */
  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert(
        "Se ha enviado un correo electrónico con instrucciones para restablecer la contraseña"
      );
      setEmail(""); // Borra el campo de entrada de correo electrónico
    } catch (error) {
      alert(
        "Error al enviar el correo electrónico de restablecimiento de contraseña"
      );
    }
  };

  const imagenesCarrusel = [
    "../../assets/im1.jpeg",
    "../../assets/im2.jpeg",
    "../../assets/im3.jpeg",
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
        //alignItems: "center",
      }}
    >
      {/* <Slider {...settings}>
        {imagenesCarrusel.map((imagen, index) => (
          <div key={index}>
            <img
              src={imagen}
              alt={`Imagen ${index + 1}`}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}
      </Slider> */}
      {window.screen.width > 600 && (
        <Box
          component="img"
          sx={{ width: 700, height: "auto", marginRight: 20 }}
          src={Logo}
          alt="Logo"
        />
      )}

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
          <h2>Email</h2>
          <input
            // type="text"
            // placeholder="Ingresar Email"
            // className="cajatexto"
            // id="email"
            type="text"
            placeholder="Ingresar correo electrónico                        *"
            className="cajatexto"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            pattern="[^ ]+" //para que no permita espacios
            title="el correo  no debe contener espacios."
            maxLength="50" //solo se puede ingresar hasta 50 caracteres
          />
          <h2>Contraseña</h2>
          <div style={{ display: "flex", width: "125%" }}>
            <input
              // type="password"
              // placeholder="Ingresar contraseña"
              // className="cajatexto"
              // id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Ingresar contraseña                                  *"
              className="cajatexto"
              id="password"
              pattern="[^ ]+" //para que no permita espacios
              title="la contraseña no debe contener espacios."
              maxLength="100" //solo permite ingresar 100 caracteres
              //disabled
            />
            {/* seccion para mostrar el ojo  */}
            {showPassword ? (
              <svg
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                height={"2.0rem"}
                className="eyeicon"
              >
                <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
              </svg>
            ) : (
              <svg
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                height={"2.0rem"}
                className="eyeicon"
              >
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path
                  fillRule="evenodd"
                  d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>

          <button className="btnform">
            {registrando ? "Registrate" : "Iniciar Sesión"}
          </button>
        </form>

        <button type="button" onClick={handleResetPassword} className="btnform">
          Olvidaste tu Contraseña
        </button>

        <h4 className="texto">
          {registrando ? "Si ya tienes cuenta" : "No tienes cuenta "}
          <button
            className="btnswitch"
            onClick={() => setRegistrando(!registrando)}
          >
            {registrando ? "Iniciar Sesión" : "Registrate"}
          </button>
        </h4>
      </div>
    </div>
  );
};

export default Login;
