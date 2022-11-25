
import Person from "./Person.js";
console.log(Person);    
    
function getPersonData(){
    
  let firstName = document.getElementById('firstName').value;
  let lastName = document.getElementById('lastName').value;
  let age = document.getElementById('age').value;
  let h3 = document.getElementsByTagName('h3')
  const newPerson = new Person(firstName,lastName,age);
  h3[0].innerText = `Hello, ${newPerson.firstName} ${newPerson.lastName}! You are ${age} years old.`;
  console.log(`Hello, ${newPerson.firstName} ${newPerson.lastName}! You are ${age} years old.
  `);
}
let btn= document.getElementById('btn')
  btn.onclick=getPersonData;



