import React,{Component}          from 'react';
import {Provider}                 from 'react-redux';
import {StackNavigator}           from 'react-navigation'
import store                      from './iosApp/store';
import Home                       from './iosApp/components/home';
import SignUp                     from './iosApp/components/signup';


export default class App extends Component {
  render() {

    const MainNavigator = StackNavigator({
      Home: {screen: Home},
      SignUp:{screen:SignUp}
    })


    return (
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
    );
  }
}