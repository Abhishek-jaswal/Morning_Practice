const array = [{
    id:1,
    nam:"abhishek",
    age:"27"
},{
    id:2,
    nam:"tamanna",
    age:"21"
},{
    id:3,
    nam:"bhanot",
    age:"25"
}];
// function check(namee){
// const user = array.find(person => person.nam=== namee);
    
// if (user) {
//     console.log(`Details: ID: ${user.id}, Name: ${user.nam}, Age: ${user.age}`);
// } else {
//     console.log("User not found.");
// }
// }

// check("tamanna");

 array.map(person => {console.log(`Details: ID: ${person.id}, Name: ${person.nam}, Age: ${person.age}`);
  
     
    });
    
