const canvas = document.querySelector('canvas')
const c = canvas.getContext("2d");

canvas.width = window.innerWidth
canvas.height = window.innerHeight
class Ball {
  constructor(x,y,dx,dy,radius,color){
    this.x = x
    this.dx = dx
    this.y = y
    this.dy = dy
    this.radius = radius
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
    this.x += this.dx
    this.y += this.dy
    
    this.draw()
  }
}

let x = 100
let y = 100
let dx = 5
let dy = 5
let radius = 30
let color = 'red'
let ball = new Ball(x,y,dx,dy,radius,color)






function animate(){
  requestAnimationFrame(animate)
  c.clearRect(0,0,innerWidth,innerHeight)
  ball.update()
}

animate()