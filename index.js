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

let ballsArray = []

for (let i = 0; i < 50; i++) {
  let radius = (Math.random()*20)+30
  let x = Math.random() * (canvas.width - radius *2) + radius
  let y = Math.random() * (canvas.height - radius *2) + radius
  let dx = (Math.random()-0.5)*10
  let dy = (Math.random()-0.5)*10
  let alpha = (Math.random())
  let color = `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${alpha})`
  ballsArray.push(new Ball(x,y,dx,dy,radius,color))
}



function animate(){
  requestAnimationFrame(animate)
  c.clearRect(0,0,innerWidth,innerHeight)
  ballsArray.forEach(ball => {
    ball.update()
  })
}

animate()