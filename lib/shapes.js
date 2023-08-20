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
}

class Triangle extends Shape {
    constructor(text, setColor, setShape) {
        super(text, setColor, setShape)
    }
}

class Square extends Shape {
    constructor(text, setColor, setShape) {
        super(text, setColor, setShape)
    }
}