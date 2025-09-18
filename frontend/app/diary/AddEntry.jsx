'use client'
import { useState } from "react"
import styles from "./entries-design.module.css";

function AddEntry() {
    async function onSubmit() {
        // TODO: Implement the onSubmit function, which should post the new student to the backend
        const newEntry = {
            Date,
            Body,
        }

        const res = await fetch("http://localhost:9090/entries", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newEntry)
        })

        setDate("");
        setBody("");
    }
    // NOTE: this is not the best way to collect data, but is good for demo purposes!
    const [Date, setDate] = useState("")
    const [Body, setBody] = useState("")

    return (
        <div>
            <h2 className={styles.text}>New Entry</h2>
            <div>
                <div>
                    <label htmlFor="Date" className={styles.text}>Date: </label>
                    <input
                        name="Date"
                        value={Date}
                        onChange={(event) => setDate(event.target.value)}
                    />
                </div>
                <div className={styles.messageBox}>
                    <label htmlFor="Body" className={styles.text}>Message: </label>
                    <input
                        value={Body}
                        onChange={(event) => setBody(event.target.value)}
                    />
                </div>
                <button onClick={onSubmit} className={styles.button}>Submit</button>
            </div>
        </div>
    )
}
export default AddEntry