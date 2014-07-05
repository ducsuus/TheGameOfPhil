// The playscreen - how everything looks :)

game.PlayScreen = me.ScreenObject.extend({
    
    // In short, when the game starts
    onResetEvent: function() {  
     
        // load a level
        me.levelDirector.loadLevel("emptyland");
         
    }
});