import styled from "styled-components";

export const MainContainer = styled.div`
    // background-color: #9bd1e5;
    height: 100vh;
    width: 100vw;
    background-color: ${(props) => (props.switchState ? "#9bd1e5" : "#000000")};
`;

export const SwitchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 1%;
`;

export const SwitchText = styled.div`
    font-weight: bold;
    color: white;
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
