// game resources
// list all assets here
game.resources = [
    /**
     * Map Assets
     */
    // The map tileset - NOTE: Each tile in this tileset is 64 * 64
    {name: "gfxlib_FreeTileset_64",  type:"image", src: "data/img/map/gfxlib_FreeTileset_64.png"},
    // The meta tileset for collision detection
    {name: "metatiles_64",  type:"image", src: "data/img/map/metatiles_64.png"},

    // main player sprite (spritesheet) - each sprite is frame is 64*64 pixels
    {name: "gripe_run_right",  type:"image", src: "data/img/sprite/gripe_run_right.png"},

    // particle textures - IMPORT NEEDED PARTICLES!
    //{name: "particle_smoke",  type:"image", src: "data/img/entity/particle/smoke.png"},
     
    /* 
     * Maps (Well actually, one map now...)
     */
    {name: "emptyland", type: "tmx", src: "data/map/emptyland.tmx"}
 
];