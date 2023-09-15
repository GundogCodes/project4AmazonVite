const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.cjs');

//function to create a token using JWT
function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: '24h' });
}

//checkToken function which responds with the expiry of the the token
function checkToken(req, res) {

  res.json(req.exp);
}

//authencationn function which returns the local token
const apiController = {
  auth(req, res) {
    res.json(res.locals.data.token);
  },
};
//********************************************CRUD********************************************//
const dataController = {
  //C
  async createUser(req, res, next) {
    try {
      const user = await User.create(req.body);
      const token = createJWT(user);
      req.user = user;
      res.locals.data.user = user;
      res.locals.data.token = token;
      next();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  //R
  async getUser(req, res, next) {
    try {
      const foundUser = await User.findOne({ _id: req.params.id });
      res.json(foundUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async login(req, res, next) {
    try {
        const user = await User.findOne({
          $or: [{ email: req.body.loginValue }, { phoneNumber: req.body.loginValue }],
         });
        
        req.user = user;
      if (!user) throw Error();
      const match = await bcrypt.compare(req.body.password, user.password);
      if (!match) throw new Error();
      res.locals.data.user = user;
      res.locals.data.token = createJWT(user);
      next();
    } catch (error) {
      res.status(400).json('Bad Credentials');
    }
  },

  //U
  async updateUser(req, res, next) {
    try {

      const updatedUser = await User.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );

      res.json(updatedUser);

    } catch (error) {
      res.status(400).json(error.message);
    }
  },

  //D
  async deleteUser(req, res, next) {
    try {
      const findUser = await User.findOne({ _id: req.params.id });
      const match = await bcrypt.compare(req.body.password, findUser.password);
      if (findUser.email !== req.body.email || !match) {
        res.json('Password is incorrect or not Authorized');
      } else if (findUser.email === req.body.email && match) {
        await User.deleteOne(findUser);
        res.json('userDeleted');
      }
    } catch (error) {
      res.status(400).json('Bad Credentials');
    }
  },
};

module.exports = {
  checkToken,
  dataController,
  apiController,
};
