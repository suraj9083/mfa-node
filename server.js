const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 4000;

/**
 * @author: Suraj Sonkar
 * @email <surajsonkar1919@gmail.com> // if any query.
 */

const app = express();
app.use(bodyParser.json());
app.use(cors({
    origin: ['http://localhost:4200']
}))

const ApiRoute = require('./api/routes/index');

app.use(ApiRoute);

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})