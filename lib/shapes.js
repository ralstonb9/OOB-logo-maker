class Shape {
    constructor(text, setColor, setShape) {
        this.text = text,
        this.setColor = setColor,
        this.setShape = setShape
    }
}

class Circle extends Shape {
    constructor(text, setColor, setShape) {
        super(text,setColor, setShape)
    }
    render() {
        return `<circle cx="25" cy="75" r="20" fill="${this.setColor}"/>` 
    }
}

class Triangle extends Shape {
    constructor(text, setColor, setShape) {
        super(text, setColor, setShape)
    }
    render() {
        return `<polygon points="5,55 15,75 25,55" fill="${this.setColor}"/>`
    }
}

class Square extends Shape {
    constructor(text, setColor, setShape) {
        super(text, setColor, setShape)
    }
    render() {
        return `<rect x="5" y="75" width="30" height="30" fill="${this.setColor}"/>`
    }
}

module.exports = {Circle, Triangle, Square}