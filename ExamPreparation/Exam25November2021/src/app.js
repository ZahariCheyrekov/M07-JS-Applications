import page from '../node_modules/page/page.mjs';
import { homePage } from './views/homeView.js';

page('/', homePage);

page.start();