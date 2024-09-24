import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import { Text, View, StyleSheet } from 'react-native';
import SettingsScreen from './src/screens/SettingsScreen'; 

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'white', 
    padding: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue', 
  },
  separator: {
    height: 1,
    backgroundColor: 'gray', 
    marginVertical: 5, 
  },
});

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="YourNews"
            component={HomeScreen}
            options={{
              headerTitle: () => (
                <View style={styles.headerContainer}>
                  <Text style={styles.headerTitle}>YourNews</Text>
                  <View style={styles.separator} />
                </View>
              ),
              headerStyle: {
                elevation: 0, 
              },
            }}
          />
          <Stack.Screen name="Details" component={DetailScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
