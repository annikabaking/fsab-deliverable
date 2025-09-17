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
    }
    // NOTE: this is not the best way to collect data, but is good for demo purposes!
    const [Date, setDate] = useState("")
    const [Body, setBody] = useState("")

    return (
        <div>
            <h3>Write New Entry</h3>
            <button onClick={onSubmit}>Submit</button>
            <h4>Main Info</h4>
            <div className={styles.mainForm}>
                <div>
                    <label htmlFor="Date">Date: </label>
                    <input
                        name="Date"
                        value={Date}
                        onChange={(event) => setDate(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="Body">Message: </label>
                    <input
                        value={Body}
                        onChange={(event) => setBody(event.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}
export default AddEntry