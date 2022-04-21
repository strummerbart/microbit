
def on_forever():            
    light_level = input.light_level()
    if (light_level == 0):
        basic.show_number(0)
        serial.write_line("Buio")
    else:
        basic.show_number(light_level)
        serial.write_line("Luce")

basic.forever(on_forever)
    
