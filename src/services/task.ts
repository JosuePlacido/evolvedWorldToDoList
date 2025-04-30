import { Task } from '../context/task';
import { firestore } from '../lib/firestore';

export const TaskService = {
	async add(task: Task): Promise<void> {
		await firestore().collection('tasks').doc(task.id).set(task);
	},
	async remove(id: string): Promise<void> {
		await firestore().collection('tasks').doc(id).delete();
	},
	async update(id: string, values: Partial<Task>): Promise<void> {
		await firestore().collection('tasks').doc(id).update(values);
	},
	async getAll(): Promise<Task[]> {
		const snapshot = await firestore().collection('tasks').get();
		return snapshot.docs.map(
			doc => ({ id: doc.id, ...doc.data() } as Task),
		);
	},
};
