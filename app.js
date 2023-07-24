const {readFile} = require('fs').promises

const start = async () => {
    const p1 = await readFile('./test1.txt', 'utf8')
    const p2 = await readFile('./test2.txt', 'utf8')

    console.log(p1)
    console.log(p2)
}

start()