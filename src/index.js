const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const { urlencoded, json } = require("express")

const app = express()
dotenv.config()

let whitelist = ["http://localhost:8080"]
let corsoption = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    },
}

app.use(cors(corsoption))
app.use(json())
app.use(
    urlencoded({
        extended: true,
    })
)

app.get("/", (req, res) => {
    res.json("APP is running...")
})

const PORT = process.env.APP_PORT || 5000

app.listen(PORT, () => {
    console.log(`APP Running at http://localhost:${PORT}`)
})
