function fall_a_drop(x_coordinate: number) {
    let level = levels[x_coordinate]
    if (level == 1 && led.point(x_coordinate, 0) == false) {
        led.plot(x_coordinate, 0)
        return
    }
    
    let SPEED = randint(50, 150)
    //  disegna il primo led su prima riga
    led.plot(x_coordinate, 0)
    basic.pause(SPEED)
    switch_led_off(x_coordinate, 0)
    for (let y_coordinate = 1; y_coordinate < level; y_coordinate++) {
        led.plot(x_coordinate, y_coordinate)
        basic.pause(SPEED)
        // evita di spegnere l'ultimo led della colonna
        if (y_coordinate < level - 1) {
            switch_led_off(x_coordinate, y_coordinate)
        }
        
    }
    basic.pause(SPEED)
    let new_level = level - 1
    levels[x_coordinate] = new_level
}

function switch_led_off(x: number, y: number) {
    let bright = led.pointBrightness(x, y)
    while (bright > 0) {
        led.unplot(x, y)
        if (bright > 0) {
            bright = bright - 10
        } else {
            bright = 0
        }
        
        led.plotBrightness(x, y, bright)
        pause(10)
    }
}

let SPEED = 500
let levels = [5, 5, 5, 5, 5]
function empty_screen() {
    for (let y = 0; y < 5; y++) {
        for (let x = 0; x < 5; x++) {
            led.unplot(x, y)
            pause(20)
        }
    }
}

function restart_screen() {
    
    pause(1000)
    empty_screen()
    levels = [5, 5, 5, 5, 5]
}

function screen_full(): boolean {
    let x: number;
    
    for (let y = 0; y < 5; y++) {
        for (x = 0; x < 5; x++) {
            if (levels[x] > 1) {
                return false
            }
            
        }
    }
    for (x = 0; x < 5; x++) {
        if (led.point(x, 0) == false) {
            return false
        }
        
    }
    return true
}

basic.forever(function on_forever() {
    let x: number;
    if (screen_full()) {
        restart_screen()
    } else {
        for (let index = 0; index < 6; index++) {
            x = randint(0, 4)
            if (led.point(x, 0) == false) {
                fall_a_drop(x)
            }
            
        }
    }
    
})
