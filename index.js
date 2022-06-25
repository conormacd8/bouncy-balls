const c = document.getElementById("canvas").getContext("2d");




function randomColor(){
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}


class Ball {
  constructor(){
    this.color = randomColor()
    this.radius = Math.random()*20 + 14
  }
  render(){
    c.beginPath()
    c.arc(95,50,this.radius,0,2 * Math.PI)
    c.fillStyle = this.color
    c.fill()
  }
}

const ball = new Ball()
ball.render()


