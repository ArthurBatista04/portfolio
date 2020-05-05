import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";
import db from "../../firebase/Firebase";
const { Types, Creators } = createActions({
  about: ["about"],
});

export const ConfiguracaoTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  about: [],
});

export const setAbout = (state, { about }) => {
  return { ...state, about };
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ABOUT]: setAbout,
});

export const getAbout = () => async (dispatch, getState) => {
  const response = await db.collection("Abouts").get();
  if (response.empty) return;
  const about = response.docs[0].data();
  dispatch(Creators.about(about));
};

export const selectAbout = (state) => {
  return state.about.about;
};
