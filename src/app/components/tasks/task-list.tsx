'use client'

import {
    useDeleteTodo,
    useTodoList,
    useToggleTodo,
} from '@/app/stores/task-store'
import { Card } from '../ui/card'
import { AddTask } from './add-task/add-task'
import styles from '@/app/components/tasks/task-list.module.css'
import { Check, Circle } from 'lucide-react'
import { toast } from 'sonner'
import DeleteTask from './delete-task/delete-task'

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
                            <DeleteTask />
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    )
}
