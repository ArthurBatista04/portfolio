import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import Config from "../config/DebugConfig";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import { routerMiddleware, connectRouter } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";
import { adminReducer, adminSaga, USER_LOGOUT } from "react-admin";

export default ({ rootReducer, authProvider, dataProvider, history }) => {
  const middleware = [];
  const enhancers = [];

  middleware.push(reduxThunk);

  if (Config.reduxLogging) {
    middleware.push(logger);
  }
  const reducer = combineReducers({
    admin: adminReducer,
    router: connectRouter(history),
    ...rootReducer,
  });
  const resettableAppReducer = (state, action) =>
    reducer(action.type !== USER_LOGOUT ? state : undefined, action);

  const saga = function* rootSaga() {
    yield all([adminSaga(dataProvider, authProvider)].map(fork));
  };
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          trace: true,
          traceLimit: 25,
        })
      : compose;

  enhancers.push(applyMiddleware(...middleware));

  const createAppropriateStore = createStore;
  const store = createAppropriateStore(
    resettableAppReducer,
    composeEnhancers(
      ...enhancers,
      applyMiddleware(sagaMiddleware, routerMiddleware(history))
    )
  );
  sagaMiddleware.run(saga);
  return {
    store,
  };
};
