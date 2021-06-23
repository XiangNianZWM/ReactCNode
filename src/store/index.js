// 引入 createaStore 方法
import { createStore } from 'redux'

// 引入reducer
import reducer from './reducer'

const store = createStore(
  reducer
)

export default store