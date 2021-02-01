const path = require('path');
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})
app.post('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'error.html'))
})

app.listen(port, () => {
  console.log(`🏎  Server ready at http://localhost:${port}`)
})
