const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      console.log(this.firstName + " " + this.lastName);
    }
  };

  console.log(person);

//   console.log(person.fullName);
  
  