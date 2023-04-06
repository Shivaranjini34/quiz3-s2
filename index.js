const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.post('/login', (req, res) => {
    console.log (req.body)

    res.send('Login')
  })

app.get('/FKEKK', (req, res) => {
  res.send('Welcome to FKEKK!<3')
})

app.get('/UTeM', (req, res) => {
    res.send('Welcome to UTeM!')
  })

app.post('/register', (req, res) => {    ///This will created and error because anything at address bar will only recognise GET command
    res.send('Account sucessfully created!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})