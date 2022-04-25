// EASY: Write a function that would allow you to do this:
// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running"
// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"

function exercise(activity) {
  function print() {
    return "Today's exercise: " + activity;
  }
  return print;
}

var run = exercise("running");

console.log(run()); //prints "Today's exercise: running"

var swim = exercise("swimming");

console.log(swim()); //prints "Today's exercise: swimming"

// MEDIUM: Write a function that would allow you to do this:
// var sharePizza = cutPizzaSlices(8);
// console.log(sharePizza(2));
// // prints "Each person gets 4.00 slices of pizza"
// console.log(sharePizza(3));
// // prints "Each person gets 2.67 slices of pizza"

function cutPizzaSlices(slices) {
  function cutting(people) {
    return "Each person gets " + slices / people + " slices of pizza.";
  }
  return cutting;
}

var sharePizza = cutPizzaSlices(8);

console.log(sharePizza(2)); // prints "Each person gets 4.00 slices of pizza"

console.log(sharePizza(3)); // prints "Each person gets 2.67 slices of pizza"

// HARD: Data security exercise. Inside of a closure, create an object called pii (Personally Identifiable
// Information)that cannot be accessed directly. The object should have at least two properties: name and
// ssn. Only the name property should be accessible, and it should be called through a public function.
// The ssn property should not be accessible at all.
// Creating private objects and private properties helps you control who has access to what data and
// helps you prevent people who shouldn't see important info like social security numbers from getting
// access to the data.
// You can use 'getName' or other get methods to access data that people might need. For example,
// people addressing a package or email may need a customer's name, but they definitely shouldn't have
// access to their ssn.

function createUser(name, ssn) {
  let pii = {
    name: name,
    ssn: ssn,
  };
  function getInfo() {
    return "This person's name is " + pii.name + ".";
  }
  return getInfo();
}

var input = createUser("John Doe", 123 - 45 - 6789);

console.log(input);
// VERY HARD: Object prototype chain and prototypal inheritance exercise.
// 1. Create a Person constructor that has three properties: name, job, and age.
// 2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is
// fun! - said no one ever".
// 3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad
// is a back-end developer". 
// See next page…
// 4. Create a Programmer constructor that inherits all the members from Person with an additional
// 'languages' property that is passed in and a busy property that is NOT passed in and is set to
// true by default.
// 5. Give the Programmer a 'completeTask' method that updates the busy property on that
// programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates the
// busy property on that programmer to be true.
// 6. Give the Programmer an 'offerNewTask' method that console logs one thing if the
// programmer is busy and another if the programmer is not, e.g. should initially log out "Mark can't
// accept any new tasks right now." and "Mark would love to take on a new responsibility." if the
// programmer is not busy.
// 7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages
// to the programmer and list off all languages the programmer knows.
// 8. Test it out - can you create different programmers and run all the methods on them? Does
// each programmer maintain their own properties properly and independently of the other
// programmers?
// Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add on new methods or
// properties to incorporate the syntax.
// function Person(name, job, age) { }
// function Programmer(name, job, age, languages) { }

function person(name, job, age) {
  this.name = name;
  this.job = job;
  this.age = age;

  this.exercise = console.log("Running is fun! - said no one ever");

  this.fetchJob = console.log("This person " + this.name + " is a " + this.job + " and is " + this.age);
}
function programmer(name, age, job, languages) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.languages = languages;
  this.busy = true;

  this.completeTask = function () {
    this.busy = false;
  };
  this.acceptNewTask = function () {
    this.busy = true;
  };
  this.offerNewTask = function () {
    if (this.busy === true) {
      console.log("Sorry, " + this.person + " is busy...");
    } else {
      console.log(this.name + " would gladly accept new responsibilities.");
    }
  };
  var arr = [];

  this.learnLanguage = function (newLanguage) {
    arr.push(newLanguage);
  };
  this.listLanguages = function () {
    console.log(arr);
  };
}

var person1 = new person("Brandon", "Engineer", 20);
var person1P = new person("Carter", "Jr Engineer", 21);
// console.log(person1);
//  console.log(person2);
