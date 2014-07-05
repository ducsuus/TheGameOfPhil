// game namespace - important stuff here!
var game = {
 
    // A dictonary (object) to store general game data, such as the game score or state
    data : {
        // score
        score : 0
    },
     
    // Called when the page is being loaded
    "onload" : function () {
 
        // Initialize the video, make sure the browser supports HTML 5 canvases
        if (!me.video.init("screen", window.innerWidth, window.innerHeight, true, 'auto')) {
            alert("Your browser does not support HTML5 canvas.");
            return; // return, no point trying to do the below
        }
         
        // add "#debug" to the URL to enable the debug Panel (gives us awesome features to develop with)
        if (document.location.hash === "#debug") {
            window.onReady(function () {
                me.plugin.register.defer(this, debugPanel, "debug");

                // Show hitboxes
                me.debug.renderHitBox = true;
            });
        }
 
        // Once we have loaded, call the loaded function so we can begin with the game
        me.loader.onload = this.loaded.bind(this);
      
        // Load the resources.
        me.loader.preload(game.resources);
 
        // Initialize melonJS and display a loading screen
        me.state.change(me.state.LOADING);
    },
 
 
 
    /* ---
 
   callback when everything is loaded
     
   ---  */
     
	"loaded" : function ()
	{
    console.log("loaded was called");
    // set the "Play/Ingame" Screen Object
    me.state.set(me.state.PLAY, new game.PlayScreen());

    // register our player entity in the object pool
    me.pool.register("mainPlayer", game.PlayerEntity);

    // Register any other entities down here, like we did above

    // enable the keyboard and bind keys to their apropriate functions
    me.input.bindKey(me.input.KEY.UP,  "up");
    me.input.bindKey(me.input.KEY.LEFT,  "left");
    me.input.bindKey(me.input.KEY.RIGHT, "right");
    me.input.bindKey(me.input.KEY.DOWN,  "down");

    // start the game (go away loading screen!)
    me.state.change(me.state.PLAY);

    // Make sure we can see that the game has loaded. If the game hasn't loaded there is normally a problem with loading assets...
    console.log("Finished loading!");
	}
};