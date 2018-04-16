let initialState = {count: 0 };

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREASE_COUNT':
            state.count += 1;
            return state;
        case 'DECRESE_COUNT':
            state.count -= 1;   
            return state;       
        default:
            return state;
    }
};

export default mainReducer;