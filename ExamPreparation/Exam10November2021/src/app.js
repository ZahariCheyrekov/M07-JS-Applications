import page from '../node_modules/page/page.mjs';

import { authMiddleware } from './middlewares/authMiddleware.js';
import { navigationMiddleware } from './middlewares/navigationMiddleware.js';
import { renderMiddleware } from './middlewares/renderMiddleware.js';

import { logoutHandler } from './handlers/logoutHandler.js';

import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';
import { registerView } from './views/registerView.js';
import { catalogView } from './views/catalogView.js';
import { createView } from './views/createView.js';
import { detailsView } from './views/detailsView.js';

page(authMiddleware);
page(navigationMiddleware);
page(renderMiddleware);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutHandler);
page('/catalog', catalogView);
page('/create', createView);
page('/data/cars/:id', detailsView);

page.start();