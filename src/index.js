import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './styles/app.css'
import reducer from './reducers/PlayersTable'


const store = createStore(reducer);

render(
  <Provider store={store}>
  <App data="https://api.myjson.com/bins/okz7f"/>
  </Provider>,
  document.getElementById('root')
)


store.subscribe(()=>{
  console.log('subscribe', store.getState())
})
