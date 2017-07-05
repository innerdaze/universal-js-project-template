// Uncomment line below if using Grommet
// import 'grommet/scss/hpe/index.scss' // eslint-disable-line import/no-unassigned-import
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { AppContainer } from 'react-hot-loader'
import AppProvider from './components/AppProvider'
import MyRootAppComponent from './components/MyRootAppComponent'
import configureStore from './store'

async function startApp() {
  const store = await configureStore()

  render(
    <AppContainer>
      <AppProvider store={store}>
        <MyRootAppComponent/>
      </AppProvider>
    </AppContainer>,
    document.getElementById('root')
  )

  if (module.hot) {
    module.hot.accept('./containers/RootContainer', () => {
      const NextRootContainer = require('./containers/RootContainer').default
      renderWithHotReload(<NextRootContainer/>, store)
    })
  }
}

if (window.cordova) {
  document.addEventListener('deviceready', startApp, false)
} else {
  startApp()
}
