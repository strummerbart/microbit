function plot_draw() {
    led.plotBrightness(0, 0, new_brigth)
    led.plotBrightness(4, 0, new_brigth)
    led.plotBrightness(1, 1, new_brigth)
    led.plotBrightness(3, 1, new_brigth)
    led.plotBrightness(2, 2, new_brigth)
    led.plotBrightness(1, 3, new_brigth)
    led.plotBrightness(0, 4, new_brigth)
    led.plotBrightness(3, 3, new_brigth)
    led.plotBrightness(4, 4, new_brigth)
}

let RATE = 2
let MAX_BRIGTH = 255
let MIN_BRIGTH = 0
let action = "decrease"
let new_brigth = MAX_BRIGTH
// ON START
plot_draw()
basic.pause(2000)
basic.forever(function on_forever() {
    
    
    let led_brigthness = led.pointBrightness(2, 2)
    if (action == "decrease") {
        new_brigth = led_brigthness - RATE
        if (new_brigth <= MIN_BRIGTH) {
            new_brigth = MIN_BRIGTH
            action = "increase"
        }
        
    } else if (action == "increase") {
        new_brigth = led_brigthness + RATE
        if (new_brigth >= MAX_BRIGTH) {
            new_brigth = MAX_BRIGTH
            action = "decrease"
        }
        
    }
    
    plot_draw()
})
