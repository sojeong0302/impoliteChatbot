const initialState = {
    questionInput: "",
    userQuestions: [],
    chatbotAnswers: [],
    switchState: true,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_QUESTION_INPUT":
            return {
                ...state,
                questionInput: action.payload,
            };
        case "SET_USER_QUESTION":
            return {
                ...state,
                userQuestion: action.payload,
            };
        case "ADD_USER_QUESTION":
            return {
                ...state,
                userQuestions: [...state.userQuestions, action.payload],
            };
        case "ADD_CHATBOT_ANSWER":
            return {
                ...state,
                chatbotAnswers: [...state.chatbotAnswers, action.payload],
                showChatingMessage: true,
            };
        case "SET_SWITCH_STATE":
            return {
                ...state,
                switchState: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
