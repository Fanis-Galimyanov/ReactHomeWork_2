export default function Greeting({nameChangedNuber, name}){
  
    if(nameChangedNuber > 1){
        return(
            <h1>Привет у тебя поменялось имя, теперь ты {name}!</h1>
        )
    }
    return(
        <h1>Привет, {name} </h1>
    )
}