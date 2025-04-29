import React from 'react';
import { View } from 'react-native';
import { Text } from './ui/text';

const months = [
	'Janeiro',
	'Fevereiro',
	'Março',
	'Abril',
	'Maio',
	'Junho',
	'Julho',
	'Agosto',
	'Setembro',
	'Outubro',
	'Novembro',
	'Dezembro',
];
const Header: React.FC = () => {
	const today = new Date();
	return (
		<View className="flex-row p-4 gap-3">
			<Text className="color-tertiary-950" size="4xl" bold>
				{today.getDate()} de {months[today.getMonth()]}{' '}
				{today.getFullYear()}
			</Text>
		</View>
	);
};

export default Header;
