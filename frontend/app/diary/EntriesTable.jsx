'use client'
import { useEffect, useState } from "react"
import styles from "./entries-design.module.css"

function Entries() {
    const [entries, setEntries] = useState([])

    async function getEntries() {
        const res = await fetch("http://localhost:9090/entries", {
            method: "GET",
        })

        const resJSON = await res.json();
        setEntries(resJSON);
    }

    useEffect(() => {
        getEntries();
    }, [])

    return (
        <div>
            <h2 className={styles.text}>Entries</h2>
            <button onClick={getEntries} className={styles.button}>
                Reload
            </button>
            <br />
            <br />
            <table className={styles.table}>
                <tbody >
                    <tr>
                        <th className={styles.text}>Date</th>
                        <th className={styles.text}>Message</th>
                    </tr>
                    {
                        entries.map((entry) =>
                            <tr key={entry.id}>
                                <td className={styles.text}>{entry.Date}</td>
                                <td className={styles.text}>{entry.Body}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Entries;