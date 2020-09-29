import { fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startLogin = (email, password) => {
    return async (dispatch) =>{
      
      const resp = await fetchSinToken( 'users', { email, password }, 'GET' );
      const body = await resp.json();

      if ( body[0].ok ){
        localStorage.setItem('token', body[0].token );
        localStorage.setItem('token-init-date', new Date().getTime() );
        localStorage.setItem('user-name', body[0].name);
        localStorage.setItem('uid', body[0].uid)

        dispatch( login({
          uid: body[0].uid,
          name: body[0].name
        }) )
      }
    }
};

const login = ( user ) => ({
  type: types.authLogin,
  payload: user
});

export const startRegister = (  name, surnames, email, password, address, postalCode, telephone ) => {
  return ( dispatch ) =>{
    dispatch(
      login ( name, surnames )
    )

  }
};

export const startChecking = () => {
  return async ( dispatch ) => {

    const resp = await localStorage.getItem('token');
    if ( resp ){
      dispatch( login({
        uid: localStorage.getItem('uid'),
        name: localStorage.getItem('user-name')
      }) )
    } else {
      dispatch( checkingFinish() );
    } 
  }
};

const checkingFinish = () =>({ type: types.authCheckingFinish });

export const startLogout = () => {
  return ( dispatch ) =>{
    localStorage.clear();
    dispatch( logout() );
  }
};

const logout = () =>({ type: types.authLogout})
