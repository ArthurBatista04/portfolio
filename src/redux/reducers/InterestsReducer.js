import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";
import db from "../../firebase/Firebase";
const { Types, Creators } = createActions({
  interests: ["interests"],
  avatars: ["avatars"],
});

export const ConfiguracaoTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  interests: [],
  avatars: [],
});

export const setInterests = (state, { interests }) => {
  return { ...state, interests };
};

export const setAvatars = (state, { avatars }) => {
  return { ...state, avatars };
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.INTERESTS]: setInterests,
  [Types.AVATARS]: setAvatars,
});

export const getInterests = () => async (dispatch, getState) => {
  let avatars = [];
  const response = await db.collection("Interests").orderBy("name").get();
  if (response.empty) return;
  const interests = response.docs.map(buildInterests);
  dispatch(Creators.interests(interests));
  for (let interest of interests) {
    const avatarIds = interest.avatar_ids;
    const interestId = interest.id;
    for (let avatarId of avatarIds.values()) {
      const avatar = await db.collection("Avatars").doc(avatarId).get();
      const data = avatar.data();
      if (avatar.exists) avatars.push({ ...data, interestId, avatarId });
    }
  }
  dispatch(Creators.avatars(avatars));
};

const buildInterests = (interest) => {
  const id = interest.id;
  const interestData = interest.data();
  const avatars = [];
  return { ...interestData, id, avatars };
};

export const selectInterests = (state) => {
  const select = selectAvatar(state);
  return state.interests.interests ? state.interests.interests.map(select) : [];
};
const selectAvatar = (state) => (interest) => {
  const avatarFiltered = state.interests.avatars.filter(
    (avatar) => avatar.interestId === interest.id
  );
  if (Array.isArray(avatarFiltered) && avatarFiltered.length) {
    interest.avatars = avatarFiltered;
  }
  return interest;
};
