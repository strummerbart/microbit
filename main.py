

servos.P2.set_range(0, 180)
servos.P1.set_range(0, 180)
servos.P0.set_range(0, 180)

def on_forever():
    basic.show_icon(IconNames.HAPPY)
    
basic.forever(on_forever)

def on_button_pressed_a():
    servos.P2.set_angle(90)
    servos.P1.set_angle(180)
    servos.P0.set_angle(90)
    pins.servo_write_pin(AnalogPin.P9, 90)
    pins.servo_write_pin(AnalogPin.P8, 180)
    

def on_button_pressed_b():
    servos.P2.set_angle(0)
    servos.P1.set_angle(0)
    servos.P0.set_angle(0)
    pins.servo_write_pin(AnalogPin.P8, 0)
    pins.servo_write_pin(AnalogPin.P9, 0)


input.on_button_pressed(Button.A, on_button_pressed_a)
input.on_button_pressed(Button.B, on_button_pressed_b)