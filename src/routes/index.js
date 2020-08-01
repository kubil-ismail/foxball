/* eslint-disable prettier/prettier */
import React, { Component } from 'react';

// Imports: Redux Actions
import { connect } from 'react-redux';
import { login } from '../redux/actions/authActions';

// Screens
import Home from '../pages/Home'

// Navigator
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export class Route extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          component={Home}
          name={'home'}
        />
      </Stack.Navigator>
    );
  }
}

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    auth: state.authReducer,
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
  // Action
  return {
    login: (request) => dispatch(login(request)),
  };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Route);