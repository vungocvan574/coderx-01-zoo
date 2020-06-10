function Mouse(name) {
    this.name=name;
    this.isdead=false;
}

Mouse.prototype.die=function () {
    this.isdead=true;
}

Mouse.prototype.sleep=function () {
    console.log('Sleeping');
}

module.exports = Mouse;