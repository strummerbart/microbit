OLED.init(128, 64)
tinkercademy.crashSensorSetup(DigitalPin.P0)
let previous_crash_sensor_state = ""
basic.forever(function on_forever() {
    
    if (tinkercademy.crashSensor() == true) {
        basic.showIcon(IconNames.Happy)
        if (previous_crash_sensor_state == "Open") {
            OLED.clear()
        }
        
        if (previous_crash_sensor_state == "" || previous_crash_sensor_state == "Open") {
            OLED.writeStringNewLine("Tesoro al sicuro")
        }
        
        // led verde
        pins.digitalWritePin(DigitalPin.P8, 1)
        // led rosso
        pins.digitalWritePin(DigitalPin.P1, 0)
        previous_crash_sensor_state = "Closed"
    } else {
        basic.showIcon(IconNames.Sad)
        if (previous_crash_sensor_state == "Closed") {
            OLED.clear()
        }
        
        if (previous_crash_sensor_state == "" || previous_crash_sensor_state == "Closed") {
            OLED.writeStringNewLine("Tesoro RUBATO!")
        }
        
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P1, 0)
        previous_crash_sensor_state = "Open"
    }
    
})
