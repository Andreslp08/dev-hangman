import { DATA_ABECEDARIO } from "../../../../static/categories"
import { LetraAbecedario } from "../letra-abecedario/letra-abecedario"

export const Abecedario = ({onSelectChar, enteredCharacters}) => {

  return (
    <div className="grid-abecedario">
        {DATA_ABECEDARIO.map((char,i)=>{
            return <LetraAbecedario 
            key={i} 
            char ={char} 
            onSelect={(char)=>onSelectChar(char)} 
            selected={
              Array.isArray(enteredCharacters)&&
              enteredCharacters.includes(char.toLowerCase())?true:false}
            />
        })}
    </div>
  )
}
