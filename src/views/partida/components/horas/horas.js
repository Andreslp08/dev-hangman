import { useContext } from "react";
import { AppContext } from "../../../../context/app-context";


export const Horas = () => {
  const { appStatus } = useContext( AppContext )

  return (
    <div className="main-box trys">
         <p>horas restantes para le entrega</p>
         <span>{appStatus.intentos}: 00 Horas</span>

    </div>
  )
}
