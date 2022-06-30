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
const init = async () => {
    try {
        const contents = await readFile('./in1.txt')
        const contents2 = await readFile('./in2.txt')
        console.log(String(contents))
        console.log(String(contents2))
        return String(contents) + String(contents2)
    }
    catch (err) {
        console.log(err)
    }
}
init().then(contents => console.log(contents))

console.log('init', init())
console.log(2)