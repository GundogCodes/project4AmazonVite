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

    //review this with josh
    //make this a seperate schema
    /*************************** */
    // address: {
    //     street: { type: String, trim: true },
    //     city: { type: String, trim: true },
    //     state: { type: String, trim: true },
    //     zip: { type: String, trim: true },
    //     lowerCase: true,
    //     trim: true,
    //     required: true
    // },

    /*************************** */

    address: addressSchema,

    /******* im unsure if this is actually going to work *******/

    phoneNumber: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transorm: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);

userSchema.pre('save', async function (next) {
  // single line if statement, if password is not modified, return next
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  return next();
});

module.exports = User;
