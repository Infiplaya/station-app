'use client';

import { useTodoList } from '@/app/stores/task-store';
import { Card } from '../ui/card/card';
import { AddTask } from './add-task/add-task';
import styles from '@/app/components/tasks/task-list.module.css';
import { TaskActions } from './task-actions/task-actions';

export function TaskList() {
  const tasks = useTodoList();
  return (
    <Card cardId="task-list">
      <h3>Task List</h3>
      <AddTask />
      <div className={styles.Tasks}>
        {tasks.map((task) => (
          <div key={task.id} className={styles.Task}>
            <p className={task.completed ? styles.CompletedTask : ''}>
              {task.name}
            </p>
            <TaskActions task={task} />
          </div>
        ))}
      </div>
    </Card>
  );
}
