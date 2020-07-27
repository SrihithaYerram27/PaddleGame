var ball,img,paddle;
function preload() {
  /* preload your images here of the ball and the paddle */
  ball_Image = loadImage("ball.png");
  paddle_Image = loadImage("paddle.png");
  
  
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  ball = createSprite(200,200,10,10)
  ball.addImage("soccer_ball",ball_Image)
  
  paddle = createSprite(300,200,10,10);
  paddle.addImage("soccer_paddle",paddle_Image)
  
  
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX = 3;

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges = createEdgeSprites();
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[0]);
  ball.bounceOff(paddle,randomVelocity);

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  paddle.collide(edges[2]);
  paddle.collide(edges[3]);
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */paddle.velocityY = -3;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */paddle.velocityY = 3;
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  //ball.velocityX = random(4,8);
  ball.velocityY = random(-5,5);
  
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

