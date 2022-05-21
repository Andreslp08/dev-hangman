import { Letra } from "../letra/letra";


export const Palabra = ({palabra}) => {
  console.log("aaa");
  return (
    <div>
     <div className="letter-container">
        <Letra letra={"A"}/>
        <Letra letra={"B"}/>
        <Letra letra={"C"}/>
     </div>
    </div>
  )
}
