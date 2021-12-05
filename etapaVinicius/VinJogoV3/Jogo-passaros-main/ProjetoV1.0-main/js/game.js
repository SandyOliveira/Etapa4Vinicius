class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        console.log("dentro do ifgameState")
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
          console.log("dentro do if de existencia count")
        } else {
          playerCount = 0;
        }
        form = new Form()
        form.display(playerCount);
      }
  
      bird = new Bird(200,750);
      slingshot = new SlingShot(bird.body,{x:200, y:750});
      birds = [bird];
     

    }
  
    play(){
      form.hide();
  
      Player.getPlayerInfo();
      player.getBirdsAtEnd();
  
      if(allPlayers !== undefined){
        
        //index of the array
        
  
        //x and y position of the cars
        var x = 175;
        var y;      
      
      }
      
     

  
     
    }


    end() {
      var index = 0;
      var display_position = 130;
        for(var plr in allPlayers){
          //add 1 to the index for every loop
         // index = index + 1 ;
          textSize(70);
          text(allPlayers[plr].name + " ganhouu "+ "sua pontuação foi" + score , 120,display_position)
        }
      
      
    }
  }
  function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
  }
  
  
  function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
  }
  
  function keyPressed(){
    if(keyCode === 32 && bird.body.speed < 1){
       bird.trajectory = [];
       Matter.Body.setPosition(bird.body,{x:200, y:50});
       slingshot.attach(bird.body);
    }
  }
  