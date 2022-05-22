import { LetraAbecedario } from "../letra-abecedario/letra-abecedario"

const dataAbecedario = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']


export const Abecedario = ({onSelectChar, enteredCharacters}) => {

  return (
    <div className="grid-abecedario">
        {dataAbecedario.map((char,i)=>{
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
