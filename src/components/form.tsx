import React from 'react';
import { View } from 'react-native';
import { useTasks } from '../hooks/useTask';
import { Task } from '../context/task';
import { Input, InputField } from './ui/input';
import { Button, ButtonIcon } from './ui/button';
import { AddIcon, AlertCircleIcon } from './ui/icon';
import { Text } from './ui/text';
import * as z from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	FormControl,
	FormControlError,
	FormControlErrorIcon,
	FormControlErrorText,
} from './ui/form-control';

const taskSchema = z.object({
	description: z.string().min(1, 'Descrição é obrigatório'),
});
export type TaskFormData = z.infer<typeof taskSchema>;

const TaskForm: React.FC = () => {
	const { add } = useTasks();

	const taskForm = useForm<TaskFormData>({
		resolver: zodResolver(taskSchema),
		defaultValues: {
			description: '',
		},
	});

	const { handleSubmit, reset, formState, control } = taskForm;

	function handleNewTask({ description }: TaskFormData) {
		const newTask: Task = {
			id: new Date().getTime().toString(),
			description,
			done: false,
		} as Task;
		add(newTask);
		reset();
	}

	return (
		<View className="p-4 gap-3">
			<Text className="color-tertiary-800" size="2xl" bold>
				Nova tarefa
			</Text>
			<View className="flex-row items-start gap-3">
				<Controller
					control={control}
					name="description"
					render={({ field: { onChange, value } }) => (
						<FormControl
							className="flex-1"
							isInvalid={!!formState.errors.description}
							isRequired={false}>
							<Input className="border-tertiary-100" size="lg">
								<InputField
									placeholder="Descrição da tarefa"
									onChangeText={onChange}
									value={value}
								/>
							</Input>
							{formState.errors.description && (
								<FormControlError>
									<FormControlErrorIcon
										as={AlertCircleIcon}
									/>
									<FormControlErrorText>
										{formState.errors.description.message}
									</FormControlErrorText>
								</FormControlError>
							)}
						</FormControl>
					)}
				/>
				<Button
					size="lg"
					className="position-fixed rounded-full p-3.5"
					onPress={handleSubmit(handleNewTask)}>
					<ButtonIcon as={AddIcon} />
				</Button>
			</View>
		</View>
	);
};

export default TaskForm;
