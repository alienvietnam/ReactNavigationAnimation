/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
import { createStackNavigator, createAppContainer } from "react-navigation";
import Main from "./src/components/Main";

const Display = createStackNavigator({
  Main: { screen: Main }
});

const Container = createAppContainer(Display);

export default Container;
