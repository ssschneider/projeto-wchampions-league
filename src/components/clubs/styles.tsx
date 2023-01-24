import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
`

export const SectionHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 28px;
    margin: 50px auto;
    align-items: center;
    justify-content: center;

    h2 {
        font-size: 48px;
        font-weight: 700;
        text-transform: uppercase;

        @media (max-width: 610px) {
            font-size: 24px;
        }
    }

    h4 {
        font-size: 24px;

        @media (max-width: 610px) {
            font-size: 14px;
        }
    }
`

export const Clubs = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    flex-wrap: wrap;
    place-items: center;
    gap: 24px;

    @media (max-width: 610px) {
        grid-template-columns: repeat(2, 1fr);
        margin-bottom: 24px;
    }

    img {
        width: 100px;
        height: auto;

        @media (max-width: 610px) {
            width: 100px;
        }
    }
`