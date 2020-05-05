import configureStore from "../CreateStore";
import { history, dataProvider, authProvider } from "../../constants";
import { reducer as formReducer } from "redux-form";
export const reducers = {
  skills: require("./SkillsReducer").reducer,
  experiences: require("./ExperiencesReducer").reducer,
  about: require("./AboutReducer").reducer,
  form: formReducer,
};

export default () => {
  let rootReducer = reducers;
  let { store } = configureStore({
    rootReducer,
    history,
    dataProvider,
    authProvider,
  });
  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require("./").reducers;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
