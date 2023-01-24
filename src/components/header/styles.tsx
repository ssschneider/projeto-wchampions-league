import styled from "styled-components"

export const Wrapper = styled.header`
    width: 100%;
    max-width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 48px auto 38px;

    @media (max-width: 846px) {
        flex-direction: column;
        justify-content: center;
        gap: 24px;
    }
`

export const Logo = styled.img`
    width: auto;
    height: 50px;
    transition: 0.5s linear;

    &:hover {
        scale: 1.1;
        opacity: 0.9;
    }
`

export const Menu = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;

    button, a {
        text-decoration: none;
        font-size: 18px;
        font-weight: 700;
        transition: 0.5s linear;
        background-color: transparent;
        border: 0;
        margin: 0 4px;
        border-radius: 50px;
        padding: 8px 16px;
        cursor: pointer;
        text-transform: uppercase;
        
        &:hover {
            background-color: #fff;
            color: #43043D;
            scale: 1.05;
        }

        @media (max-width: 665px) {
            font-size: 18px;
        }
    }

    @media (max-width: 415px) {
        flex-direction: column;
        justify-content: center;
        gap: 12px;
    }
`