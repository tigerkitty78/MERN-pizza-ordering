export const registerUserReducer = (state = {}, action) => {
    switch(action.type) {
        case 'USER_REGISTER_REQUEST':
            return {
                ...state,
                loading: true,
                success: false,
                error: null  // Clear any previous errors on request
            };
        case 'USER_REGISTER_SUCCESS':
            return {
                ...state,
                loading: false,
                success: true,
                error: null  // Clear any previous errors on success
            };
        case 'USER_REGISTER_FAILED':
            return {
                ...state,
                loading: false,
                success: false,
                error: action.payload  // Store the error message from the payload
            };
        default:
            return state;
    }
};
