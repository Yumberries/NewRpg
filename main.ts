/**
 * Goal - Defeat a boss
 * 
 * Setting - Cave
 * 
 * Genre - rpg / upgrades
 * 
 * Art Style - Dark
 * 
 * Twist - Item Crafting
 * 
 * Bonus - Ghosts
 */
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . f f 3 3 3 f f . . . . . 
    . . . f 3 3 3 3 3 3 3 f . . . . 
    . . f 3 3 3 3 3 3 3 3 3 f . . . 
    . . f 3 3 3 f 3 f 3 3 3 f . . . 
    . f 3 3 3 3 f 3 f 3 3 3 3 f . . 
    . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
    . . f 3 3 3 3 3 3 3 3 3 f . . . 
    . . f 3 3 3 3 3 3 3 3 3 f . . . 
    . . . f 3 3 3 3 3 3 3 f . . . . 
    . . . . f f 3 3 3 f f . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level2`)
scene.setBackgroundColor(12)
