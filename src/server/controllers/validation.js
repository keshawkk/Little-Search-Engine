const validator = require("express-validator");
const schema = validator.checkSchema;
const validationResult = validator.validationResult;

function validateData(req, res, next) {
  if (validationResult(req).errors.length === 0) {
    console.log("Data OK");
    return next();
  } else {
    const errors = validationResult(req).errors;
    let e = [];
    for (let i in errors) {
      e.push(`${errors[i].param} =>  ${errors[i].msg}`);
    }

    res.status(422).send({ errors });
  }
}



// specifiying basic rules
const email = {
        isEmail: true,
        trim: true,
        normalizeEmail: true,
        errorMessage: "Invalid Email",
      }

const password = {
        isLength: {
          errorMessage: "Password should be at least 6 chars long",
          options: { min: 6 },
        },
      }


module.exports = {
  // Validation for loginForm
  loginValidate: [
    schema({
      email: email,
      password: password,
    }),
    validateData,
  ],

};
