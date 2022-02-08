//object literal
let lion = {
  name:"Simba",
  kingOfJungle:true,
  food:"Carnivore"
}
let lion2 = {
  name:"Nala",
  kingOfJungle:false,
  food:"Carvivore"
}
  
//object constructor
function Animal(name,kingOfJungle,food){
  this.name=name;
  this.kingOfJungle=kingOfJungle;
  this.food=food;
  this.hunger=10;
  this.feed=function(){
    console.log("Feeding...");
    this.hunger=this.hunger-2;
    
  }
}

//create objects
/*let lionC = new Animal("Simba",true,"Carnivore");
console.log(lionC.feed);
let zebraC = new Animal("Stipes",false,"Herbavore");
console.log(zebraC);

//create a constructor
//school,*student,instructor,assignment,courses,exam

function Student(aaFirstName,aaLastName,gender,age){
  this.aaFirstName=aaFirstName;
  this.aaLastName=aaLastName;
  this.gender=gender;
  this.age=age;
}

let studentA = new Student("Adam","Anderson","Male",29);
console.log(studentA);
let studentB = new Student("Bella","Brown","Female",33);
console.log(studentB);*/
