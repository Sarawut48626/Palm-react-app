import express from 'express';
import cors from 'cors';

import admin from 'firebase-admin';
import serviceAccount from './firebase/webprog-1006-5-firebase-adminsdk-fbsvc-c9442bfcd4.json' with { type: 'json'};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const app = express()
const port = 3000

app.use(express.json());
app.use(cors());

// Get data from Book collection
async function fetchDataDB() {
    const result = [];
    const booksRef = db.collection('Books');
    const booksSnap = await booksRef.get();
    booksSnap.forEach(doc => {
        result.push({
            id: doc.id,
            ...doc.data()
        });
    });
    return result; // JSON.stringify(result)
}

// http://localhost:3000/api/getBooksFromDB
app.get('/api/getBooksFromDB', (req, res) => {
    res.set('Content-type', 'application/json');
    fetchDataDB().then((jsonData) => {
        res.json(jsonData);
    }).catch((error) => {
        res.json(error);
    });
});

let books = [
    { id:1,Title: "Web Techology",author: "Mean1"},
    { id:2,Title: "Web Programming",author: "Mean2"},
];

app.get('/', (req, res) =>{
res.send ('Hello World!')
})

//http://localhost:3000/api/insert
app.post(`/api/insert`,(req, res) =>{
    const {title,author} = req.body;
    const newBook = { id: String(books.length + 1), title, author};
    books.push(newBook);
    res.status(201).json(newBook);
})


// http:/localhost:3000/api/getbooks
app.get('/api/getbooks' , (req,res) => {
    res.json(books);
})

// http:/localhost:3000/api/getbooks/1
app.get('/api/getbooks/:book_id' , (req,res) => {
    let bid = Number(req.params.book_id);
    const result = books.filter(
        bObj => {
            return bObj.id === bid
        }
    );
    res.json(result[0]);
})

// http:/localhost:3000/api/update
app.post('/api/update' , (req, res) =>{
    const {id , in_title , in_author } = req.body;
    console.log('Data: ',id,in_title,in_author);
    const updBooks = books.map(
        bObj => {
            if(bObj.id === Number(id)){
                return {...bObj,  title: in_title , author : in_author};
            }
            return bObj;
        }
    );
    console.log('updated : ' , updBooks);
    res.json({message: 'Update...'})
})

app.listen(port, ()=>{
console.log(`Example app listening on port${port}`)
})