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
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { Button } from '../ui/button'

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
                            <AlertDialog.Root>
                                <AlertDialog.Trigger asChild>
                                    <X className={styles.icon} />
                                </AlertDialog.Trigger>
                                <AlertDialog.Portal>
                                    <AlertDialog.Overlay
                                        className={styles.AlertDialogOverlay}
                                    />
                                    <AlertDialog.Content
                                        className={styles.AlertDialogContent}
                                    >
                                        <AlertDialog.Title
                                            className={styles.AlertDialogTitle}
                                        >
                                            Are you absolutely sure?
                                        </AlertDialog.Title>
                                        <AlertDialog.Description
                                            className={
                                                styles.AlertDialogDescription
                                            }
                                        >
                                            This action cannot be undone. This
                                            will permanently delete your account
                                            and remove your data from our
                                            servers.
                                        </AlertDialog.Description>
                                        <div
                                            style={{
                                                display: 'flex',
                                                gap: 25,
                                                justifyContent: 'flex-end',
                                            }}
                                        >
                                            <AlertDialog.Cancel asChild>
                                                <Button>Cancel</Button>
                                            </AlertDialog.Cancel>
                                            <AlertDialog.Action asChild>
                                                <Button variant="destructive">Yes</Button>
                                            </AlertDialog.Action>
                                        </div>
                                    </AlertDialog.Content>
                                </AlertDialog.Portal>
                            </AlertDialog.Root>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    )
}
