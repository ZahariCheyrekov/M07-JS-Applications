import page from '../node_modules/page/page.mjs';

import { navigationMiddleware } from './middlewares/navigationMiddleware.js';
import { renderMiddleware } from './middlewares/renderMiddleware.js';
import { loginView } from './views/loginView.js';

page(navigationMiddleware);
page(renderMiddleware);

page('/', () => console.log('Home'));
page('/login', loginView);

page.start();