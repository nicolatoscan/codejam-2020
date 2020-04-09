function createMatrix(n) {

    let res = []
    for (let i = 0; i < n; i++) {
        let toInset = 1;
        let first = []
        let second = []

        for (let j = i; j < n; j++)
            first.push(toInset++)
        for (let j = 0; j < i; j++)
            second.push(toInset++)

        res.push(second.concat(first))
    }
    return res;
}

function diag(m) {
    let s = 0;
    for (let i = 0; i < m.length; i++)
        s += m[i][i]
    return s;
}


function stampa(i, n, k) {
    let m = createMatrix(n)
    let res = solve(m, k, n);

    if (!res) {
        console.log(`Case #${i + 1}: IMPOSSIBLE`)
        return
    }

    console.log(`Case #${i + 1}: POSSIBLE`)
    for (let i = 0; i < m.length; i++) {
        console.log(m[i].join(" "))
    }

}


function solve(m, k, n) {
    if (k % n !== 0)
        return null

    let permNeeded = (k / n) - 1;
    for (let i = 0; i < permNeeded; i++) {
        m = swap(m, i, i + 1)
    }
    console.log("DIAG", diag(m))
    return m
}



function swap(m, l1, l2) {
    let t = m[l1];
    m[l1] = m[l2];
    m[l2] = t;
    return m
}



const fs = require('fs');
let inp = fs.readFileSync('inp5.txt', 'utf-8').split("\n")
let n = inp[0]
inp = inp.slice(1)


let tests = []
for (let i = 0; i < n; i++) {
    let d = inp[i].split(" ")
    tests.push({
        N: +d[0],
        K: +d[1]
    })
}



tests.forEach((t, i) => {
    stampa(i, t.N, t.K)
})