let str = ""

function crazyCaps(originalStr) {
    for (let i = 0; i < originalStr.length; i++) {
         if (i % 2 === 0) {
            str += originalStr[i].toLowerCase();
        } else str += originalStr[i].toUpperCase()
    }
    return str
}