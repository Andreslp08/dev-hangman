import { useContext, useState } from "react"
import { ESTADOS } from "../../constants/constants";
import { AppContext } from "../../context/app-context";
import { MenuView } from "../menu/menu";
import { PartidaView } from "../partida/partida";


export const Game = () => {

    const {appStatus , dispatch} = useContext(AppContext);
    console.log(appStatus)


  return (
    <div>
        {
              appStatus.estado === ESTADOS.lobby ? <MenuView/> : <PartidaView/>
        }
        

    </div>
  )
}
