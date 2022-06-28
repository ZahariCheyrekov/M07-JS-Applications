import page from '../node_modules/page/page.mjs';

import { homeMiddleware } from './middlewares/homeMiddleware.js';
import { navigationMiddleware } from './middlewares/navigationMiddleware.js';

import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';

page(navigationMiddleware);
page(homeMiddleware);

page('/', homeView);
page('/login', loginView);

page.start();