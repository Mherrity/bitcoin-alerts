import React from 'react';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { mapping, dark as darkTheme } from '@eva-design/eva';
import { default as appTheme } from './custom-theme.json';

const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>HOME</Text>
  </Layout>
);
const theme = { ...darkTheme, ...appTheme };

const App = () => (
  <ApplicationProvider mapping={mapping} theme={theme}>
    <HomeScreen />
  </ApplicationProvider>
);

export default App;
