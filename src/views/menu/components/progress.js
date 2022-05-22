import { useContext, useEffect, useState } from 'react'
import spriteinitial from '../../../assets/images/sprites/sprite-initial.png'
import sprite1 from '../../../assets/images/sprites/sprite_0.png'
import sprite2 from '../../../assets/images/sprites/sprite_1.png'
import sprite3 from '../../../assets/images/sprites/sprite_2.png'
import sprite4 from '../../../assets/images/sprites/sprite_3.png'
import sprite5 from '../../../assets/images/sprites/sprite_4.png'
import sprite6 from '../../../assets/images/sprites/sprite_5.png'
import sprite7 from '../../../assets/images/sprites/sprite_6.png'
import { AppContext } from '../../../context/app-context'
import { types } from '../../../types/types';
import { DIFFICULTIES } from '../../../constants/constants'


export const ProgressComponent = () => {
  const { appStatus, dispatch } = useContext( AppContext );
  const [image, setImage] = useState( spriteinitial );

  useEffect(() => {
    switch (appStatus.intentos) {
    
      case 7:
        setImage(sprite1);
        break;
      case 6:
        setImage(sprite2);
      break;
      case 5:
        if( appStatus.dificultad === DIFFICULTIES.NORMAL ){
          setImage(sprite1);
        }else{
          setImage(sprite3);
        }
      break;
      case 4:
        if( appStatus.dificultad === DIFFICULTIES.NORMAL ){
          setImage(sprite3);
        }else{
          setImage(sprite4);
        }
        break;
      case 3:
        if( appStatus.dificultad === DIFFICULTIES.NORMAL ){
          setImage(sprite5);
        }else if(appStatus.dificultad === DIFFICULTIES.HARD){
          setImage(sprite1);
        }else{
          setImage(sprite5);
        }
        break;
      case 2:
        if( appStatus.dificultad === DIFFICULTIES.NORMAL ){
          setImage(sprite6);
        }else if(appStatus.dificultad === DIFFICULTIES.HARD){
          setImage(sprite5);
        }else{
          setImage(sprite6);
        }
        break;
      case 1:
          setImage(sprite7);
        break;
      case 0:

        break;
    
      default:
        break;
    }
  }, [appStatus.intentos])


  
  return (
    <div className="box-progress">
  
       <img  className="image-progress" src={image} alt='imageprogres' />
    </div>
  )
}
