import express from 'express';
const app = express()
const port = 3000

let books = [
    { id: '1', title: 'web Technogy', author: "Beritokai 1" },
    { id: '2', title: 'web Programming', author: "Beritokai 2" },
];

app.get('/', (req, res) =>{
    res.send('Hello World!')
})

app.post('/data', (req, res) =>{
    const { title, author } = req.body;
    const newBook = { id: String(books.length + 1), title, author };
    books.push(newBook);
    res.status(201).json(newBook);
})

app.listen(port, () =>{
console.log(`Example app listening on port${port}`)
})