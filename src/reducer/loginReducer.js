import { LOGIN_FAILURE, LOGIN_REQUEST ,LOGIN_SUCCESS, LOGOUT_REQUEST} from "../action/action.types";


const initialState = {
    email:"",
    password:"",
    LoggedIn: false,
    user_type:'',
    error:false,
    btn:"Login",
    redirectUrl:'/'
}

export const loginReducer = (state = initialState,action) => {

    switch(action.type){
        case LOGIN_REQUEST:
            return {
                ...state,
                email:action.payload.email,
                password:action.payload.password,
                btn:action.payload.buttontext
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                LoggedIn:true,
                user_type:action.payload,
                btn:'Login'
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                LoggedIn:false,
                error:action.payload
            }
        
        case LOGOUT_REQUEST:
            return {
                ...state,
                LoggedIn:false,
            }
        default:
            return state;
}
}