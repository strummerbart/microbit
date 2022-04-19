basic.forever(function on_forever() {
    let light_level = input.lightLevel()
    if (light_level == 0) {
        serial.writeLine("Buio")
    } else {
        serial.writeLine("Luce")
    }
    
})
