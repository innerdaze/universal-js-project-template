import React, { Component } from 'react'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import createFilter from 'redux-persist-transform-filter'
import localForage from 'localforage'
import PropTypes from 'prop-types'
import reducer from '../reducers'

class AppProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rehydrated: false
    }
  }

  componentWillMount(){
    persistStore(this.props.store, {
      storage: localForage
    }, () => {
      this.setState({
        rehydrated: true
      })
    })
  }

  render() {
    if(!this.state.rehydrated){
      return <p>{'Loading...'}</p>
    }
    return (
      <Provider store={this.props.store}>
        { this.props.children }
      </Provider>
    )
  }
}

AppProvider.propTypes = {
  store: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired
}

export default AppProvider
