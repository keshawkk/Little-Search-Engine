const bcrypt = require('bcrypt');
const Admin = require('../models/admin_model');
const jwt = require('./jwt.js');

module.exports = {
  /**
   * @route   POST //Todo: add path
   * @desc    Login user
   * @access  Public
   */
  loginAdmin: async (req, res) => {
    try {
      const { userName } = req.body;
      const { password } = req.body;

      const admin = await Admin.findOne({ userName });
      if (!admin) throw Error('user Does not exist!!');

      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) throw Error('Invalid credentials');

      // Creating a Token and making a session
      const token = jwt.generateToken(
        {
          name: admin.name,
        },
        '48h'
      );
      console.log(token);
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
  createAdmin: async (req, res) => {
    try {
      const { userName } = req.body;
      const { password } = req.body;

      const admin = await Admin.findOne({ userName }, 'userName');
      if (admin) throw Error('User already exists');

      const salt = await bcrypt.genSalt(15);
      if (!salt) throw Error('Something went wrong with bcrypt');
      const hash = await bcrypt.hash(password, salt);
      if (!hash) throw Error('Something went wrong hashing the password');

      const newAdmin = new Admin();
      newAdmin.name = req.body.name;
      newAdmin.userName = req.body.userName;
      newAdmin.password = hash;

      const savedAdmin = await newAdmin.save();
      if (!savedAdmin) { throw Error('Something went wrong while saving the user'); }

      res.status(200).json({
        data: savedAdmin,
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
