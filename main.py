def plot_draw():
    led.plot_brightness(0, 0, new_brigth)
    led.plot_brightness(4, 0, new_brigth)
    led.plot_brightness(1, 1, new_brigth)
    led.plot_brightness(3, 1, new_brigth)
    led.plot_brightness(2, 2, new_brigth)
    led.plot_brightness(1, 3, new_brigth)
    led.plot_brightness(0, 4, new_brigth)
    led.plot_brightness(3, 3, new_brigth)
    led.plot_brightness(4, 4, new_brigth)



RATE = 2
MAX_BRIGTH = 255
MIN_BRIGTH = 0
action = "decrease"
new_brigth = MAX_BRIGTH

#ON START
plot_draw()
basic.pause(2000)

def on_forever():
    global action
    global new_brigth
    led_brigthness = led.point_brightness(2, 2)

    if action == "decrease":
        new_brigth = led_brigthness - RATE
        if new_brigth <= MIN_BRIGTH:
            new_brigth = MIN_BRIGTH
            action = "increase"
    elif action == "increase":
        new_brigth = led_brigthness + RATE
        if new_brigth >= MAX_BRIGTH:
            new_brigth = MAX_BRIGTH
            action = "decrease"
        
    plot_draw()

basic.forever(on_forever)
