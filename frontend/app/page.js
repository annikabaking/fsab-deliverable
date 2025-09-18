"use client";
import Link from "next/link";
import styles from "./design.module.css";

export default function Home() {
    function handleUnlock(e) {
        e.preventDefault();
        const password = prompt("Password:");

        if (password === "fullstack@brown") {
            window.location.href = "/diary";
        } else {
            alert("Wrong password :(");
        }
    }

    return (
        <html>
            <body className={styles.page}>
                <div>
                    <h1 className={styles.title}>My Diary</h1>
                </div>
                <div className={styles.book}>
                    <img src="/diary-image.png" className={styles.image} />
                    <button onClick={handleUnlock} className={styles.button}>
                        Unlock
                    </button>
                </div>
            </body>
        </html>
    );
}