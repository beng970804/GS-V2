import {Box} from '@/components/ui/box';
import {GluestackUIProvider} from '@/components/ui/gluestack-ui-provider';
import React from 'react';
import './global.css';
import {SafeAreaView} from 'react-native';
import {Text} from '@/components/ui/text';
import {CustomText} from '@/src/components/text/Text';
import {AppScreen} from '@/src';

function App(): React.JSX.Element {
  return (
    <GluestackUIProvider>
      <SafeAreaView>
        <AppScreen />
      </SafeAreaView>
    </GluestackUIProvider>
  );
}

export default App;
