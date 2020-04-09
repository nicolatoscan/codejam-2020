function createMatrix(n: number): number[][] {

    let res: number[][] = []
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

function diag(m: number[][]): number {
    let s = 0;
    for (let i = 0; i < m.length; i++)
        s += m[i][i]
    return s;
}

function solve(m: number[][], k: number) {
    let n = m.length

    let tests = 10000*(n ** 2)

    while (tests-- > 0) {
        let a = Math.floor(Math.random() * n)
        let b = Math.floor(Math.random() * n)
        m = swap(m, a, b)

        if (diag(m) === k)
            return m

        m = m[0].map((x,i) => m.map(x => x[i]))
        if (diag(m) === k)
            return m
    }
    return null;
}

function swap(m: number[][], l1: number, l2: number): number[][] {
    if (l1 === l2)
        return m
    let t = m[l1];
    m[l1] = m[l2];
    m[l2] = t;
    return m
}

function stampaM(m: number[][]): void {
    for (let i = 0; i < m.length; i++) {
        console.log(m[i].join(" "))
    }
}
function stampa(i: number, n: number, k: number) {
    let m = createMatrix(n)
    let res = solve(m, k);
    
    if (!res) {
        console.log(`Case #${i+1}: IMPOSSIBLE`)
        return
    }

    console.log(`Case #${i+1}: POSSIBLE`)
    stampaM(res)
}


const fs = require('fs');
let inp = fs.readFileSync('inp5.txt', 'utf-8').split("\n")
let n = inp[0]
inp = inp.slice(1)


let tests: {N: number, K:number}[] = []
for (let i = 0; i < n; i++) {
    let d = inp[i].split(" ")
    let n = +d[0]
    let k = +d[1]
    stampa(i, n, k)
}
