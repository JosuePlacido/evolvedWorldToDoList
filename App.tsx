import React from 'react';
import { StatusBar, useColorScheme, View } from 'react-native';
import './global.css';
import 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TaskContextProvider } from './src/context/task';
import Home from './src/screens/home';
import { GluestackUIProvider } from './src/components/ui/gluestack-ui-provider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App(): React.JSX.Element {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<GluestackUIProvider>
				<View className="flex-1">
					<StatusBar
						barStyle={isDarkMode ? 'light-content' : 'dark-content'}
						backgroundColor={backgroundStyle.backgroundColor}
					/>
					<TaskContextProvider>
						<Home />
					</TaskContextProvider>
				</View>
			</GluestackUIProvider>
		</GestureHandlerRootView>
	);
}

export default App;
