
import { useReducer, useState } from 'react';
import './styles/styles.scss'
import { PartidaView } from './views/partida/partida'
import {MenuView} from './views/menu/menu';
import { AppContext } from './context/app-context';
import { AppReducer } from './context/app-reducer';
import { Game } from './views/game/game';

// const ESTADOS = {
//   partidaIniciada: 'PARTIDA_INICIADA',
//   partidaGanada: 'PARTIDA_GANADA',
//   partidaFinalizada: 'PARTIDA_FINALIZADA',
//   lobby: 'LOBBY'
// }

function App() {
  
  const init = () =>{
    return {
          puntaje: 0,
          intentos: 0,
          categoria: '',
          palabra: '',
          estado: 'LOBBY',
          dificultad: ''
        };
  }

  const [appStatus, dispatch] = useReducer(AppReducer, {}, init);
 
  return (
    <AppContext.Provider value={{
      appStatus,
      dispatch
    }}>
      <div className="App">
          <Game/>
      </div>
    </AppContext.Provider>
   
  );
}

export default App;
