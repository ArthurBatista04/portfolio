import configureStore from "../CreateStore";
import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
export const reducers = combineReducers({
  skills: require("./SkillsReducer").reducer,
  experiences: require("./ExperiencesReducer").reducer,
  about: require("./AboutReducer").reducer,
  interests: require("./InterestsReducer").reducer,
  form: formReducer,
});

export default () => {
  let finalReducers = reducers;

  let { store } = configureStore(finalReducers);
  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require("./").reducers;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
