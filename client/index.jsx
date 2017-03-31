import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

if (module.hot) {
  module.hot.accept()
}

function startApp() {
  let store = createStore(/* INSERT REFERENCE TO TOP-LEVEL REDUCER */)

  render(
    <Provider store={store}>
      <Root/>
    </Provider>,
    document.getElementById(/* INSERT ID OF ROOT ELEMENT IN INDEX.HTML (NOT BODY!) */)
  )
}

/* CORDOVA???! 🙀 SECRETS AWAIT */
if (window.cordova) {
  document.addEventListener('deviceready', startApp, false)
} else {
  startApp()
}
