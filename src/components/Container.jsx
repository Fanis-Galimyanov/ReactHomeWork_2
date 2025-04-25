import Greeting from "./Greeting";
import {useEffect, useState} from "react"
import {names} from "../data"

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

let randomNameNumber = randomInteger(0,names.length - 1);

const props = {nameChangedNuber: 0, name: null}

export default function Container(){

    const [name, setName] = useState(names[randomNameNumber]);
    props.name = name;
    useEffect(()=>{
        console.log(props.name, props.nameChangedNuber, randomNameNumber);
        props.nameChangedNuber++;
    }, [props.name])

    setTimeout(()=>{ 
        randomNameNumber = randomInteger(0,names.length - 1);
        setName(names[randomNameNumber]); 
    },5000);

    return(
         <Greeting key={props.nameChangedNuber} {...props} />
    )
}