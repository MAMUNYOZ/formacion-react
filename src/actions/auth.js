import { fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";

import { favoritesClear } from "../actions/favorites";
import { purchaseClear } from "../actions/shopping";

import { setError } from "../actions/ui";

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const resp = await fetchSinToken("users", { email, password }, "GET");
    const body = await resp.json();

    if (body.length > 0) {
      localStorage.setItem("user-name", body[0].name);
      localStorage.setItem("uid", body[0].id);

      dispatch(
        login({
          uid: body[0].id,
          name: body[0].name,
        })
      );
    } else {
      dispatch(setError("Datos de acceso incorrectos", 0));
    }
  };
};

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});

export const startRegister = (
  name,
  surnames,
  email,
  password,
  address,
  postalCode,
  telephone
) => {
  return async (dispatch) => {
    const respUser = await fetchSinToken("users", { email }, "GET");
    const bodySearchUser = await respUser.json();

    if (bodySearchUser.length > 0) {
      dispatch(setError("El email utilizado ya existe en nuestra base de datos", 1));      
    } else {
      const resp = await fetchSinToken(
        "users",
        { name, surnames, email, password, address, postalCode, telephone },
        "POST"
      );
      const body = await resp.json();

      if (body.id) {
        localStorage.setItem("user-name", body.name);
        localStorage.setItem("uid", body.id);
      } else {
        dispatch(
          setError("Se ha producido un error, inténtelo más adelante", 1)
        );
      }
      dispatch(login({ uid: body.id, name: body.name }));
    }
  };
};

export const startChecking = () => {
  return async (dispatch) => {
    const resp = await localStorage.getItem("uid");
    if (resp) {
      dispatch(
        login({
          uid: localStorage.getItem("uid"),
          name: localStorage.getItem("user-name"),
        })
      );
    } else {
      dispatch(checkingFinish());
    }
  };
};

const checkingFinish = () => ({ type: types.authCheckingFinish });

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(logout());
    dispatch(favoritesClear());
    dispatch(purchaseClear());
  };
};

const logout = () => ({ type: types.authLogout });
