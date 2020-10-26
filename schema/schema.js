const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString } = graphql

const jurusanType = new GraphQLObjectType({
    name: 'jurusan',
    fiels: () => ({
        id: { type: GraphQLString },
        jurusan: { type: GraphQLString },
        kaprodi: { type: GraphQLString }
    })
})
