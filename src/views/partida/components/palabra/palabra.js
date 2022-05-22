import { useContext, useEffect, useState } from "react";
import { Letra } from "../letra/letra";
import {WordService} from '../../../../services/word'
import { AppContext } from "../../../../context/app-context";
import { types } from "../../../../types/types";

export const Palabra = ({word, enteredCharacters}) => {
  const { appStatus, dispatch } = useContext(AppContext);

  const [splittedWord , setSplittedWord] = useState([]);

  useEffect(()=>{
    const splitted = typeof word === 'string'?word.split(''):[];
    setSplittedWord(splitted);
  },[word])

  const getchar = (char)=>{
    if(enteredCharacters.includes(char.toLowerCase())){
      return char;
    }
    else{
      return ' ';
    }
  }

  const changeEnteredWord = (word='')=>{
    const action = {
      type: types.setStart,
      payload: {
          ...appStatus,
          palabraInsertada:word
      }
  }
  dispatch(action);
  }

  useEffect(()=>{
    let enteredWordSplitted = splittedWord.map(char=> ' ');
    if(Array.isArray(enteredCharacters)){
      enteredCharacters.forEach(enteredChar=>{
        WordService.getCharIndex(word, enteredChar).forEach(index=>{
          enteredWordSplitted[index] = word[index];
        })
      })

      const enteredWord = enteredWordSplitted.join('');
      changeEnteredWord(enteredWord);
    } 
  },[word,splittedWord, enteredCharacters])
  
  return (
    <div>
     <div className="char-container">
       {
         splittedWord.map((char,i)=>{
          return <Letra key={i} letra={getchar(char)}/>
         })
       }
     </div>
    </div>
  )
}
