def fall_a_drop(x_coordinate: number):
    
    level = levels[x_coordinate]

    if level == 1 and led.point(x_coordinate, 0) == False:
        led.plot(x_coordinate, 0)        
        return

    SPEED = randint(50, 150)    

    # disegna il primo led su prima riga
    led.plot(x_coordinate, 0)
    basic.pause(SPEED)
    switch_led_off(x_coordinate, 0)

    for y_coordinate in range(1, level):
        led.plot(x_coordinate, y_coordinate)
        basic.pause(SPEED)

        #evita di spegnere l'ultimo led della colonna
        if y_coordinate < level - 1:
            switch_led_off(x_coordinate, y_coordinate)

    basic.pause(SPEED)
    new_level = level - 1
    levels[x_coordinate] = new_level

def switch_led_off(x: number, y: number):    
    bright = led.point_brightness(x, y)

    while bright > 0:
        led.unplot(x, y)                
        
        if bright > 0:
            bright = (bright - 10)
        else: bright = 0
        
        led.plot_brightness(x, y, bright)
        pause(10)

SPEED = 500
levels = [5, 5, 5, 5, 5]

def empty_screen():
    for y in range(5):
        for x in range(5):
            led.unplot(x, y)
            pause(20)            

def restart_screen():
    global levels

    pause(1000)
    empty_screen()    
    levels = [5, 5, 5, 5, 5]
    
def screen_full():
    global levels

    print(levels)
    for y in range(5):
        for x in range(5):
            if (levels[x] > 1):
                return False
    
    for x in range(5):
        if (led.point(x, 0) == False):
            return False
            
    return True                

def on_forever():
   
    if screen_full():
        restart_screen()
    else:
        for index in range(6):
            x = randint(0, 4)
            if led.point(x, 0) == False:
                fall_a_drop(x)

basic.forever(on_forever)
