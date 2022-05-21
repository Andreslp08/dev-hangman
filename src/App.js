
import { useState } from 'react';
import './styles/styles.scss'
import { PartidaView } from './views/partida/partida'
import {MenuView} from './views/menu/menu';

const ESTADOS = {
  partidaIniciada: 'PARTIDA_INICIADA',
  partidaGanada: 'PARTIDA_GANADA',
  partidaFinalizada: 'PARTIDA_FINALIZADA',
  lobby: 'LOBBY'
}

function App() {
  
  const [gameState, setGameState] = useState({
    puntaje: 0,
    intentos: 0,
    categoria: '',
    palabra: '',
    estado: [ESTADOS.lobby]
  })

 
  return (
    <div className="App">
        <MenuView/>
    </div>
  );
}

export default App;
