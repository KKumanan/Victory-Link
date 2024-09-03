const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
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
  school: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
    trim: true,
  },
  mentees: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mentee', // assuming there's a Mentee model
  }]
}, {
  timestamps: true,
});

const Mentor = mongoose.model('Mentor', mentorSchema);

module.exports = Mentor;
