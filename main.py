SPEED = 500
level = 5

def switch_led_off(x, y):
    bright = led.point_brightness(x, y)
    while bright > 0:
        led.unplot(x, y)
        bright -= 10
        led.plot_brightness(x, y, bright)
        pause(10)

def fall_a_drop(x_coordinate: number):
    global SPEED
    global level
    SPEED = randint(50, 150)
    led.plot(x_coordinate, 0)
    basic.pause(SPEED)
    switch_led_off(x_coordinate, 0)    
    for y_coordinate in range(1, 5):
        led.plot(x_coordinate, y_coordinate)
        basic.pause(SPEED)                
        switch_led_off(x_coordinate, y_coordinate)

    basic.pause(SPEED)

def on_forever():
    for index in range(4):
        x1 = randint(0, 4)        
        if led.point(x1, 0) == False:
            fall_a_drop(x1)


basic.forever(on_forever)
