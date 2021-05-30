class Form{
    constructor(){
        this.input = createInput("NAME")
        this.greeting = createElement('h3')
        this.title = createElement('h2')
        this.button = createButton('Play');
    }

hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
}

display(){
    this.title.html("[MONKEY RACER]")
    this.title.position(350,50);
    this.title.style('font-size', '70px');
    this.title.style('color', 'red');

    this.input.position(525,400);
        this.input.style('width', '250px');
        this.input.style('height', '25px');
        this.input.style('background', 'pink');

        this.button.position(550,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'yellow');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("HEY ! " + player.name)
            this.greeting.position(displayWidth/2 - 70, displayHeight/4);
            this.greeting.style('color','yellow');
            this.greeting.style('font-size', '100px');
          
        });
}



}