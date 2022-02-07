let salon={
    name:"The Fashion Pet",
    address:{
      street:"University Ave.",
      number:"262-K",
      ZIPcode:"22414",
    },
    hours:{
      open:"9:00 am",
      close:"5:00 pm"
    },
    pets:[
      {
        name:"Scooby",
        age:50,
        gender:"Male",
        breed:"Dane",
        service:"Grooming",
        owner:"Shaggy",
        phone:"555-55-5555"
      },
      {
        name:"Dooby",
        age:40,
        gender:"Female",
        breed:"Dane",
        service:"Grooming",
        owner:"Shaggy",
        phone:"555-55-5555"
      },
      {
        name:"Doo",
        age:30,
        gender:"Male",
        breed:"Dane",
        service:"Grooming",
        owner:"Shaggy",
        phone:"555-55-5555"
      }
    ]
}
console.log(salon.pets);

function displayPetsNames(){
  for (let i = 0; i < salon.pets.length; i++){
    console.log(salon.pets[i].name);
  }
}
displayPetsNames();

alert(salon.pets.length);

//create the constructor
/*function Pet(name,age,gender){
  this.name=name;
  this.age=age;
  this.gender=gender;
}

//create three pets using the constructor

let bruno = new Pet("Bruno",30,"male");
salon.pets.push(bruno); // push the element into the array
//console.log(petA);

//getting the inputs from the html
let petName = document.getElementById("txtName");
let petAge = document.getElementById("txtAge");
let petGender = document.getElementById("txtGender");

function register(){
  console.log("Register");
  //create an obj
  let thePet = new Pet(petName.value,petAge.value,petGender.value);
  console.log(thePet);
  //push the obj nto the array
  salon.pets.push(thePet);
  //display the array
  console.log(salon.pets);
  //alert
}*/
