import React, { FC, PropsWithChildren } from 'react'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
import { composeWithDevTools } from 'redux-devtools-extension'

type REDUX_DEVTOOLS_TYPE = {
  __REDUX_DEVTOOLS_EXTENSION__: CallableFunction
}
declare const window: Window & typeof globalThis & REDUX_DEVTOOLS_TYPE

const sagaMiddleware = createSagaMiddleware()

const env = process.env.NODE_ENV
const devMode = env === 'development'

export const store = createStore(
  rootReducer,
  devMode ? composeWithDevTools(applyMiddleware(sagaMiddleware)) : applyMiddleware(sagaMiddleware),
  // compose(
  //   applyMiddleware(sagaMiddleware),
  //   window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__'](),
  // ),
)

sagaMiddleware.run(rootSaga)

export const ReduxWrapper: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}
