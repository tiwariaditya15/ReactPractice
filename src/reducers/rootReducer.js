const initState = {
    users: [
        {id: 1, name: 'aditya tiwari', email: 'tiwariaditya55@hotmail.com'},
        {id: 2, name: 'pankaj tiwari', email: 'tiwaripankaj88@gmail.com'},
        {id: 3, name: 'kiran suthar', email: 'ksuth2029@gmail.com'}
    ]
}

const rootReducer = (state = initState, action) => {
    if(action.type === 'DELETE_USER'){
        const newUsers = state.users.filter( (user) => {
           return  user.id !== action.id
        });
        return {
            ...state,
            users: newUsers
        }
    }

    return state;
}

export default rootReducer; 