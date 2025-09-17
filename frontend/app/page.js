import Link from "next/link";
import styles from "./design.module.css";

export default function Home() {
    return (
        <html>
            <body>
                <div>
                    <h1>My Diary</h1>
                </div>
                <div className={styles.book}>
                    <img src="/diary-image.png" className={styles.image} />
                    <Link href="/diary" className={styles.button}>
                        Unlock
                    </Link>
                </div>
            </body>
        </html>
    );
}