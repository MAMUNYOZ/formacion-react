import { fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";

import { setError } from "../actions/ui";

export const userStarLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchSinToken(`users/${localStorage.getItem("uid")}`);
      const body = await resp.json();

      dispatch(userLoaded(body));
    } catch (error) {
      console.log(error);
    }
  };
};

const userLoaded = (user) => ({
  type: types.userLoaded,
  payload: user,
});

export const startUpdate = (
  name,
  surnames,
  email,
  password,
  address,
  postalCode,
  telephone
) => {
  return async (dispatch) => {
    try {
      const resp = await fetchSinToken(
        `users/${localStorage.getItem("uid")}`,
        { name, surnames, password, address, email, postalCode, telephone },
        "PUT"
      );

      const body = await resp.json();
      dispatch(userUpdated(body));
      dispatch(setError("Los datos se han actualizado correctamente", 2));
    } catch (error) {
      console.log(error);
    }
  };
};

const userUpdated = (user) => ({
  type: types.userLoaded,
  payload: user,
});
