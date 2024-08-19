import React, { useRef, useEffect } from "react";

import {
    ChatContainer,
    ChatElement,
    ChatingDiv,
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
import { setQuestionInput, addUserQuestion, addChatbotAnswer } from "../../redux/actions";

const ChatPage = () => {
    const questionInput = useSelector((state) => state.questionInput);
    const userQuestions = useSelector((state) => state.userQuestions);
    const chatbotAnswers = useSelector((state) => state.chatbotAnswers);
    const dispatch = useDispatch();
    const chatingRef = useRef(null);

    const handleSend = () => {
        if (questionInput.trim() === "") return;
        console.log(`입력된 질문: ${questionInput}`);
        dispatch(addUserQuestion(questionInput));
        dispatch(addChatbotAnswer("(임시)나는 챗봇이야."));
        dispatch(setQuestionInput(""));
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSend();
        }
    };

    useEffect(() => {
        if (chatingRef.current) {
            chatingRef.current.scrollTop = chatingRef.current.scrollHeight;
        }
    }, [userQuestions, chatbotAnswers]);

    return (
        <>
            <ChatContainer>
                <ChatElement>
                    <ChatingDiv>
                        <Chating ref={chatingRef}>
                            {userQuestions.map((question, index) => (
                                <React.Fragment key={`user-question-${index}`}>
                                    <User>
                                        <Question>{question}</Question>
                                    </User>
                                    {chatbotAnswers[index] && (
                                        <Chatbot>
                                            <Profile src='/image/Impolite_chatbot.png' alt='챗봇 프로필' />
                                            <Answer>{chatbotAnswers[index]}</Answer>
                                        </Chatbot>
                                    )}
                                </React.Fragment>
                            ))}
                        </Chating>
                    </ChatingDiv>
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
