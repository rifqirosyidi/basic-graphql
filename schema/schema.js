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

let list_jurusan = [
    { id: "1", jurusan: "Research Nurse", kaprodi: "Grafham"},
    { id: "2", jurusan: "Chief Design Engineer", kaprodi: "Ofen"},
    { id: "3", jurusan: "Marketing Assistant", kaprodi: "Danelet"},
    { id: "4", jurusan: "Registered Nurse", kaprodi: "Pieracci"},
    { id: "5", jurusan: "Sales Representative", kaprodi: "Janoch"},
    { id: "6", jurusan: "Computer Systems Analyst III", kaprodi: "Anthonies"},
    { id: "7", jurusan: "Quality Control Specialist", kaprodi: "Boot"},
    { id: "8", jurusan: "Junior Executive", kaprodi: "Gonthard"},
    { id: "9", jurusan: "Analyst Programmer", kaprodi: "Piperley"},
    { id: "10", jurusan: "Information Systems Manager", kaprodi: "Cubbit"}
]

let list_mahasiswa = [
    { id: "1", nama: "Gabi Filippi", umur: 23, jurusanId: "10" },
    { id: "2", nama: "Roseline McIlvaney", umur: 30, jurusanId: "1" },
    { id: "3", nama: "Tanitansy Feavyour", umur: 21, jurusanId: "7" },
    { id: "4", nama: "Ciel Corradino", umur: 26, jurusanId: "2" },
    { id: "5", nama: "Yelena Billett", umur: 25, jurusanId: "8" },
    { id: "6", nama: "Berty Jakubovski", umur: 21, jurusanId: "4" },
    { id: "7", nama: "Nichol Vsanelli", umur: 27, jurusanId: "2" },
    { id: "8", nama: "Xever Jiggins", umur: 22, jurusanId: "5" },
    { id: "9", nama: "Tova Pretsel", umur: 24, jurusanId: "5" },
    { id: "10", nama: "Lu Zanre", umur: 26, jurusanId: "6" },
    { id: "11", nama: "Phedra Gedling", umur: 27, jurusanId: "1" },
    { id: "12", nama: "Mathilda Bartelot", umur: 24, jurusanId: "1" },
    { id: "13", nama: "Hewett McKennan", umur: 20, jurusanId: "4" },
    { id: "14", nama: "Lyndy MacGillivrie", umur: 29, jurusanId: "4" },
    { id: "15", nama: "Delphinia Lomis", umur: 20, jurusanId: "1" },
    { id: "16", nama: "Davidde Croizier", umur: 20, jurusanId: "10" },
    { id: "17", nama: "Jonis Drewry", umur: 24, jurusanId: "8" },
    { id: "18", nama: "Stesha Ochterlony", umur: 20, jurusanId: "10" },
    { id: "19", nama: "Gray Tibbits", umur: 22, jurusanId: "10" },
    { id: "20", nama: "Willie Yegorchenkov", umur: 21, jurusanId: "3" },
    { id: "21", nama: "Gaynor Wreiford", umur: 28, jurusanId: "10" },
    { id: "22", nama: "Maurie Witter", umur: 20, jurusanId: "7" },
    { id: "23", nama: "Aubrey Rosling", umur: 22, jurusanId: "1" },
    { id: "24", nama: "Linell Ielden", umur: 27, jurusanId: "9" },
    { id: "25", nama: "Roderich Marks", umur: 20, jurusanId: "4" },
    { id: "26", nama: "Fair Luxmoore", umur: 21, jurusanId: "7" },
    { id: "27", nama: "Kendre Delafoy", umur: 30, jurusanId: "9" },
    { id: "28", nama: "Petrina Hatherill", umur: 29, jurusanId: "9" },
    { id: "29", nama: "Tom Conibear", umur: 27, jurusanId: "10" },
    { id: "30", nama: "Maurise Pharo", umur: 29, jurusanId: "6" },
    { id: "31", nama: "Callean Leadstone", umur: 27, jurusanId: "5" },
    { id: "32", nama: "Chase Tripet", umur: 26, jurusanId: "4" },
    { id: "33", nama: "Nannie Brokenshire", umur: 22, jurusanId: "3" },
    { id: "34", nama: "Packston Sabbins", umur: 22, jurusanId: "10" },
    { id: "35", nama: "Matias Winspire", umur: 22, jurusanId: "8" },
    { id: "36", nama: "Addi Rylett", umur: 30, jurusanId: "7" },
    { id: "37", nama: "Carson Knuckles", umur: 29, jurusanId: "3" },
    { id: "38", nama: "Gav Bahia", umur: 24, jurusanId: "4" },
    { id: "39", nama: "Lira Attlee", umur: 25, jurusanId: "8" },
    { id: "40", nama: "Kassia Ramstead", umur: 29, jurusanId: "3" },
    { id: "41", nama: "Robinette McMorland", umur: 21, jurusanId: "3" },
    { id: "42", nama: "Trudey Hellens", umur: 21, jurusanId: "6" },
    { id: "43", nama: "Hayley Stebbings", umur: 23, jurusanId: "7" },
    { id: "44", nama: "Brooke Joris", umur: 23, jurusanId: "6" },
    { id: "45", nama: "Starla Coffey", umur: 24, jurusanId: "1" },
    { id: "46", nama: "Rozanne Axtell", umur: 21, jurusanId: "2" },
    { id: "47", nama: "Mickey Northwood", umur: 29, jurusanId: "9" },
    { id: "48", nama: "Clemmy Northley", umur: 23, jurusanId: "6" },
    { id: "49", nama: "Carilyn Penvarden", umur: 29, jurusanId: "4" },
    { id: "50", nama: "Ephrayim Sorrell", umur: 21, jurusanId: "7" }
]

const jurusanType = new GraphQLObjectType({
    name: 'jurusan',
    fields: () => ({
        id: { type: GraphQLID },
        jurusan: { type: GraphQLString },
        kaprodi: { type: GraphQLString },
        mahasiswa: { 
            type: new GraphQLList(mahasiswaType),
            resolve(parent, args) {
                return _.filter(list_mahasiswa, {jurusanId: parent.id })
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
                return _.find(list_jurusan, { id: parent.jurusanId })
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
                return _.find(list_jurusan, {id: args.id})
            }
        },
        mahasiswa: {
            type: mahasiswaType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args) {
                return _.find(list_mahasiswa, {id: args.id})
            }
        },
        all_prodi: {
            type: new GraphQLList(jurusanType),
            resolve(parent, args) {
                return list_jurusan
            }
        },
        all_mahasiswa: {
            type: new GraphQLList(mahasiswaType),
            resolve(parent, args) {
                return list_mahasiswa
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: rootQuery
})