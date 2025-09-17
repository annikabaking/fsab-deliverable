import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"
dotenv.config()

import { db } from "./FirebaseInit.js";
import { collection, getDocs, addDoc } from "firebase/firestore"

const app = express()
const port = 9090;

app.use(express.json())
app.use(
    cors({
        origin: "http://localhost:3000"
    })
)
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", async (req, res) => {
    res.send(":)");
});

app.get("/entries", async (req, res) => {
    console.log("getting all entries")
    const collectionRef = collection(db, "Entries");
    const collectionSnap = await getDocs(collectionRef)
    const docs = []
    collectionSnap.forEach((doc) => {
        docs.push(doc.data())
    })
    res.send(docs)
})

app.post("/entries", async (req, res) => {
    const entryRef = collection(db, "Entries");
    const entryBody = req.body
    try {
        await addDoc(entryRef, entryBody)
    } catch (e) {
        console.error(e)
        res.status(500);
    }
    res.status(200).send("Succesfully Created Entry")
})

function start() {
    app.listen(port, () => {
        console.log(`Started listening on http://localhost:${port}`)
    })
}

start()