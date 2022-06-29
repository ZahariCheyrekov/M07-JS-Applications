import page from '../node_modules/page/page.mjs';

import { authMiddleware } from './middlewares/authMiddleware.js';
import { navigationMiddleware } from './middlewares/navigationMiddleware.js';
import { renderContentMiddleware } from './middlewares/renderMiddleware.js';

import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';
import { logoutView } from './views/logoutView.js';

page(authMiddleware);
page(navigationMiddleware);
page(renderContentMiddleware);

page('/', homeView);
page('/login', loginView);
page('/logout', logoutView);

page.start();