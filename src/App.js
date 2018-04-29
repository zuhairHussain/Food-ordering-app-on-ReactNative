import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducres';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import AppNavigator from './navigator';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import { StyleProvider, Container,Root } from 'native-base';
import globalStyles from "./styles";

export default class App extends Component<{}> {
  componentWillMount(){
    // Initialize Firebase 
    const config = {
      apiKey: "AIzaSyC_S9glHPns9VrHd3UJ-Uxi_iSbKqiRVsk",
      authDomain: "angular-fire-f2080.firebaseapp.com",
      databaseURL: "https://angular-fire-f2080.firebaseio.com",
      projectId: "angular-fire-f2080",
      storageBucket: "angular-fire-f2080.appspot.com",
      messagingSenderId: "300554639622"
    };
    firebase.initializeApp(config);
  } 
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk)) 
    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(material)}>
        <Root>
          <Container style={globalStyles.container}>
            <AppNavigator />
          </Container>
        </Root>
        </StyleProvider>
      </Provider> 
    );
  }
}

