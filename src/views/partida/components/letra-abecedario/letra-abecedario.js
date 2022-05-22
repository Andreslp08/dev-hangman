import { useState } from "react"

export const LetraAbecedario = ({char, onSelect, selected}) => {

  const handleSeleciton = ()=>{
      onSelect&&onSelect(char);
  }
  return (
    <button 
    className={`button primary-button border-full letra-abecedario ${selected?'disabled':''}`} 
    onClick={()=>handleSeleciton()}>
        {char}
    </button>
  )
}
