const graphql = require('graphql')
const _ = require('lodash')
const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLInt, 
    GraphQLSchema, 
    GraphQLID,
    GraphQLList,
    GraphQLNonNull
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
                return Mahasiswa.find({jurusanId: parent.id})
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
                return Jurusan.findById(parent.jurusanId)
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
                return Jurusan.findById(args.id)
            }
        },
        mahasiswa: {
            type: mahasiswaType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args) {
                // return _.find(list_mahasiswa, {id: args.id})
                return Mahasiswa.findById(args.id)
            }
        },
        all_prodi: {
            type: new GraphQLList(jurusanType),
            resolve(parent, args) {
                // return list_jurusan
                return Jurusan.find({})
            }
        },
        all_mahasiswa: {
            type: new GraphQLList(mahasiswaType),
            resolve(parent, args) {
                // return list_mahasiswa
                return Mahasiswa.find({})
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
                jurusan: { type: new GraphQLNonNull(GraphQLString) },
                kaprodi: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                let jurusan = new Jurusan({
                    jurusan: args.jurusan,
                    kaprodi: args.kaprodi
                })
                return jurusan.save()
            }
        },
        addMahasiswa: {
            type: mahasiswaType,
            args: {
                nama: { type: new GraphQLNonNull(GraphQLString) },
                umur: { type: new GraphQLNonNull(GraphQLInt) },
                jurusanId: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                let mahasiswa = new Mahasiswa({
                    nama: args.nama,
                    umur: args.umur,
                    jurusanId: args.jurusanId
                })

                return mahasiswa.save()
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: rootQuery,
    mutation: Mutation
})