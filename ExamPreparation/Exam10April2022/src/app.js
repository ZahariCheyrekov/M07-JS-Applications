import page from '../node_modules/page/page.mjs';

import { renderMiddleware } from './middlewares/renderMiddleware.js';
import { navigationMiddleware } from './middlewares/navigationMiddleware.js';

page(renderMiddleware);
page(navigationMiddleware);

page('/', () => console.log('Home'));

page.start();