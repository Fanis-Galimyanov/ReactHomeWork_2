import { useEffect, useState } from 'react'
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
        <span style={{fontSize: 40}}>
            Сегодня: {now.toLocaleDateString()}
            <br />
            Cейчас: {now.toLocaleTimeString()}
            <br />
            {(now.getMinutes() % 5 == 0) && <p>Время делится на 5</p>}
        </span>
      </>
    )
  }
  