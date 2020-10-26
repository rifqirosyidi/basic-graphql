const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jurusanSchema = new Schema({
    jurusan: String,
    kaprodi: String
})

module.export = mongoose.model('jurusan', jurusanSchema)