const express = require('express');
const app = express();

app.use(express.static('dist'))

const validateAlphanum = input => (input.length >= 1 && input.length <= 10 && input.match(/^[a-z0-9]+$/));
const validateNumber = input => !isNaN(+input);

app.use((_, __, next) =>setTimeout(next, 500))

app.get('/person/:var', (req, res) => {
    if (!validateAlphanum(req.params.var)) {
        res.statusCode = 422;
        res.end('Invalid input');
        return;
    }

    res.json({
        val1: 10,
        val2: 20
    });
});


app.get('/facility/:var', (req, res) => {
    if (!validateNumber(req.params.var)) {
        res.statusCode = 422;
        res.end('Invalid input');
        return;
    }

    res.json({
        val3: 30,
        val4: 40
    });
});

app.get('/exposure/:var', (req, res) => {
    if (!validateNumber(req.params.var)) {
        res.statusCode = 422;
        res.end('Invalid input');
        return;
    }

    res.json({
        val5: 50
    });
});

app.listen(3000, () => console.log('Listening at port 3000'));