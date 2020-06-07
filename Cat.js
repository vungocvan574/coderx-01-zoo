var Mouse = require('./Mouse');

function Cat() {
    this.stomach = [];
    this.isDead = false;
}

Cat.prototype.eat = function(animal) {
    if (animal instanceof Mouse) {
        this.stomach.push(animal);
        animal.isDead = true;
    }else{
        throw new Error('Cat only eat mouse');
    }
}
module.exports = Cat;