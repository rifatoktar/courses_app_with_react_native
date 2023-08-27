import React from 'react';
import AppNavigator from './src/components/app_navigator';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import themeReducer from './redux/themeReducer';

//const store = createStore(combineReducers({ themeReducer }), applyMiddleware(thunk));

export default function App() {
  return (
    // <Provider store={store}>
    <AppNavigator />
    // </Provider>
  );
}