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
import SwitchComponent from "../../component/Switch/SwitchComponent";
import axios from "axios";

const REQUEST_ADRESS = `https://api.openai.com/v1/chat/completions`;
const CHATGPT_API_KEY = process.env.REACT_APP_OPEN_AI_API_KEY;

export async function GptOpenApi(messagesToSend) {
    const response = await axios.post(
        REQUEST_ADRESS,
        {
            model: "gpt-3.5-turbo",
            messages: messagesToSend,
            max_tokens: 1000,
            temperature: 0.7,
        },
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${CHATGPT_API_KEY}`,
            },
        }
    );
    return response;
}

const ChatPage = () => {
    const questionInput = useSelector((state) => state.questionInput);
    const userQuestions = useSelector((state) => state.userQuestions);
    const chatbotAnswers = useSelector((state) => state.chatbotAnswers);
    const switchState = useSelector((state) => state.switchState);
    const dispatch = useDispatch();
    const chatingRef = useRef(null);

    const handleSend = async () => {
        if (questionInput.trim() === "") return;
        dispatch(addUserQuestion(questionInput));
        dispatch(setQuestionInput(""));
        try {
            const messagesToSend = [{ role: "user", content: questionInput }];
            const response = await GptOpenApi(messagesToSend);
            const chatbotResponse = response.data.choices[0].message.content;
            dispatch(addChatbotAnswer(chatbotResponse));
        } catch (error) {
            console.error(error);
            dispatch(addChatbotAnswer("Error"));
        }
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
            <ChatContainer $switchState={switchState}>
                <SwitchComponent />
                <ChatElement>
                    <ChatingDiv>
                        <Chating ref={chatingRef}>
                            {userQuestions.map((question, index) => (
                                <React.Fragment key={`user-question-${index}`}>
                                    <User>
                                        <Question $switchState={switchState}>{question}</Question>
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
