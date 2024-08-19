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
import { useSelector, useDispatch } from "react-redux";
import { setQuestionInput, setChatbotMessage } from "../../redux/actions";

const ChatPage = () => {
    const questionInput = useSelector((state) => state.questionInput);
    const dispatch = useDispatch();

    const handleSend = () => {
        console.log(questionInput);
        dispatch(setQuestionInput(""));
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSend();
        }
    };

    const chatbotMessage = "(임시)나는 챗봇이야.";

    return (
        <>
            <ChatContainer>
                <ChatElement>
                    <Chating>
                        <Chatbot>
                            <Profile src='/image/Impolite_chatbot.png' alt='챗봇 프로필' />
                            <Answer>{chatbotMessage}</Answer>
                        </Chatbot>
                        <User>
                            <Question>나 회사 상사 때문에 너무 스트레스 받아</Question>
                        </User>
                    </Chating>
                    <ChatSend>
                        <QuestionInput
                            value={questionInput}
                            onChange={(e) => dispatch(setQuestionInput(e.target.value))}
                            onKeyDown={handleKeyDown}
                            placeholder='Chatbot에게 하고싶은 말을 입력해주세요!'
                        />
                        <SendImg onClick={handleSend} src='/image/Send.png' alt='화살표' />
                    </ChatSend>
                </ChatElement>
            </ChatContainer>
        </>
    );
};

export default ChatPage;
