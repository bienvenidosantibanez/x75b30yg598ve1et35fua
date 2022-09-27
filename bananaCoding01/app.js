
// https://www.youtube.com/watch?v=p88rNckccmg

let canvas = document.getElementById('hellocanvas000')

canvas.style.backgroundColor = '#282c34'
canvas.style.margin = '20px'
canvas.style.border = '2px solid yellow'

let windowWidth = window.innerWidth
let windowHeight = window.innerHeight

canvas.width = windowWidth
canvas.height = windowHeight


let ctx = canvas.getContext('2d')


// rectangle 1
ctx.fillStyle = 'red'
ctx.fillRect(10, 10, 100, 100)


// rectangle 2
ctx.fillStyle = 'yellow'
ctx.fillRect(100, 500, 100, 100)


// circle 1
ctx.beginPath()
ctx.strokeStyle = 'green'
ctx.lineWidth = 5
ctx.arc(100, 100, 50, 0, Math.PI * 2, false)
ctx.stroke()
ctx.closePath()


// circle 2
ctx.beginPath()
ctx.strokeStyle = 'yellow'
ctx.lineWidth = 5
ctx.arc(200, 200, 100, 0, Math.PI * 2, false)
ctx.stroke()
ctx.closePath()