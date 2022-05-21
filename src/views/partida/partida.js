import { ProgressComponent } from "../menu/components/ProgressComponent";
import { Abecedario } from "./components/abecedario/Abecedario"
import { Horas } from "./components/horas/Horas"
import { Palabra } from "./components/palabra/Palabra";
import { Puntaje } from './components/puntaje/Puntaje';


export const PartidaView = () => {
  return (
    <div>
        <div className="flex-item-partida">
            <div>configuracion</div>
            <div className="category">
                <h1>categoria</h1>
            </div>
            <div>  
                <Puntaje />
            </div>

        </div>
        
        <div className="grid-item-partida">
            <div>
                <Palabra/>
            </div>
            <div>
            <Horas/>
            </div>
            <div>
                <Abecedario/>
            </div>
            <div>
            <ProgressComponent/>
            </div>
        </div>
    </div>
    
  )
}
