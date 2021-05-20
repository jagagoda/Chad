import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { AppRegistry } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();
    const client = new ApolloClient({
        uri: 'localhost:4000/graphql',
        cache: new InMemoryCache()
    });

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <ApolloProvider client={client}>
                <SafeAreaProvider>
                    <Navigation colorScheme={colorScheme}/>
                    <StatusBar/>
                </SafeAreaProvider>
            </ApolloProvider>
        );
    }
}
AppRegistry.registerComponent('MyApplication', () => App);
