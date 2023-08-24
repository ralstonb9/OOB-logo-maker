class Shape {
    constructor(shapeColor) {
        this.shapeColor = shapeColor
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="125" r="70" fill="${this.shapeColor}"/>` 
    }
}

class Triangle extends Shape {
   
    render() {
        return `<polygon points="50,180 250,180 150,40" fill="${this.shapeColor}"/>`
    }
}

class Square extends Shape {

    render() {
        return `<rect x="100" y="50" width="100" height="100" fill="${this.shapeColor}"/>`
    }
}

module.exports = {Circle, Triangle, Square}