const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()
const app = express()
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
    () => console.log(`CONNECTION 200 OK! WITH MONGOOSE`)
)

app.get('/api', async (req, res) => {
    res.json({ 'message': 'NODE XPRESS SERVER' })
})

app.listen(PORT, async () => {
    console.log(`NODE XPRESS SERVER PORT 5000`)
})