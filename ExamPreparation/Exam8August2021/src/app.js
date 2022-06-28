import page from '../node_modules//page/page.mjs';
import { navigationMiddleware } from './middlewares/navigationMiddleware.js';
import { homeView } from './views/homeView.js';

page(navigationMiddleware);

page('/', homeView);

page.start();