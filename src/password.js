//this is the final function after doing the whole process of TextDecoder.

function passwordIsValid(password) {
  var Pregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$/;
  var Test = Pregex.test(password);
  try {
    if (Test == false) {
      throw "Error:password is not valid";
    } else {
      throw "password is valid";
    }
  } catch (err) {
    console.log(err);
  }
  //var results = console.log(err);
}
passwordIsValid("Roo@S0009");

module.exports = { passwordIsValid };
