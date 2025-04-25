import { useEffect, useState } from 'react'
import logo from '/blueplanet.svg'

export default function Clock(){
    const [now, setNow] = useState(new Date())

    useEffect(() =>{
       const interval = setInterval(()=>setNow(new Date()),1000);

       return () => {
            clearInterval(interval);
       }
    },[])

    return(
      <>
        <img className={'blueplanet'} src={logo} alt={'JavaScript'} />
        <span style={{fontSize: 80}}>
            Сегодня: {now.toLocaleDateString()}
            <br />
            Cейчас: {now.toLocaleTimeString()}
            <br />
            {(now.getMinutes() % 5 == 0) && <p>Время делится на 5</p>}
        </span>
      </>
    )
  }
  