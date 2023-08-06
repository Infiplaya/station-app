'use client'

import { useAddTodo } from '@/app/stores/task-store'
import * as Form from '@radix-ui/react-form'
import { FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from '@/app/components/tasks/add-task.module.css'
import { toast } from 'sonner'

export function AddTask() {
    const addTodo = useAddTodo()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        addTodo({
            id: uuidv4(),
            name: name,
            description: description,
            completed: false,
        })
        toast.success('New Todo was added!')
        setName('')
        setDescription('')
    }
    return (
        <Form.Root className={styles.FormRoot} onSubmit={handleSubmit}>
            <Form.Field className={styles.FormField} name="new-task">
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Form.Label className={styles.FormLabel}>Name</Form.Label>
                    <Form.Message
                        className={styles.FormMessage}
                        match="valueMissing"
                    >
                        Please enter task name
                    </Form.Message>
                </div>
                <Form.Control asChild>
                    <input
                        className={styles.Input}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field className={styles.FormField} name="question">
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Form.Label className={styles.FormLabel}>
                        Description
                    </Form.Label>
                    <Form.Message
                        className={styles.FormMessage}
                        match="valueMissing"
                    >
                        Please enter task description
                    </Form.Message>
                </div>
                <Form.Control asChild>
                    <textarea
                        className={styles.Textarea}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </Form.Control>
            </Form.Field>
            <Form.Submit asChild>
                <button className="Button" style={{ marginTop: 10 }}>
                    Add Task
                </button>
            </Form.Submit>
        </Form.Root>
    )
}
