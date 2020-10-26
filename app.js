require('dotenv').config()

const express = require('express')
const monggose = require('mongoose')
const schema = require('./schema/schema')
const { graphqlHTTP } = require('express-graphql')

const app = express()

monggose.connect(process.env.MONGO_DB_CONN, {useNewUrlParser: true, useUnifiedTopology: true})
monggose.connection.once('open', () => {
    console.log("DB Connected")
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log("Listening on port 4000")
})