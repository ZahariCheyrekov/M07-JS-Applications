import page from '../node_modules/page/page.mjs';

import { authMiddleware } from './middlewares/authMiddleware.js';
import { navigationMiddleware } from './middlewares/navigationMiddleware.js';
import { renderMiddleware } from './middlewares/renderMiddleware.js';

import { homeHandler } from './handlers/homeHandler.js';
import { logoutHandler } from './handlers/logoutHandler.js';

import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';
import { registerView } from './views/registerView.js';
import { createView } from './views/createView.js';
import { allMemesView } from './views/allMemesView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';
import { myProfileView } from './views/myProfileView.js';

page(authMiddleware);
page(navigationMiddleware);
page(renderMiddleware);

page('/', homeHandler, homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutHandler);
page('/create', createView);
page('/all-memes', allMemesView);
page('/data/memes/:id', detailsView);
page('/data/memes/:id/edit', editView);
page('/my-profile', myProfileView);

page.start();