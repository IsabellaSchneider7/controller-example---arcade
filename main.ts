tiles.setTilemap(tiles.createTilemap(hex`1000100007070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707010303030303030303030303030303050204040404040404040404040404040607070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath7,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.builtin.forestTiles0], TileScale.Sixteen))
let mySprite = sprites.create(img`
    . . . . . . . d d d d d . . . . 
    . . . . . . d 1 1 1 1 1 d . . . 
    . . . . . d d 1 f 1 1 1 d f . . 
    . . . . . d 1 f f 1 d f d c . . 
    . . . . . d 1 f c d d f f d . . 
    . . . . . d 1 1 1 f f f f f f c 
    . . . . . . d 1 f f f f f f c . 
    f f f f . . d 1 1 1 1 1 d . . . 
    f 1 1 1 d d 1 1 f 1 1 f d . . . 
    f f 1 f f f d 1 f 1 1 f 1 d . . 
    f 1 c f f f f 1 f f f f 1 1 d . 
    f 1 1 c 1 f f d 1 1 1 1 1 1 d . 
    f c 1 1 c c d 1 f 1 1 1 f 1 d . 
    . f 1 1 1 1 1 1 f 1 f 1 f 1 d . 
    . . f c 1 1 1 1 f f 1 f f d . . 
    . . . c c c c c c c c d d . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
mySprite.setPosition(8, 128)
mySprite.setFlag(SpriteFlag.Ghost, false)
mySprite.setFlag(SpriteFlag.ShowPhysics, true)
controller.moveSprite(mySprite, 100, 100)
