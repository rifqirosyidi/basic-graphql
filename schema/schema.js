const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql

const jurusanType = new GraphQLObjectType({
    name: 'jurusan',
    fields: () => ({
        id: { type: GraphQLString },
        jurusan: { type: GraphQLString },
        kaprodi: { type: GraphQLString }
    })
})

const rootQuery = new GraphQLObjectType({
    name: 'RootQueryTypr',
    fields: {
         prodi: {
             type: jurusanType,
             args: { id: { type: GraphQLString }},
             resolve(parent, args) {

             }
         }
    }
})

module.exports = new GraphQLSchema({
    query: rootQuery
})