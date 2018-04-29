import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCESS, LOGIN_USER_FAIL, LOGIN_USER } from './types';

export const emailChanged = (data) => {
    return{
        type : EMAIL_CHANGED,
        payload : data
    }
}
export const passwordChanged = (data) => {
    return{
        type : PASSWORD_CHANGED,
        payload : data
    }
}

export const loginUser = ({email, password}) => {
    return (dispatch) => {
        dispatch({type : LOGIN_USER})
        
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSucess(dispatch, user))
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then( user => loginUserSucess(dispatch, user))
                .catch(() => loginUserFail(dispatch))
        })
    }
}

const loginUserSucess = (dispatch, user) => {
    dispatch({
        type : LOGIN_USER_SUCESS,
        payload : user
    })
}
const loginUserFail = (dispatch) => {
    dispatch({
        type : LOGIN_USER_FAIL
    })
}