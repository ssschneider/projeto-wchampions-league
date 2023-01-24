import styled, { keyframes } from "styled-components";

export const Wrapper = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 840px) {
        flex-direction: column;
        justify-content: center;
        gap: 48px;
    }
`

export const TextSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: left;
    align-items: flex-start;

    @media (max-width: 840px) {
        justify-content: center;
        align-items: center;
    }
`

export const Title = styled.img`
    max-width: 400px;
    height: auto;

    @media (max-width: 973px) {
        max-width: 300px;
    }
`

export const Text = styled.p`
    text-align: justify;
    font-size: 22px;
    max-width: 400px;

    @media (max-width: 973px) {
        max-width: 300px;
        font-size: 20px;
    }

    @media (max-width: 375px) {
        max-width: 300px;
        font-size: 22px;
        padding: 0 8px;
    }
`

export const BtnTrailer = styled.a`
    background-color: #43043D;
    color: #f1f1f1;
    font-size: 20px;
    font-weight: 700;
    padding: 16px 32px;
    border: 1px solid #43043D;
    transition: 0.5s linear;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        scale: 1.1;
        background-color: transparent;
        color: #f1f1f1;
        border: 1px solid #f1f1f1;
    }
`

export const PlayersImage = styled.img`
    max-width: 350px;

    @media (max-width: 375px) {
        max-width: 300px;
    }
`