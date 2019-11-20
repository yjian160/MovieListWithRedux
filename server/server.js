const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'))

app.get('/movies', (req, res) => {
    res.json([
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
    ])
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})