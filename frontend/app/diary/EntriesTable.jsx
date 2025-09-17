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
            <h2>Entries</h2>
            <button onClick={getEntries}>
                Reload
            </button>
            <br />
            <br />
            <table className={styles.table}>
                <tbody >
                    <tr className={styles.row}>
                        <th>Date</th>
                        <th>Message</th>
                    </tr>
                    {
                        entries.map((entry) =>
                            <tr key={entry.id} className={styles.row}>
                                <td>{entry.Date}</td>
                                <td>{entry.Body}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Entries;