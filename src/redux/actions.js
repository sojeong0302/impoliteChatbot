export const setQuestionInput = (input) => ({
    type: "SET_QUESTION_INPUT",
    payload: input,
});

export const addUserQuestion = (question) => ({
    type: "ADD_USER_QUESTION",
    payload: question,
});

export const addChatbotAnswer = (answer) => ({
    type: "ADD_CHATBOT_ANSWER",
    payload: answer,
});
