import { SIGNUP_FAILURE, SIGNUP_REQUEST ,SIGNUP_SUCCESS} from "../action/action.types";


const initialState = {
    email:"",
    password:"",
    phone:'',
    SignedUp: false,
    user_type:'',
    error:false,
    btn:"Sign Up",
    redirectUrl:'/',
    errormsg:''
}

export const signupReducer = (state = initialState,action) => {

    switch(action.type){
        case SIGNUP_REQUEST:
            return {
                ...state,
                email:action.payload.email,
                password:action.payload.password,
                phone:action.payload.phone,
                btn:action.payload.buttontext
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                SignedUp:action.payload.status,
                btn:'Sign Up',
                user_type:action.payload.user_type
            }

        case SIGNUP_FAILURE:
            return {
                ...state,
                errormsg:action.payload.errormsg,
                SignedUp:action.payload.signupstatus,
                redirectUrl:'/Register?user=Patient'
            }
        
        default:
            return state;
}
}