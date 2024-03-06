import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ControlStatus from "../pages/ControlStatus";
import MonitorStatus from "../pages/MonitorStatus";
import SplashScreen from "../pages/SplashScreen";
import StatusPlant from "../pages/StatusPlant";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          height: 65,
          bottom: 25,
          right: 25,
          left: 25,
          borderRadius: 25,
        },
      }}
    >
      <Tab.Screen
        name="MonitorStatus"
        component={MonitorStatus}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  backgroundColor: focused ? "#86EFAC" : "#FFFFFF",
                }}
                className="justify-center items-center rounded-2xl p-2"
              >
                <Feather name="monitor" size={24} color="black" />
                <Text className="text-[12px] mt-1">Monitorr</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="ControlStatus"
        component={ControlStatus}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  backgroundColor: focused ? "#86EFAC" : "#FFFFFF",
                }}
                className="justify-center items-center rounded-2xl py-2 px-3"
              >
                <FontAwesome6 name="sun-plant-wilt" size={24} color="black" />
                <Text className="text-[12px] mt-1">Control</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="StatusPlant"
        component={StatusPlant}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  backgroundColor: focused ? "#86EFAC" : "#FFFFFF",
                }}
                className="justify-center items-center rounded-2xl py-2 px-1"
              >
                <MaterialCommunityIcons name="tree" size={24} color="black" />
                <Text className="text-[12px] mt-1">Tanaman</Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeStack;
