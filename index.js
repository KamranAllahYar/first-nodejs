const express = require('express')
const app = express()
const port = 4000

const variable1 = 12;
const  cars = [
    1,2,3,4,5,6,7,8,
]
let text = '';
for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
}
console.log(text);



const json = '{"name":"Saif","age":50,"car":null}'

const parsedJson = JSON.parse(json);

console.log(parsedJson, json);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/watch', (req, res) => {
    res.send({
        name: 'Saif',
        age: 50,
        car: null
    })
})
app.get('/', (req, res) => {
    res.send('Hello World!')
})