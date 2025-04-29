import React from 'react';
import { ScrollView, View } from 'react-native';
import TaskCard from '../components/card';
import { useTasks } from '../hooks/useTask';
import TaskForm from '../components/form';
import TaskStatus from '../components/status';
import Header from '../components/header';

const Home: React.FC = () => {
	const { tasks } = useTasks();
	return (
		<View className="flex-1 p-2">
			<Header />
			<TaskForm />
			<TaskStatus />
			<ScrollView className="flex-1 pb-2">
				{tasks.map(task => (
					<TaskCard
						key={task.id}
						id={task.id}
						description={task.description}
						done={task.done}
					/>
				))}
			</ScrollView>
		</View>
	);
};

export default Home;
