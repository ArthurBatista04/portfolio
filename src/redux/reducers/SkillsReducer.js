import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";
import db from "../../firebase/Firebase";
const { Types, Creators } = createActions({
  skills: ["skills"],
  icons: ["icons"],
});

export const ConfiguracaoTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  skills: [],
  icons: [],
});

export const setSkills = (state, { skills }) => {
  return { ...state, skills };
};

export const setIcons = (state, { icons }) => {
  return { ...state, icons };
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SKILLS]: setSkills,
  [Types.ICONS]: setIcons,
});

export const getSkills = () => async (dispatch, getState) => {
  let icons = [];
  const response = await db.collection("Skills").orderBy("name").get();
  if (response.empty) return;
  const skills = response.docs.map(buildSkill);
  dispatch(Creators.skills(skills));
  for (let skill of skills) {
    const iconId = skill.icon_id;
    const skillId = skill.id;
    const icon = await db.collection("Icons").doc(iconId).get();
    const data = icon.data();
    if (icon.exists) icons.push({ ...data, skillId, iconId });
  }
  dispatch(Creators.icons(icons));
};

const buildSkill = (skill) => {
  const id = skill.id;
  const skillData = skill.data();
  return { ...skillData, id };
};

export const selectSkills = (state) => {
  const select = selectIcon(state);
  return state.skills.skills ? state.skills.skills.map(select) : [];
};
const selectIcon = (state) => (skill) => {
  const iconFiltered = state.skills.icons.filter(
    (icon) => icon.skillId === skill.id
  );
  const icon = iconFiltered ? iconFiltered[0] : null;
  return { ...skill, icon };
};
