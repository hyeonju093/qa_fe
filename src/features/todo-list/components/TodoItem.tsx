"use client";

import type { Todo } from "../types/Todo";
import styles from "./TodoList.module.css";

type TodoItemProps = {
    todo: Todo;
    onChangeTodoStatus: (todoId: string) => void;
    onDeleteTodo: (todoId: string) => void;
};

export function TodoItem({ todo, onChangeTodoStatus, onDeleteTodo }: TodoItemProps) {
    const itemClassName = todo.completed ? styles.todoItemCompleted : styles.todoItem;

    return (
        <li className={itemClassName}>
            <label className={styles.todoLabel}>
                <input
                    className={styles.todoCheckbox}
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => {
                        onChangeTodoStatus(todo.id);
                    }}
                />
                <span className={styles.todoTitle}>{todo.title}</span>
            </label>
            <span className={todo.completed ? styles.statusCompleted : styles.statusIncomplete}>
                {todo.completed ? "완료" : "미완료"}
            </span>
            <button
                className={styles.deleteButton}
                type="button"
                onClick={() => {
                    onDeleteTodo(todo.id);
                }}
            >
                삭제
            </button>
        </li>
    );
}
