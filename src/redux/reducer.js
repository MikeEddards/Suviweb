
const initialState = {
    gotRes: false,
    isLoggedIn: false,
    fbId: '',
    id: '',
    name: '',
    email: '',
    profilePic: '',
    friendsList: [],
    movieList: []
}


const UPDATE_USER_FB = 'UPDATE_USER_FB'

export function updateUserFb(user){
    return{
        type: UPDATE_USER_FB,
        payload: user
    }
}

function reducer (state = initialState, action){
    switch(action.type){
        case UPDATE_USER_FB:
            console.log(action.payload)
            const {
                name,
                email
            } = action.payload
            return {
                name,
                email,
                picture: action.payload.picture.data.url,
                fbId: action.payload.id,
                isLoggedIn: true,
                gotRes: true
            }
            default:
                return state
            }
        }
        console.log('reducer')

export default reducer