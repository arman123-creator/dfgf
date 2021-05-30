var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var player, form,game;
var player1,player2;
var players;
var player_img;
var ground;
var fruit;
var FoodGroup;
var banana;


function preload(){
  
  
 back_img = loadImage("images/forest.jpg");
 player_img = loadImage("images/sprite_0.png")
bananaImage = loadImage("images/banana.png")
FoodGroup = new Group();


}



function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
 
}


function draw() {
  background(back_img);

  
 

  if(World.frameCount%200===0){
    game.fruits();
 }

  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}