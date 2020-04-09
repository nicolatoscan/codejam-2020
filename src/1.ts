interface MatData {
    n: number,
    data: number[][]
}

function readInput(input: string[]): MatData[] {

    let output: MatData[] = []

    let n = +input[0];
    input = input.slice(1)

    
    for (let i = 0; i < n; i++) {
        let r = +input[0]
        input = input.slice(1)
        output[i] = {
            n: r,
            data: []
        }
        
        
        for (let j = 0; j < r; j++) {
            output[i].data[j] = input[j].split(" ").map(nn => +nn);
        }
        
        input = input.slice(r)
    }
    


    return output;
}

function trace(m: MatData): number {
    let r = 0
    for (let i = 0; i < m.n; i++) {
        r += m.data[i][i];
    }
    return r
}

function coutRep(m: MatData): number {
    let tot = 0;
    m.data.forEach(l => {

        let done = []
        for (let i = 0; i < m.n; i++) {
            if (done.indexOf(l[i]) >= 0) {
                tot++
                return;
            } else {
                done.push(l[i])
            }
        }

    })
    return tot
}

function spec(m: MatData): number {
    let a: number[][] = m.data
    a = a[0].map((x,i) => a.map(x => x[i]))
    m.data = a
    return coutRep(m)
}

import { readFileSync } from 'fs'
let inp = readFileSync(0, 'utf-8').split("\n")
let dd = readInput(inp);
dd.forEach((d, i) => {
    console.log(`Case #${i + 1}: ${trace(d)} ${coutRep(d)} ${spec(d)}`)
})
