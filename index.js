const express = require('express');
const app = express();
const port = 8000
const fonduesRoutes = require('./routes/fondues');

const mongoose = require('mongoose')
const mongdbUri = 'mongodb://localhost:27017/fondues'


mongoose.connect(mongdbUri)
    .then(() => {
        console.log('MongoDB Connected!')
    })
    .catch((err) => {
        console.error(err)
    })

app.listen(port, ()=>{
    console.log('test')
})


app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.json())

app.use('/', fonduesRoutes)