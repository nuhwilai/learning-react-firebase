const instialState = {
    isLoading: true
}

const main = (state = instialState, action) => {
    console.log("ACTION FROM MAIN", action.type)
    switch (action.type) {
        case 'ON_LOADING':
            return {
                isLoading : true
            }
        case 'LOAD_SUCCESS':
            return {
                isLoading : false
            }
        default:
            return state;
    }
}

export default main;