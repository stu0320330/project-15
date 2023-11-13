input.onButtonPressed(Button.A, function () {
    Lightning = 1
    basic.showIcon(IconNames.Umbrella)
})
input.onButtonPressed(Button.B, function () {
    Lightning = 0
    Thunder = 1
    basic.showIcon(IconNames.Chessboard)
})
let Distance = 0
let Thunder = 0
let Lightning = 0
Lightning = 0
Thunder = 0
let Counter = 0
basic.forever(function () {
    if (Lightning == 1) {
        Counter += 1
    }
    if (Thunder == 0) {
        Counter = Counter / 1000
        Distance = Math.round(Counter * 340)
        basic.showString("Storm Is :" + Distance + "meters away")
    }
})
