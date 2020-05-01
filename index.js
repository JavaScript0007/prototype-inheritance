  function User(name, email)  {
      // this key word is out object {}
      this.name = name;
      this.email = email;
  }

  User.prototype.login = function() {
    console.log(`${this.name} just logged in`);
  }

  User.prototype.logout = function() {
    console.log(`${this.name} just logged out`);
  }

function Admin(...args) {
    User.apply(this, args)  
  }

  Admin.prototype = Object.create(User.prototype)

  Admin.prototype.deleteUser = function(user) {
    users = users.filter(u => u.email !== user.email);
  }

  Admin.prototype.addUser = function(name, email) {
    users.push(new User(name, email));

  }
  
  const Vlad = new Admin("Vlad", "americanman");
  const badGuy = new User("Lebeouf", "scammer");
  
  // array of users(our database :)
  let users = [Vlad, badGuy];
  
  console.log(Vlad.login());
  
  Vlad.deleteUser(badGuy);
  Vlad.addUser("Mike", "Dimmit");
  console.log("users", users);