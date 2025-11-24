require('dotenv').config();
const express = require('express');
const app = express();
const users = require('./routes/users');

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => res.send('Users API'));
app.use('/users', users);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));