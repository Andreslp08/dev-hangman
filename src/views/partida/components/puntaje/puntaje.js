import { Icon } from "@iconify/react";
import { useContext } from "react";
import { AppContext } from '../../../../context/app-context'
import { types } from "../../../../types/types";

export const Puntaje = () => {
  const { appStatus, dispatch } = useContext(AppContext);

  return (
    <div className="flex flex-row items-center" style={{height:'fit-content'}}>
      <Icon icon={'majesticons:coins-line'} width={30} style={{color:'#FFC700'}}/>
    <h3 className="titulo m-1">puntaje: {appStatus.puntaje}
    </h3>
    </div>
  )
}
