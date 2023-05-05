const express = require('express');
const app = express();
app.get('/ping', (req, res) => {
    console.log("pong");
})
app.listen(5000,()=>{
    console.log('Listening on port 3000');
})