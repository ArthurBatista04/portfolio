import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";
import db from "../../firebase/Firebase";
const { Types, Creators } = createActions({
  experiences: ["experiences"],
});

export const ConfiguracaoTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  experiences: [],
});

export const setExperiences = (state, { experiences }) => {
  return { ...state, experiences };
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.EXPERIENCES]: setExperiences,
});

export const getExperiences = () => async (dispatch, getState) => {
  const response = await db
    .collection("Experiences")
    .orderBy("hasEnded", "asc")
    .get();
  if (response.empty) return;
  const experiences = response.docs.map(buildExperiences);
  dispatch(Creators.experiences(experiences));
};

const buildExperiences = (skill) => {
  const id = skill.id;
  const skillData = skill.data();
  return { ...skillData, id };
};

export const selectExperiences = (state) => {
  return state.experiences.experiences;
};
