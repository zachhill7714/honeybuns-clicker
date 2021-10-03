var game = {
    buns: 0.0,
    multiplier: 1.0,
    buildings: {
        autoclicker: {
            amount: 0,
            buns: 0.1,
            cost: 15,
            multiplier: 1.0
        },
        children: {
            amount: 0,
            buns: 0.8,
            cost: 80,
            multiplier: 1.0
        },
        dude: {
            amount: 0,
            buns: 6,
            cost: 700,
            multiplier: 1.0
        },
        feet: {
            amount: 0,
            buns: 20,
            cost: 4300,
            multiplier: 1.0
        },
        cookie: {
            amount: 0,
            buns: 104,
            cost: 51000,
            multiplier: 1.0
        },
        shinobi: {
            amount: 0,
            buns: 563,
            cost: 640000,
            multiplier: 1.0
        },
        salveritie: {
            amount: 0,
            buns: 2925,
            cost: 7200000,
            multiplier: 1.0
        }
    },
    fps: 15
}

function buyBuilding(building) {
    var cps = 0
    for ([key, value] of Object.entries(game.buildings)) {
        if(key == building && game.buns >= value["cost"]) {
            value["amount"] += 1
            game.buns -= value["cost"]
            value["cost"] *= 1.15
            document.getElementById("buns").innerHTML = game.buns.toFixed(1) + " honeybuns baked"
            document.getElementById(key + "s").innerHTML = value["amount"] + " " + key + ", cost: " + value["cost"].toFixed(1)
        }
        cps += value["amount"] * value["buns"] * value["multiplier"]
    }
    document.getElementById("cps").innerHTML = cps.toFixed(1) + " cps"
}

var thing = document.getElementById("buns")

function glick() {
    game.buns += game.multiplier
    thing = document.getElementById("buns")
    thing.innerHTML = game.buns.toFixed(1) + " honeybuns baked";
}

function gameLoop() {
    delta = 0
    am = 0
    bu = 0
    mu = 0
    for ([key, value] of Object.entries(game.buildings)) {
        for ([k, v] of Object.entries(game.buildings[key])) {
            if (k == "amount") {
                am = v
            }
            if (k == "buns") {
                bu = v
            }
            if (k == "multiplier") {
                mu = v
            }
        }
        delta += (am * bu * mu)
    }
    game.buns += (1. / game.fps) * delta
    document.getElementById("buns").innerHTML = game.buns.toFixed(1) + " honeybuns baked"
    document.getElementById("cps").innerHTML = cps.toFixed(1) + " cps"
    for ([key, value] of Object.entries(game.buildings)) {
        document.getElementById(key + "s").innerHTML = value["amount"] + " " + key + ", cost: " + value["cost"].toFixed(1)
    }
}

setInterval(gameLoop, Math.round(1000 / game.fps))

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("honeybunsClickerSave", JSON.stringify(game))
  }, 30000)

var savegame = JSON.parse(localStorage.getItem("honeybunsClickerSave"))
if (savegame !== null) {
  game = savegame
}