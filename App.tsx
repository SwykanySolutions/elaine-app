// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { verifyAllTables } from "./database/connection/";
import sessionStorageApp from "./storage/SessionStorage";
import RegisterScreen  from "./screens/Register";
import DashboardScreen from "./screens/Dashboard";
import LoginScreen from "./screens/Login";


const Stack = createNativeStackNavigator();

function App() {
  React.useEffect(() => {
    verifyAllTables();
  });
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName={(sessionStorageApp.getValor("status")) ? "Dashboard" : "Login"}
      >
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
        />
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
