import { useContext } from "react";
import { AppContext } from "../../../../context/app-context";


export const Horas = () => {
  const { appStatus } = useContext( AppContext )

  return (
    <div className="main-box trys">
         <p className="text-try">horas restantes para le entrega</p>
         <p className="rest-try"><span id="intento">{appStatus.intentos}</span>: 00 Horas</p>

    </div>
  )
}
