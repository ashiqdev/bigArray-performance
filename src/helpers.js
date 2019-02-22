const faker = require('faker');

let bigArray = [];

for(let i=0; i<=300; i++) {
  let count = 0;
  let randomEmail = faker.internet.email();
  let myObj = {mail: randomEmail, count:0};
  bigArray.push(myObj);
  
}



export default bigArray;