var game = {
    buns: 0.0,
    multiplier: 1.0,
    buildings: {
        autoclicker: {
            amount: 0,
            buns: 0.1,
            cost: 10,
            multiplier: 1.0
        },
        children: {
            amount: 0,
            buns: 0.8,
            cost: 50,
            multiplier: 1.0
        },
        dude: {
            amount: 0,
            buns: 6,
            cost: 600,
            multiplier: 1.0
        },
        feet: {
            amount: 0,
            buns: 20,
            cost: 4000,
            multiplier: 1.0
        },
        cookie: {
            amount: 0,
            buns: 104,
            cost: 44000,
            multiplier: 1.0
        },
        shinobi: {
            amount: 0,
            buns: 563,
            cost: 500000,
            multiplier: 1.0
        },
        salveritie: {
            amount: 0,
            buns: 2925,
            cost: 6500000,
            multiplier: 1.0
        }
    },
    fps: 30
}

function click() {
    game.buns += (game.multiplier)
}

function gameLoop() {
    delta = 0
    for (i=0;i<Object.keys(game.buildings).length;i++) {
        delta += game.buildings[i].buns * game.buildings[i].multiplier
    }
    game.buns += (1. / game.fps) * delta
    update()
}

function loop() {
    setTimeout(gameLoop(), (1000 / game.fps))
}

function update() {
    document.getElementById("buns").innerHTML = game.buns + " honeybuns"
}

loop()