import React from 'react';
import { StyleSheet, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Dashboard from './src/components/screen/Dashboard';
import reducers from './src/reducers'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const store = createStore(reducers, {}, applyMiddleware(thunk));

const App = () => {
  return (
    
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer >
          <Dashboard />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;
