import Greeting from "./Greeting";
import {useEffect, useState} from "react"
import {names} from "../data"
import Clock from "./Clock";
import Header from "./Header";

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

let randomNameNumber = randomInteger(0,names.length - 1);

let nameChangedNuber = 0;

export default function Container(){

    const props = {nameChangedNuber: 0, name: null}

    const [name, setName] = useState(names[randomNameNumber]);

    useEffect(()=>{
        nameChangedNuber++;
    }, [name])

    setTimeout(()=>{ 
        randomNameNumber = randomInteger(0,names.length - 1);
        setName(names[randomNameNumber]); 
    }, 10000);

    props.nameChangedNuber = nameChangedNuber;
    props.name = name;

    return(
        <>
            <Header/>
            <Clock/>
            <Greeting key={props.nameChangedNuber} {...props} />
         </>
    )
}