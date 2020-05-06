import { createStore, applyMiddleware, compose } from 'redux'
import Config from '../config/DebugConfig'
import logger from 'redux-logger'
import reduxThunk from 'redux-thunk'

export default (rootReducer) => {

  const middleware = []
  const enhancers = []

  middleware.push(reduxThunk)


  if (Config.reduxLogging) {
    middleware.push(logger)

  }

  const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

  enhancers.push(applyMiddleware(...middleware))



  const createAppropriateStore = createStore
  const store = createAppropriateStore(rootReducer, composeEnhancers(...enhancers))

  return {
    store
  }
}
