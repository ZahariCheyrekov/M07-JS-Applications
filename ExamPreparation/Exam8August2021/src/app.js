import page from '../node_modules/page/page.mjs';

import { authMiddleware } from './middlewares/authMiddleware.js';
import { navigationMiddleware } from './middlewares/navigationMiddleaware.js';
import { renderMiddleware } from './middlewares/renderMiddleware.js';

import { dashboardView } from './views/dashboardView.js';
import { loginView } from './views/loginView.js';
import { logoutHandler } from './handlers/logoutHandler.js';
import { registerView } from './views/registerView.js';
import { createView } from './views/createView.js';
import { detailsView } from './views/detailsView.js';

page(authMiddleware);
page(navigationMiddleware);
page(renderMiddleware);

page('/', dashboardView);
page('/login', loginView);3
page('/logout', logoutHandler);
page('/register', registerView);
page('/create', createView);
page('/data/books/:id', detailsView);

page.start();