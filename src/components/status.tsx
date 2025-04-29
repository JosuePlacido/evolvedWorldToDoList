import React from 'react';
import { View } from 'react-native';
import { Text } from './ui/text';

const TaskStatus: React.FC = () => {
	return (
		<View className="my-3 p-2 gap-3 justify-center">
			<Text
				size="lg"
				className="color-tertiary-500 w-auto text-center flex-row bg-tertiary-50 rounded-full ">
				concluído{' '}
				<Text className="color-tertiary-600 px-1" bold size="2xl">
					5
				</Text>{' '}
				de{' '}
				<Text className="color-tertiary-600 px-1" bold size="2xl">
					10
				</Text>{' '}
				Tarefas
			</Text>
		</View>
	);
};

export default TaskStatus;
