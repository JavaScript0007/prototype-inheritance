class User {
    constructor(name, email) {
      // this key word is out object {}
      this.name = name;
      this.email = email;
    }
    // add methods to prototype of User object
    login() {
      console.log(`${this.name} just logged in`);
    }
  
    logout() {
      console.log(`${this.name} just logged out`);
    }
  }
  
  class Admin extends User {
    deleteUser(user) {
      users = users.filter(u => u.email !== user.email);
    }
    addUser(name, email) {
      users.push(new User(name, email));
    }
  }
  
  const Vlad = new Admin("Vlad", "americanman");
  const badGuy = new User("Lebeouf", "scammer");
  
  // array of users(our database :)
  let users = [Vlad, badGuy];
  
  console.log(Vlad.login());
  
  Vlad.deleteUser(paul);
  Vlad.addUser("Mike", "Dimmit");
  console.log("users", users);