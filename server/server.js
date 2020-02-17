var express = require('express')
var expressGraphQL =  require('express-graphql')
var schema = require('./schema')
var cors = require('cors');

var app =new express()
app.use(cors())
app.use('/graphql',expressGraphQL({
	schema,
	graphiql:true
}))
	
app.get('/',(req,res) => {
	res.send("hello sathya")
})

app.listen(4000)
module.exports = app
 
