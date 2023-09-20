const express = require('express');
const path = require('path');
const app = express();

const http = require('http').createServer(app);

http.listen(8080, () => {
    console.log('Listening on 8080');
});

app.use(express.static(path.join(__dirname, '/buld')));

app.get('/', (res, req) => {
    req.sendFile(path.join(__dirname, '/build/index.html'));
})

app.get('*', (res, req) => {
    req.sendFile(path.join(__dirname, '/build/index.html'));
});

app.use(express.json());
const cors = require('cors');
app.use(cors());