const { isInteger } = require('lodash')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mahasiswaSchema = new Schema({
    nama: String,
    umur: Number,
    jurusanId: String
})

module.export = mongoose.model('mahasiswa', mahasiswaSchema)