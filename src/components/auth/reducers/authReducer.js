export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                isLoggedIn: true,
                token: action.payload.token,
                error: ''
            };
        case 'LOGIN_ERROR':
            return {
                isLoggedIn: false,
                username: '',
                error: action.payload.error
            };
        case 'LOGOUT':
            return {
                isLoggedIn: false,
                username: '',
                error: ''
            };
        default:
            return state;
    }
};