import React from 'react';
import { StatusBar, useColorScheme, View } from 'react-native';
import './global.css';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Home from './src/screens/home';
import { GluestackUIProvider } from './src/components/ui/gluestack-ui-provider';
import { TaskContextProvider } from './src/context/task';

function App(): React.JSX.Element {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
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
	);
}

export default App;
