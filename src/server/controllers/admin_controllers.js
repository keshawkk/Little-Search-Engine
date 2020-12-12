const bcrypt = require('bcrypt');
const Admin = require('../models/admin_model');
const A = require('../models/a_model');
const jwt = require('./jwt.js');

module.exports = {
  /**
   * @route   POST api/admin/login
   * @desc    Login user
   * @access  Public
   */
  loginAdmin: async (req, res) => {
    try {
      const  email  = req.body.email;
      const  password  = req.body.password;
    

      const admin = await Admin.findOne({ email });
      if (!admin) throw Error('user Does not exist!!');

      // const a = await A.findOne({email});
      // if(a) {
      //   console.log("User already logged In  " + a.email); 
      // }else{
      //   const newA = new A();
      //   newA.email = email;
      //   const savedA = await newA.save();
      //   if (!savedA) { console.log('A not saved'); }

      // }

      
      if(admin.isLoggedIn){
        console.log("token 1 ==> " + admin.isLoggedIn);
      
      } 
      else{
        console.log("token 1 not ==> " + admin.isLoggedIn);
      }//throw Error('Already logged In');
      //if (admin.isLoggedIn) throw Error('Already Logged In')

      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) throw Error('Invalid credentials');


      // Creating a Token and making a session
      const token = jwt.generateToken(
        {
          name: admin.name,
          email: admin.email
        },
        '48h'
      );

      admin.activeJWT = token;

      console.log("1"+admin);
     
      if (!token) throw Error('Couldnt sign the token');

      req.session.token = token;

      admin.isLoggedIn = true;
      console.log("toekn 2 ==> "+admin.isLoggedIn);
      console.log("2"+admin);
      res.status(200).json({
        data: admin,
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
      const  email  = "dummyadmin@gmail.com";
      const  password = "123456789";

      const admin = await Admin.findOne({ email }, 'email');
      if (admin) throw Error('User already exists');

      const salt = await bcrypt.genSalt(15);
      if (!salt) throw Error('Something went wrong with bcrypt');
      const hash = await bcrypt.hash(password, salt);
      if (!hash) throw Error('Something went wrong hashing the password');

      const newAdmin = new Admin();
      newAdmin.name = "Admin1";
      newAdmin.email = "dummyadmin@gmail.com";
      newAdmin.password = hash;

      const savedAdmin = await newAdmin.save();
      if (!savedAdmin) { throw Error('Something went wrong while saving the user'); }

      res.status(200).json({
        data: savedAdmin,
        status: 'OK',
        message: 'Admin Saved',
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
