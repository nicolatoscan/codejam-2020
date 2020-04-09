function doIt(sch) {
    if (sch.length === 0)
        return "";
    let last0 = sch[0].end
    let last1 = 0
    let res = [{
        s: "C",
        n: sch[0].n
    }]

    for (let i = 1; i < sch.length; i++) {
        if (last0 <= sch[i].start) {
            last0 = sch[i].end
            res.push({ s: "C", n: sch[i].n })
        } else {
            if (last1 <= sch[i].start) {
                last1 = sch[i].end
                res.push({ s: "J", n: sch[i].n })
            } else {
                return null
            }
        }
    }

    return res
}


function format(sch) {
    let res = doIt(sch)
    if (res === null)
        return "IMPOSSIBLE"
    res.sort((r1, r2) => r1.n - r2.n)
    return res.map(r => r.s).join("")
}


const fs = require('fs');
let inp = fs.readFileSync(0, 'utf-8').split("\n")
let n = inp[0]
inp = inp.slice(1)

let data = []
for (let i = 0; i < n; i++) {
    let r = inp[0]
    inp = inp.slice(1)

    let day = []

    for (let j = 0; j < r; j++) {
        let times = inp[j].split(" ")
        day.push({
            start: +times[0],
            end: +times[1],
            n: j
        })
        day.sort((t1, t2) => t1.start == t2.start ? t1.end - t2.end : t1.start - t2.start)
    }
    inp = inp.slice(r)
    data.push(day)
}
data.forEach((d, i) => {
    console.log(`Case #${i+1}: ${format(d)}`)
})