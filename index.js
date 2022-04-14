const express = require("express")
const cors = require("cors")

const { hits, movies } = require("./data")

const app = express()
app.use(cors())

app.get("/hits", (request, response) => {
  response.json({ hits })
})
app.get("/movies", (request, response) => {
  response.json({ movies })
})

app.listen(process.env.PORT || 8000)
