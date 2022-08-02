import page from '../node_modules/page/page.mjs';

import { authMiddleware } from './middlewares/authMiddleware.js';
import { renderMiddleware } from './middlewares/renderMiddleware.js';
import { navigationMiddleware } from './middlewares/navigationMiddleware.js';

import { logoutHandler } from './handlers/logoutHandler.js';

import { dashboardView } from './views/dashboardView.js';
import { loginView } from './views/loginView.js';
import { registerView } from './views/registerView.js';
import { createView } from './views/createView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';

page(authMiddleware);
page(navigationMiddleware);
page(renderMiddleware);

page('/', dashboardView);
page('/login', loginView);
page('/register', registerView);
page('/create', createView);
page('/logout', logoutHandler);
page('/data/posts/:id', detailsView);
page('/data/posts/:id/edit', editView);

page.start();