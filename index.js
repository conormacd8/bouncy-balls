const canvas = document.querySelector('canvas')
const c = canvas.getContext("2d");

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const mouse = {
  x:undefined,
  y:undefined
}

window.addEventListener('resize',function(){
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  init()
})

window.addEventListener('mousemove', function(e){
  mouse.x = e.clientX
  mouse.y = e.clientY
})

let maxRadius = 60

class Ball {
  constructor(x,y,dx,dy,radius,color){
    this.x = x
    this.dx = dx
    this.y = y
    this.dy = dy
    this.radius = radius
    this.minRadius = radius
    this.color = color
  }
  draw(){
    c.beginPath()
    c.arc(this.x,this.y,this.radius,0,2 * Math.PI)
    c.fillStyle = this.color
    c.fill()
  }
  update(){
    if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0){
      this.dx = -this.dx
    }
    if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0){
      this.dy = -this.dy
    }
    else{
      this.dy += .2
    }
    this.x += this.dx
    this.y += this.dy
    this.draw()


    if (mouse.x - this.x < 70 && mouse.x - this.x > -70 && mouse.y - this.y < 70 && mouse.y - this.y > -70){
      if (this.radius < maxRadius){
        this.radius += 3
      }
    }
    else if (this.radius > this.minRadius){
      this.radius -= 1
    }
  }
}

let ballsArray = []



function init(){
ballsArray = []
for (let i = 0; i < 80; i++) {
  let radius = (Math.random()*20)+10
  let x = Math.random() * (canvas.width - radius *2) + radius
  let y = Math.random() * (canvas.height - radius *2) + radius
  let dx = (Math.random()-0.5)*3
  let dy = (Math.random()-0.5)*3
  let alpha = Math.ceil(Math.random()*10)/10
  console.log(alpha)
  let color = `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${alpha})`
  ballsArray.push(new Ball(x,y,dx,dy,radius,color))
}
}

function animate(){
  requestAnimationFrame(animate)
  c.clearRect(0,0,innerWidth,innerHeight)
  ballsArray.forEach(ball => {
    ball.update()
  })
}

animate()
init()