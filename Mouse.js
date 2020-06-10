function Mouse(name) {
    this.name=name;
    this.isdead=false;
}

Mouse.prototype.die=function () {
    this.isdead=true;
}

Mouse.prototype.run=function () {
    console.log('Running');
}

module.exports = Mouse;