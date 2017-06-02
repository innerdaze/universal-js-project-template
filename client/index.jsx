import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import AppProvider from './components/AppProvider'
import MyRootAppComponent from './components/MyRootAppComponent'
import configureStore from './store'

async function startApp() {
  const store = await configureStore()

  render(
    <AppProvider store={store}>
      <MyRootAppComponent/>
    </AppProvider>,
    document.getElementById('root')
  )

  if (module.hot) {
    module.hot.accept()
  }
}

if (window.cordova) {
  document.addEventListener('deviceready', startApp, false)
} else {
  startApp()
}
