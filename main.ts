forever(function () {
    if (controller.left.isPressed()) {
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
    }
})
forever(function () {
    if (controller.down.isPressed()) {
        music.playTone(294, music.beat(BeatFraction.Sixteenth))
    }
})
forever(function () {
    if (controller.right.isPressed()) {
        music.playTone(330, music.beat(BeatFraction.Sixteenth))
    }
})
forever(function () {
    if (controller.up.isPressed()) {
        music.playTone(349, music.beat(BeatFraction.Sixteenth))
    }
})
forever(function () {
    if (controller.A.isPressed()) {
        music.playTone(392, music.beat(BeatFraction.Sixteenth))
    }
})
forever(function () {
    if (controller.B.isPressed()) {
        music.playTone(440, music.beat(BeatFraction.Sixteenth))
    }
})
