function Cat() {
    this.stomach = [];
    this.isDead = false;
}

Cat.prototype.eat = function(mouse) {
    this.stomach.push(mouse);
    this.isDead = true;
}
module.exports = Cat;