//validation ->


//email validation
const validEmail = (email) =>{
    return email.match(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/)

}                                                                             
const validPass =(password)=>{
    return password.match("^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,10}$")
}
module.export = {validEmail , validPass}

//mobile validation
const validMobile = (mobile) => {
  
    return mobile.match(/^[0-9]{10}$/);
  }
  module.exports = { validEmail, validPass, validMobile };