const express = require("express");
const bodyParser = require("body-parser");

const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/build'));

const {create, read, update, destroy} = require(__dirname + '/controllers/message_controller');

app.post('/api/messages', create);
app.get('/api/messages', read);
app.put('/api/messages/:id', update);
app.delete('/api/messages/:id', destroy);


app.listen(port, ()=>{console.log(`Listening on port: ${port}.`)});