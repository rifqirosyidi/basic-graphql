const graphql = require('graphql')
const _ = require('lodash')
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } = graphql

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
    { id: "10", jurusan: "Information Systems Manager", kaprodi: "Cubbit"},
    { id: "11", jurusan: "Software Consultant", kaprodi: "Northridge"},
    { id: "12", jurusan: "Pharmacist", kaprodi: "Welchman"},
    { id: "13", jurusan: "Desktop Support Technician", kaprodi: "Delamar"},
    { id: "14", jurusan: "VP Accounting", kaprodi: "Fossick"},
    { id: "15", jurusan: "Environmental Tech", kaprodi: "Gingell"},
    { id: "16", jurusan: "Web Developer III", kaprodi: "Grainge"},
    { id: "17", jurusan: "Accountant IV", kaprodi: "MacVay"},
    { id: "18", jurusan: "Community Outreach Specialist", kaprodi: "Motherwell"},
    { id: "19", jurusan: "Recruiter", kaprodi: "Grief"},
    { id: "20", jurusan: "Account Representative IV", kaprodi: "Beckerleg"},
    { id: "21", jurusan: "Dental Hygienist", kaprodi: "Rowan"},
    { id: "22", jurusan: "Business Systems Development Analyst", kaprodi: "Milksop"},
    { id: "23", jurusan: "Senior Quality Engineer", kaprodi: "Guyon"},
    { id: "24", jurusan: "Cost Accountant", kaprodi: "Lanegran"},
    { id: "25", jurusan: "Programmer Analyst IV", kaprodi: "Bentick"},
    { id: "26", jurusan: "Information Systems Manager", kaprodi: "Willgrass"},
    { id: "27", jurusan: "Compensation Analyst", kaprodi: "Lewtey"},
    { id: "28", jurusan: "Operator", kaprodi: "Thumann"},
    { id: "29", jurusan: "Environmental Tech", kaprodi: "McCaffery"},
    { id: "30", jurusan: "Recruiting Manager", kaprodi: "Navan"},
    { id: "31", jurusan: "Clinical Specialist", kaprodi: "Shoobridge"},
    { id: "32", jurusan: "Engineer III", kaprodi: "Stirrup"},
    { id: "33", jurusan: "Engineer III", kaprodi: "McInerney"},
    { id: "34", jurusan: "Dental Hygienist", kaprodi: "Goldsby"},
    { id: "35", jurusan: "Account Coordinator", kaprodi: "Mance"},
    { id: "36", jurusan: "Business Systems Development Analyst", kaprodi: "Bossons"},
    { id: "37", jurusan: "Analyst Programmer", kaprodi: "Richter"},
    { id: "38", jurusan: "Recruiter", kaprodi: "Aspel"},
    { id: "39", jurusan: "Analog Circuit Design manager", kaprodi: "Camfield"},
    { id: "40", jurusan: "GIS Technical Architect", kaprodi: "Ruslinge"},
    { id: "41", jurusan: "Account Coordinator", kaprodi: "Leppard"},
    { id: "42", jurusan: "Legal Assistant", kaprodi: "Wortley"},
    { id: "43", jurusan: "Physical Therapy Assistant", kaprodi: "Blaylock"},
    { id: "44", jurusan: "Structural Analysis Engineer", kaprodi: "Walls"},
    { id: "45", jurusan: "Software Engineer II", kaprodi: "Dallaghan"},
    { id: "46", jurusan: "Research Assistant III", kaprodi: "Potteridge"},
    { id: "47", jurusan: "Product Engineer", kaprodi: "Jedrachowicz"},
    { id: "48", jurusan: "Help Desk Technician", kaprodi: "Kornel"},
    { id: "49", jurusan: "Health Coach III", kaprodi: "Coal"},
    { id: "50", jurusan: "Sales Representative", kaprodi: "Sloley"},
    { id: "51", jurusan: "Desktop Support Technician", kaprodi: "O'Doherty"},
    { id: "52", jurusan: "Associate Professor", kaprodi: "Ionn"},
    { id: "53", jurusan: "Accountant IV", kaprodi: "Siemandl"},
    { id: "54", jurusan: "Legal Assistant", kaprodi: "Dispencer"},
    { id: "55", jurusan: "VP Product Management", kaprodi: "Klaus"},
    { id: "56", jurusan: "Operator", kaprodi: "Vinker"},
    { id: "57", jurusan: "Help Desk Technician", kaprodi: "Grainge"},
    { id: "58", jurusan: "Account Executive", kaprodi: "Barefoot"},
    { id: "59", jurusan: "Geological Engineer", kaprodi: "Kummerlowe"},
    { id: "60", jurusan: "Research Assistant III", kaprodi: "Wimms"},
    { id: "61", jurusan: "Senior Financial Analyst", kaprodi: "Berkely"},
    { id: "62", jurusan: "Marketing Manager", kaprodi: "Cater"},
    { id: "63", jurusan: "Programmer Analyst II", kaprodi: "Labusch"},
    { id: "64", jurusan: "Compensation Analyst", kaprodi: "Boam"},
    { id: "65", jurusan: "Administrative Assistant III", kaprodi: "Planke"},
    { id: "66", jurusan: "Quality Control Specialist", kaprodi: "Goodbarne"},
    { id: "67", jurusan: "Nurse", kaprodi: "Ferriday"},
    { id: "68", jurusan: "Senior Developer", kaprodi: "Shenley"},
    { id: "69", jurusan: "Geological Engineer", kaprodi: "Dyment"},
    { id: "70", jurusan: "Mechanical Systems Engineer", kaprodi: "Hughlock"},
    { id: "71", jurusan: "Environmental Tech", kaprodi: "Arthey"},
    { id: "72", jurusan: "Accountant III", kaprodi: "Neaves"},
    { id: "73", jurusan: "Internal Auditor", kaprodi: "Kitcher"},
    { id: "74", jurusan: "Graphic Designer", kaprodi: "Girogetti"},
    { id: "75", jurusan: "Web Designer II", kaprodi: "McCallam"},
    { id: "76", jurusan: "Senior Editor", kaprodi: "Scholtis"},
    { id: "77", jurusan: "Teacher", kaprodi: "Yeiles"},
    { id: "78", jurusan: "VP Marketing", kaprodi: "Mahoney"},
    { id: "79", jurusan: "Civil Engineer", kaprodi: "Rawet"},
    { id: "80", jurusan: "Financial Analyst", kaprodi: "O'Shields"},
    { id: "81", jurusan: "Software Engineer III", kaprodi: "McQuilty"},
    { id: "82", jurusan: "Physical Therapy Assistant", kaprodi: "Oldman"},
    { id: "83", jurusan: "Junior Executive", kaprodi: "Sinisbury"},
    { id: "84", jurusan: "Executive Secretary", kaprodi: "Mathivon"},
    { id: "85", jurusan: "VP Sales", kaprodi: "Kornousek"},
    { id: "86", jurusan: "Biostatistician IV", kaprodi: "Boseley"},
    { id: "87", jurusan: "VP Product Management", kaprodi: "Senton"},
    { id: "88", jurusan: "Research Nurse", kaprodi: "Ayshford"},
    { id: "89", jurusan: "GIS Technical Architect", kaprodi: "Musterd"},
    { id: "90", jurusan: "VP Accounting", kaprodi: "Blenkinship"},
    { id: "91", jurusan: "Clinical Specialist", kaprodi: "Checcucci"},
    { id: "92", jurusan: "Account Executive", kaprodi: "Huet"},
    { id: "93", jurusan: "Payment Adjustment Coordinator", kaprodi: "Stevani"},
    { id: "94", jurusan: "Dental Hygienist", kaprodi: "Stapele"},
    { id: "95", jurusan: "Media Manager III", kaprodi: "MacElroy"},
    { id: "96", jurusan: "Statistician IV", kaprodi: "Faircliff"},
    { id: "97", jurusan: "Sales Associate", kaprodi: "Tarbox"},
    { id: "98", jurusan: "Recruiting Manager", kaprodi: "Willingale"},
    { id: "99", jurusan: "Software Test Engineer I", kaprodi: "Wittering"},
    { id: "100", jurusan: "Analog Circuit Design manager", kaprodi: "Cudbird"}
]

const jurusanType = new GraphQLObjectType({
    name: 'jurusan',
    fields: () => ({
        id: { type: GraphQLID },
        jurusan: { type: GraphQLString },
        kaprodi: { type: GraphQLString }
    })
})

const rootQuery = new GraphQLObjectType({
    name: 'RootQueryTypr',
    fields: {
         prodi: {
             type: jurusanType,
             args: { id: { type: GraphQLID }},
             resolve(parent, args) {
                return _.find(list_jurusan, {id: args.id})
             }
         }
    }
})

module.exports = new GraphQLSchema({
    query: rootQuery
})