import { useContext, useEffect } from 'react'
import { AppContext } from '../../context/app-context';
import { ProgressComponent } from './components/progress'
import { types } from '../../types/types';
import { DIFFICULTIES } from '../../constants/constants';

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

    const action = {
      type: types.setStart,
      payload: {
        puntaje: 0,
        intentos: tries,
        categoria: '',
        palabra: '',
        estado: '',
        dificultad: difficult
      }
    }

    dispatch( action );
  }

  return (
    <div>
        <div className="flex-items">
            <div className="button-difficult">
                <button className="button primary-button" onClick={()=> hanndleChoseDifficult(DIFFICULTIES.EASY)}>Facil</button>    
                <button className="button primary-button" onClick={()=> hanndleChoseDifficult(DIFFICULTIES.NORMAL)}>Normal</button>    
                <button className="button primary-button" onClick={()=> hanndleChoseDifficult(DIFFICULTIES.HARD)}>Dificil</button>    
            </div>
            <div>
                <h1 className='title'>DevHangman</h1>
             
                <ProgressComponent />
            </div>
        </div>
        
    </div>
  )
}
