import { createContext, ReactNode, useState } from 'react';
/*import { api } from "@services/api";
import {
	storageUserGet,
	storageUserRemove,
	storageUserSave
} from "@storage/storageUser";
import {
	storageAuthTokenGet,
	storageAuthTokenRemove,
	storageAuthTokenSave
} from "@storage/storageAuthToken";
*/

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
	/*const [isLoadingUserStorageData, setIsLoadingUserStorageData] =
        useState(true);*/
	function add(newTask: Task) {
		setTaskList(prev => [...prev, newTask]);
	}
	function doneUndone(id: string) {
		setTaskList(prev =>
			prev.map(t => {
				if (t.id === id) {
					t.done = !t.done;
				}
				return t;
			}),
		);
	}
	function remove(id: string) {
		setTaskList(prev => prev.filter(t => t.id !== id));
	}

	/*async function userAndTokenUpdate(userData: UserDTO, token: string) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setUser(userData);
    }

    async function storageUserAndTokenSave(
        userData: UserDTO,
        token: string,
        refresh_token: string,
    ) {
        try {
            setIsLoadingUserStorageData(true);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setIsLoadingUserStorageData(true);
            await storageUserSave(userData);
            await storageAuthTokenSave({ token, refresh_token });
        } catch (error) {
            throw error;
        } finally {
            setIsLoadingUserStorageData(false);
        }
    }

    async function singIn(email: string, password: string) {
        try {
            const { data } = await api.post('/sessions', { email, password });

            if (data.user && data.token && data.refresh_token) {
                await storageUserAndTokenSave(
                    data.user,
                    data.token,
                    data.refresh_token,
                );
                await userAndTokenUpdate(data.user, data.token);
            }
        } catch (error) {
            throw error;
        } finally {
            setIsLoadingUserStorageData(false);
        }
    }

    async function loadUserData() {
        try {
            setIsLoadingUserStorageData(true);

            const userLogged = await storageUserGet();
            const { token } = await storageAuthTokenGet();

            if (token && userLogged) {
                userAndTokenUpdate(userLogged, token);
            }
        } catch (error) {
            throw error;
        } finally {
            setIsLoadingUserStorageData(false);
        }
    }

    async function signOut() {
        try {
            setIsLoadingUserStorageData(true);
            setUser({} as UserDTO);
            await storageUserRemove();
            await storageAuthTokenRemove();
        } catch (error) {
            throw error;
        } finally {
            setIsLoadingUserStorageData(false);
        }
    }
    async function updateUserProfile(userUpdated: UserDTO) {
        try {
            setUser(userUpdated);
            await storageUserSave(userUpdated);
        } catch (error) {
            throw error;
        }
    }

    useEffect(() => {
        loadUserData();
    }, []);

    useEffect(() => {
        const subscribe = api.registerInterceptTokenManager(signOut);
        return () => {
            subscribe();
        };
    }, []);*/

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
