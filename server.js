// JavaScript source code
import express from "express"
import cors from "cors"

const app = express();
const port = 3000

app.use(express.json())
app.use(cors())

app.get("/hello", (req, res) => {
    res.send("Hello World!")
})


app.listen(port, () => {
    console.log("Listening to port 3001")
})
