"use client";

import { useState } from "react";
import type { Todo } from "../types/Todo";
import { TodoForm } from "./TodoForm";
import { TodoItem } from "./TodoItem";
import styles from "./TodoList.module.css";

export function TodoList() {
    const [todoList, setTodoList] = useState<Todo[]>([]);

    function createTodo(title: string) {
        const trimmedTitle = title.trim();
        if (trimmedTitle.length === 0) {
            return;
        }

        const todo: Todo = {
            id: crypto.randomUUID(),
            title: trimmedTitle,
            completed: false,
        };

        setTodoList((previousTodoList) => [...previousTodoList, todo]);
    }

    function changeTodoStatus(todoId: string) {
        setTodoList((previousTodoList) => {
            return previousTodoList.map((todo) => {
                if (todo.id !== todoId) {
                    return todo;
                }

                return {
                    ...todo,
                    completed: !todo.completed,
                };
            });
        });
    }

    function deleteTodo(todoId: string) {
        setTodoList((previousTodoList) => {
            return previousTodoList.filter((todo) => todo.id !== todoId);
        });
    }

    return (
        <section className={styles.todoList}>
            <TodoForm onCreateTodo={createTodo} />
            {todoList.length === 0 ? (
                <p className={styles.emptyTodoList}>등록된 할 일이 없습니다.</p>
            ) : (
                <ul className={styles.todoItems}>
                    {todoList.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onChangeTodoStatus={changeTodoStatus}
                            onDeleteTodo={deleteTodo}
                        />
                    ))}
                </ul>
            )}
        </section>
    );
}
