function randomNumber() {
    let num = Math.round(Math.random() * 10)

    while (num < 1 || num > 6) {
        num = Math.round(Math.random() * 10)
    }

    return num
}

const images = {
    1: 'img/1.png',
    2: 'img/2.png',
    3: 'img/3.png',
    4: 'img/4.png',
    5: 'img/5.png',
    6: 'img/6.png',
}

function rollDice() {
    const num1 = randomNumber()
    const num2 = randomNumber()

    let img1 = document.getElementById('diceImg1')
    img1.src = images[num1]

    let img2 = document.getElementById('diceImg2')
    img2.src = images[num2]
}

// 1 - 6

// Math.random()
// Math.round()
// math.ceil()
// Math.floor()