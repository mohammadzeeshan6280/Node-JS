const bcrypt = require('bcryptjs');

const securedPassword = async (password) => {
const passwordHash = await bcrypt.hash(password, 10);
console.log(passwordHash)

const passwordmatch = await bcrypt.compare(password, passwordHash);
  console.log(passwordmatch)
  
}
  securedPassword("Ansari@123")




// const bcrypt = require('bcryptjs');
// const securedPassword = async (password) => {
//   const passwordHash = await bcrypt.hash(password, 10);
//   console.log(passwordHash)
  
//   const passwordmatch = await bcrypt.compare("Ansari@123", passwordHash);
//   console.log(passwordmatch)
  
// }
//   securedPassword("Ansari@123")

