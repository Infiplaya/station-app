'use client'

import { useAddTodo } from '@/app/stores/task-store'
import { FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from '@/app/components/tasks/add-task.module.css'

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
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.InputsWrapper}>
                <fieldset>
                    <label htmlFor="todo-name" className={styles.Label}>
                        Name
                    </label>
                    <input
                        type="text"
                        className={styles.Input}
                        id="todo-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="todo-description" className={styles.Label}>
                        Description
                    </label>
                    <textarea
                        className={styles.Textarea}
                        id="todo-description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </fieldset>
            </div>
            <button type="submit">Add Todo</button>
        </form>
    )
}
