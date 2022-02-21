import { NativeBaseProvider, StatusBar } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostsProvider from './src/context';
import Posts from './src/components/posts';
import PostsDetails from "./src/components/postsDetails";

const Default = createNativeStackNavigator();
 const App = () => {
  return (
    <PostsProvider>
      <NativeBaseProvider>
      <StatusBar hidden />
        <NavigationContainer>
        <Default.Navigator initialRouteName="posts">
        <Default.Screen name="posts" component={Posts} />
      <Default.Screen name="postsdetails" component={PostsDetails} />
        </Default.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </PostsProvider>
  );
};
export default App;