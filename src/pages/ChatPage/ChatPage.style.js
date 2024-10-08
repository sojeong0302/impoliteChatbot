import styled, { keyframes } from "styled-components";

const blinkAnimation = keyframes`
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
`;

export const ChatContainer = styled.div`
    background-color: ${(props) => (props.$switchState ? "#9bd1e5" : "#000000")};
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
`;

export const ChatElement = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2%;
`;

export const ChatingDiv = styled.div`
    background-color: #f0f0f0;
    width: 70%;
    height: 60%;
    border-radius: 50px;
    padding: 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Chating = styled.div`
    background-color: #f0f0f0;
    width: 95%;
    height: 100%;
    padding: 2%;
    display: flex;
    flex-direction: column;
    gap: 5%;
    overflow-y: auto;
`;

export const Chatbot = styled.div`
    display: flex;
    gap: 1%;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const LoadingIndicator = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: gray;
    height: 50%;

    &::after {
        content: "...";
        animation: ${blinkAnimation} 1.5s infinite;
    }
`;

export const Profile = styled.img`
    width: 4rem;
    height: 5rem;
`;

export const Answer = styled.div`
    background-color: #ffffff;
    width: 35%;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 1.5%;
    height: auto;
    font-size: 1.1rem;
    word-wrap: break-word;
`;

export const User = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const Question = styled.div`
    width: 35%;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 1.5%;
    height: auto;
    color: #ffffff;
    font-size: 1.1rem;
    word-wrap: break-word;
    background-color: ${(props) => (props.$switchState ? "#2196f3" : "#505050")};
`;

export const ChatSend = styled.div`
    background-color: #f0f0f0;
    width: 70%;
    border-radius: 50px;
    padding: 2%;
    display: flex;
    height: 3%;
    align-items: center;
`;

export const QuestionInput = styled.input`
    width: 100%;
    border: none;
    &:focus {
        outline: none;
    }
    background-color: #f0f0f0;
    &::placeholder {
        font-size: 1.1rem;
    }
    display: flex;
    height: auto;
    font-size: 1.1rem;
`;

export const SendImg = styled.img`
    display: flex;
    justify-content: flex-end;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
`;

export const ButtonCointer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 1%;
`;
