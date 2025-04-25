import logo from '/blueplanet.svg'
export default function Header(){
    return(
        <>
            <h1>Это мой первый React. проект!</h1>
            <p>
                <img className={'blueplanet'} src={logo} alt={'JavaScript'} />
            </p>
        </>
    )
}