require('dotenv').config()
const express = require('express')
const massive = require('massive')
const pc= require('./products_controller')

const app = express()

const {SERVER_PORT,CONNECTION_STRING} = process.env 


massive(CONNECTION_STRING).then(db => {
    app.set('db',db)
})
.catch(err => console.log(err));

app.use(express.json())

app.get(`/api/products`, pc.getAll)

app.post(`/api/products`, pc.create)

app.get(`/api/products/:product_id`, pc.getOne )

app.put(`/api/products/:product_id`, pc.update)

app.delete(`/api/products/:product_id`, pc.delete)


app.listen(SERVER_PORT, () => {
    console.log(`server listening on ${SERVER_PORT}`);
})