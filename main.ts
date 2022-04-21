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
    let light_level = input.lightLevel()
    if (light_level == 0) {
        basic.showNumber(0)
        serial.writeLine("Buio")
    } else {
        basic.showNumber(light_level)
        serial.writeLine("Luce")
    }
    
    plot_draw()
})
