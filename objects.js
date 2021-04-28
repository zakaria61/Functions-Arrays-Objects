// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1, mmelloy0@psu.edu, Mitzi, F
// 2, kdiben1@tinypic.com, Kennan, M
// 3, kmummery2@wikimedia.org, Keven, M
// 4, gmartinson3@illinois.edu, Gannie, M
// 5, adaine5@samsung.com, Antonietta, F

// Example format of an intern object: 1, examples@you.edu, Example, F
const example = {
    id: 0,
    name: "Example",
    email: "examples@you.edu",
    gender: "F",
  }
  
  // Write your intern objects here:
  
  //1
const mitzi = {
  Id: 1,
  name: "mitzi",
  email: "mmelloy0@PushSubscription.edu",
  gender: "f",
}

//2
 const Kennan = { 
   id: 2,
   name: "kennan",
   email: "kdiben1@tinypic.com",
   gender: "m",
   profile: function() {
    return `Hello, my name is ${this.name},`
  }
 }


 //3
 const Keven = { 
  id: 3,
  name: "Keven",
  email:  "kmummery2@wikimedia.org",
  gender: "m",

}

//4
const Gannie = {
  Id: 4,
  name: "Gannie",
  email: "gmartinson3@illinois.edu",
  gender: "m",
}


//5
const Antonietta = {
  Id: 5,
  name: "Antonietta",
  email: "adaine5@samsung.com",
  gender: "f",
  prof: function multiply(a,b) {
    return a * b
  }
}



  // ==== Challenge 2: Reading Object Data ==== 
  // Once your objects are created, log out the following requests from HR into the console:
  
  // Mitzi's name
  console.log(mitzi.name)
  // Kennan's ID
  console.log(Kennan.id)
  // Keven's email
  console.log(Kennan.email)
  // Gannie's name
  console.log(Gannie.name)
  // Antonietta's Gender
  console.log(Antonietta.gender)
  
  // ==== Challenge 3: Object Methods ==== 
  // Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
  // console.log(kennan.speak());
  console.log(Kennan.profile())
  // Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
  //console.log(antonietta.multiplyNums(3,4));
  console.log(Antonietta.prof(4, 3))
  // === Great work! === Head over to the the arrays.js. You may come back and attempt the Stretch Challenge once you have completed the challenges in arrays.js and function-conversion.js.
  
  // ==== Stretch Challenge: Nested Objects and the this keyword ==== 
  
  // 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
  // 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
  // 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
  // 4. Give each of the objects the ability to speak their names using the this keyword.
  
  const susan = {
    name: "susan",
       age:    70,
       ayan: function() {
      return `Hello, my name is ${this.name}, and my age is ${this.age},`
    },
    child: {
      name: "george",
       age: 50,
       aaj:function() {
        return `Hello, my name is ${this.name}, and my age is ${this.age},`
      },
   },
    grandchild: {
        name: "sam",
        age:   30,
      aj:function() {
        return `Hello, my name is ${this.name}, and my age is ${this.age},`
      },
    },
    
  } 

  // Log the parent object's name
  console.log(susan.name)
  // Log the child's age
  console.log(susan.child.age)
  // Log the name and age of the grandchild
  console.log(susan.grandchild.name)
  console.log(susan.grandchild.age)


  // Have the parent speak
  console.log(susan.ayan())

  // Have the child speak
  console.log(susan.child.aaj())
  // Have the grandchild speak
  console.log(susan.grandchild.aj())