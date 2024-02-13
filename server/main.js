const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// add routes in a minute
app.get('/produceitems', (req, res) => {
    res.status(200).send(["Apple", "Bannana", "Orange"]);
});

const { PORT } = process.env;
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});
