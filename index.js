var Dog = require('./Dog');
var Cat = require('./Cat');

var dog = new Dog('Tyke')
var cat = new Cat('Tom');

dog.eat(cat);
console.log(dog);