import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { StatusBar } from "react-native"

// Import screens
import HomeScreen from "./screens/HomeScreen"
import AnalysisScreen from "./screens/AnalysisScreen"
import ResultsScreen from "./screens/ResultsScreen"
import JournalScreen from "./screens/JournalScreen"
import CommunityScreen from "./screens/CommunityScreen"
import ProfileScreen from "./screens/ProfileScreen"
import RoutinesScreen from "./screens/RoutinesScreen"

// Create stack navigator
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#a080ea" />
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#a080ea",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: "SkinSync" }} />
          <Stack.Screen name="Analysis" component={AnalysisScreen} options={{ title: "Skin Analysis" }} />
          <Stack.Screen name="Results" component={ResultsScreen} options={{ title: "Analysis Results" }} />
          <Stack.Screen name="Journal" component={JournalScreen} options={{ title: "Skin Journal" }} />
          <Stack.Screen name="Community" component={CommunityScreen} options={{ title: "Community" }} />
          <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: "Profile" }} />
          <Stack.Screen name="Routines" component={RoutinesScreen} options={{ title: "My Routines" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
