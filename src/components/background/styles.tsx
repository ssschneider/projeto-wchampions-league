import styled from "styled-components";

export const BackgroundVideo = styled.video`
    position: absolute;
    z-index: -1;
    width: auto;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    top: 0;
    left: 7%;

    @media (max-width: 930px) {
        display: none;
    }
`