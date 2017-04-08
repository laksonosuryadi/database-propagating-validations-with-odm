'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validators = require('mongoose-validators')

let organizerSchema = new Schema({
  date: {
    type: Date,
    required: true['date is required'],
    validate: validators.isDate({message: "Wrong Date Format"})
  },
  title: {
    type: String,
    required: [true, 'title is required'],
    unique: [true, 'This title is already used']
  },
  name: {
    type: String,
    required: [true, 'name is required'],
    unique: [true, 'This name is already used']
  },
  email: {
    type: String,
    required: true['email is required'],
    validate: validators.isEmail({message: "Wrong Email Format"})
  }
})

let Organizer = mongoose.model('Organizer', organizerSchema)

module.exports = Organizer
