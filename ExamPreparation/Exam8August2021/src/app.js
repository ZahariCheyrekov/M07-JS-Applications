import page from '../node_modules/page/page.mjs';

import { authMiddleware } from './middlewares/authMiddleware.js';
import { navigationMiddleware } from './middlewares/navigationMiddleaware.js';
import { renderMiddleware } from './middlewares/renderMiddleware.js';

import { loginView } from './views/loginView.js';

page(authMiddleware);
page(navigationMiddleware);
page(renderMiddleware);

page('/', () => console.log('Home'));
page('/login', loginView);

page.start();