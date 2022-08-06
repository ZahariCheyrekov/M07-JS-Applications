import page from '../node_modules/page/page.mjs';

import { authGuard } from './guards/authGuard.js';

import { navigationMiddleware } from './middlewares/navigationMiddleware.js';
import { renderMiddleware } from './middlewares/renderMiddleware.js';

import { logoutHandler } from './handlers/logoutHandler.js';
import { deleteHandler } from './handlers/deleteHandler.js';

import { homeView } from './views/homeView.js';
import { loginView } from './views/auth/login/loginView.js';
import { registerView } from './views/auth/register/registerView.js';
import { dashboardView } from './views/dashboardView.js';
import { createView } from './views/createView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';

page(authGuard);

page(navigationMiddleware);
page(renderMiddleware);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutHandler);
page('/dashboard', dashboardView);
page('/create', createView);
page('/data/offers/:id', detailsView);
page('/data/offers/:id/edit', editView);
page('/data/offers/:id/delete', deleteHandler);

page.start();