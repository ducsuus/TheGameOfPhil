/*------------------- 
a player entity
-------------------------------- */
game.PlayerEntity = me.ObjectEntity.extend({
 
    /* -----
 
    constructor
 
    ------ */
 
    init: function(x, y, settings) {
        // call the constructor
        this.parent(x, y, settings);

        // This variable allows us to set a type for the player so we can compare it later.
        // This is useful for collisions, we can check to see if an NPC has collided with the player.
        this.type = "player"
 
        // set the default horizontal & vertical speed (accel vector)
        this.setVelocity(3, 3);

        // ptthh. Who needs gravity?
        this.gravity = 0

        this.collidable = true;
 
        // set the display to follow our position on both axis
        me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
    },
 
    /* -----
 
    update the player pos
 
    ------ */
    update: function(dt) {

        // check & update player movement
        // Must go before me.game.world.collide(this)!
        this.updateMovement();
 

        // Check for collision
        // NOTE THIS LINE IS VERY VERY VERY IMPORTANT IF YOU WANT TO HAVE ANY KIND OF OBJECT WHICH WILL BE ACTIVATED ON COLLISION FOR EXAMPLE A DOOR!
        // This isn't something I could find online and the tutorial does NOT make this clear!
        var res = me.game.world.collide(this);

        if (res)
        {
            // There's been a collision between this and another object...

            // Unless otherwise proved, assume there has not been a collision between another object (create this variable inside the if res for efficiency)
            var collided = false;
            

            // Check to see if the collision was a NPC (with a value of "NPC")
            //TODO: Convert this bit from a static set of strings to a list

            // If the object collided with was a NPC
            if(res.obj.type === "NPC"){

                // Make sure we know not to allow any more movement below
                //collided = true;

                // Make sure the player is not moving
                //this.vel.x = 0;
                //this.vel.y = 0;

                // Checks to see what side of the NPC the collision was on, then checks to see if the key to go in that direction is pressed down (IE on top
                // of NPC and holding down key) - if the player is not holding the down key push them up
                /*if(res.x > 0){
                    if(!me.input.isKeyPressed("right")){
                        this.vel.x = -1;
                    }
                } else if(res.x < 0){
                    if(!me.input.isKeyPressed("left")){
                        this.vel.x = 1;
                    }
                } else if(res.y > 0){
                    if(!me.input.isKeyPressed("down")){
                        this.vel.y = -1;
                    }
                } else if(res.y < 0){
                    if(!me.input.isKeyPressed("up")){
                        this.vel.y = 1;
                    }
                } else{
                    // Say what, impossible collision? Or somebody was teleporting?
                    // Let's hope this line never has to be called, otherwise we might have some serious efficiency issues when it comes to collision checking :(
                    console.log("Well this is embarising, you collided *inside* the NPC...")
                }*/
            }

        }

        // If the player is not collided (set above)
        if(!collided){

            // Player movement and looks...
            if (me.input.isKeyPressed('left')) {
                // flip the sprite on horizontal axis
                this.flipX(true);
                // update the entity velocity
                this.vel.x -= this.accel.x * me.timer.tick;
            } else if (me.input.isKeyPressed('right')) {
                // unflip the sprite
                this.flipX(false);
                // update the entity velocity
                this.vel.x += this.accel.x * me.timer.tick;
            } else {
                this.vel.x = 0;
            }
     
            if(me.input.isKeyPressed('up')){
                this.vel.y -= this.accel.y * me.timer.tick;
            } else if (me.input.isKeyPressed('down')){
                this.vel.y += this.accel.y * me.timer.tick;
            } else {
                this.vel.y = 0;
            }
        }
 

        // update animation if necessary
        if (this.vel.x!=0 || this.vel.y!=0) {
            // update object animation
            this.parent(dt);
            return true;
        }
         
        // else inform the engine we did not perform
        // any update (e.g. position, animation)
        return false;
    }
 
});