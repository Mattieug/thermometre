let temp = 0
led.enable(true)
OLED.init(128, 64)
OLED.clear()
basic.forever(function () {
    temp = 300 * pins.analogReadPin(AnalogPin.P0) / 1023
    serial.writeValue("Température", temp)
    basic.showNumber(temp)
    OLED.writeNumNewLine(temp)
    OLED.drawLoading(temp)
    basic.pause(100)
})
