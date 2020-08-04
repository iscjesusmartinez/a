// Dependencies
import React, { Component } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";

// Screens
import LoginScreen from "./Screen/LoginScreen";
import Home from "./Screen/Home";
import Profile from "./Screen/Profile";
import ChangePwd from "./Screen/ChangePwd";

/* START MY SCREENS IMPORT */

import 111Edit from "./Screen/111Edit";
import 111List from "./Screen/111List";

/* END MY SCREENS IMPORT */

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const AppNavigator = createStackNavigator(
      {
        Login: { screen: LoginScreen },
        Home: { screen: Home },
        Profile: { screen: Profile },
        ChangePwd: { screen: ChangePwd },

        /* START MY SCREENS */

    111Edit: { screen: 111Edit },
    111List: { screen: 111List },
    
     /* END MY SCREENS */
      },
      {
        initialRouteName: this.props.user ? "Home" : "Login",
        headerMode: "none"
      }
    );

    const AppContainerRouter = createAppContainer(AppNavigator);

    return <AppContainerRouter />;
  }
}

export default AppContainer;
