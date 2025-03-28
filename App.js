import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Gallery from './Gallery';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <Gallery />
    </SafeAreaView>
  );
};

export default App;
