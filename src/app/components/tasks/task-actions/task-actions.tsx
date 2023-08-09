import { Todo, useToggleTodo } from '@/app/stores/task-store';
import { Check, Circle } from 'lucide-react';
import { toast } from 'sonner';
import styles from '@/app/components/tasks/task-actions/task-actions.module.css';
import DeleteTask from '../delete-task/delete-task';

export function TaskActions({ task }: { task: Todo }) {
  const toggleTodo = useToggleTodo();
  return (
    <div>
      {task.completed ? (
        <Check
          className={styles.Icon}
          onClick={() => {
            toggleTodo(task.id);
            toast.success('Todo restored successfully');
          }}
        />
      ) : (
        <Circle
          className={styles.Icon}
          onClick={() => {
            toggleTodo(task.id);
            toast.success('Todo completed successfully');
          }}
        />
      )}
      <DeleteTask todoId={task.id} />
    </div>
  );
}
