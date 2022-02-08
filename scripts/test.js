let names = ["Victoria","Mark","Mike","Phil"]
let mixed = [99,"Derek",true,null,45,"Hello"];

function displayNames(){
    for(let i=0;i<names.length;i++){
    console.log(names[i]);
  }
}
//displayNames();
//console.log(names[0]) - repeated for each after - brute forced solution

let ages = [22,33,44,55,66,77];
//travel the ages array

function displayAges(){
  for(let i=0;i<ages.length;i++){
    console.log(ages[i]);
  }
}
//displayAges();

//object literal

let student={
  name:"Joey",
  age:80,
  student:true,
  grade:"A-",
  music:["Maynard Ferguson","Coldplay","Boston"],
  address:{
    city:"San Diego",
    country:"USA"
  }
}
console.log(student);//all info
console.log(student.name);//Joey
console.log(student["student"]);//true
console.log(student.address.country);
console.log(student.music[0]);
console.log(student["music"][0]);//same as above

let students=[//array w/objects inside
  {//object literal
    name:"Guillermo",
    age:24,
    activeStudent:true,
  },
  {//object literal
    name:"Arturo",
    age:23,
    activeStudent:true
  },
  {//object literal
    name:"Mark",
    age:30,
    activeStudent:false
  }
]

console.log(students[2]);



