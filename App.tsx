import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { Text as GluestackText } from './src/components/ui/text';
import './global.css';
import { GluestackUIProvider } from './src/components/ui/gluestack-ui-provider';
const App = () => {
	return (
		<GluestackUIProvider>
			<View className="flex-1 items-center justify-center bg-white dark:bg-black">
				<StatusBar barStyle="dark-content" />
				<Text className="text-2xl font-bold text-gray-800 dark:text-white">
					Nativewind instalado! 👋
				</Text>
				<GluestackText size="5xl" className="text-center">
					Texto do gluestack
				</GluestackText>
			</View>
		</GluestackUIProvider>
	);
};

export default App;
