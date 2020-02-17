var graphql = require('graphql')

var {GraphQLSchema,GraphQLString,GraphQLObjectType} = graphql

var user_type = new GraphQLObjectType({
	name: 'user',
	fields:{
		user_id:{type:GraphQLString},
		user_name:{type:GraphQLString}
	}
})

var rootquery = new GraphQLObjectType({
	name:'root_query',
	fields:{
		user:{
			type:user_type,
			args:{user_id:{type:GraphQLString},user_name:{type:GraphQLString}},
			resolve(parentValue,args) {
				console.log(args);
				return {user_name:'sathya narayanan',user_id:'123'}
			}
		}
	}
})

module.exports = new GraphQLSchema({
	query:rootquery
})