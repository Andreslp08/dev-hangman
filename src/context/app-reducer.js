
import { types } from "../types/types";
import { ESTADOS } from './../constants/constants'

// const [gameState, setGameState] = useState({
//     puntaje: 0,
//     intentos: 0,
//     categoria: '',
//     palabra: '',
//     estado: [ESTADOS.lobby]
//   })


export const AppReducer = (state = {}, action) =>{
    switch (action.type) {
        case types.addPoint:
            return {
                ...action.payload,
            }    
        case types.category :
            return {
                ...action.payload,
            } 
        case types.palabra :
            return {
                ...action.payload,
            } 
        case types.removeTrys :
            return {
                ...action.payload,
                intentos : state.intentos - 1
            }
        case types.setFinish :
            return {
                ...action.payload,
                estado : ESTADOS.partidaFinalizada
            } 
        case types.setLobby :
            return {
                ...action.payload,
                estado : ESTADOS.lobby
            } 
        case types.setWinner :
            return {
                ...action.payload,
                estado : ESTADOS.partidaGanada
            } 
        case types.setStart :
            return {
                ...action.payload,
                estado : ESTADOS.partidaIniciada
            } 
        default:
            return state;
    }
}