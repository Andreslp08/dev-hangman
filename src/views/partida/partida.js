import { useContext, useEffect, useState } from "react";
import { DIFFICULTIES } from "../../constants/constants";
import { AppContext } from "../../context/app-context";
import { RandomService } from "../../services/random";
import { WordService } from "../../services/word";
import { types } from "../../types/types";
import { ProgressComponent } from "../menu/components/progress";
import { Abecedario } from "./components/abecedario/abecedario"
import { ConfigButton } from "./components/config-button/config-button";
import { Horas } from "./components/horas/horas"
import { ConfigModal } from "./components/modals/config-modal";
import { GameOverModal } from "./components/modals/game-over-modal";
import { WinnerModal } from "./components/modals/winner-modal";
import { Palabra } from "./components/palabra/palabra";
import { Puntaje } from './components/puntaje/puntaje';

const payloadTemplate = {
    puntaje: 0,
    intentos: 0,
    categoria: '',
    palabra: '',
    estado: '',
    dificultad: ''
}

const INTENTOS = {
    [`${DIFFICULTIES.EASY}`]: 7,
    [`${DIFFICULTIES.NORMAL}`]: 5,
    [`${DIFFICULTIES.HARD}`]: 3,
}

//----------------------------------------------------------------------

export const PartidaView = () => {
    const { appStatus, dispatch } = useContext(AppContext);

    const [visibilityWinnerModal, setVisibilityWinnerModal] = useState(false);
    const [visibilityGameOverModal, setVisibilityGameOverModal] = useState(false);
    const [visibilityConfigModal, setVisibilityConfigModal] = useState(false);

    const [enteredCharacters, setEnteredCharacter] = useState([]);

    useEffect(()=>{
        const handleWinOrDefeat = ()=>{
            const completed = WordService.areEqual(appStatus?.palabra, appStatus?.palabraInsertada);
            console.log('compare',appStatus?.palabra, appStatus?.palabraInsertada);
            const intentos = appStatus?.intentos;
           if(intentos > 0 && completed){
              setVisibilityWinnerModal(true);
           }
           else if(intentos <= 0 && completed == false){
              setVisibilityGameOverModal(true);
           }
        }
    handleWinOrDefeat();
    },[appStatus?.intentos, appStatus?.palabra, appStatus?.palabraInsertada])

    const returnToMenu = () => {
        const action = {
            type: types.setLobby,
            payload: payloadTemplate
        }
        dispatch(action);
    }


    const restartGame = () => {
        const randomCategory = RandomService.getRandomCategory();
        const randomWord = RandomService.getRandomWord(randomCategory?.id);

        const action = {
            type: types.setStart,
            payload: {
                ...payloadTemplate,
                intentos: INTENTOS[appStatus.dificultad],
                categoria: randomCategory?.name,
                palabra: randomWord,
                dificultad:appStatus.dificultad
            }
        }
        dispatch(action);
        setEnteredCharacter([]);
        setVisibilityConfigModal(false);
        setVisibilityGameOverModal(false);
        setVisibilityWinnerModal(false);
    }




    const addChar = (char) => {
        const hasChar = WordService.hasChar(appStatus?.palabra, char);
        setEnteredCharacter([...enteredCharacters, char.toLowerCase()]);
        hasChar ? addPoint() : removeAttempt();
    }

    const removeAttempt = () => {
        const action = {
            type: types.removeTry,
            payload: {
                ...appStatus,
            }
        }
        dispatch(action);
    }

    const addPoint = () => {
        const action = {
            type: types.addPoint,
            payload: {
                ...appStatus,
                puntaje: appStatus?.puntaje + 50
            }
        }
        dispatch(action);
    }


    return (
        <div>
            <div className="flex-item-partida">
                <ConfigButton onSelect={() => setVisibilityConfigModal(true)} />
                <div className="category">
                    <h1>{appStatus?.categoria || 'N/A'}</h1>
                </div>
                <div>
                    <Puntaje />
                </div>

            </div>

            <div className="grid-item-partida">
                <div>
                    <Palabra word={appStatus?.palabra} enteredCharacters={enteredCharacters} />
                </div>
                <div>
                    <Horas />
                </div>
                <div>
                    <Abecedario 
                        onSelectChar={(char) => addChar(char)} 
                        enteredCharacters={enteredCharacters} 
                    />
                </div>
                <div>
                    <ProgressComponent />
                </div>
            </div>
            <WinnerModal
                visible={visibilityWinnerModal}
                setVisible={setVisibilityWinnerModal}
                onPlayAgain={() => restartGame()}
            />
            <GameOverModal
                visible={visibilityGameOverModal}
                setVisible={setVisibilityGameOverModal}
                onReturnToMenu={() => returnToMenu()}
                onPlayAgain={() => restartGame()}
            />
            <ConfigModal
                visible={visibilityConfigModal}
                setVisible={setVisibilityConfigModal}
                onReturnToMenu={() => returnToMenu()}
                onRestartGame={() => restartGame()}
            />
        </div>

    )
}
