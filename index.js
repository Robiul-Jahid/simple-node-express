const { application } = require('express');
const express = require('express');
const app = express();
const port = 8888;

app.get('/', (req, res) => {
  res.send('Hello MF..!! This is my Second node server...WOW')
});


const users = [
  { id: 1, name: 'Shabana', email: 'Shabana@gmail.com', phone: '0178888888'},
  { id: 2, name: 'Shabnur', email: 'Shabana@gmail.com', phone: '0179999999'},
  { id: 3, name: 'Srabonti', email: 'Shabana@gmail.com', phone: '0178000000'},
  { id: 4, name: 'Suchorita', email: 'Shabana@gmail.com', phone: '0171111111'},
  { id: 5, name: 'Susmita', email: 'Shabana@gmail.com', phone: '0172222222'}
]

app.get('/users',(req, res) => {
  const search =req.query.search;
  // use query parameter
  if(search){
    const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
    res.send(searchResult);
  }
  else{
    res.send(urers)
  }
  res.send(users)
});

//dynamic api

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users[id]
  res.send(user);
})

app.get('/fruits/mangoes/fazli', (req, res) => {
  res.send('Yummy Yummy tok marka fazli');
})

app.listen(port, () => {
  console.log('Listening to port', port);
})