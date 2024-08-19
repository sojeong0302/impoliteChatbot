const initialState = {
    questionInput: "",
    chatbotMessage: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_QUESTION_INPUT":
            return {
                ...state,
                questionInput: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
