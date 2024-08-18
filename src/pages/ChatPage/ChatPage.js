import {
    ChatContainer,
    ChatElement,
    Chating,
    Chatbot,
    Profile,
    Answer,
    User,
    Question,
    ChatSend,
    QuestionInput,
    SendImg,
} from "./ChatPage.style.js";

const ChatPage = () => {
    return (
        <>
            <ChatContainer>
                <ChatElement>
                    <Chating>
                        <Chatbot>
                            <Profile src='/image/Impolite_chatbot.png' alt='챗봇 프로필' />
                            <Answer>무슨 고민 있음?</Answer>
                        </Chatbot>
                        <User>
                            <Question>나 회사 상사 때문에 너무 스트레스 받아</Question>
                        </User>
                    </Chating>
                    <ChatSend>
                        <QuestionInput placeholder='Chatbot에게 하고싶은 말을 입력해주세요!' />
                        <SendImg src='/image/Send.png' alt='화살표' />
                    </ChatSend>
                </ChatElement>
            </ChatContainer>
        </>
    );
};

export default ChatPage;
