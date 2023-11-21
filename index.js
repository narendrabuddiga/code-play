import express, { json } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { route } from './route/router.js';
import * as dotenv from 'dotenv';
dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT

const app = express();
app.use(json());
app.use(express.static('public'));
app.use("/", route);
app.set('view engine', 'pug');
app.locals.basedir = path.join(__dirname, 'views');

app.get('/', (_, res) => res.render('index'));


app.listen(PORT, () => console.log(`Server is up and running in port :${PORT}`));

export {
    __filename,
    __dirname
}