import React from 'react';
import { View } from 'react-native';
import { Input, InputField } from './ui/input';
import { Button, ButtonIcon } from './ui/button';
import { AddIcon, AlertCircleIcon } from './ui/icon';
import { Text } from './ui/text';
import {
	FormControl,
	FormControlError,
	FormControlErrorIcon,
	FormControlErrorText,
} from './ui/form-control';

const TaskForm: React.FC<{ add: (task: any) => void }> = ({ add }) => {
	function handleNewTask() {
		add({
			id: new Date().getTime().toString(),
			description: 'new tas',
			done: false,
		});
	}

	return (
		<View className="p-4 gap-3">
			<Text className="color-tertiary-800" size="2xl" bold>
				Nova tarefa
			</Text>
			<View className="flex-row items-start gap-3">
				<FormControl
					className="flex-1"
					isInvalid={true}
					isRequired={false}>
					<Input className="border-tertiary-100" size="lg">
						<InputField placeholder="Descrição da tarefa" />
					</Input>
					<FormControlError>
						<FormControlErrorIcon as={AlertCircleIcon} />
						<FormControlErrorText>
							Mensagem de erro
						</FormControlErrorText>
					</FormControlError>
				</FormControl>
				<Button
					size="lg"
					className="position-fixed rounded-full p-3.5"
					onPress={handleNewTask}>
					<ButtonIcon as={AddIcon} />
				</Button>
			</View>
		</View>
	);
};

export default TaskForm;
