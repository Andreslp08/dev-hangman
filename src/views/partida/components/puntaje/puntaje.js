import { useContext } from "react";
import { AppContext } from '../../../../context/app-context'
import { types } from "../../../../types/types";

export const Puntaje = () => {
  const { appStatus,dispatch } = useContext( AppContext );

  return (
    <h2>puntaje: {appStatus.puntaje}
    
    <button onClick={()=>{  dispatch({   type: types.removeTrys, payload: appStatus})}}>ssds</button>
    </h2>
  )
}
