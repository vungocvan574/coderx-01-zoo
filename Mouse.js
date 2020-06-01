function Mouse(name) {
    this.name = name;
    this.dead = false;
}

Mouse.prototype.die(function() {
    this.prototype = true;
})
module.exports = Mouse;