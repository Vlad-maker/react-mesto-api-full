const mongoose = require('mongoose');
const userValidator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    minlength: [2, 'Введите не менее 2 символов'],
    maxlength: [30, 'Введите не более 30 символов'],
    default: 'Жак-Ив Кусто',
  },
  about: {
    type: String,
    required: false,
    minlength: [2, 'Введите не менее 2 символов'],
    maxlength: [30, 'Введите не более 30 символов'],
    default: 'Исследователь',
  },
  avatar: {
    type: String,
    required: false,
    default:
      'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
    validate: {
      validator(v) {
        return /^https?:\/\/[a-z0-9\W\_]+#?$/i.test(v); // eslint-disable-line
      },
      message: 'Ошибка валидации URL',
    },
  },
  email: {
    required: true,
    type: String,
    unique: true,
    validate: {
      validator(v) {
        return userValidator.isEmail(v);
      },
      message: 'Email некорректен',
    },
  },
  password: {
    required: true,
    type: String,
    minlength: 8,
    select: false,
    validate: {
      validator(v) {
        return /[a-z0-9]*/i.test(v);
      },
      message: 'Пароль некорректен',
    },
  },
});

userSchema.methods.toJSON = function findUser() {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

module.exports = mongoose.model('user', userSchema);
