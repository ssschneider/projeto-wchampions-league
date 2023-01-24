import { Clubs, SectionHeader, Wrapper } from "./styles"

import Arsenal from "../../assets/images/clubs/arsenal.svg"
import Barcelona from "../../assets/images/clubs/barcelona.svg"
import Bayern from "../../assets/images/clubs/bayern.svg"
import Chelsea from "../../assets/images/clubs/chelsea.svg"
import Lyon from "../../assets/images/clubs/lyon.svg"
import PSG from "../../assets/images/clubs/psg.svg"
import Roma from "../../assets/images/clubs/roma.svg"
import Wolfsburg from "../../assets/images/clubs/wolfsburg.svg"

const Main = () => {
    return (
        <Wrapper>
            <SectionHeader>
                <h2>Quartas de Final</h2>
                <h4>Sorteio dia 10/fev</h4>
            </SectionHeader>

            <Clubs>
                <img src={Arsenal} alt="Escudo do Arsenal" />
                <img src={Barcelona} alt="Escudo do Barcelona" />
                <img src={Bayern} alt="Escudo do Bayern"/>
                <img src={Chelsea} alt="Escudo do Chelsea" />
                <img src={Lyon} alt="Escudo do Lyon" />
                <img src={PSG} alt="Escudo do PSG" />
                <img src={Roma} alt="Escudo do Roma" />
                <img src={Wolfsburg} alt="Escudo do Wolfsburg" />
            </Clubs>
        </Wrapper>
    )
}

export default Main