import { LetraAbecedario } from "../letraAbecedario/LetraAbecedario"

const dataAbecedario = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']


export const Abecedario = () => {

  return (
    <div className="grid-abecedario">
        {dataAbecedario.map((letra)=>{
            return <LetraAbecedario key={letra} letra ={letra}/>
        })}
    </div>
  )
}
