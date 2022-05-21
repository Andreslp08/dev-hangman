import './styles/styles.scss'
import {MenuView} from './views/menu/menu';

const ESTADOS = {
  partidaIniciada: 'PARTIDA_INICIADA',
  partidaGanada: 'PARTIDA_GANADA',
  partidaFinalizada: 'PARTIDA_FINALIZADA',
  lobby: 'LOBBY'
}




function App() {
  
  return (
    <div className="App">
        <MenuView/>
    </div>
  );
}

export default App;
