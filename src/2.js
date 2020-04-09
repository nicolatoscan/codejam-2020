const fs = require('fs');
let inp = fs.readFileSync('inp2.txt', 'utf-8').split("\n")

let l = inp[0]

for (let i = 0; i < l; i++) {
    console.log(`Case #${i+1}: ${doIt(inp[i+1])}`)
}

function doIt(s) {

    let res = ''
    s = "0" + s.concat("0")

    let prev = 0;
    let d = 0;
    for (let i = 1; i < s.length; i++) {
        while (d < s[i]) {
            res = res.concat("(")
            d++
        }
        while (d > s[i]) {
            res = res.concat(")")
            d--
        }
        res = res.concat(s[i])
    }

    return res.substring(0, res.length - 1)

}