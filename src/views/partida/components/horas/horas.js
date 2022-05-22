import { Icon } from "@iconify/react";
import { useContext } from "react";
import { AppContext } from "../../../../context/app-context";


export const Horas = () => {
  const { appStatus } = useContext( AppContext )

  return (
    <div className="main-box time-card p-2">
         <p className="title">Horas restantes para la entrega</p>
         <Icon icon={'ant-design:clock-circle-filled'} width={30}/>
         <p className="hours"><span id="intento">{appStatus.intentos}</span> {`${appStatus?.intentos !== 1?'Horas':'Hora'}`}</p>
    </div>
  )
}
