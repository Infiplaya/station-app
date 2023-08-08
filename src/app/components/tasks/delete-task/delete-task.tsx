import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { X } from 'lucide-react'
import { Button } from '../../ui/button'
import styles from '@/app/components/tasks/delete-task/delete-task.module.css'
import { useDeleteTodo } from '@/app/stores/task-store'

export default function DeleteTask({ todoId }: { todoId: string }) {
    const deleteTodo = useDeleteTodo()
    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger asChild>
                <X className={styles.icon} />
            </AlertDialog.Trigger>
            <AlertDialog.Portal>
                <AlertDialog.Overlay className={styles.AlertDialogOverlay} />
                <AlertDialog.Content className={styles.AlertDialogContent}>
                    <AlertDialog.Title className={styles.AlertDialogTitle}>
                        Are you absolutely sure?
                    </AlertDialog.Title>
                    <AlertDialog.Description
                        className={styles.AlertDialogDescription}
                    >
                        This action cannot be undone.
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
                            <Button
                                variant="destructive"
                                onClick={() => deleteTodo(todoId)}
                            >
                                Yes
                            </Button>
                        </AlertDialog.Action>
                    </div>
                </AlertDialog.Content>
            </AlertDialog.Portal>
        </AlertDialog.Root>
    )
}
