const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000 ;

app.use(cors());
app.use(express.json());

app.get('/', (req , res) => {
    res.send('Hello From My Smarty Smarty Pant')
});

const users = [
    {id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '01921775751'},
    {id: 2, name: 'kabana', email: 'kabana@gmail.com', phone: '01921775751'},
    {id: 3, name: 'mabana', email: 'mabana@gmail.com', phone: '01921775751'},
    {id: 4, name: 'labana', email: 'labana@gmail.com', phone: '01921775751'},
    {id: 5, name: 'habana', email: 'habana@gmail.com', phone: '01921775751'},
    {id: 6, name: 'dabana', email: 'dabana@gmail.com', phone: '01921775751'},
    {id: 7, name: 'nabana', email: 'nabana@gmail.com', phone: '01921775751'}
]


app.get('/users', (req, res) =>{
    console.log('request' , req);

res.send(users)
});
app.get('/user/:id', (req, res) => {
    console.log(req.params); 
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id ===id);
    res.send(user)
});

app.post('/user', (req, res) => {
   
    const user = req.body;
    console.log(req.body);
    user.id = users.length + 1 ;
    users.push(user);
    res.send(user);
});


app.listen(port, () => {
    console.log("Listening to port", port);
});