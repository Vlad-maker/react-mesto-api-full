const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [2, 'Введите не менее 2 символов'],
    maxlength: [30, 'Введите не более 30 символов'],
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /^https?:\/\/[a-z0-9\W\_]+#?$/i.test(v); // eslint-disable-line
      },
      message: 'Ошибка валидации URL',
    },
  },
  owner: {
    type: ObjectId,
    required: true,
  },
  likes: {
    type: Array,
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('card', cardSchema);
