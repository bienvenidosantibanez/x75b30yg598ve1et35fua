
// https://www.youtube.com/watch?v=EutvXK3eh0I

let canvas = document.getElementById('hellocanvas000')

canvas.style.backgroundColor = '#282c34'
// canvas.style.margin = '20px'
canvas.style.border = '2px solid yellow'

let windowWidth = window.innerWidth
let windowHeight = window.innerHeight

// canvas.width = windowWidth - 50
canvas.height = windowHeight - 50
canvas.width = windowWidth
// canvas.height = windowHeight


let ctx = canvas.getContext('2d')


class Circle {
    constructor(Xpos, Ypos, Radius, Color, LineWidth = 1) {
        this.xpos = Xpos
        this.ypos = Ypos
        this.radius = Radius
        this.color = Color
        this.lineWidth = LineWidth
    }

    draw(context) {
        context.beginPath()
        context.strokeStyle = this.color
        context.lineWidth = this.lineWidth
        context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false)
        context.stroke()
        context.closePath()
    }
}

// let circle01 = new Circle(100, 100, 50, 'red')
// circle01.draw(ctx)


// let circle02 = new Circle(200, 200, 50, 'yellow', 5)
// circle02.draw(ctx)



// generating many random circle locations dynamically

let allCircles = []
let circlesCount = 10

let createCircle = function(circle) {
    circle.draw(ctx)
}

// https://www.w3schools.com/colors/colors_names.asp
const htmlColors = [
    'tomato',
    'orange',
    'DodgerBlue',
    'MediumSeaGreen',
    'SlateBlue',
    'AliceBlue',
    'Aquamarine'
]

let circleSize = [50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

for (let item = 0; item < circlesCount; item++) {
    let randomXPos = Math.floor(Math.random() * windowWidth)
    let randomYPos = Math.floor(Math.random() * windowHeight)
    let circle = new Circle(randomXPos, randomYPos, getRandomItem(circleSize), getRandomItem(htmlColors))
    allCircles.push(circle)
    createCircle(allCircles[item])
}

console.log(allCircles)