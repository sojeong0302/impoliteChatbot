const initialState = {
    questionInput: "",
    userQuestions: [],
    chatbotAnswers: [],
    switchState: true,
    loading: false,
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
        case "SET_LOADING":
            return { ...state, loading: action.payload };
        case "RESET_CHAT":
            return {
                ...state,
                userQuestions: [],
                chatbotAnswers: [],
            };
        default:
            return state;
    }
};

export default reducer;
