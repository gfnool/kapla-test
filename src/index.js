import { Application, autoLoad } from 'kapla';
import { resize, raf, bodyclick } from './events';

const app = Application.start();

const context = require.context('./components', true, /\.js$/);

app.use('raf', raf);
app.use('resize', resize);
app.use('bodyclick', bodyclick);
app.load(autoLoad(context));
