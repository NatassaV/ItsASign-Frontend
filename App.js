import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Leaderboard from "./components/Leaderboard";
import Settings from "./components/Settings";
import CustomDrawer from "./components/CustomDrawer";
import { LessonThenQuiz } from "./components/Lesson-then-quiz";
import { UserContext } from "./utils/userContext";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function DrawerNavigator({ navigation: { navigate } }) {
  const profileImgLink = (
    <TouchableOpacity onPress={() => navigate("Profile")}>
      <Image
        source={{
          uri: "https://api.multiavatar.com/helloworld.png",
        }}
        style={styles.image}
      />
    </TouchableOpacity>
  );
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: "#1d5e1e",
        drawerActiveTintColor: "yellow",
        drawerLabelStyle: {
          fontFamily: "Roboto-Medium",
          fontSize: 20,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerRight: () => profileImgLink,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          headerRight: () => profileImgLink,
        }}
      />
      <Drawer.Screen
        name="Leaderboard"
        component={Leaderboard}
        options={{
          headerRight: () => profileImgLink,
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          headerRight: () => profileImgLink,
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [username, setUsername] = React.useState("John Smith");
  console.log(username);
  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ title: "Sign in Screen" }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ title: "Sign up Screen" }}
          />
          <Stack.Screen
            name="HomePage"
            component={DrawerNavigator}
            options={{ headerShown: false }}
            value={username}
          />
          <Stack.Screen
            name="Lesson"
            component={LessonThenQuiz}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  image: { width: 50, height: 50, marginRight: 10 },
});
