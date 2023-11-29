import React, { useContext, useEffect, useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import playerContext from "../../context/PlayerContext/PlayerContext";
import { COLORS } from "../../colors/colors";
import { updateFavorites } from "../../firebase/hooks/updateFavorites";
import { removeFavorites } from "../../firebase/hooks/removeFavorites";
import { getUserData } from "../../firebase/hooks/getUserData";
import { isEmpty } from "../MusicPlayer/hooks/isEmpty";
import { Button } from "@mui/material";
import { enqueueSnackbar } from "notistack";

function FavoriteButton({ song }) {
  const { userData } = useContext(playerContext);

  const onHandleClick = async (song, action) => {
    if (isEmpty(song)) {
      return;
    }
    if (action == "add") {
      await updateFavorites(song);
      enqueueSnackbar("Añadido a Favoritos", { variant: "success" });
      console.log("add");
    } else {
      await removeFavorites(song);
      enqueueSnackbar("Removido de Favoritos", { variant: "warning" });
      console.log("remove");
    }
  };

  // const onHandleClickAdd = async (song) => {
  //   await updateFavorites(song).then(() => getUserData(setUserData));
  //   console.log("add");
  // };
  // const onHandleClickRemove = async (song) => {
  //   await removeFavorites(song).then(() => getUserData(setUserData));
  //   console.log("remove");
  // };

  // useEffect(() => {
  //   setData([...userData]);
  // }, [userData]);

  if (userData.length == 0) {
    return null;
  }
  if (userData[0]["favorites"].some((item) => item.id === song.id)) {
    return (
      <Button onClick={() => onHandleClick(song, "remove")}>
        <BsStarFill color={COLORS.accentColor} size={22} />
      </Button>
    );
  } else {
    return (
      <Button onClick={() => onHandleClick(song, "add")}>
        <BsStar color={COLORS.accentColor} size={22} />
      </Button>
    );
  }
}

export default FavoriteButton;
