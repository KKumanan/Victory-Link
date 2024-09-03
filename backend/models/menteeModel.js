const mongoose = require('mongoose');

const menteeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  sport: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
    trim: true,
  },
  mentors: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mentor', // assuming there's a Mentor model
  }]
}, {
  timestamps: true,
});

const Mentee = mongoose.model('Mentee', menteeSchema);

module.exports = Mentee;
