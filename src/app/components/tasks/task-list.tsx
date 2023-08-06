'use client'

import { useDeleteTodo, useTodoList } from '@/app/stores/task-store'
import { Card } from '../ui/card'
import { AddTask } from './add-task'

export function TaskList() {
    const tasks = useTodoList()
    const deleteTodo = useDeleteTodo()
    return (
        <Card>
            <AddTask />
            {tasks.map((task) => (
                <div key={task.id}>
                    {task.name}
                    <button onClick={() => deleteTodo(task.id)}>Delete</button>
                </div>
            ))}
        </Card>
    )
}
