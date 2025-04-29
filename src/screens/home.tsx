import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import TaskCard from '../components/card';
import TaskForm from '../components/form';
import TaskStatus from '../components/status';
import Header from '../components/header';

type Task = {
	id: string;
	description: string;
	done: boolean;
};
const Home: React.FC = () => {
	const [task, setTask] = useState<Task[]>([]);

	function add(object: any) {
		setTask(prev => [...prev, object]);
	}

	return (
		<View className="flex-1 p-2">
			<Header />
			<TaskForm add={add} />
			<TaskStatus />
			<ScrollView className="flex-1 pb-2">
				{task.map(t => (
					<TaskCard
						id={t.id}
						description={t.description}
						done={t.done}
					/>
				))}
			</ScrollView>
		</View>
	);
};

export default Home;
