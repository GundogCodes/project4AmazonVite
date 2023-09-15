const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 10;

/********************** 
this is the user model schema
***********************/

//make a new schema for the address
const addressSchema = new Schema({
  street: { type: String, trim: true, lowercase: true, required: true },
  city: { type: String, trim: true, lowercase: true, required: true },
  state: { type: String, trim: true, lowercase: true, required: true },
  zip: { type: String, trim: true, lowercase: true, required: true },
});
const userSchema = new Schema(

  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      minlength: 3,
      required: true,
    },


    address: addressSchema,


    phoneNumber: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }

);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  return next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
