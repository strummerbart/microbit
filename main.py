OLED.init(128, 64)
tinkercademy.crash_sensor_setup(DigitalPin.P0)
previous_crash_sensor_state = ""
def on_forever():
    global previous_crash_sensor_state

    if tinkercademy.crash_sensor() == True:
        basic.show_icon(IconNames.HAPPY)
        if previous_crash_sensor_state == "Open":
            OLED.clear()
        
        if (previous_crash_sensor_state == "" or previous_crash_sensor_state == "Open"):
            OLED.write_string_new_line("Tesoro al sicuro")
        #led verde
        pins.digital_write_pin(DigitalPin.P8, 1)
        #led rosso
        pins.digital_write_pin(DigitalPin.P1, 0)
        previous_crash_sensor_state = "Closed"
    else:
        basic.show_icon(IconNames.SAD)
        if previous_crash_sensor_state == "Closed":
            OLED.clear()
        if (previous_crash_sensor_state == "" or previous_crash_sensor_state == "Closed"):
            OLED.write_string_new_line("Tesoro RUBATO!")
        pins.digital_write_pin(DigitalPin.P8, 0)
        pins.digital_write_pin(DigitalPin.P1, 1)
        basic.pause(100)
        pins.digital_write_pin(DigitalPin.P1, 0)
        previous_crash_sensor_state = "Open"

basic.forever(on_forever)

