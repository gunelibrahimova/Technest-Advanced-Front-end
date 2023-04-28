function squareStar() {
    let star = "*****"

    for (let i = 0; i < 5; i++) {
        console.log(star);
    }
}

squareStar()

function emptySquareStar() {
    let star = "*****"

    for (let i = 0; i < 5; i++) {
        if (i === 0 || i === 4) {
            console.log(star);
        } else {
            console.log("*   *");
        }
    }
}

emptySquareStar()

function leftTriangleStar() {
    let star = ""

    for (let i = 0; i <= 5; i++) {
        star += "*".repeat(i) + "\n"

    }
    console.log(star);
}

leftTriangleStar()

function rightTriangleStar() {
    let star = ""

    for (let i = 0; i <= 5; i++) {
        star += " ".repeat(5 - i) + "*".repeat(i) + "\n";
    }
    console.log(star);
}

rightTriangleStar()

function downWardStar() {
    let star = ""

    for (let i = 5; i >= 1; i--) {
        star += "*".repeat(i) + "\n";
    }

    console.log(star);
}

downWardStar()



function pyramidTriangleStar(height) {
    let star = "";
    let space = " ";
    let base = height * 2 - 1;

    for (let i = 1; i <= height; i++) {
        let numStars = i * 2 - 1;
        let numSpaces = (base - numStars) / 2;
        star += space.repeat(numSpaces) + "*".repeat(numStars) + space.repeat(numSpaces) + "\n";
    }

    console.log(star);
}

  pyramidTriangleStar(5);

function reversePyramidStar(height) {
    let star = "";
    let space = " ";
    let base = height * 2 - 1; //9

    for (let i = 5; i >= 1; i--) {
        let numStars = i * 2 - 1;
        let numSpaces = (base - numStars) / 2;
        star += space.repeat(numSpaces) + "*".repeat(numStars) + space.repeat(numSpaces) + "\n";
    }

    console.log(star);
}

reversePyramidStar(5)

function diamondTriangleStar(height) {
    let star = "";
    let space = " ";
    let base = height * 2 - 1; //9

    for (let i = 1; i <= height; i++) {
        let numStars = i * 2 - 1;
        let numSpaces = (base - numStars) / 2;
        star += space.repeat(numSpaces) + "*".repeat(numStars) + space.repeat(numSpaces) + "\n";
    }
    for (let i = 5; i >= 1; i--) {
        let numStars = i * 2 - 1;
        let numSpaces = (base - numStars) / 2;

        star += space.repeat(numSpaces) + "*".repeat(numStars) + space.repeat(numSpaces) + "\n";
    }

    console.log(star);
}

diamondTriangleStar(5)