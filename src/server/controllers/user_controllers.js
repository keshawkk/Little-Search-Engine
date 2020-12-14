const bcrypt = require('bcrypt');
const User = require('../models/user_model');
const jwt = require('./jwt.js');
const j = require('jsonwebtoken');

module.exports = {
  /**
   * @route   POST api/user/login
   * @desc    Login user
   * @access  Public
   */
  loginUser: async (req, res) => {
    try {
      const  email  = req.body.email;
      const  password  = req.body.password;
      
      const user = await User.findOne({ email });
      if (!user) throw Error('user Does not exist!!');

      //if(user.timesLoggedIn > 4) throw Error('log-In limit exceeded')
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) throw Error('Invalid credentials');



    // Todo: un- Comment ones app is ready
      console.log(user.timesLoggedIn);
      const currentTimesLoggedIn = user.timesLoggedIn + 1;

      var token;
      if(user.timesLoggedIn < 2)
      {
        token = jwt.generateToken(
          {
            email: user.email,
            userType: user.userType,
            timesLoggedIn: currentTimesLoggedIn
          },
          '48h'
        );
      }else{
        throw Error('Login Limit reached');
      }

      

      if (!token) throw Error('Couldnt sign the token');
      req.session.token = token;

      User.findOneAndUpdate({_id: user._id}, {$set: {timesLoggedIn: currentTimesLoggedIn}}, {new: true}, (err, doc) => {
        if (err) {
            console.log("Something wrong when updating data!");
        }
        console.log(doc);
    });

          if (!token) throw Error('Couldnt sign the token');
          req.session.token = token;


      res.status(200).json({
        status: 'OK',
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(405).json({
        status: 'NOT OK',
        message: error.message,
      });
    }
  },
  /**
   * @route   POST //Todo: Add path
   * @desc    Register new student
   * @access  Public
   */
  createUser: async (req, res) => {
    try {
      const  email  = 'dummyuser@gmail.com';
      const  password  = '123456789';
      
      const user = await User.findOne({ email }, 'email');
      if (user) throw Error('User already exists');

      const salt = await bcrypt.genSalt(15);
      if (!salt) throw Error('Something went wrong with bcrypt');
      const hash = await bcrypt.hash(password, salt);
      if (!hash) throw Error('Something went wrong hashing the password');

      const newUser = new User();
      newUser.name = 'User1';
      newUser.email = 'dummyuser@gmail.com';
      newUser.userType = 'user';
      newUser.timesLoggedIn = 0;
      newUser.password = hash;

      const savedUser = await newUser.save();
      if (!savedUser) { throw Error('Something went wrong while saving the user'); }

      res.status(200).json({
        data: savedUser,
        status: 'OK',
        message: 'User Saved',
      });
    } catch (error) {
      console.log(error.message);
      res.status(405).json({
        status: 'NOT OK',
        message: error.message,
      });
    }
  },
};
