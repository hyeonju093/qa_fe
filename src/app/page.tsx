import { TodoList } from "@/features/todo-list/components/TodoList";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.page}>
            <h1 className={styles.title}>할 일</h1>
            <TodoList />
        </main>
    );
}
