import express from 'express'
const app = express()

const PORT = process.env.PORT || 8800

app.listen(8800, () => {
  console.log(`Application listening on port ${PORT}`)
})
