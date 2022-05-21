
import { useState } from 'react';
import './styles/styles.scss'

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
  
      <h1 className='titulo'>Dev Hangman</h1>
    
    </div>
  );
}

export default App;
