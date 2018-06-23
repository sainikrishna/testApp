/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import RootStack from './src/navigation/root-navigation'
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/reducers'


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack/>
      </Provider>
    );
  }
}
