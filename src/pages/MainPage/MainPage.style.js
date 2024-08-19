import styled from "styled-components";

export const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${(props) => (props.switchState ? "#9bd1e5" : "#000000")};
`;

export const SwitchContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 1%;
    position: fixed;
    top: 0;
    right: 0;
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
