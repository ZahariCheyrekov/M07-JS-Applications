import page from '../node_modules/page/page.mjs';
import { addRender } from './middlewares/render.js';
import { homePage } from './views/homeView.js';

page(addRender);

page('/', homePage);

page.start();