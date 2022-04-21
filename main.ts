let SPEED = 500
let level = 5
function switch_led_off(x: number, y: number) {
    let bright = led.pointBrightness(x, y)
    while (bright > 0) {
        led.unplot(x, y)
        bright -= 10
        led.plotBrightness(x, y, bright)
        pause(10)
    }
}

function fall_a_drop(x_coordinate: number) {
    
    
    SPEED = randint(50, 150)
    led.plot(x_coordinate, 0)
    basic.pause(SPEED)
    switch_led_off(x_coordinate, 0)
    for (let y_coordinate = 1; y_coordinate < 5; y_coordinate++) {
        led.plot(x_coordinate, y_coordinate)
        basic.pause(SPEED)
        switch_led_off(x_coordinate, y_coordinate)
    }
    basic.pause(SPEED)
}

basic.forever(function on_forever() {
    let x1: number;
    for (let index = 0; index < 4; index++) {
        x1 = randint(0, 4)
        if (led.point(x1, 0) == false) {
            fall_a_drop(x1)
        }
        
    }
})
