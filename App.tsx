import React from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import RootNavigation from './src/navigations/RootNavigation.tsx';
import {persisStore, store} from './src/store/store.ts';

function App(): React.ReactElement {
  LogBox.ignoreLogs(['React keys must be passed directly to JSX']);
  return (
    <Provider store={store}>
      <PersistGate persistor={persisStore}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
}

export default App;
