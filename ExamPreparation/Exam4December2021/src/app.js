import page from '../node_modules/page/page.mjs';

import { navigationMiddleware } from './middlewares/navigationMiddleware.js';
import { renderContentMiddleware } from './middlewares/renderMiddleware.js';

import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';

page(navigationMiddleware);
page(renderContentMiddleware);

page('/', homeView);
page('/login', loginView);

page.start();