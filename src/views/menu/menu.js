import { useContext, useEffect } from 'react'
import { AppContext } from '../../context/app-context';
import { ProgressComponent } from './components/progress'
import { types } from '../../types/types';
import { DIFFICULTIES } from '../../constants/constants';
import { RandomService } from '../../services/random';

export const MenuView = () => {
  const {appStatus , dispatch} = useContext(AppContext);

  const hanndleChoseDifficult= (difficult)=>{
    let tries = 0;
    switch (difficult) {
      case DIFFICULTIES.EASY:
        tries = 7;
        break;
    
      case DIFFICULTIES.NORMAL:
        tries = 5;
        break;
      case DIFFICULTIES.HARD:
        tries = 3
        break;

      default:
        break;
    }

    const randomCategory = RandomService.getRandomCategory();
    const randomWord = RandomService.getRandomWord(randomCategory?.id);

    const action = {
      type: types.setStart,
      payload: {
        puntaje: 0,
        intentos: tries,
        categoria: randomCategory?.name || 'N/A',
        palabra: randomWord,
        estado: '',
        dificultad: difficult
      }
    }

    dispatch( action );
  }

  return (
    <>
        <div className="menu-view">
            <h1 className='title titulo'>Dev Hangman</h1>
            <div className="button-difficult">
                <button className="button primary-button" onClick={()=> hanndleChoseDifficult(DIFFICULTIES.EASY)}>Fácil</button>    
                <button className="button primary-button" onClick={()=> hanndleChoseDifficult(DIFFICULTIES.NORMAL)}>Normal</button>    
                <button className="button primary-button" onClick={()=> hanndleChoseDifficult(DIFFICULTIES.HARD)}>Difícil</button>    
            </div>
            <div className='cover'>
                <ProgressComponent />
            </div>
        </div>
        
    </>
  )
}
