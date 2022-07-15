let 大小 = 0
serial.redirect(
SerialPin.P13,
SerialPin.P12,
BaudRate.BaudRate115200
)
zmrobo.AICameraSet(6)
basic.forever(function () {
    大小 = zmrobo.AICamDataGet(3)
    basic.pause(100)
    if (大小 > 10) {
        zmrobo.MotorRunDelay(zmrobo.Motors.M1, -150, 0.5)
        while (大小 > 10) {
            大小 = zmrobo.AICamDataGet(3)
            basic.showIcon(IconNames.Yes)
            music.playMelody("E E F F G G A A ", 277)
        }
        basic.pause(500)
        zmrobo.MotorRunDelay(zmrobo.Motors.M1, 150, 0.5)
        basic.showIcon(IconNames.No)
        music.playMelody("A A G G F F E E ", 277)
        basic.pause(500)
        basic.clearScreen()
    }
})
