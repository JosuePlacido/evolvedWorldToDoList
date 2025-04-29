import { useContext } from 'react';

import { TaskContext } from '../context/task';

export function useTasks() {
	const context = useContext(TaskContext);

	return context;
}
