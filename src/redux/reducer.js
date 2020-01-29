const initialState = {
    isLoggedIn: false,
    userId: '',
    name: '',
    email: '',
    profilePic: '',
    friendsList: [],
    movieList: []
}


const UPDATE_USER = 'UPDATE_USER'

export function updateUser(user){
    return{
        type: UPDATE_USER,
        payload: user
    }
}

function reducer (state = initialState, action){
    switch(action.type){
        case UPDATE_USER:
            const {userId, name, email, profilePic, friendsList, movieList}
        default:
            return state
    }
}

export default reducer