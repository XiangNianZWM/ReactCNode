// 引入 createaStore 方法, 入中间件 applyMiddleware
import { createStore, applyMiddleware, compose } from 'redux'

// 引入reducer
import reducer from './reducer'

// 引入thunk库
import thunk from 'redux-thunk'

// 为了dev tools也使用，所以需要构造一个增强函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(
  reducer,
  enhancer
)

export default store