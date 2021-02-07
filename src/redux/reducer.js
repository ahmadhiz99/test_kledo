import {combineReducers} from 'redux'

const initialStateLogin = {
    info:'',
    form:{
        fullName:'',
        email:'',
        password:'',
        name:''
    },
};

const LoginReducer= (state=initialStateLogin,action)=>{
    if (action.type === 'SET_FORM') {
        return{
            ...state,
            form:{
                ...state.form,
               [action.inputType]:action.inputValue
            },
        }
    }
    return state
};


const initialStateList = {
    list:({})
};

const ListReducer= (state=initialStateList,action)=>{
    if (action.type === 'SET_LIST') {
        return{
            ...state,
            list:{
                ...state.form,
               list:action
            },
        }
    }
    return state
};

const reducer = combineReducers({
    LoginReducer,
    ListReducer
})


export default reducer;