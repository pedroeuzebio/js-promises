const fs = require('fs')

console.log(1)
const readFile = file => new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
        if (err) {
            reject(err)
        }
        else {
            resolve(contents)
        }
    })

})
readFile('./in1.txt').then(contents => {
    console.log(String(contents))
    return readFile('./in2.txt')
}).then(contents => {
    console.log(String(contents))
})
console.log(2)

console.log(3)