const graphql = require('graphql')
const _ = require('lodash')
const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLInt, 
    GraphQLSchema, 
    GraphQLID,
    GraphQLList
} = graphql

// Models
const Jurusan = require('../models/jurusan')
const Mahasiswa = require('../models/mahasiswa')



const jurusanType = new GraphQLObjectType({
    name: 'jurusan',
    fields: () => ({
        id: { type: GraphQLID },
        jurusan: { type: GraphQLString },
        kaprodi: { type: GraphQLString },
        mahasiswa: { 
            type: new GraphQLList(mahasiswaType),
            resolve(parent, args) {
                // return _.filter(list_mahasiswa, {jurusanId: parent.id })
            }
        }
    })
})

const mahasiswaType = new GraphQLObjectType({
    name: 'mahasiswa',
    fields: () => ({
        id: { type: GraphQLID },
        nama: { type: GraphQLString },
        umur: { type: GraphQLInt },
        prodi: { 
            type: jurusanType,
            resolve(parent, args) {
                // return _.find(list_jurusan, { id: parent.jurusanId })
            }
         }
    })
})

const rootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        prodi: {
            type: jurusanType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args) {
                // return _.find(list_jurusan, {id: args.id})
            }
        },
        mahasiswa: {
            type: mahasiswaType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args) {
                // return _.find(list_mahasiswa, {id: args.id})
            }
        },
        all_prodi: {
            type: new GraphQLList(jurusanType),
            resolve(parent, args) {
                // return list_jurusan
            }
        },
        all_mahasiswa: {
            type: new GraphQLList(mahasiswaType),
            resolve(parent, args) {
                // return list_mahasiswa
            }
        }
    }
})


const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addJurusan: {
            type: jurusanType,
            args: {
                jurusan: { type: GraphQLString },
                kaprodi: { type: GraphQLString }
            },
            resolve(parent, args) {
                let jurusan = new Jurusan({
                    jurusan: args.jurusan,
                    kaprodi: args.kaprodi
                })
                return jurusan.save()
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: rootQuery,
    mutation: Mutation
})