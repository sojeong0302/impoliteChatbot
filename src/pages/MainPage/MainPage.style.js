import styled from "styled-components";

export const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${(props) => (props.$switchState ? "#9bd1e5" : "#000000")};
`;

export const MainAmong = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90%;
    gap: 7%;
`;

export const AmongText = styled.div`
    color: white;
    font-size: 64px;
`;
