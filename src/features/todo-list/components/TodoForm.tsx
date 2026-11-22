"use client";

import { useState, type FormEvent } from "react";
import styles from "./TodoList.module.css";

const EMPTY_TITLE_MESSAGE = "할 일을 입력해 주세요.";

type TodoFormProps = {
    onCreateTodo: (title: string) => void;
};

export function TodoForm({ onCreateTodo }: TodoFormProps) {
    const [title, setTitle] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function submitTodo(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const trimmedTitle = title.trim();
        if (trimmedTitle.length === 0) {
            setErrorMessage(EMPTY_TITLE_MESSAGE);
            return;
        }

        onCreateTodo(trimmedTitle);
        setTitle("");
        setErrorMessage("");
    }

    return (
        <form className={styles.todoForm} onSubmit={submitTodo}>
            <label className={styles.todoFormLabel} htmlFor="todo-title">
                할 일
            </label>
            <div className={styles.todoFormRow}>
                <input
                    id="todo-title"
                    className={styles.todoInput}
                    type="text"
                    value={title}
                    placeholder="할 일을 입력해 주세요."
                    aria-invalid={errorMessage.length > 0}
                    aria-describedby={errorMessage.length > 0 ? "todo-title-error" : undefined}
                    onChange={(event) => {
                        setTitle(event.target.value);
                        if (errorMessage.length > 0) {
                            setErrorMessage("");
                        }
                    }}
                />
                <button className={styles.createButton} type="submit">
                    등록
                </button>
            </div>
            {errorMessage.length > 0 ? (
                <p id="todo-title-error" className={styles.todoError} role="alert">
                    {errorMessage}
                </p>
            ) : null}
        </form>
    );
}
