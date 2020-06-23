import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/navigation/Navigation';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './src/redux/reducers';
import Header from './src/components/Header';
// import rootSaga from './sagas';
import {watchPost} from './src/sagas/sagas';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchPost);

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Header />
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
