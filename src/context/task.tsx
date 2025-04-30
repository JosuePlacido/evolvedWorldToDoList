import { createContext, ReactNode, useEffect, useState } from 'react';
import { TaskService } from '../services/task';

export type Task = {
	id: string;
	description: string;
	done: Boolean;
};
export type TaskContextDataProps = {
	tasks: Task[];
	remove: (id: string) => void;
	add: (newTask: Task) => void;
	doneUndone: (id: string) => void;
	//isLoadingUserStorageData: boolean;
};
type TaskContextProviderProps = {
	children: ReactNode;
};

export const TaskContext = createContext<TaskContextDataProps>(
	{} as TaskContextDataProps,
);

export function TaskContextProvider({ children }: TaskContextProviderProps) {
	const [taskList, setTaskList] = useState<Task[]>([]);
	function add(newTask: Task) {
		setTaskList(prev => [...prev, newTask]);
		TaskService.add(newTask);
	}
	function doneUndone(id: string) {
		let newValueDone = true;
		setTaskList(prev =>
			prev.map(t => {
				if (t.id === id) {
					newValueDone = !t.done;
					t.done = !t.done;
				}
				return t;
			}),
		);
		TaskService.update(id, { done: newValueDone });
	}
	function remove(id: string) {
		setTaskList(prev => prev.filter(t => t.id !== id));
		TaskService.remove(id);
	}
	async function loadUserData() {
		const tasks = await TaskService.getAll();
		setTaskList(tasks);
	}

	useEffect(() => {
		loadUserData();
	}, []);

	return (
		<TaskContext.Provider
			value={{
				tasks: taskList,
				add,
				doneUndone,
				remove,
			}}>
			{children}
		</TaskContext.Provider>
	);
}
