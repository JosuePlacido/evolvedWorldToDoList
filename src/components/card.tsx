import React from 'react';
import { View } from 'react-native';
import { Task } from '../context/task';
import { useTasks } from '../hooks/useTask';
import { Button, ButtonIcon } from './ui/button';
import {
	CheckCircleIcon,
	CircleIcon,
	GripVerticalIcon,
	Icon,
	TrashIcon,
} from './ui/icon';
import { Text } from './ui/text';

const TaskCard: React.FC<Task> = ({ id, description, done }: Task) => {
	const { doneUndone, remove } = useTasks();

	return (
		<View className="m-1 flex-1 align-items-center">
			<Button
				variant="solid"
				className="p-2 h-full bg-red-500 absolute w-[30%] right-[10px]"
				onPress={() => remove(id)}>
				<ButtonIcon as={TrashIcon} />
			</Button>
			<View className="p-3 gap-2 flex-row bg-secondary-200 align-items-center border border-tertiary-600 rounded-lg">
				<Button
					variant="link"
					action="positive"
					size="lg"
					className={'rounded-full flex-1'}
					onPress={() => doneUndone(id)}>
					{done ? (
						<ButtonIcon
							size="xl"
							className="color-tertiary-500"
							as={CheckCircleIcon}
						/>
					) : (
						<ButtonIcon
							size="xl"
							as={CircleIcon}
							className="color-tertiary-600"
						/>
					)}
					<Text
						className={`flex-1 align-middle ${
							done ? 'color-tertiary-300' : 'color-tertiary-900'
						}`}
						size="xl"
						bold={!done}
						italic={!!done}
						strikeThrough={!!done}>
						{description}
					</Text>
				</Button>
				<Icon
					as={GripVerticalIcon}
					className="h-full color-tertiary-500"
					size="xl"
				/>
			</View>
		</View>
	);
};

export default TaskCard;
