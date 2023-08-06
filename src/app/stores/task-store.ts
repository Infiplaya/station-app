import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface TaskState {
    todos: Todo[]
    toggleTodo: (id: string) => void
    addTodo: (newTodo: Todo) => void
    deleteTodo: (id: string) => void
}

export interface Todo {
    id: string
    name: string
    description: string
    completed: boolean
}

const useTodoStore = create<TaskState>()(
    persist(
        (set, get) => ({
            todos: [],
            toggleTodo: (id) =>
                set((state) => ({
                    todos: state.todos.map((todo) =>
                        todo.id === id
                            ? { ...todo, completed: !todo.completed }
                            : todo
                    ),
                })),
            addTodo: (newTodo) => set({ todos: [...get().todos, newTodo] }),
            deleteTodo: (id) =>
                set((state) => ({
                    todos: state.todos.filter((todo) => todo.id !== id),
                })),
        }),
        {
            name: 'todo-storage',
        }
    )
)

export const useTodoList = () => useTodoStore((state) => state.todos)
export const useAddTodo = () => useTodoStore((state) => state.addTodo)
export const useDeleteTodo = () => useTodoStore((state) => state.deleteTodo)
export const useToggleTodo = () => useTodoStore((state) => state.toggleTodo)
