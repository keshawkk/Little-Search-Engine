const jwt = require('jsonwebtoken');
const Admin = require('../models/admin_model');

module.exports = {

  generateToken(data, expiry) {
    const token = jwt.sign(data, process.env.JWT_SECRET, {
      algorithm: 'HS256',
      expiresIn: expiry,
    });
    return token;
  },

  getSession(req, res) {
    // May be Vulnerable. Or verification of authenticity of token can be done here
    if (typeof req.session.token !== 'undefined') {
      const { token } = req.session;
      jwt.verify(
        token,
        process.env.JWT_SECRET,
        { algorithm: 'HS256' },
        (err, user) => {
          if (err) {
            res
              .status(403)
              .send({ message: 'Not Authorized', status: 'NOT OK' });
          } else {
            res
              .status(200)
              .send({ message: 'User Fetched', user, status: 'OK' });
          }
        }
      );
    } else {
      res.status(404).send({ message: 'No Session Found', status: 'NOT OK' });
    }
  },

  removeSession(req, res) {
    if (typeof req.session.token !== 'undefined') {
      const {token} = req.session;

      jwt.verify(
        token,
        process.env.JWT_SECRET,
        { algorithm: 'HS256' },
        (err, decoded) => {
          if(decoded){
            const email = decoded.email;
            Admin.findOneAndUpdate({email}, {$set: { activeJWT: null , isLoggedIn: false}}, {new: true}, (err, doc) => {
              if (err) {
                  console.log("Something wrong when updating data!");
              }
              console.log(doc);
          });

           
        }else{
          //something
        }})  

      req.session = null;
      res.status(200).send({ message: 'Session Destroyed', status: 'OK' });
    } else {
      res.status(200).send({ message: 'No Session', status: 'OK' });
    }
  },
};
