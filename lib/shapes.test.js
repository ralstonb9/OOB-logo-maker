const { Circle, Triangle, Square } = require('./shapes.js');

test('Circle Test'), () => {
    const shape = new Circle();
    shape.setColor('purple')
    expect(shape.render()).toEqual('<circle cx="150" cy="125" r="70" fill="purple" />');
}

test('Triangle Test'), () => {
    const shape = new Triangle();
    shape.setColor('black');
    expect(shape.render()).toEqual('<polygon points="50,180 250,180 150,40" fill="black"/>');
}  

test('Square Test'), () => {
    const shape = new Square();
    shape.setColor('pink');
    expect(shape.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="pink"/>')
}