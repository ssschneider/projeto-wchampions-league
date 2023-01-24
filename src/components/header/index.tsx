import { Logo, Menu, Wrapper } from "./styles"

import logoCL from "../../assets/images/logo.svg"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()

    const handleClick = (navigateTo: string) => {
        navigate(`${navigateTo}`)
    }

    return (
        <Wrapper>
            <Logo src={logoCL} alt="Logo da Champions League Feminina"/>

            <Menu>
                <button onClick={() => handleClick("/")}>Home</button>
                <button onClick={() => handleClick("/currentSeason")}>Temporada Atual</button>
                <a href="https://www.youtube.com/watch?v=6yt9YHpEtEk" target="_blank">Assistir</a>
            </Menu>
        </Wrapper>
    )
}

export default Header