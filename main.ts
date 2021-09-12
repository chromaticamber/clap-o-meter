input.onSound(DetectedSound.Loud, function () {
    Start = input.runningTime()
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
})
input.onSound(DetectedSound.Quiet, function () {
    if (Start > 0) {
        Time = input.runningTime() - Start
        Start = 0
        basic.clearScreen()
        basic.pause(100)
        basic.showNumber(Time / 1000)
    }
})
let Time = 0
let Start = 0
Start = 0
input.setSoundThreshold(SoundThreshold.Loud, 150)
input.setSoundThreshold(SoundThreshold.Loud, 70)
