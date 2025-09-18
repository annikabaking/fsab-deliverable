import AddEntry from "./AddEntry";
import EntriesTable from "./EntriesTable";
import styles from "./entries-design.module.css";

export default function Home() {
    return (
        <html>
            <body className={styles.page}>
                <div className={styles.newEntryForm}>
                    <AddEntry />
                </div>
                <div className={styles.entriesTable}>
                    <EntriesTable />
                </div>
            </body>
        </html>
    )
}