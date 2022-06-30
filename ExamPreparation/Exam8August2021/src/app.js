import page from '../node_modules/page/page.mjs';

import { navigationMiddleware } from './middlewares/navigationMiddleaware.js';

page(navigationMiddleware);

page('/', () => console.log('Home'));

page.start();