import * as express from 'express';
import * as cors from 'cors';
import 'express-async-errors';
import * as methodOverride from 'method-override';
import { engine } from 'express-handlebars';
import { handleError } from './utils/error';
import { homeRouter } from './routers/home';
import { childRouter } from './routers/child';
import { giftRouter } from './routers/gift';
import { handlebarsHelpers } from './utils/handlebars-helpers';
import './utils/db';

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));

// app.use(methodOverride('_method'));
// app.use(express.urlencoded({
//     extended: true,
// }));
// app.use(express.static('public'));
app.use(express.json());
// app.engine('.hbs', engine({
//     extname: '.hbs',
//     helpers: handlebarsHelpers,
// }));
// app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/child', childRouter);
app.use('/gift', giftRouter);

app.use(handleError);

app.listen(3001, 'localhost', () => {
    console.log('Działa serwer na http://localhost:3001');
});
