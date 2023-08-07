'use client'

import {
    useDeleteTodo,
    useTodoList,
    useToggleTodo,
} from '@/app/stores/task-store'
import { Card } from '../ui/card'
import { AddTask } from './add-task'
import styles from '@/app/components/tasks/task-list.module.css'
import { Check, Circle, X } from 'lucide-react'
import { toast } from 'sonner'

export function TaskList() {
    const tasks = useTodoList()
    const toggleTodo = useToggleTodo()
    const deleteTodo = useDeleteTodo()
    return (
        <Card cardId="task-list">
            <h3>Task List</h3>
            <AddTask />
            <div className={styles.Tasks}>
                {tasks.map((task) => (
                    <div key={task.id} className={styles.Task}>
                        <p
                            className={
                                task.completed ? styles.CompletedTask : ''
                            }
                        >
                            {task.name}
                        </p>
                        <div>
                            {task.completed ? (
                                <Check
                                    className={styles.icon}
                                    onClick={() => {
                                        toggleTodo(task.id)
                                        toast.success(
                                            'Todo restored successfully'
                                        )
                                    }}
                                />
                            ) : (
                                <Circle
                                    className={styles.icon}
                                    onClick={() => {
                                        toggleTodo(task.id)
                                        toast.success(
                                            'Todo completed successfully'
                                        )
                                    }}
                                />
                            )}

                            <X
                                className={styles.icon}
                                onClick={() => {
                                    deleteTodo(task.id)
                                    toast.success('Todo deleted successfully')
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    )
}
